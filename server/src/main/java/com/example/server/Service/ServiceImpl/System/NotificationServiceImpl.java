package com.example.server.Service.ServiceImpl.System;

import com.example.server.Models.System.Notification;
import com.example.server.Repository.System.NotificationRepository;
import com.example.server.Service.Interface.System.NotificationService;
import com.example.server.Utils.Exception.NotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collection;
@Service
public class NotificationServiceImpl implements NotificationService {

    private final NotificationRepository notificationRepository;

    public NotificationServiceImpl(NotificationRepository notificationRepository) {
        this.notificationRepository = notificationRepository;
    }

    @Override
    public Notification findById(Integer id) {
        if (notificationRepository.existsById(id)) {
            return notificationRepository.findById(id).get();
        } else {
            throw new NotFoundException(id);
        }
    }

    @Override
    public Collection<Notification> findAll() {
        return null;
    }

    @Override
    public Notification add(Notification entity) {
        return null;
    }

    @Override
    public Notification update(Notification entity) {
        return null;
    }

    @Override
    public void delete(Notification entity) {

    }

    @Override
    public void deleteById(Integer integer) {

    }
}
