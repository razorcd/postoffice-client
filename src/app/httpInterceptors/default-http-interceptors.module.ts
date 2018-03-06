import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {UnauthorizedInterceptor} from "./unauthorized.interceptor";

@NgModule({
  imports: [
  ],
  declarations: [
  ],
  exports: [
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: UnauthorizedInterceptor, multi: true }  // required everywhere HttpClientModule is used
  ]
})
export class DefaultHttpInterceptorsModule { }
