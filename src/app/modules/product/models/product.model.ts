export interface IProduct {
  productID: number;
  name: string;
  price: number;
  quantity: number;
  productCategoryName: string;
  productCategoryCode: string;
  imagePath: string;
}

export interface IProductForm {
  name: string;
  price: number;
  quantity: number;
  productCategoryID: number;
}
