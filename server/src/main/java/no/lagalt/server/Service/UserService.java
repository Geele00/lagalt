package no.lagalt.server.Service;

import java.util.List;
import no.lagalt.server.Entity.LagaltUser;
import no.lagalt.server.Entity.Skill;
import no.lagalt.server.Repository.UserRepository;
import no.lagalt.server.Utils.Exception.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

  @Autowired private UserRepository userRepo;

  public LagaltUser findById(Integer id) {
    if (userRepo.existsById(id)) {
      return userRepo.findById(id).get();
    } else {
      throw new NotFoundException(id);
    }
  }

  public List<LagaltUser> findAll() {
    return userRepo.findAll();
  }

  public LagaltUser save(LagaltUser lagaltUser) {
    return userRepo.save(lagaltUser);
  }

  public void deleteUser(Integer userId) {
    deleteById(userId);
  }

  public List<Skill> setSkills(List<Skill> newSkills, String userName) {
    LagaltUser user = userRepo.findByUserName(userName);

    System.out.println("\n\n" + user.getSkills() + "\n\n");

    user.setSkills(newSkills);

    //System.out.println("\n\n" + user + "\n\n");

    System.out.println("\n\n" + user.getSkills() + "\n\n");

    userRepo.saveAndFlush(user);


    return newSkills;
  }

  public LagaltUser updateSkills(List<Skill> newSkills, String userName) {
    LagaltUser user = userRepo.findByUserName(userName);


    List<Skill> skills = user.getSkills();
    System.out.println("\n\n" + skills + "\n\n");

    System.out.println("\n\n" + user.getSkills() + "\n\n");


    skills.addAll(newSkills);

    System.out.println("\n\n" + user + "\n\n");

    return null;

    // return skills;
  }

  public void deleteById(Integer id) {
    if (userRepo.existsById(id)) {
      LagaltUser user = findById(id);
      userRepo.deleteById(id);
    } else {
      throw new NotFoundException(id);
    }
  }

public LagaltUser update(LagaltUser lagaltUser) {
   if (!userRepo.existsById(lagaltUser.getUserId())) {
     new NotFoundException();
      return null;
     }
     userRepo.save(lagaltUser);
     return lagaltUser;
   }

}
