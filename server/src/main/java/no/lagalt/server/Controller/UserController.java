package no.lagalt.server.Controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import java.net.URI;
import java.util.Collections;
import java.util.List;
import no.lagalt.server.Dtos.IdList;
import no.lagalt.server.Dtos.User.NewUserDto;
import no.lagalt.server.Dtos.User.UpdateUserDto;
import no.lagalt.server.Entity.LagaltUser;
import no.lagalt.server.Entity.Skill;
import no.lagalt.server.Mappers.SkillMapper;
import no.lagalt.server.Mappers.UserMapper;
import no.lagalt.server.Service.SkillService;
import no.lagalt.server.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Tag(name = "Users")
@CrossOrigin(origins = "*") // Required for front-end. Remove before deployment for security
@RequestMapping(path = "api/v1/users")
@RestController
public class UserController {

  @Autowired private UserService userService;

  @Autowired private UserMapper userMapper;

  @Autowired private SkillService skillService;

  @Autowired private SkillMapper skillMapper;

  @Operation(summary = "Get user by ID")
  @GetMapping("{id}")
  public ResponseEntity<LagaltUser> getById(@PathVariable Integer id) {
    LagaltUser user = userService.findById(id);

    return ResponseEntity.ok().body(user);
  }

  @Operation(summary = "Get all users")
  @GetMapping
  public ResponseEntity<List<LagaltUser>> getAllUsers() {
    List<LagaltUser> users = userService.findAll();
    // return userMapper.usersToUsersDto(users);
    return ResponseEntity.ok().body(users);
  }

  @Operation(summary = "Delete user by ID")
  @ResponseStatus(HttpStatus.NO_CONTENT)
  @DeleteMapping("{id}")
  public void deleteById(@PathVariable Integer id) {
    userService.deleteById(id);
  }

  @Operation(summary = "Create  new user")
  @ResponseStatus(HttpStatus.CREATED)
  @PostMapping
  public ResponseEntity<URI> createUser(@RequestBody NewUserDto newUserDto) {
    LagaltUser user = userMapper.newUserDtoToUser(newUserDto);

    userService.save(user);

    URI location = URI.create("api/v1/users" + user.getUserId());

    return ResponseEntity.created(location).build();
  }

   @Operation(summary = "Update a user")
   @PutMapping("{id}")
   public ResponseEntity updateUser(
           @RequestBody UpdateUserDto updateUserDto, @PathVariable int id) {

     if (id != updateUserDto.getUserId()) {
       userService.findById(id);
       return ResponseEntity.badRequest().build();
     }

     userService.findById(id);
     LagaltUser user = userMapper.usersToUsersUpdate(updateUserDto);
     userService.update(user);
     return ResponseEntity.ok().body(updateUserDto);
   }


  @Operation(summary = "Get list of skills from user")
  @GetMapping("{userId}/skills")
  public ResponseEntity<List<Skill>> getSkills(@PathVariable Integer userId) {

    LagaltUser user = userService.findById(userId);

    List<Skill> skills = user.getSkills();

    return ResponseEntity.ok().body(skills);
  }

  @Operation(summary = "Set skills for user")
  @PostMapping("{userName}/skills")
  public ResponseEntity<IdList> setSkills(
      @RequestBody IdList skillIdList, @PathVariable String userName) {

    List<Skill> newSkills = skillService.findAllById(skillIdList.getIds());

    List<Skill> updatedSkills = userService.setSkills(newSkills, userName);

    IdList updatedIdList = skillMapper.skillListToIdList(updatedSkills);

    return ResponseEntity.ok().body(updatedIdList);
  }

  @Operation(summary = "Set skills for user")
  @PostMapping("{userName}/skills2")
  public ResponseEntity<Skill> setSkills2(
          @RequestBody Skill skillIdList, @PathVariable String userName) {

    List<Skill> newSkills = skillService.findAllById(Collections.singletonList(skillIdList.getSkillId()));

    System.out.println(userName);

    userService.updateSkills(newSkills, userName);

    return ResponseEntity.noContent().build();
  }
}
