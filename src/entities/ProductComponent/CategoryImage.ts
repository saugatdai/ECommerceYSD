export default class CategoryImage {
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

  set id(value: number) {
    this._id = value;
  }

  get dateCreated() {
    return this._dateCreated;
  }

  set dateCreated(value: Date) {
    this._dateCreated = value;
  }

  get dateModified() {
    return this._dateModified;
  }

  set dateModified(value: Date) {
    this._dateModified = value;
  }

  get src() {
    return this._src;
  }

  set src(value: string) {
    this._src = value;
  }

  get name() {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get alt() {
    return this._alt;
  }

  set alt(value: string) {
    this._alt = value;
  }
  
}
