package dev.ventura.meat_backend_with_spring.dto;

import java.util.List;
import java.util.stream.Collectors;

import dev.ventura.meat_backend_with_spring.entity.Order;

public record OrderDTO(
    Long id,
    String name,
    String email,
    String address,
    String number,
    String optionalAddress,
    String paymentOption,
    List<OrderItemDTO> orderItems) {
  public static OrderDTO from(Order order) {
    return new OrderDTO(
        order.getId(),
        order.getName(),
        order.getEmail(),
        order.getAddress(),
        String.valueOf(order.getNumber()),
        order.getOptionalAddress(),
        order.getPaymentOption(),
        order.getOrderItems().stream()
            .map(OrderItemDTO::from)
            .collect(Collectors.toList()));
  }
}
