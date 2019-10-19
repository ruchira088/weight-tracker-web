import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { HttpClient } from "@angular/common/http"
import "rxjs/add/observable/of"
import { catchError, map, tap } from "rxjs/operators"
import { Maybe } from "monet";
import { ConfigService } from "../config/config.service"
import { StorageService } from "../storage/storage.service"
import { User } from "../user/user.service";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient, private configService: ConfigService, private storageService: StorageService) {}

  login(email: string, password: string): Observable<AuthenticationToken> {
    return this.httpClient.post<AuthenticationToken>(`${this.configService.apiServerUrl()}/session`, { email, password })
      .pipe(tap(({ userId, secret }) => {
        this.storageService.setValue(USER_ID, userId)
        this.storageService.setValue(AUTHENTICATION_SECRET, secret)
      }))
  }

  isAuthenticated(): Observable<boolean> {
    return this.authenticationHeader()
      .map(headers => {
        return this.httpClient.get<User>(`${this.configService.apiServerUrl()}/session/user`, { headers })
      })
      .fold(Observable.of(false))(
        result => result.pipe(
          map(_ => true),
          catchError(_ => Observable.of(false))
        )
      )
  }

  authenticationHeader(): Maybe<{[header: string]: string}> {
    return this.storageService.getValue(AUTHENTICATION_SECRET).map(value => ({ Authorization: `Bearer ${value}` }))
  }

  userId(): Maybe<string> {
    return this.storageService.getValue(USER_ID)
  }
}

export interface AuthenticationToken {
  readonly userId: string;
  readonly secret: string;
}

const USER_ID = "userId"
const AUTHENTICATION_SECRET = "authenticationSecret"
