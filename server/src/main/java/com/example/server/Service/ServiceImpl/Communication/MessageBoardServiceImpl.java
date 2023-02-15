package com.example.server.Service.ServiceImpl.Communication;

import com.example.server.Models.Communication.MessageBoard;
import com.example.server.Repository.Communication.MessageBoardRepository;
import com.example.server.Service.Interface.Communication.MessageBoardService;
import com.example.server.Utils.Exception.NotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class MessageBoardServiceImpl implements MessageBoardService {

    private final MessageBoardRepository messageBoardRepository;

    public MessageBoardServiceImpl(MessageBoardRepository messageBoardRepository) {
        this.messageBoardRepository = messageBoardRepository;
    }

    @Override
    public MessageBoard findById(Integer id) {
        if (messageBoardRepository.existsById(id)) {
            return messageBoardRepository.findById(id).get();
        } else {
            throw new NotFoundException(id);
        }
    }

    @Override
    public Collection<MessageBoard> findAll() {
        return null;
    }

    @Override
    public MessageBoard add(MessageBoard entity) {
        return null;
    }

    @Override
    public MessageBoard update(MessageBoard entity) {
        return null;
    }

    @Override
    public void delete(MessageBoard entity) {

    }

    @Override
    public void deleteById(Integer integer) {

    }
}
