package no.lagalt.server.Mappers.ChannelMapper;

import no.lagalt.server.Dtos.Channel.ChannelDto;
import no.lagalt.server.Entity.Channel;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ChannelMapper {
    ChannelMapper INSTANCE = Mappers.getMapper(ChannelMapper.class);

   // @Mapping(target = "messageBoardId", source = "messageBoards.messageBoardId")
  //  ChannelDto channelToChannelDto(Channel channel);

    @Mapping(target = "messageBoardId", source = "messageBoards.messageBoardId")
    List<ChannelDto> channelsToChannelDto(List<Channel> channels);

    List<Channel> channelDtoToChannels(List<ChannelDto> channelDtos);

    //@Mapping(target = "MessageDto", ignore = true)
    //ChannelDto channelToChannelDto(Channel channel);

    @Mapping(target = "messages", ignore = true)
    Channel channelDtoToChannel(ChannelDto channelDto);


}
