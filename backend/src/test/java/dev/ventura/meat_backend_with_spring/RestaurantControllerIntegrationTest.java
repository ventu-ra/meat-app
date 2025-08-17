package dev.ventura.meat_backend_with_spring;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import com.fasterxml.jackson.databind.ObjectMapper;

import dev.ventura.meat_backend_with_spring.controller.RestaurantController;
import dev.ventura.meat_backend_with_spring.dto.RestaurantDTO;
import dev.ventura.meat_backend_with_spring.dto.RestaurantDetailsDTO;
import dev.ventura.meat_backend_with_spring.model.Restaurant;
import dev.ventura.meat_backend_with_spring.service.RestaurantService;

@SpringBootTest
@WebMvcTest(RestaurantController.class)
public class RestaurantControllerIntegrationTest {
  @Autowired
  private MockMvc mockMvc;

  @MockBean
  private RestaurantService service;

  @Autowired
  private ObjectMapper objectMapper;

  @Test
  void shouldReturnListOfRestaurants() throws Exception {
    List<RestaurantDTO> restaurants = List.of(
        new RestaurantDTO(1L, "Burger House", "Hamburgers", 4.5, "30m", "img1.png"),
        new RestaurantDTO(2L, "Pizza Place", "Pizza", 4.2, "40m", "img2.png"));

    when(service.getRestaurants()).thenReturn(restaurants);

  }

  @Test
  void shouldReturnRestaurantById() throws Exception {
    RestaurantDetailsDTO restaurant = new RestaurantDetailsDTO(
        1L, "Burger House", "Hamburgers", 4.5, "Sobre o restaurante", "img.png", List.of(), List.of());

    when(service.getRestaurantById(1L)).thenReturn(restaurant);

  }

  @Test
  void shouldCreateRestaurant() throws Exception {
    Restaurant input = new Restaurant(
        "Pizza House", "Pizza", "30m", 4.7, "img.png", "Melhor pizza", "Aberto das 18h às 23h");
    Restaurant saved = new Restaurant(
        "Pizza House", "Pizza", "30m", 4.7, "img.png", "Melhor pizza", "Aberto das 18h às 23h");
    saved.setId(10L);

    when(service.save(any(Restaurant.class))).thenReturn(saved);

  }
}
