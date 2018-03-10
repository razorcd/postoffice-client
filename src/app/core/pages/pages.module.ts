import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import {DefaultHttpInterceptorsModule} from "../../httpInterceptors/default-http-interceptors.module";

import {P404Component} from './404.component';
import {P500Component} from './500.component';
import {PagesRoutingModule} from './pages-routing.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule, DefaultHttpInterceptorsModule, // required everywhere HttpClientModule is used
  ],
  declarations: [
    P404Component,
    P500Component,
  ],
  providers: [
  ]
})
export class PagesModule { }
