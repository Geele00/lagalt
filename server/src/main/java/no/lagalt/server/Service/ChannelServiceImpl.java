package no.lagalt.server.Service;
//
// import no.lagalt.server.Dtos.Message.MessageDto;
// import no.lagalt.server.Entity.Message;
// import no.lagalt.server.Mappers.ChannelMapper.ChannelMapper;
// import no.lagalt.server.Dtos.Channel.ChannelDto;
// import no.lagalt.server.Entity.Channel;
// import no.lagalt.server.Mappers.Message.MessageMapper;
// import no.lagalt.server.Repository.ChannelRepository;
// import no.lagalt.server.Repository.MessageBoardRepository;
// import no.lagalt.server.Repository.MessageRepository;
// import no.lagalt.server.Utils.Exception.ChannelNotFoundException;
import org.springframework.stereotype.Service;
//
// import java.time.LocalDate;
// import java.time.LocalDateTime;
// import java.util.Collections;
// import java.util.List;

@Service
public class ChannelServiceImpl {

  // private final ChannelRepository channelRepository;
  // private final MessageBoardRepository messageBoardRepository;
  // private final MessageRepository messageRepository;
  //
  // public ChannelServiceImpl(ChannelRepository channelRepository, MessageBoardRepository
  // messageBoardRepository, MessageRepository messageRepository) {
  //     this.channelRepository = channelRepository;
  //     this.messageBoardRepository = messageBoardRepository;
  //     this.messageRepository = messageRepository;
  // }
  //
  // public ChannelDto createChannel(ChannelDto channelDto){
  //    // MessageBoard messageBoard =
  // messageBoardRepository.findById(channelDto.getMessageBoardId())
  //     //        .orElseThrow(() -> new
  // MessageBoardNotFoundException(channelDto.getMessageBoardId()));
  //     Channel channel = new Channel();
  //     channel.setName(channelDto.getName());
  //  //   channel.setMessageBoards(messageBoard);
  //     channel.setCreationDate(LocalDateTime.now());
  //     Channel savedChannel = channelRepository.save(channel);
  //     return ChannelMapper.INSTANCE.channelToChannelDto(savedChannel);
  // }
  // public List<ChannelDto> getAllChannels() {
  //     List<Channel> channels = channelRepository.findAll();
  //     List<ChannelDto> channelDtos = ChannelMapper.INSTANCE.channelsToChannelDto(channels);
  //     for (ChannelDto channelDto : channelDtos) {
  //         List<Message> messages = messageRepository.findAllByChannelId(channelDto.getId());
  //         List<MessageDto> messageDtos = MessageMapper.INSTANCE.toDto(messages);
  //         channelDto.setMessageDto(messageDtos);
  //     }
  //     return channelDtos;
  // }
  //
  //
  //
  // public ChannelDto getChannelById(int id) {
  //     Channel channel = channelRepository.findById(id)
  //             .orElseThrow(() -> new ChannelNotFoundException(id));
  //     return ChannelMapper.INSTANCE.channelToChannelDto(channel);
  // }
  //
  // public ChannelDto updateChannel(int id, ChannelDto channelDto) {
  //     Channel channel = channelRepository.findById(id)
  //             .orElseThrow(() -> new ChannelNotFoundException(id));
  //     channel.setName(channelDto.getName());
  //     Channel savedChannel = channelRepository.save(channel);
  //     return ChannelMapper.INSTANCE.channelToChannelDto(savedChannel);
  // }
  //
  // public void deleteChannel(int id) {
  //     Channel channel = channelRepository.findById(id)
  //             .orElseThrow(() -> new ChannelNotFoundException(id));
  //     channelRepository.delete(channel);
  // }
}
