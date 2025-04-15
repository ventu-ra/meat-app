import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Restaurant } from '../interfaces/restaurant';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-restaurants',
  imports: [CommonModule],
  templateUrl: './restaurants.component.html',
  styleUrl: './restaurants.component.css',
})
export class RestaurantsComponent {
  restaurantList: Restaurant[] = [];
  readonly restaurantsService: RestaurantService = inject(RestaurantService);

  constructor() {
    this.restaurantsService
      .getAllRestaurant()
      .then((restaurantList: Restaurant[]) => {
        this.restaurantList = restaurantList;
      });
  }
}
