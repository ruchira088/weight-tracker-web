import { Component } from "@angular/core"
import {isEmpty} from "lodash"
import { UserService } from "../services/user/user.service"
import {Router} from "@angular/router"
import {FormControl, FormGroup, Validators} from "@angular/forms"
import {formErrorMessages} from "../utils/form-utils"

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.scss"]
})
export class SignUpComponent {

  loading = false
  errors = []
  signUpForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required]),
    firstName: new FormControl("", [Validators.required]),
    lastName: new FormControl("")
  })

  constructor(private userService: UserService, private router: Router) { }


  signUp({ email, password, firstName, lastName }) {
    this.errors = formErrorMessages(this.signUpForm.controls)

    if (isEmpty(this.errors)) {
      this.loading = true

      this.userService.createUser(email, password, firstName, isEmpty(lastName.trim()) ? undefined : lastName)
        .subscribe(
          _ => this.router.navigateByUrl(""),
          ({ error }) => {
            this.loading = false
            this.errors = error.errorMessages
          }
        )
    }
  }
}
