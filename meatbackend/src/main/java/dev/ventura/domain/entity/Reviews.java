package dev.ventura.domain.entity;

import java.time.LocalDateTime;
import java.util.UUID;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "tb_reviews")
public class Reviews {

  @Id
  @GeneratedValue(strategy = GenerationType.UUID)
  private UUID id;

  @Size(min = 3, max = 100)
  @NotBlank
  private String name;

  private LocalDateTime date;
  private double rating;
  private String comments;

  @ManyToOne
  @JoinColumn(name = "restaurant_id")
  private Restaurant restaurant;

  public Reviews() {
  }

  public Reviews(UUID id, String name, LocalDateTime date, double rating, String comments, Restaurant restaurant) {
    this.id = id;
    this.name = name;
    this.date = date;
    this.rating = rating;
    this.comments = comments;
    this.restaurant = restaurant;
  }

  public Reviews(String name, LocalDateTime date, double rating, String comments, Restaurant restaurant) {
    this.name = name;
    this.date = date;
    this.rating = rating;
    this.comments = comments;
    this.restaurant = restaurant;
  }

  public UUID getId() {
    return id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public LocalDateTime getDate() {
    return date;
  }

  public void setDate(LocalDateTime date) {
    this.date = date;
  }

  public double getRating() {
    return rating;
  }

  public void setRating(double rating) {
    this.rating = rating;
  }

  public String getComments() {
    return comments;
  }

  public void setComments(String comments) {
    this.comments = comments;
  }

  public Restaurant getRestaurant() {
    return restaurant;
  }

  public void setRestaurant(Restaurant restaurant) {
    this.restaurant = restaurant;
  }

}
