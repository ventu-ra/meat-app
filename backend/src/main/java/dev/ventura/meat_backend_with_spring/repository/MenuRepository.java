package dev.ventura.meat_backend_with_spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import dev.ventura.meat_backend_with_spring.entity.Menu;

public interface MenuRepository extends JpaRepository<Menu, Long> {

}
