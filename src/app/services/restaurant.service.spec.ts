import { TestBed } from '@angular/core/testing';

import { RestaurantService } from './restaurant.service';

describe('RestaurantService', () => {
  let service: RestaurantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of restaurants', async () => {
    const restaurants = await service.getAllRestaurant();
    expect(restaurants.length).toBeGreaterThan(0);
  });
});
