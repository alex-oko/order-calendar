export interface ClientInterface {
  name: string;
  phone: string;
  address: string;
  deliveryCity: string;
}
export interface ProductInterface {
  idProduct?: number;
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
  finalDateMoment?: any;
  infoClient: ClientInterface;
  deliveryInfo?: ClientInterface;
  present: boolean;
  products: ProductInterface [];
}
