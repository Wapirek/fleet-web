export interface ProductModel {
  id: number;
  productName: string;
  quantity: number;
  paid: string;
  currency: string;
  isEdited?: boolean;
}

export interface Transaction2Model {
  id: number;
  transactionName: string;
  date: string;
  shop: string;
  recipe: string;
  isDefine: boolean;
  products: ProductModel[];
}
