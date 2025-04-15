import { Injectable } from '@angular/core';
import { Restaurant } from '../interfaces/restaurant';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  private url = 'http://localhost:3000/restaurants';
  constructor() {}

  async getAllRestaurant(): Promise<Restaurant[]> {
    const data = await fetch(this.url);

    return (await data.json()) ?? [];
  }

  async getRestaurantById(id: number): Promise<Restaurant | undefined> {
    console.log('id :>> ', id);
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }
}
