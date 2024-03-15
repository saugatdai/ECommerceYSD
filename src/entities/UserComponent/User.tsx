export default class User {
  private _dateCreated: Date;
  private _dateModified: Date;
  private _avatar: string;

  constructor(
    private _id: number,
    private _username: string,
    private _password: string,
    private _firstName: string,
    private _lastName: string,
    private _email: string,
    private _role: string,
  ) {
    this._dateCreated = new Date();
    this._dateModified = new Date();
    this._avatar = '';
  }

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  get dateCreated() {
    return this._dateCreated;
  }

  set dateCreated(value) {
    this._dateCreated = value;
  }

  get dateModified() {
    return this._dateModified;
  }

  set dateModified(value) {
    this._dateModified = value;
  }

  get username() {
    return this._username;
  }

  set username(value) {
    this._username = value;
  }

  get password() {
    return this._password;
  }

  set password(value) {
    this._password = value;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    this._lastName = value;
  }

  get email() {
    return this._email;
  }

  set email(value) {
    this._email = value;
  }

  get role() {
    return this._role;
  }

  set role(value) {
    this._role = value;
  }

  get avatar() {
    return this._avatar;
  }

  set avatar(value) {
    this._avatar = value;
  }
}
