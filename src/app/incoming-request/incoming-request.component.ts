import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IncomingRequest } from '../models/incomingRequest';
import { VisibilityOfRequestDetails } from "../request/VisibilityOfRequestDetails";

@Component({
  selector: 'incoming-request',
  templateUrl: './incoming-request.component.html',
  styleUrls: ['./incoming-request.component.scss']
})
export class IncomingRequestComponent implements OnInit {

  getObjectKeys = Object.keys;

  @Input() public incomingRequest:IncomingRequest;
  @Input() public detailsVisibility:boolean;
  @Output() public detailsVisibilityEmitter: EventEmitter<VisibilityOfRequestDetails> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  /**
   * Toggles the visibility of the details of current incomingRequest
   * @param {String} id of incomingRequest
   */
  toggleDetailsVisibility(id:String) {
    this.detailsVisibility = !this.detailsVisibility;
    let tempDetailsVisible:VisibilityOfRequestDetails = new VisibilityOfRequestDetails(id, this.detailsVisibility);
    this.detailsVisibilityEmitter.emit(tempDetailsVisible);
  }
}
