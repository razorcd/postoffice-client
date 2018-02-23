import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'incoming-request-header',
  templateUrl: './incoming-request-header.component.html',
  styleUrls: ['./incoming-request-header.component.scss']
})
export class IncomingRequestHeaderComponent implements OnInit {

  @Input() public requestMethod:String;
  @Input() public requestUrl:String;
  @Input() public requestTimestamp:number;

  constructor() { }

  ngOnInit() {
  }
}
