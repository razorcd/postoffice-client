import {Injectable} from "@angular/core";
import {HttpInterceptor, HttpEvent, HttpResponse, HttpHandler, HttpRequest} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/do';
import {AuthenticationService} from "./services/authentication.service";

@Injectable()
export class UnauthorizedInterceptor implements HttpInterceptor {

  constructor(private router:Router, private authService:AuthenticationService) {
  }

  /**
   * Intercepts external requests and reacts accordingly.
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).do((event:HttpEvent<any>) => {
      //on response:
      if (event instanceof HttpResponse) {}

    }, (err:any) => {
      //on error:
      if (err.status == 401) {

        this.authService.logout().then(() => this.router.navigateByUrl("/login"));
      }
    })
  }
}

