import OrderRefund from "../../entities/OrderComponent/OrderRefund";

export interface OrderRefundStorageInteractor {
  createOrderRefund(orderRefund: OrderRefund | null): Promise<OrderRefund>;
  getOrderRefund(orderRefundId: number): Promise<OrderRefund>;
  updateOrderRefund(orderRefund: OrderRefund | null): Promise<OrderRefund>;
  deleteOrderRefund(orderRefundId: number): Promise<void>;
}

export default class OrderRefundManager {
  constructor(
    private _orderRefund: OrderRefund | null,
    private _storage: OrderRefundStorageInteractor
  ) {}

  private throwOrderRefundNotSetError() {
    if (!this._orderRefund) {
      throw new Error("Order refund not set");
    }
  }

  public async createOrderRefund() {
    this.throwOrderRefundNotSetError();
    this._orderRefund = await this._storage.createOrderRefund(
      this._orderRefund
    );
  }

  public async getOrderRefund(orderRefundId: number) {
    this._orderRefund = await this._storage.getOrderRefund(orderRefundId);
  }

  public async updateOrderRefund() {
    this.throwOrderRefundNotSetError();
    this._orderRefund = await this._storage.updateOrderRefund(
      this._orderRefund
    );
  }

  public async deleteOrderRefund() {
    if (this._orderRefund) {
      await this._storage.deleteOrderRefund(this._orderRefund.id);
      this._orderRefund = null;
    }
  }
}
