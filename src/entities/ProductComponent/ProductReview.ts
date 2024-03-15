export default class ProductReview {
  constructor(
    private _id: number,
    private _dateCreated: Date,
    private _productId: number,
    private _status: string,
    private _reviewer: string,
    private _reviewerEmail: string,
    private _review: string,
    private _rating: number,
    private _verified: boolean
  ) {}

  get id() {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get dateCreated() {
    return this._dateCreated;
  }

  set dateCreated(value: Date) {
    this._dateCreated = value;
  }

  get productId() {
    return this._productId;
  }

  set productId(value: number) {
    this._productId = value;
  }

  get status() {
    return this._status;
  }

  set status(value: string) {
    this._status = value;
  }

  get reviewer() {
    return this._reviewer;
  }

  set reviewer(value: string) {
    this._reviewer = value;
  }

  get reviewerEmail() {
    return this._reviewerEmail;
  }

  set reviewerEmail(value: string) {
    this._reviewerEmail = value;
  }

  get review() {
    return this._review;
  }

  set review(value: string) {
    this._review = value;
  }

  get rating() {
    return this._rating;
  }

  set rating(value: number) {
    this._rating = value;
  }

  get verified() {
    return this._verified;
  }

  set verified(value: boolean) {
    this._verified = value;
  }
}
