package dev.ventura.meat_backend_with_spring.dto;

import dev.ventura.meat_backend_with_spring.entity.OrderItem;

public record OrderItemDTO(Long menuId, int quantity) {

  public static OrderItemDTO from(OrderItem item) {
    return new OrderItemDTO(
        item.getMenu().getId(),
        item.getQuantity());
  }
}
