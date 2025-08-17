package dev.ventura.meat_backend_with_spring.dto;

import java.time.LocalDateTime;

import dev.ventura.meat_backend_with_spring.model.Reviews;

public record ReviewsDTO(
    String name,
    LocalDateTime date,
    double rating,
    String comments) {

  public static ReviewsDTO from(Reviews reviews) {
    return new ReviewsDTO(
        reviews.getName(),
        reviews.getDate(),
        reviews.getRating(),
        reviews.getComments());
  }
}
