import { ProductCategoryStorageInteractor } from "../../UseCases/ProductManagementComponent/ProductCategoryManager";
import ProductCategory from "../../entities/ProductComponent/ProductCategory";

export interface ProductCategoryStorageAdapter {
  createProductCategory(
    productCategory: ProductCategory | null
  ): Promise<ProductCategory>;

  updateProductCategory(
    productCategory: ProductCategory | null
  ): Promise<ProductCategory>;

  deleteProductCategory(productCategoryId: number): Promise<void>;
  getProductCategory(productCategoryId: number): Promise<ProductCategory>;
  getAllCategories(): Promise<ProductCategory[]>;
}

export default class ProductCategoryStorageAdapterImplementation implements ProductCategoryStorageInteractor {
    constructor(
        private _storage: ProductCategoryStorageAdapter
    ){}

    public get storage() {
        return this._storage;
    }

    public set storage(value) {
        this._storage = value;
    }

    public async createProductCategory(productCategory: ProductCategory | null): Promise<ProductCategory> {
        return await this._storage.createProductCategory(productCategory);
    }

    public async getProductCategory(productCategoryId: number): Promise<ProductCategory> {
        return await this._storage.getProductCategory(productCategoryId);
    }

    public async updateProductCategory(productCategory: ProductCategory | null): Promise<ProductCategory> {
        return await this._storage.updateProductCategory(productCategory);
    }

    public async deleteProductCategory(productCategoryId: number): Promise<void> {
        return await this._storage.deleteProductCategory(productCategoryId);
    }
    
    public async getAllCategories(): Promise<ProductCategory[]> {
        return await this._storage.getAllCategories();
    }
}
