import {Component} from '@angular/core';
import {NotificationsService} from "./notifications.service";
import {Notification} from "./notification";
import * as moment from "moment";

@Component({
  selector: 'app-notifications',
  templateUrl: './app-notifications.component.html',
  styleUrls: ['./app-notifications.component.scss']
})
export class AppNotificationsComponent {

  private static DISPLAY_DURATION = 5000; // milliseconds

  private notifications:Array<Notification> = new Array<Notification>();
  private notificationsCount:number = 0;

  constructor(private notificationsService:NotificationsService) {
    this.notificationsService.getNotificationObservable().subscribe(
      (notification:Notification) => this.addNotification(notification));
  }

  private addNotification(notification:Notification):void {
    this.notifications.splice(0, this.notifications.length-4);
    this.notifications.push(notification);
    this.notificationsCount++;

    setTimeout(() => this.notifications = this.notifications.filter(n => n !== notification),
        AppNotificationsComponent.DISPLAY_DURATION);
  }

}
