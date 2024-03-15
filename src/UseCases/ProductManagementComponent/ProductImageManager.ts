import ProductImage from "../../entities/ProductComponent/ProductImage";

export interface ProductImageStorageInteractor{
    createProductImage(productImage: ProductImage | null): Promise<ProductImage>;
    getProductImage(productImageId: number): Promise<ProductImage>;
    deleteProductImage(productImageId: number): Promise<void>;
}

export default class ProductImageManager{
    constructor(
        private _productImage: ProductImage | null,
        private _storage: ProductImageStorageInteractor
    ) {}

    private throwProductImageNotSetError() {
        if (!this._productImage) {
            throw new Error("Product image not set");
        }
    }

    public async createProductImage() {
        this.throwProductImageNotSetError();
        this._productImage = await this._storage.createProductImage(
            this._productImage
        );
    }

    public async getProductImage(productImageId: number) {
        this._productImage = await this._storage.getProductImage(productImageId);
    }
    
}