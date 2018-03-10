import {Component} from '@angular/core';
import {SessionService} from "../../session/session.service";
import {Principal} from "../../session/Principal";
import {OnInit} from "@angular/core/src/metadata/lifecycle_hooks";

@Component({
  selector: 'app-principal-icon',
  template: `
      <!--<img src="assets/img/avatars/6.jpg" class="img-avatar" alt="admin@bootstrapmaster.com"/>-->
      <div class="icon">
        <span>{{initials}}</span>
      </div>
  `,
  styleUrls: ['./app-principal-icon.component.scss']
})
export class AppPrincipalIconComponent implements OnInit {

  private initials:String;
  private principal:Principal;

  constructor(private sessionService:SessionService) {
  }

  ngOnInit() {
    this.getPrincipal();
  }

  getPrincipal() {
    this.sessionService.requestPrincipal().then(
      (principal:Principal) => {
        this.principal = principal;
        this.initials = this.principal.username.charAt(0).toUpperCase() + this.principal.username.slice(1,2);
      },
      () => {
        console.log("Can NOT GET PRINCIPAL!")
      }
    );
  }
}
