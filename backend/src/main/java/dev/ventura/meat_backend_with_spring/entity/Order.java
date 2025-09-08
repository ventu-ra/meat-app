package dev.ventura.meat_backend_with_spring.entity;

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
@Table(name = "tb_orders")
public class Order {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String name;

  private String email;

  @Column(name = "address")
  private String address;

  private Integer number;

  @Column(name = "optional_address")
  private String optionalAddress;

  @Column(name = "payment_option")
  private String paymentOption;

  @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, orphanRemoval = true)
  private List<OrderItem> orderItems;

  public Order() {
  }

  public Order(String name, String email, String address, Integer number, String optionalAddress, String paymentOption,
      List<OrderItem> orderItems) {
    this.name = name;
    this.email = email;
    this.address = address;
    this.number = number;
    this.optionalAddress = optionalAddress;
    this.paymentOption = paymentOption;
    this.orderItems = orderItems;
  }

  public Long getId() {
    return id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getAddress() {
    return address;
  }

  public void setAddress(String address) {
    this.address = address;
  }

  public Integer getNumber() {
    return number;
  }

  public void setNumber(Integer number) {
    this.number = number;
  }

  public String getOptionalAddress() {
    return optionalAddress;
  }

  public void setOptionalAddress(String optionalAddress) {
    this.optionalAddress = optionalAddress;
  }

  public String getPaymentOption() {
    return paymentOption;
  }

  public void setPaymentOption(String paymentOption) {
    this.paymentOption = paymentOption;
  }

  public List<OrderItem> getOrderItems() {
    return orderItems;
  }

  public void setOrderItems(List<OrderItem> orderItems) {
    this.orderItems = orderItems;
  }

}
