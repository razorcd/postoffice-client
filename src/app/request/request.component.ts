import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';

@Component({
  selector: 'requests',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  requests: any[];

  constructor(private requestService: RequestService) { }

  ngOnInit() {
    this.getRequests();
    setInterval(() => { this.getRequests(); }, 5000);
  }

  getRequests() {
    this.requestService.getRequests()
    .subscribe(requests => this.requests = requests);
  }
}
