import { Component, OnInit, Input } from '@angular/core';
import { IncomingRequest } from '../request/incomingRequest';

@Component({
  selector: 'incoming-request',
  templateUrl: './incoming-request.component.html',
  styleUrls: ['./css/incoming-request.component.scss']
})
export class IncomingRequestComponent implements OnInit {

  objectKeys = Object.keys;

  @Input() public incomingRequest:IncomingRequest;

  public incomingRequestDetailsVisible:Map<boolean> = {"5a365342522c4b49eda7e594": true};

  constructor() { }

  ngOnInit() {
  }

  toggleDetailsVisible(id:String) {
    this.incomingRequestDetailsVisible[id] = !this.incomingRequestDetailsVisible[id];
  }
}
