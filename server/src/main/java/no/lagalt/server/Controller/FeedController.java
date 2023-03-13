package no.lagalt.server.Controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import no.lagalt.server.Dtos.Project.*;
import no.lagalt.server.Service.HistoryService;
import no.lagalt.server.Service.ProjectService;
import no.lagalt.server.Utils.Exception.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@Tag(name = "Feed")
@CrossOrigin // Required for front-end. Remove before deployment for security
@RequestMapping(path = "api/v1/feed")
@RestController
public class FeedController {

  @Autowired private ProjectService projectService;
  @Autowired private HistoryService historyService;

  @Operation(summary = "Get a list of projects for the feed")
  @GetMapping
  Page<ProjectPreviewDto> getProjects(Pageable pageable, Authentication auth)
      throws NotFoundException {

    String uid = auth.getName();

    Page<ProjectPreviewDto> dtoPage = projectService.getPage(pageable, uid);

    if (dtoPage.getSize() > 0) {
      historyService.addToSeen(dtoPage, uid);
    }

    return dtoPage;
  }

  // void addToSeen(Page<ProjectPreviewDto> previewPageDto, Authentication auth) throws
  // NotFoundException {
  //  String uid = auth.getName();
  //
  // historyService.addToSeen(dtoPage, uid);
  // }

  void addToClicked(Integer projectId, Authentication auth) throws NotFoundException {
    String uid = auth.getName();
  }
}
