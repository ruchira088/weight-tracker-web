import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {ConfigService} from "../config/config.service";

@Injectable({
  providedIn: "root"
})
export class UserService {

  constructor(private httpClient: HttpClient, private configService: ConfigService) {}

  createUser(email: string, password: string, firstName: string, lastName?: string): Observable<User> {
    return this.httpClient.post<User>(
      `${this.configService.apiServerUrl()}/user`,
      { email, password, firstName, lastName }
      )
  }
}

interface User {
  readonly id: string
  readonly email: string
  readonly firstName: string
  readonly lastName?: string
}
