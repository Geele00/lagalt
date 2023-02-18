package no.lagalt.server.Service;

import no.lagalt.server.Models.LagaltUser.LagaltUser;
import no.lagalt.server.Repository.LagaltUserRepository;
import no.lagalt.server.Utils.Exception.NotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collection;

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

    public LagaltUser add(LagaltUser lagaltUser) {
        lagaltUserRepository.save(lagaltUser);
        return lagaltUser;
    }

    public LagaltUser update(LagaltUser lagaltUser) {
        if (!lagaltUserRepository.existsById(lagaltUser.getId())) {
            new NotFoundException();
            return null;
        }
        lagaltUserRepository.save(lagaltUser);
        return lagaltUser;
    }

    public void delete(LagaltUser lagaltUser) {
        deleteById(lagaltUser.getId());
    }

    public void deleteById(Integer id) {
        if (lagaltUserRepository.existsById(id)) {
            LagaltUser user = lagaltUserRepository.findById(id).get();
            lagaltUserRepository.save(user);
            lagaltUserRepository.deleteById(id);
        } else {
            throw new NotFoundException(id);
        }
    }
}
