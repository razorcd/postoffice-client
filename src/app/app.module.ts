import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing';
import {SharedModule} from "./shared/shared.module";
import {AppStructureModule} from "./core/app-structure/app-structure.module";
import {SimpleLayoutComponent, DashboardLayoutComponent} from "./containers";

const APP_CONTAINERS = [
  DashboardLayoutComponent,
  SimpleLayoutComponent
];


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppStructureModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
  ],
  providers: [
    //interceptors
    // { provide: HTTP_INTERCEPTORS, useClass: UnauthorizedInterceptor, multi: true },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
