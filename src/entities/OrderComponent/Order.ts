import Coupon from "../CouponComponent/Coupon";
import Billing from "../ServiceDeliveryComponent/Billing";
import Shipping from "../ServiceDeliveryComponent/Shipping";

export default class Order {
  constructor(
    private _id: number,
    private _status: string,
    private _dateCreated: Date,
    private _dateModified: Date,
    private _discountTotal: number,
    private _discountTax: number,
    private _shippingTotal: number,
    private _shippingTax: number,
    private _cartTax: number,
    private _total: number,
    private _totalTax: number,
    private _priceIncludeTax: number,
    private _customerId: number,
    private _customerIpAddress: string,
    private _customerUserAgent: string,
    private _customerNote: string,
    private _billing: Billing,
    private _shipping: Shipping,
    private _paymentMethod: string,
    private _transactionId: number,
    private _datePaid: Date,
    private _dateCompleted: Date,
    private _couponLines: Coupon[],
    ) {}
    
      get id() {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get status() {
    return this._status;
  }

  set status(value: string) {
    this._status = value;
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

  get discountTotal() {
    return this._discountTotal;
  }

  set discountTotal(value: number) {
    this._discountTotal = value;
  }

  get discountTax() {
    return this._discountTax;
  }

  set discountTax(value: number) {
    this._discountTax = value;
  }

  get shippingTotal() {
    return this._shippingTotal;
  }

  set shippingTotal(value: number) {
    this._shippingTotal = value;
  }

  get shippingTax() {
    return this._shippingTax;
  }

  set shippingTax(value: number) {
    this._shippingTax = value;
  }

  get cartTax() {
    return this._cartTax;
  }

  set cartTax(value: number) {
    this._cartTax = value;
  }

  get total() {
    return this._total;
  }

  set total(value: number) {
    this._total = value;
  }

  get totalTax() {
    return this._totalTax;
  }

  set totalTax(value: number) {
    this._totalTax = value;
  }

  get priceIncludeTax() {
    return this._priceIncludeTax;
  }

  set priceIncludeTax(value: number) {
    this._priceIncludeTax = value;
  }

  get customerId() {
    return this._customerId;
  }

  set customerId(value: number) {
    this._customerId = value;
  }

  get customerIpAddress() {
    return this._customerIpAddress;
  }

  set customerIpAddress(value: string) {
    this._customerIpAddress = value;
  }

  get customerUserAgent() {
    return this._customerUserAgent;
  }

  set customerUserAgent(value: string) {
    this._customerUserAgent = value;
  }

  get customerNote() {
    return this._customerNote;
  }

  set customerNote(value: string) {
    this._customerNote = value;
  }

  get billing() {
    return this._billing;
  }

  set billing(value: Billing) {
    this._billing = value;
  }

  get shipping() {
    return this._shipping;
  }

  set shipping(value: Shipping) {
    this._shipping = value;
  }

  get paymentMethod() {
    return this._paymentMethod;
  }

  set paymentMethod(value: string) {
    this._paymentMethod = value;
  }

  get transactionId() {
    return this._transactionId;
  }

  set transactionId(value: number) {
    this._transactionId = value;
  }

  get datePaid() {
    return this._datePaid;
  }

  set datePaid(value: Date) {
    this._datePaid = value;
  }

  get dateCompleted() {
    return this._dateCompleted;
  }

  set dateCompleted(value: Date) {
    this._dateCompleted = value;
  }

  get couponLines() {
    return this._couponLines;
  }

  set couponLines(value: Coupon[]) {
    this._couponLines = value;
  }
    
}
