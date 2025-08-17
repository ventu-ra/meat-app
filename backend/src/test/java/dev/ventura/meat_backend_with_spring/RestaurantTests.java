package dev.ventura.meat_backend_with_spring;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import dev.ventura.meat_backend_with_spring.model.Restaurant;

@SpringBootTest
public class RestaurantTests {

  Restaurant restaurant;

  @Test
  void testRestaurantCreation() {
    restaurant = new Restaurant("Bread & Bakery",
        "Bakery",
        "25m",
        4.9,
        "assets/img/restaurants/breadbakery.png",
        "A Bread & Brakery tem 40 anos de mercado. Fazemos os melhores doces e pães. Compre e confira.",
        "Funciona de segunda à sexta, de 8h às 23h");

    assertNotNull(restaurant);
    assertEquals("Bread & Bakery", restaurant.getName());
    assertEquals("Bakery", restaurant.getCategory());
    assertEquals("25m", restaurant.getDeliveryEstimate());
    assertEquals(4.9, restaurant.getRating());
    assertEquals("assets/img/restaurants/breadbakery.png", restaurant.getImagePath());
    assertEquals("A Bread & Brakery tem 40 anos de mercado. Fazemos os melhores doces e pães. Compre e confira.",
        restaurant.getAbout());
    assertEquals("Funciona de segunda à sexta, de 8h às 23h", restaurant.getHours());

  }

}
