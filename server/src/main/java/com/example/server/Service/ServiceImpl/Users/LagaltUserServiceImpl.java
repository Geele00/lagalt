package com.example.server.Service.ServiceImpl.Users;

import com.example.server.Models.Users.LagaltUser;
import com.example.server.Repository.Users.LagaltUserRepository;
import com.example.server.Service.Interface.Users.LagaltUserService;
import com.example.server.Utils.Exception.NotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collection;
@Service
public class LagaltUserServiceImpl implements LagaltUserService {

    private final LagaltUserRepository lagaltUserRepository;

    public LagaltUserServiceImpl(LagaltUserRepository lagaltUserRepository) {
        this.lagaltUserRepository = lagaltUserRepository;
    }

    @Override
    public LagaltUser findById(Integer id) {
        if (lagaltUserRepository.existsById(id)) {
            return lagaltUserRepository.findById(id).get();
        } else {
            throw new NotFoundException(id);
        }
    }

    @Override
    public Collection<LagaltUser> findAll() {
        return null;
    }

    @Override
    public LagaltUser add(LagaltUser entity) {
        return null;
    }

    @Override
    public LagaltUser update(LagaltUser entity) {
        return null;
    }

    @Override
    public void delete(LagaltUser entity) {

    }

    @Override
    public void deleteById(Integer integer) {

    }
}
