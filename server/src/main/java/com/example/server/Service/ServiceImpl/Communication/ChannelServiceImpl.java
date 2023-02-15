package com.example.server.Service.ServiceImpl.Communication;

import com.example.server.Models.Communication.Channel;
import com.example.server.Repository.Communication.ChannelRepository;
import com.example.server.Service.Interface.Communication.ChannelService;
import com.example.server.Utils.Exception.NotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collection;
@Service
public class ChannelServiceImpl implements ChannelService {

    private final ChannelRepository channelRepository;

    public ChannelServiceImpl(ChannelRepository channelRepository) {
        this.channelRepository = channelRepository;
    }

    @Override
    public Channel findById(Integer id) {
        if (channelRepository.existsById(id)) {
            return channelRepository.findById(id).get();
        } else {
            throw new NotFoundException(id);
        }
    }

    @Override
    public Collection<Channel> findAll() {
        return null;
    }

    @Override
    public Channel add(Channel entity) {
        return null;
    }

    @Override
    public Channel update(Channel entity) {
        return null;
    }

    @Override
    public void delete(Channel entity) {

    }

    @Override
    public void deleteById(Integer integer) {

    }


}
