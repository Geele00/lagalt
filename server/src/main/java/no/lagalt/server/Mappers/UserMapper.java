package no.lagalt.server.Mappers;

import java.util.List;
import no.lagalt.server.Dtos.User.NewUserDto;
import no.lagalt.server.Dtos.User.UpdateUserDto;
import no.lagalt.server.Dtos.User.UserDto;
import no.lagalt.server.Entity.LagaltUser;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public abstract class UserMapper {

  // @Autowired protected SkillService skillService;

  // @Named("namedTest")
  // public List<Skill> idListToSkillList1(List<SkillId> idList) {
  //   return idList.stream()
  //       .map(id -> skillService.findById(id.getId()))
  //       .collect(Collectors.toList());
  // }

  // @Mapping(target = "skills", source = "skills", qualifiedByName = "namedTest")
  // public abstract LagaltUser userDtoToUser(UserDto userDto);

  // abstract UserDto userToUserDto(LagaltUser user);
  //

  public abstract LagaltUser toUser(NewUserDto newUserDto);
  //
  public abstract LagaltUser toUser(UpdateUserDto updateUserDto);

  public abstract UserDto toDto(LagaltUser user);

  public abstract List<UserDto> toDto(List<LagaltUser> user);
}
