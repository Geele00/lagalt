package com.example.server.Controller.Users;


import com.example.server.Mappers.Users.LagaltUserMapper;
import com.example.server.Service.Interface.Users.LagaltUserService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Tag(name = "Users")
@RequestMapping(path = "api/v1/users")
public class LagaltUserController {


    private final LagaltUserService lagaltUserService;

    private final LagaltUserMapper lagaltUserMapper;

    public LagaltUserController(LagaltUserService lagaltUserService, LagaltUserMapper lagaltUserMapper) {
        this.lagaltUserService = lagaltUserService;
        this.lagaltUserMapper = lagaltUserMapper;
    }
}
