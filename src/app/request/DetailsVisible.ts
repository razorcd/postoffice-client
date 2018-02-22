

export class DetailsVisible {
  private _id:String;
  private _detailsVisible:boolean;

  /**
   * Creates a key,value object to hold information if a incoming-request details view is visible or not.
   *
   * @id[String] The id of the incoming-request
   * @detailsVisible[boolean] the visibility of the details
   * @returns[DetailsVisible] instance
   */
  constructor(id: String, detailsVisible: boolean) {
    this._id = id;
    this._detailsVisible = detailsVisible;
  }

  getId(): String {
    return this._id;
  }

  setId(value: String) {
    this._id = value;
  }

  getDetailsVisible(): boolean {
    return this._detailsVisible;
  }

  setDetailsVisible(value: boolean) {
    this._detailsVisible = value;
  }
}
