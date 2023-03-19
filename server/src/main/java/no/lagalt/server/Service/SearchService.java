package no.lagalt.server.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import no.lagalt.server.Dtos.Page.PageDto;
import no.lagalt.server.Dtos.Search.ProjectSearchResult;
import no.lagalt.server.Exception.User.UserNotFoundException;
import no.lagalt.server.Interfaces.IProjectSearchResult;
import no.lagalt.server.Mapper.*;
import no.lagalt.server.Repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.domain.Sort.Order;
import org.springframework.stereotype.Service;

@Service
public class SearchService {

  @Autowired private ProjectRepository projectRepo;

  @Autowired private ProjectMapper projectMapper;

  public PageDto<ProjectSearchResult> getBySkill(Integer skillId) {

    return null;
  }

  public PageDto<ProjectSearchResult> getSearchResults(String query, String uid)
      throws UserNotFoundException {

    List<Order> orders = new ArrayList<Order>();

    Order byTitle = new Order(Direction.ASC, "Title");
    orders.add(byTitle);
    Order byCreationDate = new Order(Direction.DESC, "CreatedAt");
    orders.add(byCreationDate);

    var twoWeeksAgo = LocalDateTime.now().minusDays(14);
    var twoYearsAgo = LocalDateTime.now().minusYears(2);

    List<IProjectSearchResult> results =
        projectRepo.findAllByTitleContainsIgnoreCaseAndCreatedAtAfter(
            query, twoYearsAgo, Sort.by(orders));

    System.out.println(results.size());

    List<ProjectSearchResult> resultsDtoList = projectMapper.toSearchResultDto(results);

    return new PageDto<ProjectSearchResult>(resultsDtoList, 1, true);
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
