package dev.ventura.domain.repository;

import java.util.UUID;

import dev.ventura.domain.entity.Restaurant;
import io.quarkus.hibernate.orm.panache.PanacheRepositoryBase;

public class RestaurantRepository implements PanacheRepositoryBase<Restaurant, UUID> {

}
