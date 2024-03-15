export default class Coupon {
  private constructor(
    private _id: number,
    private _code: string,
    private _amount: number,
    private _dateCreated: Date,
    private _dateModified: Date,
    private _discountType: string,
    private _description: string,
    private _dateExpires: Date,
    private _usageCount: number,
    private _usageLimit: number,
    private _individualUse: boolean,
    private _productIds: number[],
    private _excludedProductIds: number[],
    private _usageLimitPerUser: number,
    private _usageLimitXTimes: number,
    private _freeShipping: boolean,
    private _productCategories: number[],
    private _excludedProductCategories: number[],
    private _excludeSaleItems: boolean,
    private _minimumAmount: number,
    private _maximumAmount: number,
    private _emailRestrictions: string[],
    private _usedBy: number[]
  ) {}

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._amount = value;
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

  get discountType() {
    return this._discountType;
  }

  set discountType(value) {
    this._discountType = value;
  }

  get description() {
    return this._description;
  }

  set description(value) {
    this._description = value;
  }

  get dateExpires() {
    return this._dateExpires;
  }

  set dateExpires(value) {
    this._dateExpires = value;
  }

  get usageCount() {
    return this._usageCount;
  }

  set usageCount(value) {
    this._usageCount = value;
  }

  get usageLimit() {
    return this._usageLimit;
  }

  set usageLimit(value) {
    this._usageLimit = value;
  }

  get individualUse() {
    return this._individualUse;
  }

  set individualUse(value) {
    this._individualUse = value;
  }

  get productIds() {
    return this._productIds;
  }

  set productIds(value) {
    this._productIds = value;
  }

  get excludedProductIds() {
    return this._excludedProductIds;
  }

  set excludedProductIds(value) {
    this._excludedProductIds = value;
  }

  get usageLimitPerUser() {
    return this._usageLimitPerUser;
  }

  set usageLimitPerUser(value) {
    this._usageLimitPerUser = value;
  }

  get usageLimitXTimes() {
    return this._usageLimitXTimes;
  }

  set usageLimitXTimes(value) {
    this._usageLimitXTimes = value;
  }

  get freeShipping() {
    return this._freeShipping;
  }

  set freeShipping(value) {
    this._freeShipping = value;
  }

  get productCategories() {
    return this._productCategories;
  }

  set productCategories(value) {
    this._productCategories = value;
  }

  get excludedProductCategories() {
    return this._excludedProductCategories;
  }

  set excludedProductCategories(value) {
    this._excludedProductCategories = value;
  }

  get excludeSaleItems() {
    return this._excludeSaleItems;
  }

  set excludeSaleItems(value) {
    this._excludeSaleItems = value;
  }

  get minimumAmount() {
    return this._minimumAmount;
  }

  set minimumAmount(value) {
    this._minimumAmount = value;
  }

  get maximumAmount() {
    return this._maximumAmount;
  }

  set maximumAmount(value) {
    this._maximumAmount = value;
  }

  get emailRestrictions() {
    return this._emailRestrictions;
  }

  set emailRestrictions(value) {
    this._emailRestrictions = value;
  }

  get usedBy() {
    return this._usedBy;
  }

  set usedBy(value) {
    this._usedBy = value;
  }
}
