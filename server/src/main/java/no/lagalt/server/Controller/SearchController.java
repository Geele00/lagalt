package no.lagalt.server.Controller;

// import io.swagger.v3.oas.annotations.Operation;
// import no.lagalt.server.Dtos.Page.PageDto;
// import no.lagalt.server.Interfaces.Searchable;
// import no.lagalt.server.Service.*;
// import org.springframework.beans.factory.annotation.Autowired;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.*;

@Tag(name = "Search")
@CrossOrigin // Required for front-end. Remove before deployment for security
@RequestMapping(path = "api/v1/search")
@RestController
public class SearchController {

  // @Autowired private UserService userService;
  // @Autowired private HistoryService historyService;

  // @Operation(summary = "Search the database")
  // @GetMapping
  // PageDto<Searchable> getSearchResult(
  //    @RequestParam(name = "query", required = false) String query, Authentication auth) {}
}
