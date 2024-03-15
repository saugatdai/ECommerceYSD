export default class Billing {
  constructor(
    private _id: number,
    private _firstName: string,
    private _lastName: string,
    private _company: string,
    private _address1: string,
    private _address2: string,
    private _city: string,
    private _state: string,
    private _postalCode: string,
    private _country: string
  ) {}

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
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

  get company() {
    return this._company;
  }

  set company(value) {
    this._company = value;
  }

  get address1() {
    return this._address1;
  }

  set address1(value) {
    this._address1 = value;
  }

  get address2() {
    return this._address2;
  }

  set address2(value) {
    this._address2 = value;
  }

  get city() {
    return this._city;
  }

  set city(value) {
    this._city = value;
  }

  get state() {
    return this._state;
  }

  set state(value) {
    this._state = value;
  }

  get postalCode() {
    return this._postalCode;
  }

  set postalCode(value) {
    this._postalCode = value;
  }

  get country() {
    return this._country;
  }

  set country(value) {
    this._country = value;
  }
}
