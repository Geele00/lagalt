package no.lagalt.server.Controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.websocket.server.PathParam;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import no.lagalt.server.Dtos.Project.NewProjectDto;
import no.lagalt.server.Dtos.Project.ProjectDto;
import no.lagalt.server.Dtos.Skill.SkillDto;
import no.lagalt.server.Dtos.User.*;
import no.lagalt.server.Service.ProjectService;
import no.lagalt.server.Service.UserService;
import no.lagalt.server.Utils.Exception.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@Tag(name = "Users")
@CrossOrigin(origins = "*") // Required for front-end. Remove before deployment for security
@RequestMapping(path = "api/v1/users")
@RestController
public class UserController {

  @Autowired private UserService userService;

  @Autowired private ProjectService projectService;

  @Operation(summary = "Get a list of users")
  @GetMapping
  public List<UserDto> getUsers(@PathParam("username") String username, @PathParam("id") String id)
      throws NotFoundException {

    if (username != null) return List.of(userService.getByUserName(username));

    if (id != null) {
      List<Integer> idList =
          Arrays.asList(id.split(",", -1)).stream()
              .map(Integer::parseInt)
              .collect(Collectors.toList());

      System.out.println(idList);

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
  public void deleteOneById(@PathVariable Integer id) throws NotFoundException {
    userService.deleteById(id);
  }

  @Operation(summary = "Create new user")
  @ResponseStatus(HttpStatus.CREATED)
  @PostMapping
  public UserDto createUser(@RequestBody NewUserDto newUserDto) throws AlreadyExistsException {
    if (userService.validateExists(newUserDto.getUserName()))
      throw new AlreadyExistsException(
          "User with username " + newUserDto.getUserName() + " already exists in the database.");

    return userService.save(newUserDto);
  }

  @Operation(summary = "Update a user")
  @PutMapping("{id}")
  public UserDto updateUser(@RequestBody UpdateUserDto updateUserDto, @PathVariable Integer id)
      throws NotFoundException {
    if (!userService.validateExists(id)) throw new NotFoundException(id);

    UserDto savedUser = userService.save(updateUserDto);

    return savedUser;
  }

  // ~~~ Skills

  @Operation(summary = "Get list of skills from user")
  @GetMapping("{userId}/skills")
  public List<SkillDto> getSkills(@PathVariable Integer userId) {
    return userService.getSkills(userId);
  }

  @Operation(summary = "Set skills for user")
  @ResponseStatus(HttpStatus.NO_CONTENT)
  @PostMapping("{userName}/skills")
  public void setSkills(@RequestBody List<Integer> idList, @PathVariable String userName)
      throws NotFoundException {

    userService.setSkills(idList, userName);
  }

  // ~~~ Projects

  @Operation(summary = "Create new project")
  @ResponseStatus(HttpStatus.CREATED)
  @PostMapping("{userId}/projects")
  public ProjectDto createProject(
      @RequestBody NewProjectDto newProjectDto, @PathVariable Integer userId)
      throws AlreadyExistsException {
    // check if exists on user
    return projectService.createProject(newProjectDto, userId);
  }

  @Operation(summary = "Get projects from user")
  @GetMapping("{userId}/projects")
  public List<ProjectDto> getProjects(@PathVariable Integer userId) {
    return userService.getProjects(userId);
  }
}
