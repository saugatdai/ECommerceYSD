import { LineItemStorageInteractor } from "../../UseCases/OrderManagementComponent/LineItemManager";
import LineItem from "../../entities/OrderComponent/LineItem";

export interface LineItemStorageAdapter {
  createLineItem(lineItem: LineItem | null): Promise<LineItem>;
  getLineItem(lineItemId: number): Promise<LineItem>;
  updateLineItem(lineItem: LineItem | null): Promise<LineItem>;
  deleteLineItem(lineItemId: number): Promise<void>;
  getLineItemsForOrder(orderId: number): Promise<LineItem[]>;
}

export default class LineItemStorageAdapterImplementation
  implements LineItemStorageInteractor
{
  constructor(private _storage: LineItemStorageAdapter) {}

  get storage() {
    return this._storage;
  }

  set storage(value) {
    this._storage = value;
  }
  async createLineItem(lineItem: LineItem | null): Promise<LineItem> {
    return this.storage.createLineItem(lineItem);
  }

  async getLineItem(lineItemId: number): Promise<LineItem> {
    return this.storage.getLineItem(lineItemId);
  }

  async updateLineItem(lineItem: LineItem | null): Promise<LineItem> {
    return this.storage.updateLineItem(lineItem);
  }

  async deleteLineItem(lineItemId: number): Promise<void> {
    return this.storage.deleteLineItem(lineItemId);
  }

  async getLineItemsForOrder(orderId: number): Promise<LineItem[]> {
    return this.storage.getLineItemsForOrder(orderId);
  }
}
