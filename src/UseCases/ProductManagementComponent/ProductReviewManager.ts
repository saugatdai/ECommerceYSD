import ProductReview from "../../entities/ProductComponent/ProductReview";

export interface ProductReviewStorageInteractor {
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

export default class ProductReviewManager {
  constructor(
    private _productReview: ProductReview | null,
    private _storage: ProductReviewStorageInteractor
  ) {}

  private throwProductReviewNotSetError() {
    if (!this._productReview) {
      throw new Error("Product review not set");
    }
  }

  public async createProductReview() {
    this.throwProductReviewNotSetError();
    this._productReview = await this._storage.createProductReview(
      this._productReview
    );
  }

  public async getProductReview(productReviewId: number) {
    this._productReview = await this._storage.getProductReview(productReviewId);
  }

  public async updateProductReview() {
    this.throwProductReviewNotSetError();
    this._productReview = await this._storage.updateProductReview(
      this._productReview
    );
  }

  public async deleteProductReview() {
    if (this._productReview) {
      await this._storage.deleteProductReview(this._productReview.id);
      this._productReview = null;
    }
  }

  public async getAllReviewsOfProduct() {
    this.throwProductReviewNotSetError();
    if (this._productReview) {
      const productReviews = await this._storage.getAllReviewsOfProduct(this._productReview?.productId);
      return productReviews;
    }
  }
}
