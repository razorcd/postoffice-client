import { Component, OnInit, Input } from '@angular/core';
import { IncomingRequest } from '../request/incomingRequest';

@Component({
  selector: 'incoming-request',
  templateUrl: './incoming-request.component.html',
  styleUrls: ['./incoming-request.component.css']
})
export class IncomingRequestComponent implements OnInit {

  @Input() public incomingRequest:IncomingRequest;

  constructor() { }

  ngOnInit() {
  }

}
