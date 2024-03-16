import { ProductImageStorageInteractor } from "../../UseCases/ProductManagementComponent/ProductImageManager";
import ProductImage from "../../entities/ProductComponent/ProductImage";

export interface ProductImageStorageAdapter {
    createProductImage(productImage: ProductImage | null): Promise<ProductImage>;
    getProductImage(productImageId: number): Promise<ProductImage>;
    deleteProductImage(productImageId: number): Promise<void>;
}

export default class ProductImageStorageAdapterImplementation implements ProductImageStorageInteractor {
    constructor(
        private _storage: ProductImageStorageAdapter
    ){}

    public get storage() {
        return this._storage;
    }

    public set storage(value) {
        this._storage = value;
    }

    public async createProductImage(productImage: ProductImage | null): Promise<ProductImage> {
        return await this._storage.createProductImage(productImage);
    }

    public async getProductImage(productImageId: number): Promise<ProductImage> {
        return await this._storage.getProductImage(productImageId);
    }

    public async deleteProductImage(productImageId: number): Promise<void> {
        return await this._storage.deleteProductImage(productImageId);
    }
    
}