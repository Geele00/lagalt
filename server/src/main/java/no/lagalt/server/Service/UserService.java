package no.lagalt.server.Service;

import no.lagalt.server.Dtos.Skill.SkillId;
import no.lagalt.server.Entity.LagaltUser;
import no.lagalt.server.Entity.Skill;
import no.lagalt.server.Mappers.SkillMapper;
import no.lagalt.server.Repository.UserRepository;
import no.lagalt.server.Utils.Exception.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private SkillMapper skillMapper;

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

    public List<SkillId> setSkills(List<SkillId> newSkills, String userName) {

        if(userRepo.findByUserName(userName) == null){
            throw new NotFoundException(userName);
        }
        LagaltUser user = userRepo.findByUserName(userName);

        List<Skill> idlisttest = skillMapper.skillDtoIDToSkill(newSkills);

        user.setSkills(idlisttest);

        userRepo.save(user);

        return newSkills;
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
