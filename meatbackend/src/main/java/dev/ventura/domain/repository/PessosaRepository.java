package dev.ventura.domain.repository;

import java.util.UUID;

import dev.ventura.domain.entity.Pessoa;
import io.quarkus.hibernate.orm.panache.PanacheRepositoryBase;
import jakarta.inject.Singleton;

@Singleton
public class PessosaRepository implements PanacheRepositoryBase<Pessoa, UUID> {

}
