import {JsonProperty} from "json-typescript-mapper";

export class RegisterUserParam {

  @JsonProperty('username')
  private _username:string;

  @JsonProperty('email')
  private _email:string;

  @JsonProperty('plainPassword')
  private _password:string;

  @JsonProperty('plainPasswordConfirmation')
  private _passwordconfirmation:string;


  constructor() {
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

  get password() :string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }


  get passwordconfirmation(): string {
    return this._passwordconfirmation;
  }

  set passwordconfirmation(value: string) {
    this._passwordconfirmation = value;
  }


}
