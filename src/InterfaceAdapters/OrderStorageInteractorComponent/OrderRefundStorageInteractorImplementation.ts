import { OrderRefundStorageInteractor } from "../../UseCases/OrderManagementComponent/OrderRefundManager";
import OrderRefund from "../../entities/OrderComponent/OrderRefund";

export interface OrderRefundStorageAdapter {
  createOrderRefund(orderRefund: OrderRefund | null): Promise<OrderRefund>;
  getOrderRefund(orderRefundId: number): Promise<OrderRefund>;
  updateOrderRefund(orderRefund: OrderRefund | null): Promise<OrderRefund>;
  deleteOrderRefund(orderRefundId: number): Promise<void>;
}

export default class OrderRefundStorageAdapterImplementation implements OrderRefundStorageInteractor {
    constructor(private _storage: OrderRefundStorageAdapter) {}

    get storage() {
        return this._storage;
    }

    set storage(value) {
        this._storage = value;
    }

    public async createOrderRefund(orderRefund: OrderRefund | null) {
        return await this._storage.createOrderRefund(orderRefund);
    }

    public async getOrderRefund(orderRefundId: number) {
        return await this._storage.getOrderRefund(orderRefundId);
    }

    public async updateOrderRefund(orderRefund: OrderRefund | null) {
        return await this._storage.updateOrderRefund(orderRefund);
    }

    public async deleteOrderRefund(orderRefundId: number) {
        return await this._storage.deleteOrderRefund(orderRefundId);
    }
    
}