import LineItem from "./LineItem";

export default class OrderRefund {
  constructor(
    private _id: number,
    private _dateCreated: Date,
    private _amount: number,
    private _reason: string,
    private _refundedBy: string,
    private _refundedPayment: boolean,
    private _lineItems: LineItem[],
    private _refundRestock: boolean
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

  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._amount = value;
  }

  get reason() {
    return this._reason;
  }

  set reason(value) {
    this._reason = value;
  }

  get refundedBy() {
    return this._refundedBy;
  }

  set refundedBy(value) {
    this._refundedBy = value;
  }

  get refundedPayment() {
    return this._refundedPayment;
  }

  set refundedPayment(value) {
    this._refundedPayment = value;
  }

  get lineItems() {
    return this._lineItems;
  }

  set lineItems(value) {
    this._lineItems = value;
  }

  get refundRestock() {
    return this._refundRestock;
  }

  set refundRestock(value) {
    this._refundRestock = value;
  }
}
