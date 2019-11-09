import { Injectable } from "@angular/core"

@Injectable({
  providedIn: "root"
})
export class ConfigService {
  constructor() { }

  apiServerUrl(): string {
    return "https://master.api.weight-tracker.ruchij.com"
  }
}
