import { Component, OnInit, output, input } from "@angular/core";
import { CartItem } from "app/restaurant-detail/shopping-cart/cart-item.model";
import { NgIf, NgFor, CurrencyPipe } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
    selector: "mt-order-items",
    templateUrl: "./order-items.component.html",
    imports: [NgIf, RouterLink, NgFor, CurrencyPipe]
})
export class OrderItemsComponent implements OnInit {
  readonly items = input<CartItem[]>(undefined);

  readonly increaseQty = output<CartItem>();
  readonly decreaseQty = output<CartItem>();
  readonly remove = output<CartItem>();

  constructor() {}

  ngOnInit() {}

  emitIncreaseQty(item: CartItem) {
    this.increaseQty.emit(item);
  }

  emitDecreaseQty(item: CartItem) {
    this.decreaseQty.emit(item);
  }

  emitRemove(item: CartItem) {
    this.remove.emit(item);
  }
}
