import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Principal} from "./Principal";
import {CredentialsParam} from "./paramDto/credentials.param";

@Injectable()
export class AuthenticationService {

  private loginUrl:string = 'http://localhost:8080/login';
  private logoutUrl:string = 'http://localhost:8080/logout';
  private principalUrl:string = 'http://localhost:8080/principal';

  authenticated:boolean = false;
  principal:Principal = null;

  constructor(private http:HttpClient) {
  }

  /**
   * Tries to login using the provided credentials. Then sets this.authenticated flag, then returns Promise.
   *
   * @param {CredentialsParam} credentials for the authentication
   * @returns {Promise<boolean>} if authenticated or not
   */
  login(credentials:CredentialsParam):Promise<boolean> {
    const body = new HttpParams()
      .set('username', credentials.username)
      .set('password', credentials.password);

    return this.http.post(this.loginUrl,
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
      })
      .catch(error => {
        this.authenticated = false;
        console.log("Error response: ", error);
      })
      .then(() => {return this.authenticated});
  }

  logout():Promise<void> {
    return this.http.get(this.logoutUrl, {withCredentials: true}).toPromise()
      .then(response => { this.authenticated = false; this.principal = null})
      .catch(error => console.error("Can not logout. ", error))
  }

  //TODO: move to facade class
  /**
   * Returns a Promise of current Principal
   *
   * @returns {Promise<Principal>} current logged-in Principal
   */
  getPrincipal():Promise<Principal> {
    return new Promise((resolve, reject) => resolve(this.principal)) || this.requestPrincipal();
  }

  /**
   * Requests the current logged-in Principal, stores it in this.principal, then returns Promise.
   *
   * @returns {Promise<Principal>} the current Principal or null
   */
  private requestPrincipal():Promise<Principal> {
    return this.http.get(this.principalUrl, {
      headers: new HttpHeaders().set('Accept', 'application/json'),
      withCredentials: true
    })
    .toPromise().then(response => {
      this.principal = (response && response['principal']) || null;
      return this.principal;
    });
  }

}
