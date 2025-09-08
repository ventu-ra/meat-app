package dev.ventura.domain.repository;

import java.util.UUID;

import dev.ventura.domain.entity.Menu;
import io.quarkus.hibernate.orm.panache.PanacheRepositoryBase;

public class MenuRepository implements PanacheRepositoryBase<Menu, UUID> {

}
