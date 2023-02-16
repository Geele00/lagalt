package com.example.server.Service;

import com.example.server.Models.LagaltUser.LagaltUser;
import com.example.server.Repository.LagaltUserRepository;
import com.example.server.Utils.Exception.NotFoundException;
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
        return null;
    }


    public LagaltUser add(LagaltUser entity) {
        return null;
    }


    public LagaltUser update(LagaltUser entity) {
        return null;
    }


    public void delete(LagaltUser entity) {

    }


    public void deleteById(Integer integer) {

    }
}
