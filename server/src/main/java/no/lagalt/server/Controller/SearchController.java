package no.lagalt.server.Controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import no.lagalt.server.Dtos.Page.PageDto;
import no.lagalt.server.Dtos.Search.ProjectSearchResult;
import no.lagalt.server.Service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@Tag(name = "Search")
@CrossOrigin // Required for front-end. Remove before deployment for security
@RequestMapping(path = "api/v1/search")
@RestController
public class SearchController {

  @Autowired private SearchService searchService;

  @Operation(summary = "Search the database")
  @GetMapping
  PageDto<ProjectSearchResult> getSearchResult(
      @RequestParam(name = "query", required = true) String query, Authentication auth) {

    String uid = auth.getName();

    return searchService.getSearchResults(query, uid);
  }
}
