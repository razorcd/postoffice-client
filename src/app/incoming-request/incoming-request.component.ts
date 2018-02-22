import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IncomingRequest } from '../models/incomingRequest';
import {DetailsVisible} from "../request/DetailsVisible";

@Component({
  selector: 'incoming-request',
  templateUrl: './incoming-request.component.html',
  styleUrls: ['./incoming-request.component.scss']
})
export class IncomingRequestComponent implements OnInit {

  getObjectKeys = Object.keys;

  @Input() public incomingRequest:IncomingRequest;
  @Input() public detailsVisible:boolean;
  @Output() detailsVisibleEmitter: EventEmitter<Map<String,boolean>> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  /**
   * Toggles the visibility of the detailed element of incoming-request
   * @param {String} id of incoming request
   */
  toggleDetailsVisible(id:String) {
    this.detailsVisible = !this.detailsVisible;
    let tempDetailsVisible:DetailsVisible = new DetailsVisible(id, !!this.detailsVisible);
    this.detailsVisibleEmitter.emit(tempDetailsVisible);
  }
}
