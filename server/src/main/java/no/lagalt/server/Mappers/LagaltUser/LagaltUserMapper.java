package no.lagalt.server.Mappers.LagaltUser;

import no.lagalt.server.Models.ActiveDtos.LagaltUser.LagaltUserDto;
import no.lagalt.server.Models.ActiveDtos.LagaltUser.LagaltUserDtoAdd;
import no.lagalt.server.Models.ActiveDtos.LagaltUser.LagaltUserDtoUpdate;
import no.lagalt.server.Models.ActiveDtos.LagaltUser.LagaltUsersDtoUpdateSkill;
import no.lagalt.server.Models.LagaltUser.LagaltUser;
import org.mapstruct.Mapper;

import java.util.Collection;

@Mapper(componentModel = "spring")
public interface LagaltUserMapper {

    LagaltUser lagaltUserToLagaltUserDto(LagaltUserDto lagaltUserDto);

    LagaltUserDto lagaltUserDtoToLagaltUser(LagaltUser lagaltUser);

    Collection<LagaltUserDto> usersToUsersDto(Collection<LagaltUser> lagaltUsers);

    LagaltUserDtoUpdate usersUpdatetoUser(LagaltUser lagaltUser);

    LagaltUser usersToUsersUpdate(LagaltUserDtoUpdate lagaltUserDtoUpdate);


    LagaltUserDtoAdd usersAddToUser(LagaltUser lagaltUser);

    LagaltUser usersToUserAdd(LagaltUserDtoAdd lagaltUserDtoAdd);

    LagaltUsersDtoUpdateSkill usersAddSkillToUser (LagaltUser lagaltUser);

    LagaltUser usersToUserAddSkill(LagaltUsersDtoUpdateSkill lagaltUsersDtoUpdateSkill);



} 
