import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA, DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";

import {RequestListComponent} from './request-list.component';
import {RequestService} from "../services/request.service";
import {IncomingRequest} from "../models/incomingRequest";

// mocked RequestService
class MockRequestService {
  getRequests() {}
}

describe('RequestComponent', () => {
  let component: RequestListComponent;
  let fixture: ComponentFixture<RequestListComponent>;
  let requestService:RequestService;
  let incomingRequest:IncomingRequest;
  let elements:DebugElement[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestListComponent ],
      providers: [{provide: RequestService, useClass: MockRequestService}],
      schemas: [CUSTOM_ELEMENTS_SCHEMA] // ignore subcomponents with dashes
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestListComponent);
    component = fixture.componentInstance;
    requestService = TestBed.get(RequestService);
    incomingRequest = new IncomingRequest();
  });


  it('should createUser', () => {
    spyOn(requestService, 'getRequests').and.returnValue(Observable.of([]));
    expect(component).toBeTruthy();
    expect(requestService.getRequests).toHaveBeenCalledTimes(0);  // ngOnInit not executed yet
  });

  it('should initialise incomingRequests', () => {
    spyOn(requestService, 'getRequests').and.returnValue(Observable.of([incomingRequest]));
    fixture.detectChanges();

    elements = fixture.debugElement.queryAll(By.css('incoming-request'));
    expect(elements.length).toBe(1);

    expect(requestService.getRequests).toHaveBeenCalledTimes(1);
  });

  it('should update number of elements in realtime', () => {
    jasmine.clock().install();  // set time mock
    let getRequestsSpy:jasmine.Spy = spyOn(requestService, 'getRequests').and.returnValue(Observable.of([]));

    fixture.detectChanges();

    //check number of elements
    elements = fixture.debugElement.queryAll(By.css('incoming-request'));
    expect(elements.length).toBe(0);

    //prepare different data
    getRequestsSpy.and.returnValue(Observable.of([incomingRequest, incomingRequest]));
    jasmine.clock().tick(5100);  // fast forward time

    fixture.detectChanges();

    //check number of elements
    elements = fixture.debugElement.queryAll(By.css('incoming-request'));
    expect(elements.length).toBe(2);

    expect(requestService.getRequests).toHaveBeenCalledTimes(2);
    jasmine.clock().uninstall(); // release time mock
  });

});
