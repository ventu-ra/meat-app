package dev.ventura.meat_backend_with_spring.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import dev.ventura.meat_backend_with_spring.repository.RestaurantRepository;

@Configuration
public class RestaurantConfig {

  @Bean
  CommandLineRunner commandLineRunner(RestaurantRepository repository) {
    return arg -> {
      // Restaurant restaurant = new Restaurant(
      // "", "", "", 1, "", "", "");

      // repository.save(restaurant);
    };
  }
}
