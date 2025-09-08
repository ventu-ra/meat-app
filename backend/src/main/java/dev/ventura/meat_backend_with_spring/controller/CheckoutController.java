package dev.ventura.meat_backend_with_spring.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.ventura.meat_backend_with_spring.dto.OrderDTO;
import dev.ventura.meat_backend_with_spring.entity.Order;
import dev.ventura.meat_backend_with_spring.service.CheckoutService;

@RestController
@RequestMapping("api/v1/checkout")
public class CheckoutController {

  private final CheckoutService checkoutService;

  public CheckoutController(CheckoutService checkoutService) {
    this.checkoutService = checkoutService;
  }

  @PostMapping
  public ResponseEntity<OrderDTO> createOrder(@RequestBody OrderDTO orderDTO) {
    Order savedOrder = checkoutService.saveOrder(orderDTO);
    return ResponseEntity.ok(OrderDTO.from(savedOrder));
  }
}
