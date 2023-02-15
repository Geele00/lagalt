package com.example.server.Service.ServiceImpl.System;

import com.example.server.Models.System.City;
import com.example.server.Repository.System.CityRepository;
import com.example.server.Service.Interface.System.CityService;
import com.example.server.Utils.Exception.NotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collection;
@Service
public class CityServiceImpl implements CityService {

    private final CityRepository cityRepository;

    public CityServiceImpl(CityRepository cityRepository) {
        this.cityRepository = cityRepository;
    }

    @Override
    public City findById(Integer id) {
        if (cityRepository.existsById(id)) {
            return cityRepository.findById(id).get();
        } else {
            throw new NotFoundException(id);
        }
    }

    @Override
    public Collection<City> findAll() {
        return null;
    }

    @Override
    public City add(City entity) {
        return null;
    }

    @Override
    public City update(City entity) {
        return null;
    }

    @Override
    public void delete(City entity) {

    }

    @Override
    public void deleteById(Integer integer) {

    }
}
