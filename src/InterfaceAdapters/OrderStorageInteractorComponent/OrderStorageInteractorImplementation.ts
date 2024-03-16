import { OrderStorageInteractor } from "../../UseCases/OrderManagementComponent/OrderManager";  
import Order from "../../entities/OrderComponent/Order";
import { OrderStatus } from "../../entities/OrderComponent/OrderConstants";

export interface OrderStorageAdapter {
    createOrder(order: Order | null): Promise<Order>;
    getOrder(orderId: number): Promise<Order>;
    updateOrder(order: Order | null): Promise<Order>;
    deleteOrder(orderId: number): Promise<void>;
    getOrderByStatus(status: OrderStatus): Promise<Order[]>;
    getAllOrders(): Promise<Order[]>;
}

export default class OrderStorageAdapterImplementation implements OrderStorageInteractor {
    constructor(private _storage: OrderStorageAdapter) {}

      get storage() {
    return this._storage;
  }

  set storage(value) {
    this._storage = value;
  }

  async createOrder(order: Order | null): Promise<Order> {
    return await this.storage.createOrder(order);
  }

  async getOrder(orderId: number): Promise<Order> {
    return await this.storage.getOrder(orderId);
  }

  async updateOrder(order: Order | null): Promise<Order> {
    return await this.storage.updateOrder(order);
  }

  async deleteOrder(orderId: number): Promise<void> {
    return await this.storage.deleteOrder(orderId);
  }

  async getOrderByStatus(status: OrderStatus): Promise<Order[]> {
    return await this.storage.getOrderByStatus(status);
  }

  async getAllOrders(): Promise<Order[]> {
    return await this.storage.getAllOrders();
  }
}