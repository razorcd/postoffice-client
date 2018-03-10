import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

import {SessionRoutingModule} from "./session-routing.module";
import {LoginComponent} from './login.component';
import {SessionService} from "./session.service";
import {DefaultHttpInterceptorsModule} from "../../httpInterceptors/default-http-interceptors.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,// DefaultHttpInterceptorsModule, // required everywhere HttpClientModule is used
    SessionRoutingModule,
  ],
  declarations: [
    LoginComponent,
  ],
  providers: [
    SessionService
  ]
})
export class SessionModule { }
