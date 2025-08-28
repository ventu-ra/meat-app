package dev.ventura.meat_backend_with_spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import dev.ventura.meat_backend_with_spring.model.Order;

public interface CheckoutRepository extends JpaRepository<Order, Long> {

}
