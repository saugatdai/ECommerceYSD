import ProductCategory from "../../entities/ProductComponent/ProductCategory";

export interface ProductCategoryStorageInteractor {
  createProductCategory(
    productCategory: ProductCategory | null
  ): Promise<ProductCategory>;

  updateProductCategory(
    productCategory: ProductCategory | null
  ): Promise<ProductCategory>;

  deleteProductCategory(productCategoryId: number): Promise<void>;

  getProductCategory(productCategoryId: number): Promise<ProductCategory>;
}

export default class ProductCategoryManager {
  constructor(
    private _productCategory: ProductCategory | null,
    private _storage: ProductCategoryStorageInteractor
  ) {}

  private throwProductCategoryNotSetError() {
    {
      if (!this._productCategory) {
        throw new Error("Product category not set");
      }
    }
  }

  public async createProductCategory() {
    this.throwProductCategoryNotSetError();
    this._productCategory = await this._storage.createProductCategory(
      this._productCategory
    );
  }

  public async getProductCategory(productCategoryId: number) {
    this._productCategory = await this._storage.getProductCategory(
      productCategoryId
    );
  }

  public async updateProductCategory() {
    this.throwProductCategoryNotSetError();
    this._productCategory = await this._storage.updateProductCategory(
      this._productCategory
    );
  }

  public async deleteProductCategory() {
    if (this._productCategory) {
      await this._storage.deleteProductCategory(this._productCategory.id);
      this._productCategory = null;
    }
  }
  
}
