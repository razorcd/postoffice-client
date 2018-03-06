import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {RegisterUserParam} from "./register-user.param";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs/Observable";


@Injectable()
export class UserService {

  private static USER_URL = environment.host + "/users";

  constructor(private http:HttpClient) {
  }

  /**
   * Create new User
   * @param {RegisterUserParam} createUserParams the dto with user parameters
   * @returns {Observable<Object>}
   */
  create(createUserParams:RegisterUserParam):Observable<Object> {
    return this.http.post(UserService.USER_URL, createUserParams, {withCredentials: true});
  }

}
