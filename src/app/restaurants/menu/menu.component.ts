import { Component, computed, inject, Output, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../../services/restaurant.service';
import { MatTabsModule } from '@angular/material/tabs';
import { MenuItem } from '../../interfaces/menu-item';
import { CommonModule } from '@angular/common';
import { CartItem } from './cart-item.model';

@Component({
  selector: 'app-menu',
  imports: [MatTabsModule, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  restaurantService = inject(RestaurantService);
  menuItems: MenuItem[] = []; // Lista de itens do menu
  reviewList: any[] = []; // Lista de avaliações

  items = signal<CartItem[]>([]); // Signal para os itens do carrinho
  // Computed signal para calcular o total dinamicamente

  constructor() {
    const restaurantId = String(this.route.snapshot.params['id']);
    this.restaurantService.getAllMenuItens(restaurantId).then((menuItens) => {
      this.menuItems = menuItens;
    });

    this.restaurantService
      .getReviewsOfRestaurant(restaurantId)
      .then((reviews) => {
        console.log('Reviews:', reviews);
        this.reviewList = reviews;
      });
  }

  // Adiciona um item ao carrinho
  addItem(item: MenuItem) {
    const foundItem = this.items().find(
      (mItem) => mItem.menuItem.id === item.id
    );

    if (foundItem) {
      this.increaseQty(foundItem);
    } else {
      this.items.update((items) => [...items, new CartItem(item)]);
    }
  }

  total = computed(() =>
    this.items().reduce((sum, item) => sum + item.value(), 0)
  );

  // Remove um item do carrinho
  removeItem(item: CartItem) {
    this.items.update((items) => items.filter((i) => i !== item));
  }

  // Aumenta a quantidade de um item no carrinho
  increaseQty(item: CartItem) {
    item.quantity++;
    this.items.update((items) => [...items]); // Atualiza o signal para refletir a mudança
  }

  clear() {
    this.items.update(() => []);
  }
}
