package no.lagalt.server.Controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.websocket.server.PathParam;
import java.util.List;
import no.lagalt.server.Dtos.IdList;
import no.lagalt.server.Dtos.Skill.SkillId;
import no.lagalt.server.Dtos.User.*;
import no.lagalt.server.Entity.LagaltUser;
import no.lagalt.server.Mappers.UserMapper;
import no.lagalt.server.Service.UserService;
import no.lagalt.server.Utils.Exception.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@Tag(name = "Users")
@CrossOrigin(origins = "*") // Required for front-end. Remove before deployment for security
@RequestMapping(path = "api/v1/users")
@RestController
public class UserController {

  @Autowired private UserService userService;

  @Autowired private UserMapper userMapper;

  @Operation(summary = "Get user by username")
  @GetMapping
  public List<UserDto> getUsers(@PathParam("username") String username) throws NotFoundException {

    if (username != null) {
      return List.of(userService.findByUserName(username));
    } else {
      return userService.findAll();
    }
  }

  @Operation(summary = "Get user by ID")
  @GetMapping("{id}")
  public UserDto getById(@PathVariable Integer id) throws NotFoundException {
    return userService.findById(id);
  }

  @Operation(summary = "Delete user by ID")
  @ResponseStatus(HttpStatus.NO_CONTENT)
  @DeleteMapping("{id}")
  public void deleteById(@PathVariable Integer id) throws NotFoundException {
    userService.deleteById(id);
  }

  @Operation(summary = "Create  new user")
  @ResponseStatus(HttpStatus.CREATED)
  @PostMapping
  public void createUser(@RequestBody NewUserDto newUserDto) {
    userService.save(newUserDto);
  }

  @Operation(summary = "Update a user")
  @PutMapping("{id}")
  public UserDto updateUser(@RequestBody UpdateUserDto updateUserDto, @PathVariable int id)
      throws NotFoundException {

    userService.validateExists(id);

    LagaltUser user = userMapper.toUser(updateUserDto);

    userService.save(user);

    return userMapper.toDto(user);
  }

  @Operation(summary = "Get list of skills from user")
  @GetMapping("{userId}/skills")
  public List<SkillId> getSkills(@PathVariable Integer userId) {

    UserDto user = userService.findById(userId);

    return user.getSkills();
  }

  @Operation(summary = "Set skills for user")
  @ResponseStatus(HttpStatus.NO_CONTENT)
  @PostMapping("{userName}/skills")
  public void setSkills(@RequestBody IdList skillIdList, @PathVariable String userName)
      throws NotFoundException {

    userService.setSkills(skillIdList, userName);
  }
}
