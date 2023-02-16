package com.example.server.Mappers.LagaltUser;


import com.example.server.Models.ActiveDtos.LagaltUser.LagaltUserDto;
import com.example.server.Models.LagaltUser.LagaltUser;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface LagaltUserMapper {

    LagaltUser lagaltuserToLagaltUserDto(LagaltUserDto lagaltUserDto);

    LagaltUserDto lagaltUserDtoToLagaltUser(LagaltUser lagaltUser);

}
