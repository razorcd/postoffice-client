import { Component, OnInit } from '@angular/core';
import { RequestService } from '../services/request.service';
import { IncomingRequest } from '../models/incomingRequest';
import {DetailsVisible} from "./DetailsVisible";
import {log} from "util";

@Component({
  selector: 'requests',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  incomingRequests: IncomingRequest[];
  public incomingRequestDetailsVisible:Map<String,boolean> = new Map<String, boolean>();

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
   * Stores incomingRequest details visibility by incomingRequest id.
   * @param {DetailsVisible} the new incomngRequest id and visibility
   */
  onDetailsVisibleToggle($event:DetailsVisible) {
    log("Received even: ", $event);
    this.incomingRequestDetailsVisible.set($event.getId(), $event.getDetailsVisible());
  }
}
