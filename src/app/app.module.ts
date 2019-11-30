import { BrowserModule } from "@angular/platform-browser"
import { NgModule } from "@angular/core"
import { HttpClientModule } from "@angular/common/http";

import {FormsModule, ReactiveFormsModule} from "@angular/forms"
import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { HomeComponent } from "./home/index/home.component"
import { SignInComponent } from "./sign-in/sign-in.component"
import { SignUpComponent } from "./sign-up/sign-up.component"
import { AuthenticatedPageComponent } from "./pages/authenticated-page/authenticated-page.component"
import { UnauthenticatedPageComponent } from "./pages/unauthenticated-page/unauthenticated-page.component"
import { HeaderComponent } from "./home/header/header.component"
import { ServiceInfoComponent } from "./service-info/service-info.component";
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { WeightEntryComponent } from './home/weight-entry/weight-entry.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    AuthenticatedPageComponent,
    UnauthenticatedPageComponent,
    HeaderComponent,
    ServiceInfoComponent,
    ForgotPasswordComponent,
    UpdatePasswordComponent,
    WeightEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
