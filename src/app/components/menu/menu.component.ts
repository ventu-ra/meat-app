import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../../services/restaurant.service';
import { Restaurant } from '../../interfaces/restaurant';
import { MatTabsModule } from '@angular/material/tabs';
import { MenuItem } from '../../interfaces/menu-item';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-menu',
  imports: [MatTabsModule, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  id? = '';
  route: ActivatedRoute = inject(ActivatedRoute);
  restaurantService = inject(RestaurantService);
  menuItems: MenuItem[] = [];

  restaurant: Restaurant | undefined;
  rowState = 'ready';

  constructor() {
    const restaurantId = String(this.route.snapshot.params['id']);

    this.restaurantService
      .getRestaurantById(restaurantId)
      .then((restaurant) => {
        this.restaurant = restaurant;
      });

    this.restaurantService.getAllMenuItens(restaurantId).then((menuItens) => {
      this.menuItems = menuItens;
    });
  }

  // items(): [] {
  //   // return this.shoppingCartService.items;
  // }

  removeItem(itm: any) {
    // this.shoppingCartService.removeItem(itm);
  }

  clear() {
    // this.shoppingCartService.clear();
  }

  addItem(item: any) {
    // this.shoppingCartService.addItem(item);
  }

  // total(): number {
  //   // return this.shoppingCartService.total();
  // }
}
