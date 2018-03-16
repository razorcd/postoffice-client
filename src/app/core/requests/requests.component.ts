import { Component, OnInit } from '@angular/core';
import {SessionService} from "../session/session.service";
import {Principal} from "../session/Principal";
import {UserService} from "../user/user.service";
import {User} from "../user/user";
import {environment} from "../../../environments/environment";

@Component({
  templateUrl: 'requests.component.html'
})
export class RequestsComponent implements OnInit {

  private urlIdentifier:String;

  constructor(private sessionService:SessionService, private userService:UserService) {
    this.getUserProfile()
  }

  ngOnInit(): void {
  }

  /**
   * Builds the Incoming Request URL for current Principal
   * and assigns it to this.urlIdentifier property
   */
  getUserProfile() {
    this.sessionService.requestPrincipal()
      .then((principal:Principal) => this.userService.getUser(principal.username)
        .subscribe((user:User) => this.urlIdentifier = this.buildUrlIdentifier(user.pathIdentifier))
      );
  }

  /**
   * Builds the Incoming Request URL for current Principal's PathIdentifier
   * @param {string} pathIdentifier
   * @returns {string}
   */
  private buildUrlIdentifier(pathIdentifier:string):string {
    return environment.host + "/incoming/" + pathIdentifier + "/";
  }
}
