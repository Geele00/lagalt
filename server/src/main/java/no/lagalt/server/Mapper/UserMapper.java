package no.lagalt.server.Mapper;

import java.util.List;
import no.lagalt.server.Dtos.User.NewUserDto;
import no.lagalt.server.Dtos.User.UserDto;
import no.lagalt.server.Entity.LagaltUser;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(
    componentModel = "spring",
    uses = {SkillMapper.class})
public interface UserMapper {

  @Mapping(target = "history", ignore = true)
  @Mapping(target = "creationDate", ignore = true)
  @Mapping(target = "projects", ignore = true)
  @Mapping(target = "userId", ignore = true)
  @Mapping(target = "country", ignore = true)
  @Mapping(target = "notifications", ignore = true)
  LagaltUser toUser(NewUserDto newUserDto);

  UserDto toDto(LagaltUser user);

  List<UserDto> toDto(Iterable<LagaltUser> user);
}