import { ShippingAddressStorageInteractor } from "../../UseCases/UserManagementComponent/ShippingAddressManager";
import Shipping from "../../entities/ServiceDeliveryComponent/Shipping";

export interface ShippingAddressStorageAdapter {
  createShippingAddress(shippingAddress: Shipping | null): Promise<Shipping>;
  getShippingAddress(shippingAddressId: number): Promise<Shipping>;
  updateShippingAddress(shippingAddress: Shipping | null): Promise<Shipping>;
  deleteShippingAddress(shippingAddressId: number): Promise<void>;
}

export default class ShippingAddressStorageAdapterImplementation implements ShippingAddressStorageInteractor {
    constructor(private _storage: ShippingAddressStorageAdapter) {}

    get storage() {
        return this._storage;
    }

    set storage(value) {
        this._storage = value;
    }

    public async createShippingAddress(shippingAddress: Shipping | null) {
        return await this._storage.createShippingAddress(shippingAddress);
    }

    public async getShippingAddress(shippingAddressId: number) {
        return await this._storage.getShippingAddress(shippingAddressId);
    }

    public async updateShippingAddress(shippingAddress: Shipping | null) {
        return await this._storage.updateShippingAddress(shippingAddress);
    }

    public async deleteShippingAddress(shippingAddressId: number) {
        return await this._storage.deleteShippingAddress(shippingAddressId);
    }
    
}
