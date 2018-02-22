import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { RequestComponent } from './request/request.component';

import { RequestService } from './request.service';
import { IncomingRequestComponent } from './incoming-request/incoming-request.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule, ButtonModule, DataTableModule, DialogModule, PanelModule }  from 'primeng/primeng';
import { IncmingRequestHeaderComponent } from './incming-request-header/incming-request-header.component';
import { IncomingRequestHeaderComponent } from './incoming-request-header/incoming-request-header.component';


@NgModule({
  declarations: [
    AppComponent,
    RequestComponent,
    IncomingRequestComponent,
    IncomingRequestHeaderComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    InputTextModule,
    ButtonModule,
    DataTableModule,
    PanelModule,
    DialogModule
  ],
  providers: [
    RequestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
