import {Component} from '@angular/core';
import {AuthenticationService} from "./services/authentication.service";
import {Principal} from "./models/Principal";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public principal:Principal = null;

  constructor(private authService:AuthenticationService) {
    authService.getPrincipal().then((principal:Principal) => {
      this.principal = principal;
    });
  }
}
