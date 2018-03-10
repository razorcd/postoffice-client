import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/do';
import {SessionService} from "../core/session/session.service";

@Injectable()
export class UnauthorizedInterceptor implements HttpInterceptor {

  constructor(private router:Router, private sessionService:SessionService) {}

  /**
   * Intercepts external requests and reacts accordingly.
   */
  intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
    return next.handle(req).do(
      (event:HttpEvent<any>) => {  //on response:
        console.log("Intercepting http request. FINE. ", event); // {type: 0} indicates request being sent
        if (event instanceof HttpResponse) {}
      },
      (err:any) => {  //on error:
        console.log("Intercepting http request. ERROR. ", err);
        if (err.status == 401) {
          this.sessionService.reset();
          this.router.navigateByUrl("/login");
        }
        if (err.status == 0) {
          console.error("Check your internet connection !!!");
        }
      });
  }
}
