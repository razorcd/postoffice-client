import {Component, OnDestroy, OnInit} from '@angular/core';
import {RequestService} from '../services/request.service';
import {IncomingRequest} from '../models/incomingRequest';
import {VisibilityOfRequestDetails} from "./VisibilityOfRequestDetails";
import {environment} from "../../../../environments/environment";
import {Observable} from 'rxjs/Rx';
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit, OnDestroy {

  private static REQUESTER_INTERVAL:number = environment.requesterInterval; // in ms

  private incomingRequests:IncomingRequest[];
  private incomingRequestDetailsVisibility:Map<String,boolean> = new Map<String, boolean>();
  private intervalRequestsSubscription:Subscription;

  constructor(private requestService: RequestService) { }

  ngOnInit():void {
    this.startRealTimeRequester();
  }

  ngOnDestroy():void {
    this.stopRealTimeRequester();
  }

  /**
   * Loads entire list of requests
   */
  getRequests():void {
    this.requestService.getRequests()
      .subscribe((incomingRequests:IncomingRequest[]) => {
        this.incomingRequests = incomingRequests;
      });
  }

  /**
   * Stores a incomingRequest details panel visibility by incomingRequest id.
   * @param {VisibilityOfRequestDetails} $event new incomingRequest id and it's visibility
   */
  onVisibilityOfRequestDetailsToggle($event:VisibilityOfRequestDetails):void {
    console.log("VisibilityOfRequestDetails even received: ", $event);
    this.incomingRequestDetailsVisibility.set($event.getId(), $event.getVisibility());
  }

  /**
   * Starts a continuous requester to always load all incomingRequests
   */
  private startRealTimeRequester():void {
    this.getRequests();
    this.intervalRequestsSubscription =  Observable
      .interval(RequestListComponent.REQUESTER_INTERVAL)
      .subscribe((itt:number) => this.getRequests());
  }

  /**
   * Stops a continuous requester by unsubscribing from the continuous interval observable
   */
  private stopRealTimeRequester():void {
    this.intervalRequestsSubscription && this.intervalRequestsSubscription.unsubscribe();
  }
}
