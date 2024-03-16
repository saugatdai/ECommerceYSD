import { BillingAddressStorageInteractor } from "../../UseCases/UserManagementComponent/BillingAddressManager";
import Billing from "../../entities/ServiceDeliveryComponent/Billing";

export interface BillingAddressStorageAdapter {
  createBillingAddress(billingAddress: Billing | null): Promise<Billing>;
  getBillingAddress(billingAddressId: number): Promise<Billing>;
  updateBillingAddress(billingAddress: Billing | null): Promise<Billing>;
  deleteBillingAddress(billingAddressId: number): Promise<void>;
}

export default class BillingAddressStorageAdapterImplementation
  implements BillingAddressStorageInteractor
{
  constructor(private _storage: BillingAddressStorageAdapter) {}

  get storage() {
    return this._storage;
  }

  set storage(value) {
    this._storage = value;
  }

  public async createBillingAddress(billingAddress: Billing | null) {
    return await this._storage.createBillingAddress(billingAddress);
  }

  public async getBillingAddress(billingAddressId: number) {
    return await this._storage.getBillingAddress(billingAddressId);
  }

  public async updateBillingAddress(billingAddress: Billing | null) {
    return await this._storage.updateBillingAddress(billingAddress);
  }

  public async deleteBillingAddress(billingAddressId: number) {
    return await this._storage.deleteBillingAddress(billingAddressId);
  }

}
