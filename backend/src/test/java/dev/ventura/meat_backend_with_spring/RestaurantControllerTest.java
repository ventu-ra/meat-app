package dev.ventura.meat_backend_with_spring;

import dev.ventura.meat_backend_with_spring.controller.RestaurantController;
import dev.ventura.meat_backend_with_spring.dto.RestaurantDTO;
import dev.ventura.meat_backend_with_spring.dto.RestaurantDetailsDTO;
import dev.ventura.meat_backend_with_spring.exceptions.NotFoundResourceException;
import dev.ventura.meat_backend_with_spring.model.Restaurant;
import dev.ventura.meat_backend_with_spring.service.RestaurantService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentMatchers;

import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@SpringBootTest
public class RestaurantControllerTest {

  private RestaurantService service;
  private RestaurantController controller;

  @BeforeEach
  void setUp() {
    service = mock(RestaurantService.class);
    controller = new RestaurantController(service);
  }

  @SuppressWarnings("null")
  @Test
  void shouldReturnListOfRestaurants() {
    // Arrange
    RestaurantDTO restaurant1 = new RestaurantDTO(1L, "Burger House", "Hamburgers", 4.5, "30m", "img.png");
    RestaurantDTO restaurant2 = new RestaurantDTO(2L, "Pizza Place", "Pizza", 4.2, "40m", "img2.png");

    when(service.getRestaurants()).thenReturn(List.of(restaurant1, restaurant2));

    // Act
    ResponseEntity<List<RestaurantDTO>> response = controller.getAll();

    // Assert
    assertEquals(HttpStatus.OK, response.getStatusCode());
    assertNotNull(response.getBody());
    assertEquals(2, response.getBody().size());
    verify(service, times(1)).getRestaurants();
  }

  @SuppressWarnings("null")
  @Test
  void shouldReturnRestaurantById() {
    // Arrange
    RestaurantDetailsDTO detailsDTO = new RestaurantDetailsDTO(
        1L, "Burger House", "Hamburgers", 4.5, "Sobre o restaurante", "img.png", List.of(), List.of());

    when(service.getRestaurantById(1L)).thenReturn(detailsDTO);

    // Act
    ResponseEntity<RestaurantDetailsDTO> response = controller.getRestaurantById(1L);

    // Assert
    assertEquals(HttpStatus.OK, response.getStatusCode());
    assertEquals("Burger House", response.getBody().name());
    verify(service, times(1)).getRestaurantById(1L);
  }

  @Test
  void shouldCreateRestaurant() {
    // Arrange
    Restaurant inputRestaurant = new Restaurant(
        "Pizza House", "Pizza", "30m", 4.7, "img.png", "Melhor pizza", "Aberto das 18h às 23h");

    Restaurant savedRestaurant = new Restaurant(
        "Pizza House", "Pizza", "30m", 4.7, "img.png", "Melhor pizza", "Aberto das 18h às 23h");
    savedRestaurant.setId(10L);

    when(service.save(ArgumentMatchers.any(Restaurant.class))).thenReturn(savedRestaurant);

    // Act
    ResponseEntity<Restaurant> response = controller.create(inputRestaurant);

    // Assert
    assertEquals(HttpStatus.CREATED, response.getStatusCode());
    assertNotNull(response.getBody());
    assertEquals(10L, response.getBody().getId());
    verify(service, times(1)).save(any(Restaurant.class));
  }

  @Test
  void shouldReturnNotFoundIfRestaurantDoesNotExist() {
    when(service.getRestaurantById(99L))
        .thenThrow(new NotFoundResourceException("Restaurante não encontrado"));

    Exception exception = assertThrows(NotFoundResourceException.class, () -> {
      controller.getRestaurantById(99L);
    });

    assertEquals("Restaurante não encontrado", exception.getMessage());
  }

}
