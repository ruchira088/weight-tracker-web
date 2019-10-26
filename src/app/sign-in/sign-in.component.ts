import {Component} from "@angular/core"
import {AuthenticationService} from "../services/authentication/authentication.service"
import {Router} from "@angular/router"

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"]
})
export class SignInComponent {

  email = ""
  password = ""
  loading = false
  errors = []

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  login() {
    this.errors = []
    this.loading = true

    this.authenticationService.login(this.email, this.password)
      .subscribe(
        _ => this.router.navigateByUrl(""),
        ({ error }) => {
          this.loading = false
          this.errors = error.errorMessages
        }
      )
  }
}
