import { Component, OnInit } from "@angular/core"
import {AuthenticationService} from "../../services/authentication/authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-authenticated-page",
  templateUrl: "./authenticated-page.component.html",
  styleUrls: ["./authenticated-page.component.scss"]
})
export class AuthenticatedPageComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.authenticationService.isAuthenticated()
      .subscribe(isAuthenticated => {
        if (!isAuthenticated) {
          this.router.navigateByUrl("/sign-in")
        }
      })
  }

}
