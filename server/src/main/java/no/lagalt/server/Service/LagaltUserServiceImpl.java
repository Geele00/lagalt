package no.lagalt.server.Service;

import java.util.Collection;
import no.lagalt.server.Models.LagaltUser.LagaltUser;
import no.lagalt.server.Repository.LagaltUserRepository;
import no.lagalt.server.Utils.Exception.NotFoundException;
import org.springframework.stereotype.Service;

@Service
public class LagaltUserServiceImpl {

  private final LagaltUserRepository lagaltUserRepository;

  public LagaltUserServiceImpl(LagaltUserRepository lagaltUserRepository) {
    this.lagaltUserRepository = lagaltUserRepository;
  }

  public LagaltUser findById(Integer id) {
    if (lagaltUserRepository.existsById(id)) {
      return lagaltUserRepository.findById(id).get();
    } else {
      throw new NotFoundException(id);
    }
  }

  public Collection<LagaltUser> findAll() {
    return lagaltUserRepository.findAll();
  }

  public LagaltUser add(LagaltUser entity) {
    return null;
  }

  public LagaltUser update(LagaltUser entity) {
    return null;
  }

  public void delete(LagaltUser entity) {}

  public void deleteById(Integer integer) {}
}
