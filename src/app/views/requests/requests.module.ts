import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { RequestsComponent } from './requests.component';
import { RequestsRoutingModule } from './requests-routing.module';
import {AppRequestsModule} from '../../components/business/app-requests/app-requests.module';

@NgModule({
  imports: [
    FormsModule,
    RequestsRoutingModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    AppRequestsModule
  ],
  declarations: [ 
    RequestsComponent,
   ]
})
export class RequestsModule { }
