package no.lagalt.server.Controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import no.lagalt.server.Dtos.Page.PageDto;
import no.lagalt.server.Dtos.Project.*;
import no.lagalt.server.Service.ProjectService;
import no.lagalt.server.Utils.Exception.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@Tag(name = "Feed")
@CrossOrigin // Required for front-end. Remove before deployment for security
@RequestMapping(path = "api/v1/feed")
@RestController
public class FeedController {

  @Autowired private ProjectService projectService;

  @Operation(summary = "Get a list of projects for the feed")
  @GetMapping
  PageDto<ProjectPreviewDto> getProjects(Pageable pageable, Authentication auth)
      throws NotFoundException {

    String uid = auth.getName();

    return projectService.getPage(pageable, uid);
  }

  // void addToClicked(Integer projectId, Authentication auth) throws NotFoundException {
  //  String uid = auth.getName();
  // }
}
