package no.lagalt.server.Service;

import java.util.List;
import no.lagalt.server.Dtos.History.UpdateHistoryDto;
import no.lagalt.server.Dtos.Project.ProjectDto;
import no.lagalt.server.Entity.*;
import no.lagalt.server.Mapper.HistoryMapper;
import no.lagalt.server.Repository.*;
import no.lagalt.server.Utils.Exception.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HistoryService {

  @Autowired private UserService userService;
  @Autowired private UserRepository userRepo;
  @Autowired private HistoryRepo historyRepo;
  @Autowired private ProjectRepository projectRepo;
  @Autowired private ProjectService projectService;
  @Autowired private HistoryMapper historyMapper;

  private LagaltUser findUserByUid(String uid) throws NotFoundException {
    return userRepo
        .findByUid(uid)
        .orElseThrow(() -> new NotFoundException("User not found in database"));
  }

  public History findByUser(LagaltUser user) throws NotFoundException {
    return historyRepo.findByLagaltUser(user).orElseThrow(() -> new NotFoundException());
  }

  public boolean existsByUser(LagaltUser user) {
    return historyRepo.existsByLagaltUser(user);
  }

  public void save(List<Integer> projectIds, String uid) {

    LagaltUser user = findUserByUid(uid);

    History history = user.getHistory();

    // if (history == null) {
    //  List<Project> newlySeenProjects = projectRepo.findAllById(projectIds);
    //
    //  History his = new History();
    //  his.setLagaltUser(user);
    //  his.setSeenProjects(newlySeenProjects);
    //  historyRepo.save(his);
    //
    //  return;
    // }

    UpdateHistoryDto updateDto = new UpdateHistoryDto();

    List<ProjectDto> newlySeenProjects = projectService.getAllById(projectIds);
    updateDto.setSeenProjects(newlySeenProjects);

    historyMapper.updateHistoryFromDto(updateDto, history);

    historyRepo.save(history);
  }
}
