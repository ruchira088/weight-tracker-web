import { Injectable } from "@angular/core"
import { apiServiceUrl as serviceUrl } from "../../../../service-config.json"

@Injectable({
  providedIn: "root"
})
export class ConfigService {
  constructor() { }

  public apiServerUrl: string = serviceUrl
}
