import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {DebugElement} from "@angular/core";
import {Router} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";

import {RegisterComponent} from "./register.component";
import {UserService} from "../user.service";

class UserServiceMock {
  createUser(){};
}
class RouterMock {
  navigateByUrl(user:string){};
}

describe('RegisterComponent', () => {
  let component:RegisterComponent;
  let fixture:ComponentFixture<RegisterComponent>;
  let userService:UserService;
  let router:Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [RegisterComponent],
      providers: [
        {provide: UserService, useClass: UserServiceMock},
        {provide: Router, useClass: RouterMock}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    userService = TestBed.get(UserService);
    router = TestBed.get(Router);
  });

  it ('should have a registration form', () => {
    fixture.detectChanges(); // sync view with component props
    const compiled:Element = fixture.nativeElement;
    expect(compiled.querySelector('form')).not.toBeNull("Missing form element");
    expect(compiled.querySelector('form input[formControlName="username"]')).not.toBeNull("Missing username input element.");
    expect(compiled.querySelector('form input[formControlName="email"]')).not.toBeNull("Missing email input element.");
    expect(compiled.querySelector('form input[formControlName="password"]')).not.toBeNull("Missing password input element.");
    expect(compiled.querySelector('form input[formControlName="passwordconfirmation"]')).not.toBeNull("Missing password confirmation input element.");
    expect(compiled.querySelector('form *[type="submit"]')).not.toBeNull("Missing submit element.");
  });

  describe ('form validation', () => {
    it ('should invalidate empty form', () => {
      expect(component.registeruserform.valid).toBeFalsy();
    });

    it('should invalidate bad fields', () => {
      component.registeruserform.controls['username'].setValue("$%");
      expect(component.registeruserform.controls['username'].valid).toBeFalsy("Username should not be valid.");

      component.registeruserform.controls['email'].setValue("@.@.@");
      expect(component.registeruserform.controls['email'].valid).toBeFalsy("Email should not be valid.");

      component.registeruserform.controls['password'].setValue("!@#");
      expect(component.registeruserform.controls['password'].valid).toBeFalsy("Password should not be valid.");

      // component.registeruserform.controls['passwordconfirmation'].setValue("-@.");
      // expect(component.registeruserform.controls['passwordconfirmation'].valid).toBeFalsy("Password confirmation should not be valid.");

      expect(component.registeruserform.valid).toBeFalsy("Form should not be valid");
    });

    it('should validate good fields', () => {
      component.registeruserform.controls['username'].setValue("username");
      expect(component.registeruserform.controls['username'].valid).toBeTruthy("Username should be valid.");

      component.registeruserform.controls['email'].setValue("email@example.com");
      expect(component.registeruserform.controls['email'].valid).toBeTruthy("Email should be valid.");

      component.registeruserform.controls['password'].setValue("password");
      expect(component.registeruserform.controls['password'].valid).toBeTruthy("Password should be valid.");

      component.registeruserform.controls['passwordconfirmation'].setValue("password");
      expect(component.registeruserform.controls['passwordconfirmation'].valid).toBeTruthy("Password confirmation should be valid.");

      expect(component.registeruserform.valid).toBeTruthy("Form should be valid");
    });
  });

  it('should registerUser', () => {
    spyOn(userService, 'createUser').and.returnValue(Observable.of(null));
    spyOn(router, "navigateByUrl");

    component.register();

    expect(userService.createUser).toHaveBeenCalledTimes(1);
    expect(router.navigateByUrl).toHaveBeenCalledWith("/dashboard");
  });
});
