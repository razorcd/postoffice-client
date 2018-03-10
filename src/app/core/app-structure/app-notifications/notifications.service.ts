import {Injectable} from "@angular/core";
import {Notification, NotificationType} from "./notification";
import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs/Observer";


@Injectable()
export class NotificationsService {

  // private notifications:Array<Notification> = new Array<Notification>();

  private notificationObservable:Observable<Notification>;
  private notificationObserver:Observer<Notification>;

  constructor() {
    this.notificationObservable = <Observable<Notification>>new Observable((observer:Observer<Notification>) => {
      this.notificationObserver = observer;
    });
  }


  getNotificationObservable(): Observable<Notification> {
    return this.notificationObservable;
  }

  notify(message:string, title?:string, type?:NotificationType) {
    this.addNotification(new Notification(message, title, type));
  }

  private addNotification(notification:Notification) {
    this.notificationObserver.next(notification);
  }

}
