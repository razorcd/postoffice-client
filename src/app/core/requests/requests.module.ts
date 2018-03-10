import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {ButtonsModule} from 'ngx-bootstrap/buttons';
import {HttpClientModule} from "@angular/common/http";

import {IncomingRequestComponent} from './incoming-request/incoming-request.component';
import {IncomingRequestHeaderComponent} from './incoming-request-header/incoming-request-header.component';
import {RequestListComponent} from './request-list/request-list.component';
import {CommonModule} from '@angular/common';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import {RequestService} from "./services/request.service";
import {SharedModule} from "../../shared/shared.module";
import {RequestsRoutingModule} from "./requests-routing.module";
import {RequestsComponent} from "./requests.component";
import {DefaultHttpInterceptorsModule} from "../../httpInterceptors/default-http-interceptors.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule, DefaultHttpInterceptorsModule, // required everywhere HttpClientModule is used
    CollapseModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    SharedModule,
    RequestsRoutingModule
  ],
  declarations: [
    IncomingRequestComponent,
    IncomingRequestHeaderComponent,
    RequestListComponent,
    RequestsComponent
  ],
  exports: [
    IncomingRequestComponent,
    IncomingRequestHeaderComponent,
    RequestListComponent,
    CommonModule,
    FormsModule
  ],
  providers: [
    RequestService
  ]
})
export class RequestsModule { }
