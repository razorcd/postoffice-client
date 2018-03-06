import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {IncomingRequest} from '../models/incomingRequest';
import {environment} from "../../../../environments/environment";

@Injectable()
export class RequestService {

  private static REQUEST_URL = environment.host + "/requests";

  constructor(private http: HttpClient) {
  }

  getRequests():Observable<IncomingRequest[]> {
    return this.http.get<IncomingRequest[]>(RequestService.REQUEST_URL, {
      withCredentials: true
    })
//      .pipe(
//        tap(request => this.log('fetched requests')),
//        catchError(this.handleError('gotRequests', []))
//      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

//  /** Log a HeroService message with the MessageService */
//  private log(message: string) {
//    this.messageService.add('HeroService: ' + message);
//  }
}
