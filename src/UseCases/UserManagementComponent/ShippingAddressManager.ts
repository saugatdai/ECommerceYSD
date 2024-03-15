import Shipping from "../../entities/ServiceDeliveryComponent/Shipping";

export interface ShippingAddressStorageInteractor {
  createShippingAddress(shippingAddress: Shipping | null): Promise<Shipping>;
  getShippingAddress(shippingAddressId: number): Promise<Shipping>;
  updateShippingAddress(shippingAddress: Shipping | null): Promise<Shipping>;
  deleteShippingAddress(shippingAddressId: number): Promise<void>;
}

export default class ShippingAddressManager {
  constructor(
    private _shippingAddress: Shipping | null,
    private _storage: ShippingAddressStorageInteractor
  ) {}

  private throwShippingAddressNotSetError() {
    if (!this._shippingAddress) {
      throw new Error("Shipping address not set");
    }
  }

  get shippingAddress() {
    return this._shippingAddress;
  }

  set shippingAddress(value) {
    this._shippingAddress = value;
  }

  public async createShippingAddress() {
    this.throwShippingAddressNotSetError();
    this._shippingAddress = await this._storage.createShippingAddress(
      this._shippingAddress
    );
  }

  public async getShippingAddress(shippingAddressId: number) {
    this._shippingAddress = await this._storage.getShippingAddress(
      shippingAddressId
    );
  }

  public async updateShippingAddress() {
    this.throwShippingAddressNotSetError();
    this._shippingAddress = await this._storage.updateShippingAddress(
      this._shippingAddress
    );
  }

  public async deleteShippingAddress() {
    if (this._shippingAddress) {
      await this._storage.deleteShippingAddress(this._shippingAddress.id);
      this._shippingAddress = null;
    }
  }
}
