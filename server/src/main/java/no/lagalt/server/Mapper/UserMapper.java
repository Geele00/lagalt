package no.lagalt.server.Mapper;

import java.util.List;
import no.lagalt.server.Dtos.User.NewUserDto;
import no.lagalt.server.Dtos.User.UserDto;
import no.lagalt.server.Entity.LagaltUser;
import no.lagalt.server.Enum.ProfileStatus;
import org.mapstruct.AfterMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

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

  @Mapping(target = "age", expression = "java(user.getDob().getYear())")
  UserDto toDto(LagaltUser user);

  @AfterMapping
  public default void afterToDto(LagaltUser user, @MappingTarget UserDto userDto) {
    System.out.println(111);
    if (user.getProfileStatus() == ProfileStatus.PRIVATE) {
      System.out.println(222);
      userDto.setAge(null);
      userDto.setFirstName(null);
      userDto.setLastName(null);
    }
    System.out.println(333);
  }

  List<UserDto> toDto(Iterable<LagaltUser> user);

  // @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
  // @Mapping(target = "historyId", ignore = true)
  // void updateHistoryFromDtoByLagaltUser(
  //    UpdateHistoryDto updateHistoryDto, LagaltUser lagaltUser, @MappingTarget History history);
}
