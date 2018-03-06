import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {SessionService} from "../../session/session.service";

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html'
})
export class AppHeaderComponent {


  constructor(private sessionService:SessionService, private router:Router) {
  }

  logout() {
    this.sessionService.delete().then(
      () => this.router.navigateByUrl("/login"),
      () => console.log("Can not LOGOUT!")
    );
  }
}
