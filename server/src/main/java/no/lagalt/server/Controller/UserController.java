package no.lagalt.server.Controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import java.util.List;
import java.util.stream.Collectors;
import no.lagalt.server.Dtos.Project.*;
import no.lagalt.server.Dtos.Skill.SkillDto;
import no.lagalt.server.Dtos.User.*;
import no.lagalt.server.Service.*;
import no.lagalt.server.Utils.Exception.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@Tag(name = "Users")
@CrossOrigin // Required for front-end. Remove before deployment for security
@RequestMapping(path = "api/v1/users")
@RestController
public class UserController {

  @Autowired private UserService userService;

  @Operation(summary = "Get a list of users")
  @GetMapping
  List<UserDto> getUsers(
      Authentication auth,
      @RequestParam(name = "username", required = false) String username,
      @RequestParam(name = "id", required = false) List<String> id)
      throws NotFoundException {

    System.out.println(auth.getName());

    if (username != null) return List.of(userService.getByUsername(username));

    if (id != null) {
      List<Integer> idList = id.stream().map(Integer::parseInt).collect(Collectors.toList());

      return userService.getAllById(idList);
    }

    return userService.getAll();
  }

  @Operation(summary = "Get one user by ID")
  @GetMapping("{id}")
  public UserDto getOneById(@PathVariable Integer id) throws NotFoundException {
    return userService.getById(id);
  }

  @Operation(summary = "Delete one user by ID")
  @ResponseStatus(HttpStatus.NO_CONTENT)
  @DeleteMapping("{id}")
  void deleteOneById(@PathVariable Integer id) throws NotFoundException {
    userService.deleteById(id);
  }

  @Operation(summary = "Create new user")
  @ResponseStatus(HttpStatus.CREATED)
  @PostMapping
  UserDto createUser(@RequestBody NewUserDto newUserDto, Authentication auth)
      throws AlreadyExistsException {

    System.out.println(auth);

    if (userService.validateExists(newUserDto.getUsername()))
      throw new AlreadyExistsException(
          "User with username " + newUserDto.getUsername() + " already exists in the database.");

    return userService.save(newUserDto);
  }

  @Operation(summary = "Update a user")
  @PutMapping("{id}")
  UserDto updateUser(@RequestBody UpdateUserDto updateUserDto, @PathVariable Integer id)
      throws NotFoundException {
    if (!userService.validateExists(id)) throw new NotFoundException(id);

    UserDto savedUser = userService.save(updateUserDto);

    return savedUser;
  }

  // ~~~ Skills

  @Operation(summary = "Get list of skills from user")
  @GetMapping("{userId}/skills")
  List<SkillDto> getSkills(@PathVariable Integer userId) {
    return userService.getSkills(userId);
  }

  @Operation(summary = "Set skills for user")
  @ResponseStatus(HttpStatus.NO_CONTENT)
  @PostMapping("{username}/skills")
  public void setSkills(@RequestBody List<Integer> idList, @PathVariable String username)
      throws NotFoundException {

    userService.setSkills(idList, username);
  }

  // ~~~ Projects

  @Operation(summary = "Get projects from user")
  @GetMapping("{userId}/projects")
  List<ProjectDto> getProjects(@PathVariable Integer userId) {
    return userService.getProjects(userId);
  }
}
