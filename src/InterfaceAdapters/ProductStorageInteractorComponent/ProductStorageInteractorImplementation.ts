import { ProductStorageInteractor } from "../../UseCases/ProductManagementComponent/ProductManager";
import Product from "../../entities/ProductComponent/Product";

export interface productStorageInteractorAdapter {
  createProduct(product: Product | null): Promise<Product>;
  getProduct(productId: number): Promise<Product>;
  updateProduct(product: Product | null): Promise<Product>;
  deleteProduct(productId: number): Promise<void>;
  getAllProducts(): Promise<Product[]>;
}

export default class ProductStorageInteractorImplementation
  implements ProductStorageInteractor
{
  constructor(
    private _productStorageInteractorAdapter: productStorageInteractorAdapter
    ) {}

  public get productStorageInteractorAdapter() {
    return this._productStorageInteractorAdapter;
  }

  public set productStorageInteractorAdapter(value) {
    this._productStorageInteractorAdapter = value;
  }

  public async createProduct(product: Product | null): Promise<Product> {
    return await this._productStorageInteractorAdapter.createProduct(product);
  }

  public async getProduct(productId: number): Promise<Product> {
    return await this._productStorageInteractorAdapter.getProduct(productId);
  }

  public async updateProduct(product: Product | null): Promise<Product> {
    return await this._productStorageInteractorAdapter.updateProduct(product);
  }

  public async deleteProduct(productId: number): Promise<void> {
    return await this._productStorageInteractorAdapter.deleteProduct(productId);
  }

  public async getAllProducts(): Promise<Product[]> {
    return await this._productStorageInteractorAdapter.getAllProducts();
  }

}
