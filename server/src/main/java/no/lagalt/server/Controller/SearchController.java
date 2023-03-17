package no.lagalt.server.Controller;

import io.swagger.v3.oas.annotations.tags.Tag;
import no.lagalt.server.Service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@Tag(name = "Search")
@CrossOrigin // Required for front-end. Remove before deployment for security
@RequestMapping(path = "api/v1/search")
@RestController
public class SearchController {

  @Autowired private UserService userService;
  @Autowired private HistoryService historyService;

  // @Operation(summary = "Search the database")
  // @GetMapping
  // List<Integer> getSearchResult(
  //    @RequestParam(name = "query", required = false) String query, Authentication auth) {
  //
  // }
}
