import Order from "../../entities/OrderComponent/Order";
import { OrderStatus } from "../../entities/OrderComponent/OrderConstants";

export interface OrderStorageInteractor{
    createOrder(order: Order | null): Promise<Order>;
    getOrder(orderId: number): Promise<Order>;
    updateOrder(order: Order | null): Promise<Order>;
    deleteOrder(orderId: number): Promise<void>;
    getOrderByStatus(status: OrderStatus): Promise<Order[]>;
    getAllOrders(): Promise<Order[]>;
}

export default class OrderManager{
    constructor(
        private _order: Order | null,
        private _storage: OrderStorageInteractor
    ) {}

    private throwOrderNotSetError() {
        if (!this._order) {
            throw new Error("Order not set");
        }
    }

    public async createOrder() {
        this.throwOrderNotSetError();
        this._order = await this._storage.createOrder(this._order);
    }

    public async getOrder(orderId: number) {
        this._order = await this._storage.getOrder(orderId);
    }

    public async updateOrder() {
        this.throwOrderNotSetError();
        this._order = await this._storage.updateOrder(this._order);
    }

    public async deleteOrder() {
        if (this._order) {
            await this._storage.deleteOrder(this._order.id);
            this._order = null;
        }
    }

    public async getOrderByStatus(status: OrderStatus) {
        return await this._storage.getOrderByStatus(status);
    }

    public async getAllOrders() {
        return await this._storage.getAllOrders();
    }
    
}