package com.example.server.Service.ServiceImpl.System;

import com.example.server.Models.System.History;
import com.example.server.Repository.System.HistoryRepository;
import com.example.server.Service.Interface.System.HistoryService;
import com.example.server.Utils.Exception.NotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collection;
@Service
public class HistoryServiceImpl implements HistoryService {

    private final HistoryRepository historyRepository;

    public HistoryServiceImpl(HistoryRepository historyRepository) {
        this.historyRepository = historyRepository;
    }

    @Override
    public History findById(Integer id) {
        if (historyRepository.existsById(id)) {
            return historyRepository.findById(id).get();
        } else {
            throw new NotFoundException(id);
        }
    }

    @Override
    public Collection<History> findAll() {
        return null;
    }

    @Override
    public History add(History entity) {
        return null;
    }

    @Override
    public History update(History entity) {
        return null;
    }

    @Override
    public void delete(History entity) {

    }

    @Override
    public void deleteById(Integer integer) {

    }
}
