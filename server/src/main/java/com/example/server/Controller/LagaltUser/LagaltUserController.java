package com.example.server.Controller.LagaltUser;



import com.example.server.Mappers.LagaltUser.LagaltUserMapper;
import com.example.server.Service.LagaltUserServiceImpl;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Tag(name = "Users")
@RequestMapping(path = "api/v1/users")
public class LagaltUserController {



    private final LagaltUserServiceImpl lagaltUserService;

    private final LagaltUserMapper lagaltUserMapper;


    public LagaltUserController(LagaltUserServiceImpl lagaltUserService, LagaltUserMapper lagaltUserMapper) {
        this.lagaltUserService = lagaltUserService;
        this.lagaltUserMapper = lagaltUserMapper;
    }


}
