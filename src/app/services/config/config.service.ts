import { Injectable } from "@angular/core"
import { apiServiceUrl as serviceUrl } from "../../../../service-config.json"
import buildInfo from "../../../../build-info.json"

@Injectable({
  providedIn: "root"
})
export class ConfigService {
  constructor() { }

  apiServerUrl: string = serviceUrl

  buildInformation = buildInfo

  frontEndUrl: string = location.origin
}
