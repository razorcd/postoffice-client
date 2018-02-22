import { Component, OnInit, Input } from '@angular/core';
import { IncomingRequest } from '../request/incomingRequest';

@Component({
  selector: 'incoming-request',
  templateUrl: './incoming-request.component.html',
  styleUrls: ['./css/incoming-request.component.scss',
              './css/incoming-request-header.component.scss']
})
export class IncomingRequestComponent implements OnInit {

  objectKeys = Object.keys;

  @Input() public incomingRequest:IncomingRequest;

  constructor() { }

  ngOnInit() {
  }

}
