package dev.ventura.meat_backend_with_spring.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.ventura.meat_backend_with_spring.dto.RestaurantDTO;
import dev.ventura.meat_backend_with_spring.dto.RestaurantDetailsDTO;
import dev.ventura.meat_backend_with_spring.model.Restaurant;
import dev.ventura.meat_backend_with_spring.service.RestaurantService;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("api/v1/restaurant")
public class RestaurantController {

  private final RestaurantService service;

  public RestaurantController(RestaurantService service) {
    this.service = service;
  }

  @GetMapping
  public ResponseEntity<List<RestaurantDTO>> getAll() {
    return ResponseEntity.ok(service.getRestaurants());
  }

  @PostMapping
  public ResponseEntity<Restaurant> create(@RequestBody Restaurant restaurant) {
    Restaurant saved = service.save(restaurant);
    return ResponseEntity.status(HttpStatus.CREATED).body(saved);
  }

  @GetMapping("/{id}")
  public ResponseEntity<RestaurantDetailsDTO> getRestaurantById(@PathVariable Long id) {
    return ResponseEntity.ok(service.getRestaurantById(id));
  }

}
