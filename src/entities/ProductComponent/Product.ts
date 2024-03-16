import ProductCategory from "./ProductCategory";
import { StockStatus, TaxStatus } from "./ProductConstants";
import ProductImage from "./ProductImage";

export default class Product {
  private _salePrice: number;
  private _dateOnSaleFrom: Date;
  private _dateOnSaleTo: Date;
  private _onSale: boolean;
  private _purchasable: boolean;
  private _taxStatus: TaxStatus;
  private _taxClass: string;
  private _weight: number;
  private _dimensions: string;
  private _averageRating: number;
  private _ratingCount: number;
  private _totalRating: number;
  private _purchaseNote: string;

  constructor(
    private _id: number,
    private _name: string,
    private _dateCreated: Date,
    private _dateModified: Date,
    private _featured: boolean,
    private _description: string,
    private _shortDescription: string,
    private _sku: string,
    private _price: number,
    private _regularPrice: number,
    private _stockQuantity: number,
    private _stockStatus: StockStatus,
    private _categories: ProductCategory[],
    private _images: ProductImage[],
    private _variations: number[],
    private _wholeSalePrice:number
  ) {
    this._salePrice = 0;
    this._dateOnSaleFrom = new Date();
    this._dateOnSaleTo = new Date();
    this._onSale = false;
    this._purchasable = true;
    this._taxStatus = TaxStatus.None;
    this._taxClass = "";
    this._weight = 0;
    this._dimensions = "";
    this._averageRating = 0;
    this._ratingCount = 0;
    this._totalRating = 0;
    this._purchaseNote = "";
  }

  get wholeSalePrice() {
    return this._wholeSalePrice;
  }

  set wholeSalePrice(value) {
    this._wholeSalePrice = value;
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

  get featured() {
    return this._featured;
  }

  set featured(value) {
    this._featured = value;
  }

  get shortDescription() {
    return this._shortDescription;
  }

  set shortDescription(value) {
    this._shortDescription = value;
  }

  get sku() {
    return this._sku;
  }

  set sku(value) {
    this._sku = value;
  }

  get regularPrice() {
    return this._regularPrice;
  }

  set regularPrice(value) {
    this._regularPrice = value;
  }

  get stockQuantity() {
    return this._stockQuantity;
  }

  set stockQuantity(value) {
    this._stockQuantity = value;
  }

  get stockStatus() {
    return this._stockStatus;
  }
  set stockStatus(value) {
    this._stockStatus = value;
  }

  get categories() {
    return this._categories;
  }

  set categories(value) {
    this._categories = value;
  }

  set variations(value) {
    this._variations = value;
  }
  get variations() {
    return this._variations;
  }

  get salePrice() {
    return this._salePrice;
  }

  set salePrice(value) {
    this._salePrice = value;
  }

  get dateOnSaleFrom() {
    return this._dateOnSaleFrom;
  }

  set dateOnSaleFrom(value) {
    this._dateOnSaleFrom = value;
  }

  get dateOnSaleTo() {
    return this._dateOnSaleTo;
  }

  set dateOnSaleTo(value) {
    this._dateOnSaleTo = value;
  }

  get onSale() {
    return this._onSale;
  }

  set onSale(value) {
    this._onSale = value;
  }

  get purchasable() {
    return this._purchasable;
  }

  set purchasable(value) {
    this._purchasable = value;
  }

  get taxStatus() {
    return this._taxStatus;
  }

  set taxStatus(value) {
    this._taxStatus = value;
  }

  get taxClass() {
    return this._taxClass;
  }

  set taxClass(value) {
    this._taxClass = value;
  }

  get weight() {
    return this._weight;
  }

  set weight(value) {
    this._weight = value;
  }

  get dimensions() {
    return this._dimensions;
  }

  set dimensions(value) {
    this._dimensions = value;
  }

  get averageRating() {
    return this._averageRating;
  }

  set averageRating(value) {
    this._averageRating = value;
  }

  get ratingCount() {
    return this._ratingCount;
  }

  set ratingCount(value) {
    this._ratingCount = value;
  }

  get totalRating() {
    return this._totalRating;
  }

  set totalRating(value) {
    this._totalRating = value;
  }

  get purchaseNote() {
    return this._purchaseNote;
  }

  set purchaseNote(value) {
    this._purchaseNote = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get description() {
    return this._description;
  }

  set description(value) {
    this._description = value;
  }

  get price() {
    return this._price;
  }

  set price(value) {
    this._price = value;
  }

  get image() {
    return this._images;
  }

  set image(value) {
    this._images = value;
  }
}
