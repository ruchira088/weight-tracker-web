import {Component} from "@angular/core"
import {ConfigService} from "../services/config/config.service";

@Component({
  selector: "app-service-info",
  templateUrl: "./service-info.component.html",
  styleUrls: ["./service-info.component.scss"]
})
export class ServiceInfoComponent {
  apiServiceUrl: string

  constructor(private configService: ConfigService) {
    this.apiServiceUrl = configService.apiServerUrl
  }
}
