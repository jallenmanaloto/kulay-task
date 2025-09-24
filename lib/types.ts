export type CartItem = Product & { quantity: number };

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number
}
