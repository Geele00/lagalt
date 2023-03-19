package no.lagalt.server.Service;

import java.time.LocalDateTime;
import java.util.List;
import no.lagalt.server.Dtos.Page.PageDto;
import no.lagalt.server.Dtos.Search.ProjectSearchResult;
import no.lagalt.server.Exception.User.UserNotFoundException;
import no.lagalt.server.Interfaces.IProjectSearchResult;
import no.lagalt.server.Mapper.*;
import no.lagalt.server.Repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SearchService {

  @Autowired private ProjectRepository projectRepo;

  @Autowired private ProjectMapper projectMapper;

  public PageDto<ProjectSearchResult> getSearchResults(String query, String uid)
      throws UserNotFoundException {

    var twoWeeksAgo = LocalDateTime.now().plusDays(14);

    List<IProjectSearchResult> containing =
        projectRepo.findAllByTitleContainsIgnoreCaseAndCreatedAtAfterOrderByTitle(
            query, twoWeeksAgo);

    System.out.println(containing.size());

    List<ProjectSearchResult> res = projectMapper.toSearchResultDto(containing);

    return new PageDto<ProjectSearchResult>(res, 1, true);
  }
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
