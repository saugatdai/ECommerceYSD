export default class LineItem{
    constructor(
        private _id: number,
        private _name: string,
        private _productId: number,
        private _variationId: number,
        private _quantity: number,
        private _taxClass: string,
        private _subTotal: number,
        private _subTotalTax: number,
        private _total: number,
        private _totalTax: number,
        private _taxes: number[],
        private _sku: number,
        private _price: number
    ){}

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

  get productId() {
    return this._productId;
  }

  set productId(value) {
    this._productId = value;
  }

  get variationId() {
    return this._variationId;
  }

  set variationId(value) {
    this._variationId = value;
  }

  get quantity() {
    return this._quantity;
  }

  set quantity(value) {
    this._quantity = value;
  }

  get taxClass() {
    return this._taxClass;
  }

  set taxClass(value) {
    this._taxClass = value;
  }

  get subTotal() {
    return this._subTotal;
  }

  set subTotal(value) {
    this._subTotal = value;
  }

  get subTotalTax() {
    return this._subTotalTax;
  }

  set subTotalTax(value) {
    this._subTotalTax = value;
  }

  get total() {
    return this._total;
  }

  set total(value) {
    this._total = value;
  }

  get totalTax() {
    return this._totalTax;
  }

  set totalTax(value) {
    this._totalTax = value;
  }

  get taxes() {
    return this._taxes;
  }

  set taxes(value) {
    this._taxes = value;
  }

  get sku() {
    return this._sku;
  }

  set sku(value) {
    this._sku = value;
  }

  get price() {
    return this._price;
  }

  set price(value) {
    this._price = value;
  }
}