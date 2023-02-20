package no.lagalt.server.Service;

import no.lagalt.server.Mappers.ChannelMapper.ChannelMapper;
import no.lagalt.server.Dtos.Channel.ChannelDto;
import no.lagalt.server.Entity.Channel;
import no.lagalt.server.Repository.ChannelRepository;
import no.lagalt.server.Repository.MessageBoardRepository;
import no.lagalt.server.Utils.Exception.ChannelNotFoundException;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class ChannelServiceImpl {

    private ChannelRepository channelRepository;
    private MessageBoardRepository messageBoardRepository;

    public ChannelServiceImpl(ChannelRepository channelRepository, MessageBoardRepository messageBoardRepository) {
        this.channelRepository = channelRepository;
        this.messageBoardRepository = messageBoardRepository;
    }

    public ChannelDto createChannel(ChannelDto channelDto){
       // MessageBoard messageBoard = messageBoardRepository.findById(channelDto.getMessageBoardId())
        //        .orElseThrow(() -> new MessageBoardNotFoundException(channelDto.getMessageBoardId()));
        Channel channel = new Channel();
        channel.setName(channelDto.getName());
     //   channel.setMessageBoards(messageBoard);
        channel.setCreationDate(LocalDate.now());
        Channel savedChannel = channelRepository.save(channel);
        return ChannelMapper.INSTANCE.channelToChannelDto(savedChannel);
    }
    public List<ChannelDto> getAllChannels() {
        List<Channel> channels = channelRepository.findAll();
        return ChannelMapper.INSTANCE.channelsToChannelDto(channels);
    }

    public ChannelDto getChannelById(int id) {
        Channel channel = channelRepository.findById(id)
                .orElseThrow(() -> new ChannelNotFoundException(id));
        return ChannelMapper.INSTANCE.channelToChannelDto(channel);
    }

    public ChannelDto updateChannel(int id, ChannelDto channelDto) {
        Channel channel = channelRepository.findById(id)
                .orElseThrow(() -> new ChannelNotFoundException(id));
        channel.setName(channelDto.getName());
        Channel savedChannel = channelRepository.save(channel);
        return ChannelMapper.INSTANCE.channelToChannelDto(savedChannel);
    }

    public void deleteChannel(int id) {
        Channel channel = channelRepository.findById(id)
                .orElseThrow(() -> new ChannelNotFoundException(id));
        channelRepository.delete(channel);
    }
}
