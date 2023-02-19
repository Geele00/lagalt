package no.lagalt.server.Service;

import java.util.List;
import no.lagalt.server.Dtos.Skill.SkillId;
import no.lagalt.server.Entity.LagaltUser;
import no.lagalt.server.Entity.Skill;
import no.lagalt.server.Mappers.SkillMapper;
import no.lagalt.server.Repository.UserRepository;
import no.lagalt.server.Utils.Exception.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

  @Autowired private UserRepository userRepo;

  @Autowired private SkillMapper skillMapper;

  public boolean existsById(Integer id) throws NotFoundException {
    return userRepo.existsById(id);
  }

  public LagaltUser findById(Integer id) throws NotFoundException {
    return userRepo.findById(id).orElseThrow(() -> new NotFoundException(id));
  }

  public LagaltUser findByUserName(String userName) throws NotFoundException {
    return userRepo.findByUserName(userName).orElseThrow(() -> new NotFoundException(userName));
  }

  public List<LagaltUser> findAll() {
    return userRepo.findAll();
  }

  public LagaltUser save(LagaltUser lagaltUser) {
    return userRepo.save(lagaltUser);
  }

  public List<SkillId> setSkills(List<SkillId> newSkills, String userName)
      throws NotFoundException {

    LagaltUser user = findByUserName(userName);

    List<Skill> idlisttest = skillMapper.skillDtoIDToSkill(newSkills);

    user.setSkills(idlisttest);

    userRepo.save(user);

    return newSkills;
  }

  public void deleteById(Integer id) throws NotFoundException {
    try {
      userRepo.deleteById(id);
    } catch (NotFoundException err) {
      throw err;
    }
  }
}
