package dev.ventura.meat_backend_with_spring;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.test.web.servlet.MockMvc;

import com.fasterxml.jackson.databind.ObjectMapper;

import dev.ventura.meat_backend_with_spring.controller.RestaurantController;
import dev.ventura.meat_backend_with_spring.dto.RestaurantDTO;
import dev.ventura.meat_backend_with_spring.dto.RestaurantDetailsDTO;
import dev.ventura.meat_backend_with_spring.service.RestaurantService;

@WebMvcTest(RestaurantController.class)
@Import(RestaurantControllerIntegrationTest.TestConfig.class)
public class RestaurantControllerIntegrationTest {

    @Autowired
    private MockMvc mockMvc;

    @Mock
    private RestaurantService service;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Configuration
    static class TestConfig {
        private final RestaurantService service;

        public TestConfig(RestaurantControllerIntegrationTest testInstance) {
            this.service = testInstance.service; // Passa o mock da classe de teste
        }

        @Bean
        public RestaurantService restaurantService() {
            return service;
        }

        @Bean
        public RestaurantController restaurantController(RestaurantService restaurantService) {
            return new RestaurantController(restaurantService);
        }
    }

    @Test
    void shouldReturnListOfRestaurants() throws Exception {
        // Mock de retorno do serviço
        List<RestaurantDTO> restaurants = List.of(
                new RestaurantDTO(1L, "Burger House", "Hamburgers", 4.5, "30m", "img1.png"),
                new RestaurantDTO(2L, "Pizza Place", "Pizza", 4.2, "40m", "img2.png"));

        when(service.getRestaurants()).thenReturn(restaurants);

        // Simulação da requisição GET
        mockMvc.perform(get("/api/v1/restaurant"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.size()").value(2))
                .andExpect(jsonPath("$[0].name").value("Burger House"))
                .andExpect(jsonPath("$[1].name").value("Pizza Place"));
    }

    @Test
    void shouldReturnRestaurantById() throws Exception {
        // Mock de retorno do serviço
        RestaurantDetailsDTO restaurant = new RestaurantDetailsDTO(
                1L, "Burger House", "Hamburgers", 4.5, "Sobre o restaurante", "img.png", List.of(), List.of());

        when(service.getRestaurantById(1L)).thenReturn(restaurant);

        // Simulação da requisição GET com ID
        mockMvc.perform(get("/api/v1/restaurant/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name").value("Burger House"))
                .andExpect(jsonPath("$.rating").value(4.5));
    }

    @Test
    void testSerialization() throws Exception {
        RestaurantDTO restaurant = new RestaurantDTO(1L, "Burger House", "Hamburgers", 4.5, "30m", "img1.png");
        String json = new ObjectMapper().writeValueAsString(restaurant);
        System.out.println(json);
    }
}
