package com.example.server.Service.ServiceImpl.Users;

import com.example.server.Models.Users.Skill;
import com.example.server.Repository.Users.SkillRepository;
import com.example.server.Service.Interface.Users.SkillService;
import com.example.server.Utils.Exception.NotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collection;
@Service
public class SkillServiceImpl implements SkillService {

    private final SkillRepository skillRepository;

    public SkillServiceImpl(SkillRepository skillRepository) {
        this.skillRepository = skillRepository;
    }

    @Override
    public Skill findById(Integer id) {
        if (skillRepository.existsById(id)) {
            return skillRepository.findById(id).get();
        } else {
            throw new NotFoundException(id);
        }
    }

    @Override
    public Collection<Skill> findAll() {
        return null;
    }

    @Override
    public Skill add(Skill entity) {
        return null;
    }

    @Override
    public Skill update(Skill entity) {
        return null;
    }

    @Override
    public void delete(Skill entity) {

    }

    @Override
    public void deleteById(Integer integer) {

    }
}
