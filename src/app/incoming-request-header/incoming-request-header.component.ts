import { Component, OnInit, Input} from '@angular/core';
import { TimeAgoPipe } from "./pipes/timeAgo.pipe";


@Component({
  selector: 'incoming-request-header',
  templateUrl: './incoming-request-header.component.html',
  styleUrls: ['./incoming-request-header.component.scss']
})
export class IncomingRequestHeaderComponent implements OnInit {

  @Input() public requestMethod:String;
  @Input() public requestUrl:String;
  @Input() public requestTimestamp:String;

  constructor() { }

  ngOnInit() {
  }
}
