package dev.ventura.meat_backend_with_spring.model;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "tb_restaurants")
public class Restaurant {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String name;
  private String category;

  @Column(name = "delivery_estimate")
  private String deliveryEstimate;

  private double rating;

  @Column(name = "image_path")
  private String imagePath;

  private String about;
  private String hours;

  @OneToMany(mappedBy = "restaurant", cascade = CascadeType.ALL, orphanRemoval = true)
  private List<Menu> menuItems;

  @OneToMany(mappedBy = "restaurant", cascade = CascadeType.ALL, orphanRemoval = true)
  private List<Reviews> reviews;

  public Restaurant() {
  }

  public Restaurant(Long id, String name, String category, String deliveryEstimate, double rating, String imagePath,
      String about, String hours) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.deliveryEstimate = deliveryEstimate;
    this.rating = rating;
    this.imagePath = imagePath;
    this.about = about;
    this.hours = hours;
  }

  public Restaurant(String name, String category, String deliveryEstimate, double rating, String imagePath,
      String about, String hours) {
    this.name = name;
    this.category = category;
    this.deliveryEstimate = deliveryEstimate;
    this.rating = rating;
    this.imagePath = imagePath;
    this.about = about;
    this.hours = hours;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getCategory() {
    return category;
  }

  public void setCategory(String category) {
    this.category = category;
  }

  public String getDeliveryEstimate() {
    return deliveryEstimate;
  }

  public void setDeliveryEstimate(String deliveryEstimate) {
    this.deliveryEstimate = deliveryEstimate;
  }

  public double getRating() {
    return rating;
  }

  public void setRating(double rating) {
    this.rating = rating;
  }

  public String getImagePath() {
    return imagePath;
  }

  public void setImagePath(String imagePath) {
    this.imagePath = imagePath;
  }

  public String getAbout() {
    return about;
  }

  public void setAbout(String about) {
    this.about = about;
  }

  public String getHours() {
    return hours;
  }

  public void setHours(String hours) {
    this.hours = hours;
  }

  public List<Menu> getMenuItems() {
    return menuItems;
  }

  public void setMenuItems(List<Menu> menuItems) {
    this.menuItems = menuItems;
  }

  public List<Reviews> getReviews() {
    return reviews;
  }

  public void setReviews(List<Reviews> reviews) {
    this.reviews = reviews;
  }

}
