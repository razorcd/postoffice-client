import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { RequestComponent } from './request/request.component';

import { RequestService } from './services/request.service';
import { IncomingRequestComponent } from './incoming-request/incoming-request.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule, ButtonModule, DataTableModule, DialogModule, PanelModule }  from 'primeng/primeng';
import { IncomingRequestHeaderComponent } from './incoming-request-header/incoming-request-header.component';
import { TimeAgoPipe } from "./pipes/timeAgo.pipe";
import { TimeISOPipe } from "./pipes/timeISO.pipe";


@NgModule({
  declarations: [
    AppComponent,
    RequestComponent,
    IncomingRequestComponent,
    IncomingRequestHeaderComponent,
    TimeAgoPipe,
    TimeISOPipe
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
