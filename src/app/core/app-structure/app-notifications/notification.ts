
export enum NotificationType {
  Error = "danger",
  Success = "success",
  Warning = "warning",
  Info = "info",
}


export class Notification {

  private _message:string;
  private _title:string;
  private _type:NotificationType;
  private _timestamp:Date;

  constructor(message:string, title:string = "", type:NotificationType=NotificationType.Info) {
    this._type = type;
    this._message = message;
    this._title = title;
    this._timestamp = new Date();
  }


  get message():string {
    return this._message;
  }

  set message(value:string) {
    this._message = value;
  }

  get title():string {
    return this._title;
  }

  set title(value:string) {
    this._title = value;
  }

  get type():NotificationType {
    return this._type;
  }

  set type(value:NotificationType) {
    this._type = value;
  }

  get timestamp():Date {
    return this._timestamp;
  }
}
