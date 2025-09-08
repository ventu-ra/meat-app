package dev.ventura.meat_backend_with_spring.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "tb_order_items")
public class OrderItem {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private Integer quantity;

  private Double price; // preço congelado na hora da compra

  @ManyToOne
  @JoinColumn(name = "menu_id", nullable = false)
  private Menu menu;

  @ManyToOne
  @JoinColumn(name = "order_id", nullable = false)
  private Order order;

  public OrderItem() {
  }

  public OrderItem(Integer quantity, Double price, Menu menu, Order order) {
    this.quantity = quantity;
    this.price = price;
    this.menu = menu;
    this.order = order;
  }

  public Long getId() {
    return id;
  }

  public Integer getQuantity() {
    return quantity;
  }

  public void setQuantity(Integer quantity) {
    this.quantity = quantity;
  }

  public Double getPrice() {
    return price;
  }

  public void setPrice(Double price) {
    this.price = price;
  }

  public Menu getMenu() {
    return menu;
  }

  public void setMenu(Menu menu) {
    this.menu = menu;
  }

  public Order getOrder() {
    return order;
  }

  public void setOrder(Order order) {
    this.order = order;
  }

  public Long getMenuId() {
    return menu != null ? menu.getId() : null;
  }

}
