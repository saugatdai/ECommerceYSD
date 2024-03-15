import Billing from "../../entities/ServiceDeliveryComponent/Billing";

export interface BillingAddressStorageInteractor {
  createBillingAddress(billingAddress: Billing | null): Promise<Billing>;
  getBillingAddress(billingAddressId: number): Promise<Billing>;
  updateBillingAddress(billingAddress: Billing | null): Promise<Billing>;
  deleteBillingAddress(billingAddressId: number): Promise<void>;
}

export default class BillingAddressManager {
  constructor(
    private _billingAddress: Billing | null,
    private _storage: BillingAddressStorageInteractor
  ) {}

  private throwBillingAddressNotSetError() {
    if (!this._billingAddress) {
      throw new Error("Billing address not set");
    }
  }

  get billingAddress() {
    return this._billingAddress;
  }

  set billingAddress(value) {
    this._billingAddress = value;
  }

  public async createBillingAddress() {
    this.throwBillingAddressNotSetError();
    this._billingAddress = await this._storage.createBillingAddress(
      this._billingAddress
    );
  }

  public async getBillingAddress(billingAddressId: number) {
    this._billingAddress = await this._storage.getBillingAddress(
      billingAddressId
    );
  }

  public async updateBillingAddress() {
    this.throwBillingAddressNotSetError();
    this._billingAddress = await this._storage.updateBillingAddress(
      this._billingAddress
    );
  }

  public async deleteBillingAddress() {
    if (this._billingAddress) {
      await this._storage.deleteBillingAddress(this._billingAddress.id);
      this._billingAddress = null;
    }
  }
}
