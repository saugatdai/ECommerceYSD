import { CategoryImageStorageInteractor } from "../../UseCases/ProductManagementComponent/CategoryImageManager";
import CategoryImage from "../../entities/ProductComponent/CategoryImage";

export interface CategoryImageStorageAdapter {
  createCategoryImage(
    categoryImage: CategoryImage | null
  ): Promise<CategoryImage>;
  getCategoryImage(categoryImageId: number): Promise<CategoryImage>;
  deleteCategoryImage(categoryImageId: number): Promise<void>;
}

export default class CategoryImageStorageAdapterImplementation
  implements CategoryImageStorageInteractor
{
  constructor(
    private _storage: CategoryImageStorageAdapter
  ) {}

  get storage() {
    return this._storage;
  }

  set storage(value) {
    this._storage = value;
  }

  public async createCategoryImage(categoryImage: CategoryImage | null) {
    return await this._storage.createCategoryImage(categoryImage);
  }

  public async getCategoryImage(categoryImageId: number) {
    return await this._storage.getCategoryImage(categoryImageId);
  }

  public async deleteCategoryImage(categoryImageId: number) {
    return await this._storage.deleteCategoryImage(categoryImageId);
  }
}
