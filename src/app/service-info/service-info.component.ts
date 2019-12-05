import {Component} from "@angular/core"
import {BuildInformation, ConfigService} from "../services/config/config.service";
import {Maybe} from "monet";

@Component({
  selector: "app-service-info",
  templateUrl: "./service-info.component.html",
  styleUrls: ["./service-info.component.scss"]
})
export class ServiceInfoComponent {
  apiServiceUrl: string
  buildInformation?: BuildInformation

  constructor(private configService: ConfigService) {
    this.apiServiceUrl = configService.apiServerUrl
    this.buildInformation = configService.buildInformation.orUndefined()
  }
}
