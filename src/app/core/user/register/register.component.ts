import { Component } from '@angular/core';
import {OnInit} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";

import {RegisterUserParam} from "./register-user.param";
import {Router} from "@angular/router";
import {UserService} from "./../user.service";

@Component({
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {

  registeruserform:FormGroup;
  username: FormControl;
  email: FormControl;
  password: FormControl;
  passwordconfirmation: FormControl;

  constructor(private userService:UserService, private router:Router) { }

  //TODO: add validationEqual directive
  //TODO: backend async call on username and email uniqueness

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.username = new FormControl('', [
        Validators.pattern("[a-zA-Z0-9_\\-.]+"),
        Validators.minLength(3),
        Validators.required
      ]);
    this.email = new FormControl('', [
        Validators.pattern("[^ @]+@[^ @]+\\.[^ @]+"),
        Validators.required
      ]);
    this.password = new FormControl('', [
        Validators.pattern("[^\\s\t\n\n\\h\\v]+"),
        Validators.minLength(8),
        Validators.required
      ]);
    this.passwordconfirmation = new FormControl('', [
        Validators.required
      ]);
  }

  createForm() {
    this.registeruserform = new FormGroup({
        // name: new FormGroup({
        //   firstName: new FormControl(),
        //   lastName: new FormControl(),
        // }),
        username: this.username,
        email: this.email,
        password: this.password,
        passwordconfirmation: this.passwordconfirmation
      });
  }

  /**
   * Register new user using registeruserform values
   */
  register() {
    // console.log(this.registeruserform.value)
    this.userService.createUser(this.buildRegisterUserParam()).subscribe(
      (response) => this.router.navigateByUrl("/dashboard"),
      (error) => console.error("Backend error: ", error)
    );
  }

  /**
   * Map local registration form to RegisterUserParam DTO
   * @returns {RegisterUserParam}
   */
  private buildRegisterUserParam():RegisterUserParam {
    let params:RegisterUserParam = new RegisterUserParam();
    params.username = this.username.value;
    params.email = this.email.value;
    params.password = this.password.value;
    params.passwordconfirmation = this.passwordconfirmation.value;
    return params;
  }
}
