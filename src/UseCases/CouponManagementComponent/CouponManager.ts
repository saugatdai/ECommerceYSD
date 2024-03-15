import Coupon from "../../entities/CouponComponent/Coupon";

export interface CouponStorageInteractor {
  createCoupon(coupon: Coupon | null): Promise<Coupon>;
  getCoupon(couponId: number): Promise<Coupon>;
  deleteCoupon(couponId: number): Promise<void>;
  updateCoupon(coupon: Coupon | null): Promise<Coupon>;
  getAllCoupon(): Promise<Coupon[]>;
}

export default class CouponManager {
  constructor(
    private _coupon: Coupon | null,
    private _storage: CouponStorageInteractor
  ) {}

  private throwCouponNotSetError() {
    if (!this._coupon) {
      throw new Error("Coupon not set");
    }
  }

  public async createCoupon() {
    this.throwCouponNotSetError();
    this._coupon = await this._storage.createCoupon(this._coupon);
  }

  public async getCoupon(couponId: number) {
    this._coupon = await this._storage.getCoupon(couponId);
  }

  public async updateCoupon() {
    this.throwCouponNotSetError();
    this._coupon = await this._storage.updateCoupon(this._coupon);
  }

  public async deleteCoupon() {
    if (this._coupon) {
      await this._storage.deleteCoupon(this._coupon.id);
      this._coupon = null;
    }
  }

  public async getAllCoupon() {
    return await this._storage.getAllCoupon();
  }
}
