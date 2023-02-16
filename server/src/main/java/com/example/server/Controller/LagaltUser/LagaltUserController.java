package com.example.server.Controller.LagaltUser;



import com.example.server.Mappers.LagaltUser.LagaltUserMapper;
import com.example.server.Models.ActiveDtos.LagaltUser.LagaltUserDto;
import com.example.server.Models.LagaltUser.LagaltUser;
import com.example.server.Service.LagaltUserServiceImpl;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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

    @ApiResponses(value = {
            @ApiResponse(responseCode = "200",
                    description = "Success",
                    content = {@Content(mediaType = "application/json",
                            schema = @Schema(implementation = LagaltUserDto.class)
                    )
                    }
            ),
            @ApiResponse(responseCode = "404",
                    description = "User does not exist with given ID",
                    content = @Content
            )
    })
    @GetMapping("{id}")
    @Operation(description = "id of User", summary = "search by id")
    public ResponseEntity<LagaltUserDto> getById(
            @PathVariable int id
    ) {
        LagaltUser user = lagaltUserService.findById(id);
        LagaltUserDto lagaltUserDto = lagaltUserMapper.lagaltUserDtoToLagaltUser(user);
        return ResponseEntity.ok().body(lagaltUserDto);
    }

}
