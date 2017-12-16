import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { IncomingRequest } from './incomingRequest';

@Component({
  selector: 'requests',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  incomingRequests: IncomingRequest[];

  constructor(private requestService: RequestService) { }

  ngOnInit() {
    this.getRequests();
    // setInterval(() => { 
    //   this.getRequests(); 
    // }, 5000);
  }

  getRequests() {
    this.requestService.getRequests()
    .subscribe((incomingRequests:IncomingRequest[]) => {
      this.incomingRequests = incomingRequests;
    });
  }
}
