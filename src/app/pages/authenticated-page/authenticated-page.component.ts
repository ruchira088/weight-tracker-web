import { Component, OnInit } from "@angular/core"
import {AuthenticationService} from "../../services/authentication/authentication.service";
import { Router } from "@angular/router";
import {User} from "../../services/user/user.service";

@Component({
  selector: "app-authenticated-page",
  templateUrl: "./authenticated-page.component.html",
  styleUrls: ["./authenticated-page.component.scss"]
})
export class AuthenticatedPageComponent implements OnInit {
  loading: boolean
  user: User

  constructor(private authenticationService: AuthenticationService, private router: Router) {
    this.loading = true
  }

  ngOnInit() {
    this.authenticationService.user()
      .subscribe({
        next: user => {
          this.loading = false
          this.user = user
        },
        error: () => {
          this.loading = false
          return this.gotoSignInPage()
        }
      })
  }

  gotoSignInPage(): Promise<boolean> {
    return this.router.navigateByUrl("/sign-in")
  }
}
