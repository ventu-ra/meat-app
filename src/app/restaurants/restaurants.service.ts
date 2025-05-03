import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

import { MEAT_API } from "app/app.api";
import { Observable } from "rxjs";

import { Restaurant } from "./restaurant/restaurant.model";
//import { ErrorHandler } from "app/app.error-handler";
import { MenuItem } from "app/restaurant-detail/menu-item/menu-item.model";

@Injectable()
export class RestaurantsService {
  constructor(private http: HttpClient) {}

  restaurants(search?: string): Observable<Restaurant[]> {
    let params: HttpParams = undefined;

    if (search) {
      params = new HttpParams().append("q", search);
    }
    return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`, {
      params: params,
    });
  }

  restaurantById(id: string): Observable<Restaurant> {
    return this.http.get<Restaurant>(`${MEAT_API}/restaurants/${id}`);
  }

  reviewsOfRestaurant(id: string): Observable<any> {
    return this.http.get(`${MEAT_API}/reviews?restaurantId=${id}`);
  }

  menuOfRestaurant(id: string): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(`${MEAT_API}/menu?restaurantId=${id}`);
  }
}
