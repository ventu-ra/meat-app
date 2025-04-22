import { Injectable } from '@angular/core';
import { Restaurant } from '../interfaces/restaurant';
import { MenuItem } from '../interfaces/menu-item';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  private url = 'http://localhost:3001/restaurants';
  constructor() {}

  async getAllRestaurant(): Promise<Restaurant[]> {
    const data = await fetch(this.url);

    return (await data.json()) ?? [];
  }

  async getRestaurantById(id: string): Promise<Restaurant | undefined> {
    console.log('id :>> ', id);
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }

  async getAllMenuItens(id: string): Promise<MenuItem[]> {
    const data = await fetch(`${this.url}/${id}/menu`);
    return (await data.json()) ?? [];
  }
}
