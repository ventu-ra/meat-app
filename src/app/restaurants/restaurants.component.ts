import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { Restaurant } from '../interfaces/restaurant';
import { RestaurantService } from '../services/restaurant.service';
import { RouterModule } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-restaurants',
  imports: [CommonModule, RouterModule],
  templateUrl: './restaurants.component.html',
  styleUrl: './restaurants.component.css',
})
export class RestaurantsComponent {
  @Input() restaurantList: Restaurant[] = [];
  readonly restaurantsService: RestaurantService = inject(RestaurantService);

  constructor() {
    this.restaurantsService
      .getAllRestaurant()
      .then((restaurantList: Restaurant[]) => {
        this.restaurantList = restaurantList;
      });
  }
}
