import {Component} from '@angular/core';
import {NotificationsService} from "./notifications.service";
import {Notification} from "./notification";

@Component({
  selector: 'app-notifications',
  templateUrl: './app-notifications.component.html',
  styleUrls: ['./app-notifications.component.scss']
})
export class AppNotificationsComponent {

  private notifications:Array<Notification> = new Array<Notification>();
  private notificationsCount:number = 0;

  constructor(private notificationsService:NotificationsService) {
    this.notificationsService.getNotificationObservable().subscribe(
      (notification:Notification) => this.addNotification(notification));
  }

  private addNotification(notification:Notification) {
    this.notifications.push(notification);
    this.notificationsCount++;
  }

}
