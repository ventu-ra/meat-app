import { Component, inject, Input, OnInit } from "@angular/core";
import { Restaurant } from "./restaurant/restaurant.model";
import { RestaurantsService } from "./restaurants.service";

import { Observable, from } from "rxjs";
import {
  switchMap,
  tap,
  debounceTime,
  distinctUntilChanged,
  catchError,
} from "rxjs/operators";

import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from "@angular/forms";
import { NgIf, NgFor } from "@angular/common";
import { RestaurantComponent } from "./restaurant/restaurant.component";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "mt-restaurants",
  templateUrl: "./restaurants.component.html",
  animations: [
    trigger("toggleSearch", [
      state(
        "hidden",
        style({
          opacity: 0,
          "max-height": "0px",
        })
      ),
      state(
        "visible",
        style({ opacity: 1, "max-height": "70px", "margin-top": "20px" })
      ),
      transition("* => *", animate("250ms 0s ease-in-out")),
    ]),
  ],
  imports: [NgIf, FormsModule, ReactiveFormsModule, NgFor, RestaurantComponent],
})
export class RestaurantsComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);
  restaurantService = inject(RestaurantsService);
  searchBarState = "hidden";

  searchForm: FormGroup;
  searchControl: FormControl;

  restaurants: Restaurant[];

  constructor(private fb: FormBuilder) {
    this.restaurantService
      .restaurants()
      .subscribe((restaurants) => (this.restaurants = restaurants));
  }

  ngOnInit() {
    this.searchControl = this.fb.control("");

    this.searchForm = this.fb.group({
      searchControl: this.searchControl,
    });

    this.searchControl.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((searchTerm) =>
          this.restaurantService
            .restaurants(searchTerm)
            .pipe(catchError((error) => from([])))
        )
      )
      .subscribe((restaurants) => (this.restaurants = restaurants));
  }

  toggleSearch() {
    this.searchBarState =
      this.searchBarState === "hidden" ? "visible" : "hidden";
  }
}
