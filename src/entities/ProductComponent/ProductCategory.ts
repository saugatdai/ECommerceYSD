import CategoryImage from "./CategoryImage";

export default class ProductCategory {
  constructor(
    private _id: number,
    private _name: string,
    private _slug: string,
    private _description: string,
    private _image: CategoryImage
  ) {}

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get slug() {
    return this._slug;
  }

  set slug(value) {
    this._slug = value;
  }

  get description() {
    return this._description;
  }

  set description(value) {
    this._description = value;
  }

  get images() {
    return this._image;
  }

  set images(value) {
    this._image = value;
  }
}
