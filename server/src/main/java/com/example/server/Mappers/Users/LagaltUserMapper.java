package com.example.server.Mappers.Users;


import com.example.server.Models.ActiveDtos.Users.LagaltUserDto;
import com.example.server.Models.Users.LagaltUser;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface LagaltUserMapper {

    LagaltUser lagaltuserToLagaltUserDto(LagaltUserDto lagaltUserDto);

    LagaltUserDto lagaltUserDtoToLagaltUser(LagaltUser lagaltUser);

}
