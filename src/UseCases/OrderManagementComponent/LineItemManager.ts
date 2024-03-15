import LineItem from "../../entities/OrderComponent/LineItem";

export interface LineItemStorageInteractor {
  createLineItem(lineItem: LineItem | null): Promise<LineItem>;
  getLineItem(lineItemId: number): Promise<LineItem>;
  updateLineItem(lineItem: LineItem | null): Promise<LineItem>;
  deleteLineItem(lineItemId: number): Promise<void>;
  getLineItemsForOrder(orderId: number): Promise<LineItem[]>;
}

export default class LineItemManager {
  constructor(
    private _lineItem: LineItem | null,
    private _storage: LineItemStorageInteractor
  ) {}

  private throwLineItemNotSetError() {
    if (!this._lineItem) {
      throw new Error("Line item not set");
    }
  }

  public async createLineItem() {
    this.throwLineItemNotSetError();
    this._lineItem = await this._storage.createLineItem(this._lineItem);
  }

  public async getLineItem(lineItemId: number) {
    this._lineItem = await this._storage.getLineItem(lineItemId);
  }

  public async updateLineItem() {
    this.throwLineItemNotSetError();
    this._lineItem = await this._storage.updateLineItem(this._lineItem);
  }

  public async deleteLineItem() {
    if (this._lineItem) {
      await this._storage.deleteLineItem(this._lineItem.id);
      this._lineItem = null;
    }
  }

  public async getLineItemsForOrder(orderId: number) {
    return await this._storage.getLineItemsForOrder(orderId);
  }
}
