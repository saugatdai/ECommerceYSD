import { CouponStorageInteractor } from "../../UseCases/CouponManagementComponent/CouponManager";
import Coupon from "../../entities/CouponComponent/Coupon";

export interface CouponStorageAdapter {
  createCoupon(coupon: Coupon | null): Promise<Coupon>;
  getCoupon(couponId: number): Promise<Coupon>;
  deleteCoupon(couponId: number): Promise<void>;
  updateCoupon(coupon: Coupon | null): Promise<Coupon>;
  getAllCoupons(): Promise<Coupon[]>;
}

export default class CouponStorageAdapterImplementation
  implements CouponStorageInteractor
{
  constructor(private _storage: CouponStorageAdapter) {}

  public get storage(): CouponStorageAdapter {
    return this._storage;
  }

  public set storage(value: CouponStorageAdapter) {
    this._storage = value;
  }

  public async createCoupon(coupon: Coupon | null): Promise<Coupon> {
    return await this._storage.createCoupon(coupon);
  }

  public async getCoupon(couponId: number): Promise<Coupon> {
    return await this._storage.getCoupon(couponId);
  }

  public async deleteCoupon(couponId: number): Promise<void> {
    return await this._storage.deleteCoupon(couponId);
  }

  public async updateCoupon(coupon: Coupon | null): Promise<Coupon> {
    return await this._storage.updateCoupon(coupon);
  }

  public async getAllCoupons(): Promise<Coupon[]> {
    return await this._storage.getAllCoupons();
  }
}
