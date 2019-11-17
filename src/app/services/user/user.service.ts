import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {ConfigService} from "../config/config.service";
import {AuthenticationService, AuthenticationToken} from "../authentication/authentication.service";
import { flatMap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class UserService {

  constructor(private httpClient: HttpClient, private authenticationService: AuthenticationService, private configService: ConfigService) {}

  createUser(email: string, password: string, firstName: string, lastName?: string): Observable<AuthenticationToken> {
    return this.httpClient.post<User>(
      `${this.configService.apiServerUrl}/user`,
      { email, password, firstName, lastName }
      ).pipe(flatMap(_ => this.authenticationService.login(email, password)))
  }
}

export interface User {
  readonly id: string
  readonly email: string
  readonly firstName: string
  readonly lastName?: string
}
