package no.lagalt.server.Service;

import java.util.List;
import no.lagalt.server.Dtos.Project.ProjectDto;
import no.lagalt.server.Dtos.Skill.SkillDto;
import no.lagalt.server.Dtos.User.*;
import no.lagalt.server.Entity.*;
import no.lagalt.server.Mapper.*;
import no.lagalt.server.Repository.*;
import no.lagalt.server.Utils.Exception.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

  @Autowired private UserRepository userRepo;
  @Autowired private UserMapper userMapper;

  @Autowired private SkillRepository skillRepo;
  @Autowired private SkillMapper skillMapper;

  @Autowired private ProjectMapper projectMapper;

  @Autowired private HistoryService historyService;

  public boolean validateUsernameExists(String username) {
    return userRepo.existsByUsername(username);
  }

  public boolean validateExistsByUid(String uid) {
    return userRepo.existsByUid(uid);
  }

  public boolean validateExists(Integer id) {
    return userRepo.existsById(id);
  }

  private LagaltUser findById(Integer id) throws NotFoundException {
    return userRepo.findById(id).orElseThrow(() -> new NotFoundException(id));
  }

  public UserDto getByUid(String uid) throws NotFoundException {
    LagaltUser user = findByUid(uid);

    return userMapper.toDto(user);
  }

  public UserDto getById(Integer id) throws NotFoundException {
    LagaltUser user = findById(id);

    return userMapper.toDto(user);
  }

  private LagaltUser findByUid(String uid) throws NotFoundException {
    return userRepo
        .findByUid(uid)
        .orElseThrow(() -> new NotFoundException("User not found in database"));
  }

  private LagaltUser findByUsername(String username) throws NotFoundException {
    return userRepo
        .findByUsername(username)
        .orElseThrow(
            () -> new NotFoundException("User not found in database with username: " + username));
  }

  public UserDto getByUsername(String username) throws NotFoundException {
    LagaltUser user = findByUsername(username);

    return userMapper.toDto(user);
  }

  public List<UserDto> getAllById(List<Integer> ids) {
    List<LagaltUser> users = userRepo.findAllById(ids);

    return userMapper.toDto(users);
  }

  public List<UserDto> getAll() {
    List<LagaltUser> users = userRepo.findAll();

    return userMapper.toDto(users);
  }

  public LagaltUser save(LagaltUser lagaltUser) {
    return userRepo.save(lagaltUser);
  }

  public UserDto save(UpdateUserDto updateUserDto) {
    LagaltUser user = findById(updateUserDto.getUserId());

    // update logic

    LagaltUser savedUser = save(user);

    return userMapper.toDto(savedUser);
  }

  public UserDto save(NewUserDto newUserDto) {
    LagaltUser newUser = userMapper.toUser(newUserDto);

    LagaltUser savedUser = save(newUser);

    return userMapper.toDto(savedUser);
  }

  public void deleteById(Integer id) throws NotFoundException {
    try {
      userRepo.deleteById(id);
    } catch (NotFoundException err) {
      throw err;
    }
  }

  // ~~~ Skills

  public List<SkillDto> getSkillsByUid(String uid) throws NotFoundException {
    LagaltUser user = userRepo.findByUid(uid).orElseThrow(() -> new NotFoundException(uid));
    return skillMapper.toDto(user.getSkills());
  }

  public void setSkillsByUid(List<Integer> idList, String uid) throws NotFoundException {

    LagaltUser user = findByUid(uid);

    List<Skill> newSkills = skillRepo.findAllById(idList);

    user.setSkills(newSkills);

    userRepo.save(user);
  }

  // ~~~ Projects

  public List<ProjectDto> getProjectsByUid(String uid) {
    List<Project> projects = findByUid(uid).getProjects();

    return projectMapper.toDto(projects);
  }

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
}
