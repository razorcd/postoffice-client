import {IncomingRequest} from "../models/incomingRequest";
import {RequestService} from "./request.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs/Observable';
import "rxjs/add/observable/of";
import {SessionService} from "../../session/session.service";
import {Principal} from "../../session/Principal";

describe('RequestService', () => {
  let service: RequestService;
  let incomingRequestsList: IncomingRequest[];

  let fakeHttp: HttpClient = new HttpClient(null);
  let sessionServiceMock:SessionService = new SessionService(fakeHttp);

  beforeEach(() => {
    spyOn(sessionServiceMock, "getPrincipal").and.returnValue(new Principal());
    service = new RequestService(fakeHttp, sessionServiceMock);
    incomingRequestsList = [new IncomingRequest(), new IncomingRequest()];
  });

  it('can instantiate service when inject service', () => {
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
