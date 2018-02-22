import { Component, OnInit } from '@angular/core';
import { RequestService } from '../services/request.service';
import { IncomingRequest } from '../models/incomingRequest';
import { VisibilityOfRequestDetails } from "./VisibilityOfRequestDetails";
import {log} from "util";

@Component({
  selector: 'requests',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  incomingRequests: IncomingRequest[];
  public incomingRequestDetailsVisibility:Map<String,boolean> = new Map<String, boolean>();

  constructor(private requestService: RequestService) { }

  ngOnInit() {
    this.getRequests();
    setInterval(() => {
      this.getRequests();
    }, 5000);
  }

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
    log("VisibilityOfRequestDetails even received: ", $event);
    this.incomingRequestDetailsVisibility.set($event.getId(), $event.getVisibility());
  }
}
