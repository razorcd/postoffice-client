import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { RequestComponent } from './request/request.component';

import { RequestService } from './request.service';

@NgModule({
  declarations: [
    AppComponent,
    RequestComponent
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
