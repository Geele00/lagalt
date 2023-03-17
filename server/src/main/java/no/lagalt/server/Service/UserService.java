package no.lagalt.server.Service;

import java.util.List;
import no.lagalt.server.Dtos.Project.ProjectDto;
import no.lagalt.server.Dtos.Skill.SkillDto;
import no.lagalt.server.Dtos.User.*;
import no.lagalt.server.Entity.*;
import no.lagalt.server.Enum.ExceptionArgumentType;
import no.lagalt.server.Enum.ProfileStatus;
import no.lagalt.server.Exception.*;
import no.lagalt.server.Exception.User.UserNotFoundException;
import no.lagalt.server.Mapper.*;
import no.lagalt.server.Repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

  @Autowired private UserRepository userRepo;
  @Autowired private CountryRepo countryRepo;
  @Autowired private CityRepo cityRepo;
  @Autowired private SkillRepository skillRepo;

  @Autowired private UserMapper userMapper;
  @Autowired private SkillMapper skillMapper;

  @Autowired private ProjectMapper projectMapper;

  private LagaltUser findByUid(String uid) throws UserNotFoundException {
    return userRepo
        .findByUid(uid)
        .orElseThrow(() -> new UserNotFoundException(uid, ExceptionArgumentType.UID));
  }

  private LagaltUser findByUsername(String username) throws UserNotFoundException {
    return userRepo
        .findByUsername(username)
        .orElseThrow(() -> new UserNotFoundException(username, ExceptionArgumentType.USERNAME));
  }

  private LagaltUser findById(Integer id) throws UserNotFoundException {
    return userRepo.findById(id).orElseThrow(() -> new UserNotFoundException(id));
  }

  public boolean validateUsernameExists(String username) {
    return userRepo.existsByUsername(username);
  }

  public boolean validateExistsByUid(String uid) {
    return userRepo.existsByUid(uid);
  }

  public boolean validateExists(Integer id) {
    return userRepo.existsById(id);
  }

  public UserDto getByUid(String uid) throws UserNotFoundException {
    LagaltUser user = findByUid(uid);

    return userMapper.toDto(user);
  }

  public UserDto getById(Integer id) throws UserNotFoundException {
    LagaltUser user = findById(id);

    return userMapper.toDto(user);
  }

  public UserDto getByUsername(String username) throws UserNotFoundException {
    LagaltUser user = findByUsername(username);

    if (user.getProfileStatus() == ProfileStatus.Private) {
      var privateDto = userMapper.toPrivateDto(user);
      return userMapper.toDtoFromPrivate(privateDto);
    }

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

  public UserDto save(NewUserDto newUserDto) throws NotFoundException {
    LagaltUser newUser = userMapper.toUser(newUserDto);

    Country country =
        countryRepo
            .findByName(newUserDto.getCountry())
            .orElseThrow(() -> new NotFoundException("Country not found"));

    City city =
        cityRepo
            .findByName(newUserDto.getCity())
            .orElseThrow(() -> new NotFoundException("City not found"));

    newUser.setCountry(country);
    newUser.setCity(city);

    LagaltUser savedUser = save(newUser);

    return userMapper.toDto(savedUser);
  }

  public void deleteById(Integer id) throws UserNotFoundException {
    try {
      userRepo.deleteById(id);
    } catch (UserNotFoundException err) {
      throw new UserNotFoundException(id);
    }
  }

  // ~~~ Skills

  public List<SkillDto> getSkillsByUid(String uid) throws UserNotFoundException {
    LagaltUser user = findByUid(uid);

    return skillMapper.toDto(user.getSkills());
  }

  public void setSkillsByUid(List<Integer> idList, String uid) throws UserNotFoundException {

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
