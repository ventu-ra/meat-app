import { MenuItem } from "app/restaurant-detail/menu-item/menu-item.model";

export interface Restaurant {
  id: string;
  name: string;
  category: string;
  deliveryEstimate: string;
  rating: number;
  imagePath: string;
  about?: string;
  hours?: string;
  menuItens?: MenuItem[];
  reviews?: Reviews[]
}

export interface Reviews {
  name: string,
  date: string,
  rating: number,
  comments: string

}
