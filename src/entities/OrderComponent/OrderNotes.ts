import User from "../UserComponent/User";

export default class OrderNotes {
  private constructor(
    private _id: number,
    private _author: string,
    private _dateCreated: Date,
    private _note: string,
    private _showToCustomer: boolean,
    private _addedByUser: User
  ) {}

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  get author() {
    return this._author;
  }

  set author(value) {
    this._author = value;
  }

  get dateCreated() {
    return this._dateCreated;
  }

  set dateCreated(value) {
    this._dateCreated = value;
  }

  get note() {
    return this._note;
  }

  set note(value) {
    this._note = value;
  }

  get showToCustomer() {
    return this._showToCustomer;
  }

  set showToCustomer(value) {
    this._showToCustomer = value;
  }

  get addedByUser() {
    return this._addedByUser;
  }

  set addedByUser(value) {
    this._addedByUser = value;
  }
}
