import { Injectable } from "@angular/core"

@Injectable({
  providedIn: "root"
})
export class ConfigService {
  constructor() { }

  apiServerUrl(): string {
    return "http://localhost:8000"
  }
}
