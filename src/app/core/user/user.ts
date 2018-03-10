import {JsonProperty} from "json-typescript-mapper";

export class User {

  @JsonProperty("username")
  private _username:string;

  @JsonProperty("email")
  private _email:string;


  constructor(username?: string, email?: string) {
    this._username = username;
    this._email = email;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }
}
