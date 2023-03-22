package no.lagalt.server.Service;

import java.util.List;
import no.lagalt.server.Dtos.Skill.SkillDto;
import no.lagalt.server.Entity.Skill;
import no.lagalt.server.Enum.AddedBy;
import no.lagalt.server.Exception.NotFoundException;
import no.lagalt.server.Mapper.SkillMapper;
import no.lagalt.server.Repository.SkillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SkillService {

  @Autowired private SkillRepository skillRepository;
  @Autowired private SkillMapper skillMapper;

  public List<SkillDto> getAllById(List<Integer> idList) {
    var skills = skillRepository.findAllById(idList);

    return skillMapper.toDto(skills);
  }

  public List<SkillDto> getAll() {
    var skills = skillRepository.findAll();
    return skillMapper.toDto(skills);
  }

  public List<SkillDto> getAllByAddedBy(AddedBy addedBy) {
    var skills = skillRepository.findAllByAddedBy(addedBy);
    return skillMapper.searchResultToDto(skills);
  }

  public Skill findById(Integer id) {
    return skillRepository.findById(id).orElseThrow(() -> new NotFoundException(id));
  }
}
