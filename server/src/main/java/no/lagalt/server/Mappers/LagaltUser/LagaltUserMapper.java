package no.lagalt.server.Mappers.LagaltUser;

import no.lagalt.server.Models.ActiveDtos.LagaltUser.LagaltUserDto;
import no.lagalt.server.Models.LagaltUser.LagaltUser;

import java.util.Collection;

import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface LagaltUserMapper {

  LagaltUser lagaltuserToLagaltUserDto(LagaltUserDto lagaltUserDto);

  LagaltUserDto lagaltUserDtoToLagaltUser(LagaltUser lagaltUser);

  Collection<LagaltUserDto> usersToUsersDto(Collection<LagaltUser> lagaltUsers);
} 
