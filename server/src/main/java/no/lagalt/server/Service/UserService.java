package no.lagalt.server.Service;

import java.util.List;
import no.lagalt.server.Dtos.IdList;
import no.lagalt.server.Dtos.Skill.SkillDto;
import no.lagalt.server.Dtos.User.*;
import no.lagalt.server.Entity.*;
import no.lagalt.server.Mappers.*;
import no.lagalt.server.Repository.UserRepository;
import no.lagalt.server.Utils.Exception.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

  @Autowired private UserRepository userRepo;

  @Autowired private UserMapper userMapper;

  @Autowired private SkillMapper skillMapper;

  public boolean existsById(Integer id) {
    return userRepo.existsById(id);
  }

  public void validateExists(Integer id) throws NotFoundException {
    try {
      userRepo.existsById(id);
    } catch (NotFoundException err) {
      throw err;
    }
  }

  public UserDto findById(Integer id) throws NotFoundException {
    LagaltUser user = userRepo.findById(id).orElseThrow(() -> new NotFoundException(id));

    return userMapper.toDto(user);
  }

  public UserDto findByUserName(String userName) throws NotFoundException {
    LagaltUser user =
        userRepo.findByUserName(userName).orElseThrow(() -> new NotFoundException(userName));

    return userMapper.toDto(user);
  }

  public List<UserDto> findAll() {
    List<LagaltUser> users = userRepo.findAll();

    return userMapper.toDto(users);
  }

  public LagaltUser save(LagaltUser lagaltUser) {
    return userRepo.save(lagaltUser);
  }

  public LagaltUser save(NewUserDto newUser) {
    LagaltUser user = userMapper.toUser(newUser);

    return userRepo.save(user);
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

  public void setSkills(IdList idList, String userName) throws NotFoundException {

    LagaltUser user =
        userRepo.findByUserName(userName).orElseThrow(() -> new NotFoundException(userName));

    List<Integer> skillIdList = idList.getIds();

    List<Skill> newSkills = skillMapper.idsToSkills(skillIdList);

    user.setSkills(newSkills);

    userRepo.save(user);
  }
}
