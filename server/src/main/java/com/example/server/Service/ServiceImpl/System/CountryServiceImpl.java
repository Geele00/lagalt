package com.example.server.Service.ServiceImpl.System;

import com.example.server.Models.System.Country;
import com.example.server.Repository.System.CountryRepository;
import com.example.server.Service.Interface.System.CountryService;
import com.example.server.Utils.Exception.NotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collection;
@Service
public class CountryServiceImpl implements CountryService {

    private final CountryRepository countryRepository;

    public CountryServiceImpl(CountryRepository countryRepository) {
        this.countryRepository = countryRepository;
    }

    @Override
    public Country findById(Integer id) {
        if (countryRepository.existsById(id)) {
            return countryRepository.findById(id).get();
        } else {
            throw new NotFoundException(id);
        }
    }

    @Override
    public Collection<Country> findAll() {
        return null;
    }

    @Override
    public Country add(Country entity) {
        return null;
    }

    @Override
    public Country update(Country entity) {
        return null;
    }

    @Override
    public void delete(Country entity) {

    }

    @Override
    public void deleteById(Integer integer) {

    }
}
