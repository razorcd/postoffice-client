import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserRoutingModule} from "./user-routing.module";
import {RegisterComponent} from "./register.component";
import {UserService} from "./user.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UserRoutingModule,
  ],
  declarations: [
    RegisterComponent
  ],
  providers: [
    UserService
  ],
  exports: [
    FormsModule
  ]
})
export class UserModule { }
