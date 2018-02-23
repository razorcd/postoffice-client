import 'rxjs/add/operator/toPromise';

import {IncomingRequest} from "../models/incomingRequest";
import {RequestService} from "./request.service";
import {HttpClient} from "@angular/common/http/src/client";
import { Observable } from 'rxjs/Observable';
import "rxjs/add/observable/of"

describe('RequestService (mockBackend)', () => {
  let service:RequestService;
  let incomingRequestsList:IncomingRequest[];

  let fakeHttp:HttpClient = <any>{
    get:()=>{},
    post:()=>{},
    put:()=>{},
    patch:()=>{},
    delete:()=>{}
  };

  beforeEach(() => {
    service = new RequestService(fakeHttp);
    incomingRequestsList = [new IncomingRequest(), new IncomingRequest()];
  });


  it('can instanciate service when inject service', () => {
    expect(service instanceof RequestService).toBe(true);
  });

  it('#getRequests should get a list of IncomingRequest', () => {
    spyOn(fakeHttp, 'get').and.returnValue(Observable.of(incomingRequestsList));

    service.getRequests().subscribe(result => {
      expect(result).toBe(incomingRequestsList);
    });

    expect(fakeHttp.get).toHaveBeenCalledTimes(1);
  });

});
