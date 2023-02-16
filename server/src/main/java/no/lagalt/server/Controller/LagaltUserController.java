package no.lagalt.server.Controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import java.util.Collection;
import no.lagalt.server.Mappers.LagaltUser.LagaltUserMapper;
import no.lagalt.server.Models.ActiveDtos.LagaltUser.LagaltUserDto;
import no.lagalt.server.Models.LagaltUser.LagaltUser;
import no.lagalt.server.Service.LagaltUserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@Tag(name = "Users")
@RequestMapping(path = "api/v1/users")
public class LagaltUserController {

  @Autowired private LagaltUserServiceImpl lagaltUserService;

  @Autowired private LagaltUserMapper lagaltUserMapper;

  @ApiResponses(
      value = {
        @ApiResponse(
            responseCode = "200",
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

  @GetMapping
  public Collection<LagaltUserDto> getAllUsers() {
    Collection<LagaltUser> users = lagaltUserService.findAll();
    return lagaltUserMapper.usersToUsersDto(users);
  }
}
