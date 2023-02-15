package com.example.server.Service.ServiceImpl.System;

import com.example.server.Models.System.Industry;
import com.example.server.Repository.System.IndustryRepository;
import com.example.server.Service.Interface.System.IndustryService;
import com.example.server.Utils.Exception.NotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collection;
@Service
public class IndustryServiceImpl implements IndustryService {

    private final IndustryRepository industryRepository;

    public IndustryServiceImpl(IndustryRepository industryRepository) {
        this.industryRepository = industryRepository;
    }

    @Override
    public Industry findById(Integer id) {
        if (industryRepository.existsById(id)) {
            return industryRepository.findById(id).get();
        } else {
            throw new NotFoundException(id);
        }
    }

    @Override
    public Collection<Industry> findAll() {
        return null;
    }

    @Override
    public Industry add(Industry entity) {
        return null;
    }

    @Override
    public Industry update(Industry entity) {
        return null;
    }

    @Override
    public void delete(Industry entity) {

    }

    @Override
    public void deleteById(Integer integer) {

    }
}
