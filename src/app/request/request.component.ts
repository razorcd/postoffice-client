import { Component, OnInit } from '@angular/core';
import { RequestService } from '../services/request.service';
import { IncomingRequest } from '../models/incomingRequest';
import { VisibilityOfRequestDetails } from "./VisibilityOfRequestDetails";
import {log} from "util";

const REQUESTER_INTERVAL:number = 5000; // in ms

@Component({
  selector: 'requests',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  private incomingRequests:IncomingRequest[];
  private incomingRequestDetailsVisibility:Map<String,boolean> = new Map<String, boolean>();

  constructor(private requestService: RequestService) { }

  ngOnInit() {
    this.startRealTimeRequester();
  }

  /**
   * Loads entire list of requests
   */
  getRequests() {
    this.requestService.getRequests()
    .subscribe((incomingRequests:IncomingRequest[]) => {
      this.incomingRequests = incomingRequests;
    });
  }

  /**
   * Stores a incomingRequest details visibility by incomingRequest id.
   * @param {VisibilityOfRequestDetails} the new incomingRequest id and it's visibility
   */
  onVisibilityOfRequestDetailsToggle($event:VisibilityOfRequestDetails) {
    log("VisibilityOfRequestDetails even received: ");
    log($event);
    this.incomingRequestDetailsVisibility.set($event.getId(), $event.getVisibility());
  }

  /**
   * Starts a continuous requester to always load all incomingRequests
   */
  private startRealTimeRequester() {
    this.getRequests();
    setInterval(() => {
      this.getRequests();
    }, REQUESTER_INTERVAL);
  }
}
