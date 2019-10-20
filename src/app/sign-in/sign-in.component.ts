import { Component, OnInit } from "@angular/core"
import {AuthenticationService} from "../services/authentication/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"]
})
export class SignInComponent {

  email = ""
  password = ""

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  login() {
    this.authenticationService.login(this.email, this.password)
      .subscribe(_ => this.router.navigateByUrl(""))
  }
}
