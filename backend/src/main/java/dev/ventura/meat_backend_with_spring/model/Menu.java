package dev.ventura.meat_backend_with_spring.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "tb_menus")
public class Menu {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "image_path")
  private String imagePath;

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

  public Menu(Long id, String imagePath, String name, String description, double price, Restaurant restaurant) {
    this.id = id;
    this.imagePath = imagePath;
    this.name = name;
    this.description = description;
    this.price = price;
    this.restaurant = restaurant;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
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
