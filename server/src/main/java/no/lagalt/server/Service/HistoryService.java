package no.lagalt.server.Service;

import java.util.Set;
import no.lagalt.server.Dtos.History.UpdateHistoryDto;
import no.lagalt.server.Dtos.Project.ProjectDto;
import no.lagalt.server.Dtos.Project.ProjectPreviewDto;
import no.lagalt.server.Entity.*;
import no.lagalt.server.Mapper.ProjectMapper;
import no.lagalt.server.Mapper.UserMapper;
import no.lagalt.server.Repository.*;
import no.lagalt.server.Utils.Exception.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

@Service
public class HistoryService {

  @Autowired private UserRepository userRepo;
  @Autowired private HistoryRepo historyRepo;
  @Autowired private ProjectMapper projectMapper;
  @Autowired private UserMapper userMapper;

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

  private History createHistory(LagaltUser user) {
    History history = new History();
    history.setLagaltUser(user);
    user.setHistory(history);
    userRepo.saveAndFlush(user);

    return history;
  }

  public void addToSeen(Page<ProjectPreviewDto> previewPageDto, String uid) {

    LagaltUser user = findUserByUid(uid);
    History history = user.getHistory();

    Set<ProjectPreviewDto> previewSetDto = previewPageDto.toSet();

    Set<ProjectDto> newlySeenProjectsDto = projectMapper.previewToDto(previewSetDto);

    UpdateHistoryDto updateDto = new UpdateHistoryDto();

    if (history == null) {
      history = createHistory(user);
      updateDto.setSeenProjects(newlySeenProjectsDto);
    } else {
      var oldHistoryDto = projectMapper.toDto(history.getSeenProjects());
      newlySeenProjectsDto.addAll(oldHistoryDto);
    }

    updateDto.setLagaltUser(user);
    updateDto.setSeenProjects(newlySeenProjectsDto);

    userMapper.updateHistoryFromDtoByLagaltUser(updateDto, user, history);

    userRepo.saveAndFlush(user);
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
  //
}
