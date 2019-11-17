import {async, ComponentFixture, TestBed} from "@angular/core/testing"
import {ReactiveFormsModule} from "@angular/forms"
import {SignUpComponent} from "./sign-up.component"
import {UnauthenticatedPageComponent} from "../pages/unauthenticated-page/unauthenticated-page.component"
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {AppRoutingModule} from "../app-routing.module";
import {HomeComponent} from "../home/index/home.component";
import {SignInComponent} from "../sign-in/sign-in.component";
import {AuthenticatedPageComponent} from "../pages/authenticated-page/authenticated-page.component";
import {HeaderComponent} from "../home/header/header.component";

describe("SignUpComponent", () => {
  let component: SignUpComponent
  let fixture: ComponentFixture<SignUpComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UnauthenticatedPageComponent,
        AuthenticatedPageComponent,
        SignUpComponent,
        HomeComponent,
        SignInComponent,
        HeaderComponent
      ],
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,
        AppRoutingModule
      ]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
