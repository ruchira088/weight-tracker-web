import {Component, Input, OnInit} from "@angular/core"
import {AuthenticationService} from "../../services/authentication/authentication.service";
import {User} from "../../services/user/user.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  user: User
  weightEntryDialogVisible = false

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.authenticationService.user().subscribe(user => this.user = user)
  }

  showWeightEntryDialog() {
    this.weightEntryDialogVisible = true
  }
}
