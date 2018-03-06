import {Component} from '@angular/core';
import {OnInit} from "@angular/core/src/metadata/lifecycle_hooks";
import {User} from "../user/user";
import {UserService} from "../user/user.service";
import {SessionService} from "../session/session.service";
import {Principal} from "../session/Principal";

@Component({
  templateUrl: 'profile.component.html',
  styles: [],
  providers: []
})
export class ProfileComponent implements OnInit {

  private user:User = new User();

  constructor(private userService:UserService, private sessionService:SessionService) {}

  ngOnInit() {
    this.getUserProfile();
  }

  /**
   * Requests User Profile for currently authenticated principal
   * and assigns it to this.user property
   */
  getUserProfile() {
    this.sessionService.requestPrincipal()
      .then((principal:Principal) => this.userService.getUser(principal.username)
        .subscribe((user:User) => this.user = user)
      );
  }

  /**
   * Updates User Profile using this.user values
   */
  updateUserProfile() {
    this.userService.updateUser(this.user.username, this.user)
      .subscribe(
        () => alert("Update successful."),
        () => alert("Update failed.")
      )
  }

}
