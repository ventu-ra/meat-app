package dev.ventura.meat_backend_with_spring.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import dev.ventura.meat_backend_with_spring.dto.OrderDTO;
import dev.ventura.meat_backend_with_spring.entity.Menu;
import dev.ventura.meat_backend_with_spring.entity.Order;
import dev.ventura.meat_backend_with_spring.entity.OrderItem;
import dev.ventura.meat_backend_with_spring.repository.CheckoutRepository;
import dev.ventura.meat_backend_with_spring.repository.MenuRepository;

@Service
public class CheckoutService {

  private final CheckoutRepository checkoutRepository;
  private final MenuRepository menuRepository;

  public CheckoutService(CheckoutRepository checkoutRepository, MenuRepository menuRepository) {
    this.checkoutRepository = checkoutRepository;
    this.menuRepository = menuRepository;
  }

  @Transactional
  public Order saveOrder(OrderDTO orderDTO) {
    Order order = new Order(
        orderDTO.name(),
        orderDTO.email(),
        orderDTO.address(),
        Integer.valueOf(orderDTO.number()), // converte String para Integer
        orderDTO.optionalAddress(),
        orderDTO.paymentOption(),
        null // a lista de itens será setada depois
    );

    List<OrderItem> items = orderDTO.orderItems().stream().map(dto -> {
      Menu menu = menuRepository.findById(dto.menuId())
          .orElseThrow(() -> new RuntimeException("Menu ID " + dto.menuId() + " not found: "));
      return new OrderItem(dto.quantity(), menu.getPrice(), menu, order);
    }).toList();

    order.setOrderItems(items);
    return checkoutRepository.save(order);
  }
}
