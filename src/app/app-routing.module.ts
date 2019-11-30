import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"
import { HomeComponent } from "./home/index/home.component"
import {SignInComponent} from "./sign-in/sign-in.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {ServiceInfoComponent} from "./service-info/service-info.component"
import {ForgotPasswordComponent} from "./forgot-password/forgot-password.component"
import {UpdatePasswordComponent} from "./update-password/update-password.component"

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "service-info", component: ServiceInfoComponent },
  { path: "sign-in", component: SignInComponent },
  { path: "sign-up", component: SignUpComponent },
  { path: "forgot-password", component: ForgotPasswordComponent },
  { path: "update-password", component: UpdatePasswordComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
