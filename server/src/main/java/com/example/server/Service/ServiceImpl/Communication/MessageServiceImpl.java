package com.example.server.Service.ServiceImpl.Communication;

import com.example.server.Models.Communication.Message;
import com.example.server.Repository.Communication.MessageRepository;
import com.example.server.Service.Interface.Communication.MessageService;
import com.example.server.Utils.Exception.NotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collection;
@Service
public class MessageServiceImpl implements MessageService {

    private final MessageRepository messageRepository;

    public MessageServiceImpl(MessageRepository messageRepository) {
        this.messageRepository = messageRepository;
    }

    @Override
    public Message findById(Integer id) {
        if (messageRepository.existsById(id)) {
            return messageRepository.findById(id).get();
        } else {
            throw new NotFoundException(id);
        }
    }

    @Override
    public Collection<Message> findAll() {
        return null;
    }

    @Override
    public Message add(Message entity) {
        return null;
    }

    @Override
    public Message update(Message entity) {
        return null;
    }

    @Override
    public void delete(Message entity) {

    }

    @Override
    public void deleteById(Integer integer) {

    }
}
