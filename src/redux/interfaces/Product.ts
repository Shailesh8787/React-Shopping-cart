export interface Product {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface Cart {
  id: number;
  title: string;
  description: string,
  image: string,
  price: number;
  quantity: number;
  selected: boolean
}