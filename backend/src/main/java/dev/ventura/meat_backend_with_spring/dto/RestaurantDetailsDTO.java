package dev.ventura.meat_backend_with_spring.dto;

import java.util.List;
import java.util.stream.Collectors;

import dev.ventura.meat_backend_with_spring.model.Restaurant;

public record RestaurantDetailsDTO(
    Long id,
    String name,
    String category,
    double rating,
    String about,
    String imagePath,
    List<MenuDTO> menuItens,
    List<ReviewsDTO> reviews) {

  public static RestaurantDetailsDTO from(Restaurant restaurant) {
    return new RestaurantDetailsDTO(
        restaurant.getId(),
        restaurant.getName(),
        restaurant.getCategory(),
        restaurant.getRating(),
        restaurant.getAbout(),
        restaurant.getImagePath(),
        // Convertendo para DTO
        restaurant.getMenuItems().stream()
            .map(MenuDTO::from)
            .collect(Collectors.toList()),

        restaurant.getReviews().stream()
            .map(ReviewsDTO::from)
            .collect(Collectors.toList()));
  }
}
