export default class ProductImage {
  constructor(
    private _id: number,
    private _dateCreated: Date,
    private _dateModified: Date,
    private _src: string,
    private _name: string,
    private _alt: string
  ) {}

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

  get src() {
    return this._src;
  }

  set src(value) {
    this._src = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get alt() {
    return this._alt;
  }

  set alt(value) {
    this._alt = value;
  }
}
