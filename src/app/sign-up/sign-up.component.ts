import { Component, OnInit } from "@angular/core"
import { UserService } from "../services/user/user.service";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.scss"]
})
export class SignUpComponent implements OnInit {

  signUpForm: SignUpForm = newSignUpForm()

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onSubmit() {
    const { email, password, firstName, lastName } = this.signUpForm

    this.userService.createUser(email, password, firstName, lastName)
      .subscribe({ next: console.log, error: console.error })

    this.signUpForm = newSignUpForm()
  }
}

interface SignUpForm {
  email: string
  password: string
  firstName: string
  lastName: string
}

const newSignUpForm = (): SignUpForm => ({ email: "", password: "", firstName: "", lastName: "" })
