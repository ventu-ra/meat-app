import { Component, OnInit } from "@angular/core";
import { OrderService } from "app/order/order.service";
import { ShoppingCartServices } from "app/restaurant-detail/shopping-cart/shopping-cart.service";

@Component({
  selector: "mt-header",
  templateUrl: "./header.component.html",
})
export class HeaderComponent implements OnInit {
  constructor(private numItems: ShoppingCartServices) {}

  ngOnInit() {
    this.isNumItems();
  }

  isNumItems(): number {
    return this.numItems.contItems;
  }
}
