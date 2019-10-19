import { Component, OnInit } from "@angular/core"
import {AuthenticationService} from "../services/authentication/authentication.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.authenticationService.isAuthenticated().subscribe(isAuthenticated => console.log(isAuthenticated))
  }

}
