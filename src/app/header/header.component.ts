import { Component, OnInit } from "@angular/core";
import { OrderService } from "app/order/order.service";
import { ShoppingCartServices } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { RouterLink, RouterLinkActive, RouterModule } from "@angular/router";
import { NgIf } from "@angular/common";
import { UserDetailComponent } from "./user-detail/user-detail.component";

@Component({
  selector: "mt-header",
  templateUrl: "./header.component.html",
  imports: [RouterLink, RouterLinkActive, RouterModule, UserDetailComponent],
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
