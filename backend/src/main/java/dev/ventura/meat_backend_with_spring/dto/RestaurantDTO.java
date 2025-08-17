package dev.ventura.meat_backend_with_spring.dto;

import dev.ventura.meat_backend_with_spring.model.Restaurant;

public record RestaurantDTO(Long id, String name, String category, double rating, String deliveryEstimate,
        String imagePath) {

    public static RestaurantDTO from(Restaurant restaurant) {
        return new RestaurantDTO(
                restaurant.getId(),
                restaurant.getName(),
                restaurant.getCategory(),
                restaurant.getRating(),
                restaurant.getDeliveryEstimate(),
                restaurant.getImagePath());
    }
}
