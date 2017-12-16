import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { RequestComponent } from './request/request.component';

import { RequestService } from './request.service';
import { IncomingRequestComponent } from './incoming-request/incoming-request.component';

@NgModule({
  declarations: [
    AppComponent,
    RequestComponent,
    IncomingRequestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    RequestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
