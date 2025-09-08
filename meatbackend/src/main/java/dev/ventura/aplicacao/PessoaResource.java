package dev.ventura.aplicacao;

import java.util.List;
import java.util.UUID;

import dev.ventura.domain.entity.Pessoa;
import dev.ventura.domain.repository.PessosaRepository;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.DELETE;
import jakarta.ws.rs.DefaultValue;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.PUT;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.QueryParam;

@Path("/pessosa")
public class PessoaResource {

  @Inject
  private PessosaRepository repositoryPessoa;

  @POST
  @Transactional
  public Pessoa criarPessoa(Pessoa pessoa) {
    repositoryPessoa.persist(pessoa);
    return pessoa;
  }

  @GET
  @Path("/{id}")
  public Pessoa bunscarPessoaPorId(@PathParam("id") UUID id) {
    return repositoryPessoa.findById(id);
  }

  @DELETE
  @Path("/{id}")
  @Transactional
  public void deletarPessoa(@PathParam("id") UUID id) {
    repositoryPessoa.deleteById(id);
  }

  @PUT
  @Path("/{id}")
  @Transactional
  public Pessoa atualizarPessoa(@PathParam("id") UUID id, Pessoa pessoa) {
    Pessoa pessoaExistente = repositoryPessoa.findById(id);
    if (pessoaExistente != null) {
      pessoaExistente.setNome(pessoa.getNome());
      pessoaExistente.setEmail(pessoa.getEmail());
      pessoaExistente.setDataNascimento(pessoa.getDataNascimento());
      repositoryPessoa.persist(pessoaExistente);
      return pessoaExistente;
    }
    return null;
  }

  @GET
  public List<Pessoa> listarPessoas(
      @QueryParam("page") @DefaultValue("0") int page,
      @QueryParam("Size") @DefaultValue("10") int size) {
    return repositoryPessoa.findAll().page(page, size).list();
  }
}
