import { BrowserModule } from "@angular/platform-browser"
import { NgModule } from "@angular/core"
import { HttpClientModule } from "@angular/common/http";

import { FormsModule } from "@angular/forms"
import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { HomeComponent } from "./home/index/home.component"
import { SignInComponent } from "./sign-in/sign-in.component"
import { SignUpComponent } from "./sign-up/sign-up.component"
import { AuthenticatedPageComponent } from "./pages/authenticated-page/authenticated-page.component"
import { UnauthenticatedPageComponent } from "./pages/unauthenticated-page/unauthenticated-page.component"
import { HeaderComponent } from "./home/header/header.component"

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    AuthenticatedPageComponent,
    UnauthenticatedPageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
