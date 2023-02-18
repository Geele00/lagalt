package no.lagalt.server.Controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import no.lagalt.server.Mappers.LagaltUser.LagaltUserMapper;
import no.lagalt.server.Models.ActiveDtos.LagaltUser.LagaltUserDto;
import no.lagalt.server.Models.ActiveDtos.LagaltUser.LagaltUserDtoAdd;
import no.lagalt.server.Models.ActiveDtos.LagaltUser.LagaltUserDtoUpdate;
import no.lagalt.server.Models.LagaltUser.LagaltUser;
import no.lagalt.server.Service.LagaltUserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.Collection;

@RestController
@Tag(name = "Users")
@RequestMapping(path = "api/v1/users")
public class LagaltUserController {

    @Autowired
    private LagaltUserServiceImpl lagaltUserService;

    @Autowired
    private LagaltUserMapper lagaltUserMapper;

    @ApiResponses(
            value = {
                    @ApiResponse(responseCode = "200",
                            description = "Success",
                            content = {
                                    @Content(
                                            mediaType = "application/json",
                                            schema = @Schema(implementation = LagaltUserDto.class))
                            }),
                    @ApiResponse(
                            responseCode = "404",
                            description = "User does not exist with given ID",
                            content = @Content)
            })
    @GetMapping("{id}")
    @Operation(description = "id of User", summary = "search by id")
    public ResponseEntity<LagaltUserDto> getById(@PathVariable int id) {
        LagaltUser user = lagaltUserService.findById(id);
        LagaltUserDto lagaltUserDto = lagaltUserMapper.lagaltUserDtoToLagaltUser(user);
        return ResponseEntity.ok().body(lagaltUserDto);
    }


    @Operation(description = "shows all Users in database", summary = "show all Users")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200",
                    description = "Success",
                    content = {@Content(
                                        mediaType = "application/json",
                                        schema = @Schema(implementation = LagaltUserDto.class))
                    }),
            @ApiResponse(responseCode = "400",
                    description = "Malformed request",
                    content = @Content(
                            mediaType = "application/json"
                    )),
            @ApiResponse(responseCode = "404",
                    description = "Not found",
                    content = @Content(
                            mediaType = "application/json"
                    )),
    })
    @GetMapping
    public Collection<LagaltUserDto> getAllUsers() {
        Collection<LagaltUser> users = lagaltUserService.findAll();
        return lagaltUserMapper.usersToUsersDto(users);
    }

    @Operation(summary = "update data for a user", description = "update user in database")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204",
                    description = "user successfully updated",
                    content = @Content
            ),
            @ApiResponse(responseCode = "400",
                    description = "Malformed request",
                    content = @Content
            ),
            @ApiResponse(responseCode = "404",
                    description = "user not found with given ID",
                    content = @Content
            )
    })
    @PutMapping("{id}")
    public ResponseEntity updateUser(
            @RequestBody LagaltUserDtoUpdate lagaltUserDtoUpdate,
            @PathVariable int id
    ) {
        if (id != lagaltUserDtoUpdate.getId()) {
            lagaltUserService.findById(id);
            return ResponseEntity.badRequest().build();
        }
        lagaltUserService.findById(id);
        LagaltUser user = lagaltUserMapper.usersToUsersUpdate(lagaltUserDtoUpdate);
        lagaltUserService.update(user);
        return ResponseEntity.ok().body(lagaltUserDtoUpdate);
    }


    @ApiResponses(value = {
            @ApiResponse(responseCode = "204",
                    description = "user successfully deleted",
                    content = {@Content(mediaType = "application/json",
                            schema = @Schema(implementation = LagaltUserDto.class)
                    )
                    }
            ),
            @ApiResponse(responseCode = "404",
                    description = "user does not exist with given ID",
                    content = @Content
            )
    })
    @DeleteMapping("{id}")
    @Operation(description = "delete user in database", summary = "delete user by id")
    public ResponseEntity deleteById(
            @PathVariable int id
    ) {
        lagaltUserService.deleteById(id);
        return ResponseEntity.noContent().build();
    }


    @ApiResponses(value = {
            @ApiResponse(responseCode = "201",
                    description = "Add successfully",
                    content = @Content
            ),
            @ApiResponse(responseCode = "400",
                    description = "Malformed request",
                    content = @Content
            )
    })
    @PostMapping
    @Operation(summary = "add new user", description = "add user in database")
    public ResponseEntity<URI> addUser(@RequestBody LagaltUserDtoAdd lagaltUserDto) {
        LagaltUser user = lagaltUserMapper.usersToUserAdd(lagaltUserDto);
        lagaltUserService.add(user);
        URI location = URI.create("api/v1/users" + user.getId());
        return ResponseEntity.created(location).build();
    }

}
