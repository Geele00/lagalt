package no.lagalt.server.Service;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;
import no.lagalt.server.Entity.*;
import no.lagalt.server.Repository.*;
import no.lagalt.server.Utils.Exception.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HistoryService {

  @Autowired private UserRepository userRepo;
  @Autowired private ProjectRepository projectRepo;

  private LagaltUser findUserByUid(String uid) throws NotFoundException {
    return userRepo
        .findByUid(uid)
        .orElseThrow(() -> new NotFoundException("User not found in database"));
  }

  private History createHistory(LagaltUser user) {
    History history = new History();
    history.setLagaltUser(user);
    user.setHistory(history);
    userRepo.saveAndFlush(user);

    return history;
  }

  public void addToSeen(Set<Integer> projectIds, String uid) {

    LagaltUser user = findUserByUid(uid);
    History history = user.getHistory();

    List<Project> newlySeenProjects = projectRepo.findAllById(projectIds);

    if (history == null) {
      history = createHistory(user);
      history.setSeenProjects(newlySeenProjects);
    } else {
      var oldHistory = history.getSeenProjects();
      oldHistory.addAll(newlySeenProjects);
      var newHistory = oldHistory.stream().distinct().collect(Collectors.toList());
      history.setSeenProjects(newHistory);
    }

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
