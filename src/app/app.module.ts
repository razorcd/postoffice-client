import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {ButtonModule, DataTableModule, DialogModule, InputTextModule, PanelModule} from 'primeng/primeng';

import {AppComponent} from './app.component';
import {IncomingRequestComponent} from './incoming-request/incoming-request.component';
import {IncomingRequestHeaderComponent} from './incoming-request-header/incoming-request-header.component';
import {LoginComponent} from './login/login.component';
import {RequestComponent} from './request/request.component';

import {TimeAgoPipe} from "./pipes/timeAgo.pipe";
import {TimeISOPipe} from "./pipes/timeISO.pipe";

import {AuthenticationService} from './services/authentication.service';
import {RequestService} from './services/request.service';
import {FormsModule} from "@angular/forms";
import { NavigationComponent } from './navigation/navigation.component';

const routes:Routes = [
  { path: '', pathMatch: 'full', redirectTo: "/requests"},
  { path: 'requests', component: RequestComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  declarations: [
    //components
    AppComponent,
    RequestComponent,
    IncomingRequestComponent,
    IncomingRequestHeaderComponent,
    LoginComponent,

    //pipes
    TimeAgoPipe,
    TimeISOPipe,
    NavigationComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    InputTextModule,
    ButtonModule,
    DataTableModule,
    PanelModule,
    DialogModule
  ],
  providers: [
    AuthenticationService,
    RequestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
