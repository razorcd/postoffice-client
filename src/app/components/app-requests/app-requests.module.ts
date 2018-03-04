import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import {IncomingRequestComponent} from './incoming-request/incoming-request.component';
import {IncomingRequestHeaderComponent} from './incoming-request-header/incoming-request-header.component';
import {RequestListComponent} from './request-list/request-list.component';
import { CommonModule } from '@angular/common';

import {
  TimeAgoPipe, 
  TimeISOPipe
} from '../../pipes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
  ],
  declarations: [ 
    IncomingRequestComponent,
    IncomingRequestHeaderComponent,
    RequestListComponent,
    TimeAgoPipe, 
  TimeISOPipe
  ],
  exports: [
    IncomingRequestComponent,
    IncomingRequestHeaderComponent,
    RequestListComponent, 
    CommonModule,
    FormsModule,
    TimeAgoPipe, 
    TimeISOPipe,
  ]
})
export class AppRequestsModule { }
