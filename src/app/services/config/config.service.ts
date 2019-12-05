import {Injectable} from "@angular/core"
import {Moment} from "moment"
import {Maybe} from "monet"
import {isEmpty} from "lodash"
import {apiServiceUrl as serviceUrl} from "../../../../service-config.json"
import buildInfo from "../../../../build-info.json"

@Injectable({
  providedIn: "root"
})
export class ConfigService {
  constructor() { }

  apiServerUrl: string = serviceUrl

  buildInformation: Maybe<BuildInformation> =
    isEmpty(buildInfo) ? Maybe.None() : Maybe.Just<BuildInformation>(buildInfo as any)

  frontEndUrl: string = location.origin
}

export interface BuildInformation {
  readonly gitBranch: string;
  readonly gitCommit: string;
  readonly buildTimestamp: Moment;
}
