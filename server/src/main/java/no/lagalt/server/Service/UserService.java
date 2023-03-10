package no.lagalt.server.Service;

import java.time.LocalDateTime;
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
  @Autowired private MessageMapper messageMapper;

  public boolean validateExists(String userName) {
    return userRepo.existsByUserName(userName);
  }

  public boolean validateExists(Integer id) {
    return userRepo.existsById(id);
  }

  public LagaltUser findById(Integer id) throws NotFoundException {
    return userRepo.findById(id).orElseThrow(() -> new NotFoundException(id));
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

  private LagaltUser findByUserName(String userName) throws NotFoundException {
    return userRepo
        .findByUserName(userName)
        .orElseThrow(
            () -> new NotFoundException("User not found in database with username: " + userName));
  }

  public UserDto getByUserName(String userName) throws NotFoundException {
    LagaltUser user = findByUserName(userName);

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

    newUser.setCreatedAt(LocalDateTime.now());

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

  public List<SkillDto> getSkills(Integer userId) throws NotFoundException {
    LagaltUser user = userRepo.findById(userId).orElseThrow(() -> new NotFoundException(userId));
    return skillMapper.toDto(user.getSkills());
  }

  public void setSkills(List<Integer> idList, String userName) throws NotFoundException {

    LagaltUser user = findByUserName(userName);

    List<Skill> newSkills = skillRepo.findAllById(idList);

    user.setSkills(newSkills);

    userRepo.save(user);
  }

  // ~~~ Projects

  public List<ProjectDto> getProjects(Integer userId) {
    List<Project> projects = findById(userId).getProjects();

    return projectMapper.toDto(projects);
  }

  public UserDto returnOwnerIfNewProject(Integer ownerId, String projectTitle)
      throws AlreadyExistsException {
    LagaltUser owner = findById(ownerId);

    List<Project> existingProjects = owner.getProjects();

    boolean alreadyExists =
        existingProjects.stream().anyMatch(project -> projectTitle.matches(project.getTitle()));

    if (alreadyExists)
      throw new AlreadyExistsException(
          "Project with title \"" + projectTitle + "\" already exists on your account.");

    return userMapper.toDto(owner);
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
