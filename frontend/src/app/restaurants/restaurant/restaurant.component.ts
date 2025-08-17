import { Component, OnInit, input } from "@angular/core";
import { Restaurant } from "./restaurant.model";

import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";
import { RouterLink } from "@angular/router";
@Component({
  selector: "mt-restaurant",
  templateUrl: "./restaurant.component.html",
  animations: [
    trigger("restaurantAppeared", [
      state("ready", style({ opacity: 1 })),
      transition("void => ready", [
        style({ opacity: 0, transition: "translate(-30px, -10px)" }),
        animate("300ms 0s ease-in-out"),
      ]),
    ]),
  ],
  imports: [RouterLink],
})
export class RestaurantComponent implements OnInit {
  restaurantState = "ready";
  readonly restaurant = input<Restaurant>(undefined);

  constructor() {}

  ngOnInit() {}
}
