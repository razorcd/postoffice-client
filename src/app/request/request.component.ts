import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { RequestService } from '../services/request.service';
import { IncomingRequest } from '../models/incomingRequest';
import { VisibilityOfRequestDetails } from "./VisibilityOfRequestDetails";

const REQUESTER_INTERVAL:number = 5000; // in ms

@Component({
  selector: 'requests',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit, OnDestroy {
  private incomingRequests:IncomingRequest[];
  private incomingRequestDetailsVisibility:Map<String,boolean> = new Map<String, boolean>();
  private setIntervalRequests:any;

  constructor(private requestService: RequestService, private _ngZone: NgZone) { }

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
   * Stores a incomingRequest details visibility by incomingRequest id.
   * @param {VisibilityOfRequestDetails} the new incomingRequest id and it's visibility
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

    this._ngZone.runOutsideAngular(() => { // Changes here will not propagate into your view.
      this.setIntervalRequests = setInterval(() => {
        this._ngZone.run(() => { // Run inside the ngZone to trigger change detection.
          console.log("Tick: requesting IncomingRequests");
          this.getRequests();
        });
      }, REQUESTER_INTERVAL);
    });

  }

  /**
   * Stops a continuous requester
   */
  private stopRealTimeRequester():void {
    clearInterval(this.setIntervalRequests);
  }
}
