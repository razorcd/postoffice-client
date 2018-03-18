import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {RegisterUserParam} from "./register/register-user.param";
import {environment} from "../../../environments/environment";
import {deserialize, serialize} from "json-typescript-mapper";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

import {User} from "./user";


@Injectable()
export class UserService {

  private static USER_URL = environment.host + "/users";

  constructor(private http:HttpClient) {
  }

  /**
   * Create new User
   * @param {RegisterUserParam} createUserParams the dto with user parameters
   * @returns {Observable<User>}
   */
  createUser(createUserParams:RegisterUserParam):Observable<User> {
    return <Observable<User>>this.http.post(UserService.USER_URL, serialize(createUserParams), {withCredentials: true})
      .map((user:any) => <User>deserialize(User, user));
  }

  /**
   * Get a User by it's username
   * @param {String} username to identify User
   * @returns {Promise<User>} promise with a User
   */
  getUser(username:String):Observable<User> {
    return this.http.get(UserService.USER_URL+"/"+username, {withCredentials: true})
      .map((user:any) => <User>deserialize(User, user));
  }

  /**
   * Updates existing user identified by username
   * @param username to identify User
   * @param {User} user properties to update
   * @returns {void}
   */
  updateUser(username:String, user:User):Observable<Object> {
    return this.http.patch(UserService.USER_URL+"/"+username, serialize(user), {withCredentials: true});
  }
}
