import { ProductReviewStorageInteractor } from "../../UseCases/ProductManagementComponent/ProductReviewManager";
import ProductReview from "../../entities/ProductComponent/ProductReview";

export interface ProductReviewStorageAdapter {
    createProductReview(
        productReview: ProductReview | null
      ): Promise<ProductReview>;
      getProductReview(productReviewId: number): Promise<ProductReview>;
      updateProductReview(
        productReview: ProductReview | null
      ): Promise<ProductReview>;
      deleteProductReview(productReviewId: number): Promise<void>;
      getAllReviewsOfProduct(productId: number): Promise<ProductReview[]>;
}

export default class ProductReviewStorageAdapterImplementation implements ProductReviewStorageInteractor {
    constructor(
        private _storage: ProductReviewStorageAdapter
    ){}

    public get storage() {
        return this._storage;
    }

    public set storage(value) {
        this._storage = value;
    }

    public async createProductReview(productReview: ProductReview | null): Promise<ProductReview> {
        return await this._storage.createProductReview(productReview);
    }

    public async getProductReview(productReviewId: number): Promise<ProductReview> {
        return await this._storage.getProductReview(productReviewId);
    }

    public async updateProductReview(productReview: ProductReview | null): Promise<ProductReview> {
        return await this._storage.updateProductReview(productReview);
    }

    public async deleteProductReview(productReviewId: number): Promise<void> {
        return await this._storage.deleteProductReview(productReviewId);
    }

    public async getAllReviewsOfProduct(productId: number): Promise<ProductReview[]> {
        return await this._storage.getAllReviewsOfProduct(productId);
    }
    
}