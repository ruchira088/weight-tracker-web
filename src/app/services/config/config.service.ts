import { Injectable } from "@angular/core"
import { apiServiceUrl as serviceUrl } from "../../../../service-config.json"

@Injectable({
  providedIn: "root"
})
export class ConfigService {
  constructor() { }

  apiServerUrl: string = serviceUrl

  frontEndUrl: string = location.origin
}
