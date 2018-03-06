import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {CredentialsParam} from "./paramDto/credentials.param";
import {SessionService} from "./session.service";

@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  private credentials:CredentialsParam = new CredentialsParam();
  private invalidCredentials:boolean = false;

  constructor(private sessionService:SessionService , private router:Router) {
  }

  login() {
    this.sessionService.create(this.credentials)
      .then( (response) => {
        if (response) {
          console.log("Login Successful, ", response);
          this.router.navigateByUrl('/dashboard');
        } else {
          console.log("Login Unsuccessful, ", response);
          this.credentials.password = "";
          this.invalidCredentials = true;
        }
      });
    return false;
  }

}
