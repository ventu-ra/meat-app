import { ShoppingCartServices } from "./../../restaurant-detail/shopping-cart/shopping-cart.service";
import { LoginService } from "./../../security/login/login.service";
import { Component, OnInit } from "@angular/core";
import { User } from "app/security/login/user.model";
import { NgIf } from "@angular/common";
import { RouterLinkActive, RouterLink } from "@angular/router";

@Component({
  selector: "mt-user-detail",
  templateUrl: "./user-detail.component.html",
  styleUrls: ["./user-detail.component.css"],
  imports: [NgIf, RouterLinkActive, RouterLink],
})
export class UserDetailComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private numItems: ShoppingCartServices
  ) {}

  ngOnInit() {}

  user(): User {
    return this.loginService.user;
  }

  isLoggedIn() {
    return this.loginService.isLoggedIn();
  }

  login() {
    this.loginService.handleLogin();
  }
  logout() {
    this.loginService.logout();
  }
}
