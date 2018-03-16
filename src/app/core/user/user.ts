import {JsonProperty} from "json-typescript-mapper";

export class User {

  @JsonProperty("username")
  private _username:string;

  @JsonProperty("email")
  private _email:string;

  @JsonProperty("pathIdentifier")
  private _pathIdentifier:string

  constructor(username?: string, email?: string, pathIdentifier?: string) {
    this._username = username;
    this._email = email;
    this._pathIdentifier = pathIdentifier;
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

  get pathIdentifier(): string {
    return this._pathIdentifier;
  }

  set pathIdentifier(value: string) {
    this._pathIdentifier = value;
  }
}
