export interface ClientInterface {
  name: string;
  phone: string;
  address: string;
  deliveryCity: string;
}
export interface ProductInterface {
  model: string;
  size: string;
  description: string;
  quantity: number;
  customPrice: number;
  unitPrice: number;
  discount: number;
}
export interface OrderInterface {
  initialDate: string;
  finalDate: string;
  infoClient: ClientInterface [];
  present: boolean;
  products: ProductInterface [];
}
