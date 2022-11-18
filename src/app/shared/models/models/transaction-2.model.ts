export interface ProductModel {
  productName: string;
  amount: number;
  cost: string;
  isEdited?: boolean;
}

export interface Transaction2Model {
  category: string;
  date: string;
  shop: string;
  recipe: string;
  products: ProductModel[];
}
