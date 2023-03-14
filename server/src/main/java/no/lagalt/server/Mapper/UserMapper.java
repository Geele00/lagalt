package no.lagalt.server.Mapper;

import java.util.List;
import no.lagalt.server.Dtos.History.UpdateHistoryDto;
import no.lagalt.server.Dtos.User.NewUserDto;
import no.lagalt.server.Dtos.User.UserDto;
import no.lagalt.server.Entity.History;
import no.lagalt.server.Entity.LagaltUser;
import org.mapstruct.BeanMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.mapstruct.NullValuePropertyMappingStrategy;

@Mapper(
    componentModel = "spring",
    uses = {SkillMapper.class})
public interface UserMapper {

  @Mapping(target = "history", ignore = true)
  @Mapping(target = "projects", ignore = true)
  @Mapping(target = "userId", ignore = true)
  @Mapping(target = "country", ignore = true)
  @Mapping(target = "notifications", ignore = true)
  @Mapping(target = "avatarUrl", ignore = true)
  @Mapping(target = "chats", ignore = true)
  @Mapping(target = "city", ignore = true)
  LagaltUser toUser(NewUserDto newUserDto);

  UserDto toDto(LagaltUser user);

  List<UserDto> toDto(Iterable<LagaltUser> user);

  @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
  @Mapping(target = "historyId", ignore = true)
  void updateHistoryFromDtoByLagaltUser(
      UpdateHistoryDto updateHistoryDto, LagaltUser lagaltUser, @MappingTarget History history);
}
