import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {FormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing';
import {AppStructureModule} from "./core/app-structure/app-structure.module";
import {FiltersModule} from "./core/filters/filters.module";
import {RequestsModule} from "./core/requests/requests.module";
import {SessionModule} from "./core/session/session.module";
import {SharedModule} from "./shared/shared.module";
import {DefaultHttpInterceptorsModule} from "./httpInterceptors/default-http-interceptors.module";
import {DashboardLayoutComponent, SimpleLayoutComponent} from "./containers";
import {UserModule} from "./core/user/user.module";

const APP_CONTAINERS = [
  DashboardLayoutComponent,
  SimpleLayoutComponent
];

const CORE_MODULES = [
  AppRoutingModule,
  AppStructureModule,
  FiltersModule,
  RequestsModule,
  SessionModule,
  UserModule
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    DefaultHttpInterceptorsModule,
    ...CORE_MODULES
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
