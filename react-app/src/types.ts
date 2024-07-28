export type Category = '전체' | '중식' | '한식' | '일식';

export interface RestaurantMenu {
  id: string;
  name: string;
  price: number;
}

export interface Restaurant {
  id: string;
  category: string;
  name: string;
  menu: RestaurantMenu[];
}

export interface Receipt {
  id: string;
  menu: RestaurantMenu[];
  totalPrice: number;
}
