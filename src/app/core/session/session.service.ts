import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Principal} from "./Principal";
import {CredentialsParam} from "./paramDto/credentials.param";
import {environment} from "../../../environments/environment";

@Injectable()
export class SessionService {

  private static LOGIN_URL:string = environment.host + '/login';
  private static LOGOUT_URL:string = environment.host + '/logout';
  private static PRINCIPAL_URL:string = environment.host + '/principal';

  authenticated:boolean = false;
  principal:Principal = null;

  constructor(private http:HttpClient) {
  }

  /**
   * Creates a new http session in backend server using the provided credentials.
   * Then sets this.authenticated flag. Then returns Promise.
   *
   * @param {CredentialsParam} credentials for the authentication
   * @returns {Promise<boolean>} if authenticated or not
   */
  create(credentials:CredentialsParam):Promise<boolean> {
    const body = new HttpParams()
      .set('username', credentials.username)
      .set('password', credentials.password);

    return this.http.post(SessionService.LOGIN_URL,
      body.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded'),
        withCredentials: true
      }
    ).toPromise()
      .then(response => {
        this.authenticated = true;
        console.log("Response: ", response);
        console.log("authenticated: ", this.authenticated);
        return this.authenticated;
      }).catch( error => {
        this.authenticated = false;
        console.log("Error response: ", error);
        console.log("authenticated: ", this.authenticated);
        return this.authenticated;
      });
      // .then(() => {return this.authenticated});
  }

  /**
   * Deletes current session in backend server. Then resets session properties.
   * @returns nothing
   */
  delete():Promise<void> {
    return this.http.get(SessionService.LOGOUT_URL, {withCredentials: true}).toPromise()
      .then(() => this.reset());
  }

  /**
   * Resets current session properties by removing any user data.
   * @returns nothing
   */
  reset():void {
    this.authenticated = false;
    this.principal = null;
  }

  /**
   * Returns current Principal
   * @returns {Principal} current logged-in Principal
   */
  getPrincipal():Principal {
    return this.principal;
    // return new Promise((resolve, reject) => resolve(this.principal)) || this.requestPrincipal();
  }

  /**
   * Requests the current logged-in Principal from backend server.
   * Then stores it in this.principal. Then returns Promise.
   *
   * @returns {Promise<Principal>} the current Principal or null
   */
  public requestPrincipal():Promise<Principal> {
    return this.http.get(SessionService.PRINCIPAL_URL, {
      headers: new HttpHeaders().set('Accept', 'application/json'),
      withCredentials: true
    })
    .toPromise().then(response => {
      this.principal = (response && response['principal']) || null;
      return this.principal;
    });
  }

}
