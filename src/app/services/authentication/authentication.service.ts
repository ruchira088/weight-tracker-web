import {Injectable} from "@angular/core"
import {Observable} from "rxjs"
import {HttpClient} from "@angular/common/http"
import "rxjs/add/observable/of"
import "rxjs/add/observable/throw"
import {catchError, flatMap, map, tap} from "rxjs/operators"
import {Just, Maybe, None} from "monet";
import {ConfigService} from "../config/config.service"
import {StorageService} from "../storage/storage.service"
import {User} from "../user/user.service"

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {

  constructor(
    private httpClient: HttpClient,
    private configService: ConfigService,
    private storageService: StorageService
  ) {}

  login(email: string, password: string): Observable<AuthenticationToken> {
    return this.httpClient.post<AuthenticationToken>(`${this.configService.apiServerUrl}/v1/session`, { email, password })
      .pipe(tap(({ secret }) => {
        this.storageService.setValue(AUTHENTICATION_SECRET, secret)
      }))
  }

  forgotPassword(email: string, frontEndUrl: string) {
    return
  }

  isAuthenticated(): Observable<boolean> {
    return this.maybeUser().pipe(map(value => value.isJust()))
  }

  authenticationHeader(): Observable<{[header: string]: string}> {
    return this.unauthenticatedUser(this.maybeAuthenticationHeader())
  }

  user(): Observable<User> {
    return this.maybeUser().pipe(flatMap(value => this.unauthenticatedUser(value)))
  }

  logout(): Observable<Maybe<AuthenticationToken>> {
    return this.maybeAuthenticationHeader()
      .map(headers => {
        return this.httpClient.delete<AuthenticationToken>(`${this.configService.apiServerUrl}/v1/session`, { headers })
      })
      .fold<Observable<Maybe<AuthenticationToken>>>(Observable.of(None()))(observable => observable.pipe(map(Maybe.fromUndefined)))
      .pipe(tap(_ => {
        this.storageService.remove(AUTHENTICATION_SECRET)
        this.storageService.remove(USER)
      }))
  }

  private maybeUser(): Observable<Maybe<User>> {
    return Observable.of(this.storageService.getValue(USER).map(JSON.parse))
      .pipe(flatMap(value => value.fold(this.fetchAuthenticatedUser())(user => Observable.of(Just(user)))))
  }

  private fetchAuthenticatedUser(): Observable<Maybe<User>> {
    return this.maybeAuthenticationHeader()
      .map(headers => {
        return this.httpClient.get<User>(`${this.configService.apiServerUrl}/v1/session/user`, { headers })
      })
      .fold<Observable<Maybe<User>>>(Observable.of(None()))(
        observable =>
          observable.pipe(
            tap(user => this.storageService.setValue(USER, JSON.stringify(user))),
            map(user => Just(user)),
            catchError(_ => Observable.of<Maybe<User>>(None()))
          )
      )
  }

  private maybeAuthenticationHeader(): Maybe<{[header: string]: string}> {
    return this.storageService.getValue(AUTHENTICATION_SECRET).map(value => ({ Authorization: `Bearer ${value}` }))
  }

  private unauthenticatedUser<T>(value: Maybe<T>): Observable<T> {
    return value.catchMap(() => {
      this.logout()
      return None()
    })
      .fold<Observable<T>>(Observable.throwError(new Error("Unauthenticated user")))(Observable.of)
  }
}

export interface AuthenticationToken {
  readonly userId: string;
  readonly secret: string;
}

const USER = "user"
const AUTHENTICATION_SECRET = "authenticationSecret"
