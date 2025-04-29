import { Component, OnInit } from "@angular/core";
import { ShoppingCartServices } from "./shopping-cart.service";

import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
} from "@angular/animations";
import { NgIf, NgFor, CurrencyPipe } from "@angular/common";
import { RouterLink } from "@angular/router";
@Component({
    selector: "mt-shopping-cart",
    templateUrl: "./shopping-cart.component.html",
    preserveWhitespaces: true,
    animations: [
        trigger("row", [
            state("ready", style({ opacity: 1 })),
            transition("void => ready", animate("300ms 0s ease-in", keyframes([
                style({ opacity: 0, transition: "translateX(-30px)", offset: 0 }),
                style({
                    opacity: 0.8,
                    transition: "translateX(10px)",
                    offset: 0.8,
                }),
                style({ opacity: 1, transition: "translateX(0px)", offset: 1 }),
            ]))),
            transition("ready => void", animate("300ms 0s ease-out", keyframes([
                style({ opacity: 1, transition: "translateX(-30px)", offset: 0 }),
                style({
                    opacity: 0.8,
                    transition: "translateX(-10px)",
                    offset: 0.2,
                }),
                style({ opacity: 0, transition: "translateX(30px)", offset: 1 }),
            ]))),
        ]),
    ],
    imports: [NgIf, NgFor, RouterLink, CurrencyPipe]
})
export class ShoppingCartComponent implements OnInit {
  constructor(private shoppingCartService: ShoppingCartServices) {}

  rowState = "ready";

  ngOnInit() {}

  items(): any[] {
    return this.shoppingCartService.items;
  }

  removeItem(itm: any) {
    this.shoppingCartService.removeItem(itm);
  }

  clear(){
    this.shoppingCartService.clear()
  }


  addItem(item: any) {
    this.shoppingCartService.addItem(item);
  }

  total(): number {
    return this.shoppingCartService.total();
  }
}
