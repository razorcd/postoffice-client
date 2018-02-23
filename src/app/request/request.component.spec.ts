import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RequestComponent} from './request.component';
import {RequestService} from "../services/request.service";
import {IncomingRequestComponent} from "../incoming-request/incoming-request.component";
import {IncomingRequestHeaderComponent} from "../incoming-request-header/incoming-request-header.component";
import {TimeISOPipe} from "../pipes/timeISO.pipe";
import {TimeAgoPipe} from "../pipes/timeAgo.pipe";
import {HttpClient, HttpHandler} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";
import {IncomingRequest} from "../models/incomingRequest";
import {By} from "@angular/platform-browser";
import {DebugElement} from "@angular/core";

describe('RequestComponent', () => {
  let component: RequestComponent;
  let fixture: ComponentFixture<RequestComponent>;
  let requestService:RequestService;
  let incomingRequest:IncomingRequest;
  let elements:DebugElement[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestComponent, IncomingRequestComponent, IncomingRequestHeaderComponent, TimeISOPipe, TimeAgoPipe ],
      providers: [RequestService, HttpClient, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestComponent);
    component = fixture.componentInstance;
    requestService = TestBed.get(RequestService);

    incomingRequest = new IncomingRequest();
    incomingRequest.id = "111";
    incomingRequest.method = "POST";
    incomingRequest.url = "http://urlExample";
    incomingRequest.timestamp = Date.now();
  });

  it('should create', () => {
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

  it('should update number of elements in reatime', () => {
    jasmine.clock().install();  // set time mock
    let getRequestsSpy:jasmine.Spy = spyOn(requestService, 'getRequests').and.returnValue(Observable.of([]));

    fixture.detectChanges();

    //check number of elements
    elements = fixture.debugElement.queryAll(By.css('incoming-request'));
    expect(elements.length).toBe(0);

    //prepare different data
    getRequestsSpy.and.returnValue(Observable.of([incomingRequest, incomingRequest]));
    jasmine.clock().tick(5000);  // fast forward time
    fixture.detectChanges();

    //check number of elements
    elements = fixture.debugElement.queryAll(By.css('incoming-request'));
    expect(elements.length).toBe(2);

    expect(requestService.getRequests).toHaveBeenCalledTimes(2);
    jasmine.clock().uninstall(); // release time mock
  });
});
