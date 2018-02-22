

export class VisibilityOfRequestDetails {
  private _id:String;
  private _visibility:boolean;

  /**
   * Creates a key,value object to hold information if a incoming-request details view is visible or not.
   *
   * @id[String] The id of the incoming-request
   * @detailsVisible[boolean] the visibility of the details
   * @returns[DetailsVisible] instance
   */
  constructor(id: String, visibility: boolean) {
    this._id = id;
    this._visibility = visibility;
  }

  getId(): String {
    return this._id;
  }

  setId(value: String) {
    this._id = value;
  }

  getVisibility(): boolean {
    return this._visibility;
  }

  setVisibility(value: boolean) {
    this._visibility = value;
  }
}
