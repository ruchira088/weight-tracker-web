import { Injectable } from "@angular/core"
import {AuthenticationService} from "../authentication/authentication.service";
import {HttpClient} from "@angular/common/http";
import moment, {Moment} from "moment";
import {Maybe} from "monet";
import {ConfigService} from "../config/config.service";
import {flatMap, map} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class WeightService {

  constructor(
    private httpClient: HttpClient,
    private authenticationService: AuthenticationService,
    private configService: ConfigService
  ) { }

  insertWeightEntry(weight: number, timestamp: Moment, description: Maybe<string>): Observable<WeightEntry> {
    return this.authenticationService.user()
      .pipe(
        flatMap(user =>
          this.authenticationService.authenticationHeader()
            .pipe(map(authenticationHeader => ({ user, authenticationHeader })))
        )
      )
      .pipe(
        flatMap(
        ({ user, authenticationHeader }) =>
          this.httpClient.post(
            `${this.configService.apiServerUrl}/${user.id}/weight-entry`,
            { weight, timestamp, description },
            { headers: authenticationHeader }
            )
            .pipe(
              map((result: any) => (
                {
                  weight: result.weight,
                  timestamp: moment(result.timestamp),
                  description: Maybe.fromNull(result.description)
                })
              )
            )
        )
      )
  }
}

export interface WeightEntry {
  readonly timestamp: Moment
  readonly weight: number
  readonly description: Maybe<string>
}
