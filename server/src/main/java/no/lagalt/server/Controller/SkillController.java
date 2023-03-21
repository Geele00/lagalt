package no.lagalt.server.Controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import java.util.List;
import java.util.stream.Collectors;
import no.lagalt.server.Dtos.Skill.SkillDto;
import no.lagalt.server.Enum.AddedBy;
import no.lagalt.server.Exception.Skill.SkillNotFoundException;
import no.lagalt.server.Service.SkillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@Tag(name = "Skills")
@CrossOrigin // Required for front-end. Remove before deployment for security
@RequestMapping(path = "api/v1/skills")
@RestController
public class SkillController {

  @Autowired private SkillService skillService;

  @Operation(summary = "Get a list of skills")
  @GetMapping
  List<SkillDto> getSkills(
      @RequestParam(name = "skills", required = false) List<String> skillIds,
      @RequestParam(name = "addedBy", required = false) AddedBy addedBy,
      Authentication auth)
      throws SkillNotFoundException {

    if (addedBy != null) {
      skillService.getAllByAddedBy(addedBy);
    }

    if (skillIds != null) {
      List<Integer> idList = skillIds.stream().map(Integer::parseInt).collect(Collectors.toList());

      return skillService.getAllById(idList);
    }

    return skillService.getAll();
  }
}
