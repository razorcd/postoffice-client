import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import {IncomingRequestComponent} from './incoming-request/incoming-request.component';
import {IncomingRequestHeaderComponent} from './incoming-request-header/incoming-request-header.component';
import {RequestListComponent} from './request-list/request-list.component';
import { CommonModule } from '@angular/common';

import {RequestService} from "./services/request.service";
import {SharedModule} from "../../shared/shared.module";
import {HttpClientModule} from "@angular/common/http";
import {RequestsRoutingModule} from "./requests-routing.module";
import {RequestsComponent} from "./requests.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
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
export class AppRequestsModule { }
