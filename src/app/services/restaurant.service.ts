import { Injectable } from '@angular/core';
import { Restaurant } from '../interfaces/restaurant';
import { MenuItem } from '../interfaces/menu-item';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  private url = 'http://localhost:3001';
  constructor() {}

  async getAllRestaurant(): Promise<Restaurant[]> {
    const data = await fetch(`${this.url}/restaurants`);
    return (await data.json()) ?? [];
  }

  async getRestaurantById(id: string): Promise<Restaurant | undefined> {
    const data = await fetch(`${this.url}/restaurants/${id}`);

    return (await data.json()) ?? [];
  }

  async getAllMenuItens(id: string): Promise<MenuItem[]> {
    const data = await fetch(`${this.url}/menu?restaurantId=${id}`);
    return (await data.json()) ?? [];
  }

  async getReviewsOfRestaurant(id: string): Promise<[]> {
    const data = await fetch(`${this.url}/reviews?restaurantId=${id}`);
    return (await data.json()) ?? [];
  }
}
