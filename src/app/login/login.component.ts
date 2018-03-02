import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {AuthenticationService} from "../services/authentication.service";
import {CredentialsParam} from "../services/paramDto/credentials.param";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials:CredentialsParam = new CredentialsParam();

  constructor(private authService: AuthenticationService, private router: Router) {
  }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.credentials).then( () => {
      this.router.navigateByUrl('/login');
    });
    return false;
  }

}
