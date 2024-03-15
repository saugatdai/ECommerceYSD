import CategoryImage from "../../entities/ProductComponent/CategoryImage";

export interface CategoryImageStorageInteractor{
    createCategoryImage(categoryImage: CategoryImage | null): Promise<CategoryImage>;
    getCategoryImage(categoryImageId: number): Promise<CategoryImage>;
    deleteCategoryImage(categoryImageId: number): Promise<void>;
}

export default class CategoryImageManager{
    constructor(
        private _categoryImage: CategoryImage | null,
        private _storage: CategoryImageStorageInteractor
    ) {}

    private throwCategoryImageNotSetError() {
        if (!this._categoryImage) {
            throw new Error("Category image not set");
        }
    }

    public async createCategoryImage() {
        this.throwCategoryImageNotSetError();
        this._categoryImage = await this._storage.createCategoryImage(
            this._categoryImage
        );
    }

    public async getCategoryImage(categoryImageId: number) {
        this._categoryImage = await this._storage.getCategoryImage(categoryImageId);
    }

    public async deleteCategoryImage() {
        if (this._categoryImage) {
            await this._storage.deleteCategoryImage(this._categoryImage.id);
            this._categoryImage = null;
        }
    }

}