import Product from "../../entities/ProductComponent/Product";

export interface ProductStorageInteractor {
  createProduct(product: Product | null): Promise<Product>;
  getProduct(productId: number): Promise<Product>;
  updateProduct(product: Product | null): Promise<Product>;
  deleteProduct(productId: number): Promise<void>;
}

export default class ProductManager {
  constructor(
    private _product: Product | null,
    private _storage: ProductStorageInteractor
  ) {}

  private throwProductNotSetError() {
    if (!this._product) {
      throw new Error("Product not set");
    }
  }

  public async createProduct() {
    this.throwProductNotSetError();
    this._product = await this._storage.createProduct(this._product);
  }

  public async getProduct(productId: number) {
    this._product = await this._storage.getProduct(productId);
  }

  public async updateProduct() {
    this.throwProductNotSetError();
    this._product = await this._storage.updateProduct(this._product);
  }

  public async deleteProduct() {
    if (this._product) {
      await this._storage.deleteProduct(this._product.id);
      this._product = null;
    }
  }
}
