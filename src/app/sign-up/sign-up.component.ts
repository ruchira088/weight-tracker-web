import { Component, OnInit } from "@angular/core"
import { UserService } from "../services/user/user.service";
import {Router} from "@angular/router";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.scss"]
})
export class SignUpComponent implements OnInit {

  signUpForm: SignUpForm = newSignUpForm()

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  signUp() {
    const { email, password, firstName, lastName } = this.signUpForm

    this.userService.createUser(email, password, firstName, lastName)
      .subscribe(_ => this.router.navigateByUrl(""))
  }
}

interface SignUpForm {
  email: string
  password: string
  firstName: string
  lastName: string
}

const newSignUpForm = (): SignUpForm => ({ email: "", password: "", firstName: "", lastName: "" })
