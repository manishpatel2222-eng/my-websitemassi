
export enum Flavor {
  METHI = 'Methi (Fenugreek)',
  ZEERA = 'Zeera (Cumin)'
}

export interface OrderData {
  name: string;
  phone: string;
  email: string;
  address: string;
  flavor: Flavor;
  quantity: number;
  notes?: string;
}

export interface Product {
  id: string;
  gujaratiName: string;
  englishName: string;
  description: string;
  image: string;
  pricePerKg: number;
}
