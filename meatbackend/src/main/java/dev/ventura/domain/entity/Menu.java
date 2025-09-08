package dev.ventura.domain.entity;

import java.util.UUID;

import org.hibernate.validator.constraints.UniqueElements;

import jakarta.persistence.Column;
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
@Table(name = "tb_menus")
public class Menu {

  @Id
  @GeneratedValue(strategy = GenerationType.UUID)
  private UUID id;

  @Column(name = "image_path")
  private String imagePath;

  @UniqueElements
  @NotBlank
  @Size(min = 3, max = 100)
  private String name;

  @Column(length = 1000)
  private String description;

  private double price;

  @ManyToOne
  @JoinColumn(name = "restaurant_id")
  private Restaurant restaurant;

  public Menu() {
  }

  public Menu(String imagePath, String name, String description, double price, Restaurant restaurant) {
    this.imagePath = imagePath;
    this.name = name;
    this.description = description;
    this.price = price;
    this.restaurant = restaurant;
  }

  public Menu(UUID id, String imagePath, String name, String description, double price, Restaurant restaurant) {
    this.id = id;
    this.imagePath = imagePath;
    this.name = name;
    this.description = description;
    this.price = price;
    this.restaurant = restaurant;
  }

  public UUID getId() {
    return id;
  }

  public String getImagePath() {
    return imagePath;
  }

  public void setImagePath(String imagePath) {
    this.imagePath = imagePath;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public double getPrice() {
    return price;
  }

  public void setPrice(double price) {
    this.price = price;
  }

  public Restaurant getRestaurant() {
    return restaurant;
  }

  public void setRestaurant(Restaurant restaurant) {
    this.restaurant = restaurant;
  }

}
