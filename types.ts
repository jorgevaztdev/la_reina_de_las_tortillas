
export enum ProductCategory {
  Corn = 'Corn Tortillas',
  Flour = 'Flour Tortillas',
  Salsas = 'Salsas',
  Drinks = 'Drinks',
}

export enum StockStatus {
  InStock = 'In Stock',
  OutOfStock = 'Out of Stock',
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  size: string;
  image: string;
  stockStatus: StockStatus;
  category: ProductCategory;
}

export interface CartItem extends Product {
  quantity: number;
}
