import {Component} from "@angular/core"
import {Router} from "@angular/router"
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {isEmpty} from "lodash"
import {AuthenticationService} from "../services/authentication/authentication.service"
import {formErrorMessages, formErrors} from "../utils/form-utils"

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"]
})
export class SignInComponent {

  loading = false
  errors = []
  signInForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required])
  })

  constructor(private authenticationService: AuthenticationService, private router: Router) {
  }

  login({email, password}) {
    this.errors = formErrorMessages(this.signInForm.controls)

    if (isEmpty(this.errors)) {
      this.loading = true
      this.authenticationService.login(email, password)
        .subscribe(
          _ => this.router.navigateByUrl(""),
          ({error}) => {
            this.loading = false
            this.errors = error.errorMessages
          }
        )
    }
  }
}
