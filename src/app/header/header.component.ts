import { Component, OnInit } from "@angular/core";
import { ShoppingCartServices } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { RouterLink, RouterLinkActive, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { UserDetailComponent } from "./user-detail/user-detail.component";

@Component({
  selector: "mt-header",
  templateUrl: "./header.component.html",
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterModule,
    CommonModule,
    UserDetailComponent,
  ],
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
