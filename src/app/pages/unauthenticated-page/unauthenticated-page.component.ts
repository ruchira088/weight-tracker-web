import { Component, OnInit } from "@angular/core"
import {AuthenticationService} from "../../services/authentication/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: "app-unauthenticated-page",
  templateUrl: "./unauthenticated-page.component.html",
  styleUrls: ["./unauthenticated-page.component.scss"]
})
export class UnauthenticatedPageComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.authenticationService.isAuthenticated()
      .subscribe(isAuthenticated => {
          if (isAuthenticated) {
            this.router.navigateByUrl("")
          }
        }
      )
  }
}
