package no.lagalt.server.Controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;
import no.lagalt.server.Dtos.Project.*;
import no.lagalt.server.Dtos.Skill.SkillDto;
import no.lagalt.server.Dtos.User.*;
import no.lagalt.server.Exception.*;
import no.lagalt.server.Exception.User.UserNotFoundException;
import no.lagalt.server.Service.*;
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
  @Autowired private HistoryService historyService;

  @Operation(summary = "Get a list of users")
  @GetMapping
  List<UserDto> getUsers(
      Authentication auth,
      @RequestParam(name = "username", required = false) String username,
      @RequestParam(name = "id", required = false) List<String> id)
      throws UserNotFoundException {

    if (username != null) return List.of(userService.getByUsername(username));

    if (id != null) {
      List<Integer> idList = id.stream().map(Integer::parseInt).collect(Collectors.toList());

      return userService.getAllById(idList);
    }

    return userService.getAll();
  }

  @Operation(summary = "Check if a username exists in the database")
  @GetMapping("validate/{username}")
  boolean validateExistingUsername(@PathVariable String username) {
    return userService.validateUsernameExists(username);
  }

  @Operation(summary = "Delete one user by ID")
  @ResponseStatus(HttpStatus.NO_CONTENT)
  @DeleteMapping("{id}")
  void deleteOneById(@PathVariable Integer id) throws UserNotFoundException {
    userService.deleteById(id);
  }

  @Operation(summary = "Create new user")
  @ResponseStatus(HttpStatus.CREATED)
  @PostMapping
  UserDto createUser(@RequestBody NewUserDto newUserDto, Authentication auth)
      throws AlreadyExistsException {

    String uid = auth.getName();
    newUserDto.setUid(uid);

    if (userService.validateUsernameExists(newUserDto.getUsername()))
      throw new AlreadyExistsException(
          "User with username " + newUserDto.getUsername() + " already exists in the database.");

    return userService.save(newUserDto);
  }

  @Operation(summary = "Update a user")
  @PutMapping
  UserDto updateUser(@RequestBody UpdateUserDto updateUserDto, Authentication auth)
      throws UserNotFoundException {

    String uid = auth.getName();

    if (!userService.validateExistsByUid(uid)) throw new UserNotFoundException(uid);

    UserDto savedUser = userService.save(updateUserDto);

    return savedUser;
  }

  // ~~~ Skills

  @Operation(summary = "Get list of skills from user")
  @GetMapping("skills")
  List<SkillDto> getSkills(Authentication auth) {

    String uid = auth.getName();
    return userService.getSkillsByUid(uid);
  }

  @Operation(summary = "Set skills for user")
  @ResponseStatus(HttpStatus.NO_CONTENT)
  @PostMapping("skills")
  void setSkills(@RequestBody List<Integer> idList, Authentication auth)
      throws UserNotFoundException {
    String uid = auth.getName();
    userService.setSkillsByUid(idList, uid);
  }

  // ~~~ Projects

  @Operation(summary = "Get projects from user")
  @GetMapping("projects")
  List<ProjectDto> getProjects(Authentication auth) {
    String uid = auth.getName();

    return userService.getProjectsByUid(uid);
  }

  // ~~~ History

  @Operation(summary = "Get projects from user")
  @PostMapping("history")
  void addToHistory(@RequestBody Set<Integer> projectIds, Authentication auth) {
    String uid = auth.getName();

    historyService.addToSeen(projectIds, uid);
  }
}
