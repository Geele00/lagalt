package no.lagalt.server.Mapper;

import java.util.List;
import no.lagalt.server.Dtos.User.NewUserDto;
import no.lagalt.server.Dtos.User.UserDto;
import no.lagalt.server.Dtos.User.UserPrivateDto;
import no.lagalt.server.Entity.LagaltUser;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(
    componentModel = "spring",
    uses = {SkillMapper.class})
public interface UserMapper {

  @Mapping(target = "history", ignore = true)
  @Mapping(target = "projects", ignore = true)
  @Mapping(target = "userId", ignore = true)
  @Mapping(target = "notifications", ignore = true)
  @Mapping(target = "chats", ignore = true)
  @Mapping(target = "avatarUrl", ignore = true)
  @Mapping(target = "country", ignore = true)
  @Mapping(target = "city", ignore = true)
  LagaltUser toUser(NewUserDto newUserDto);

  // default Integer dateToInt(LocalDate date) {
  //  return date.getYear();
  // }
  // @Mapping(target = "age", source = "user.dob")

  @Mapping(target = "age", expression = "java(user.getYear())")
  UserDto toDto(LagaltUser user);

  UserPrivateDto toPrivateDto(LagaltUser user);

  @Mapping(target = "age", ignore = true)
  @Mapping(target = "userId", ignore = true)
  UserDto toDtoFromPrivate(UserPrivateDto userPrivateDto);

  List<UserDto> toDto(Iterable<LagaltUser> user);

  // @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
  // @Mapping(target = "historyId", ignore = true)
  // void updateHistoryFromDtoByLagaltUser(
  //    UpdateHistoryDto updateHistoryDto, LagaltUser lagaltUser, @MappingTarget History history);
}
