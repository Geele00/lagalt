package no.lagalt.server.Controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import java.util.List;
import no.lagalt.server.Dtos.Project.*;
import no.lagalt.server.Exception.*;
import no.lagalt.server.Service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@Tag(name = "Projects")
@CrossOrigin // Required for front-end. Remove before deployment for security
@RequestMapping(path = "api/v1/projects")
@RestController
public class ProjectController {

  @Autowired private ProjectService projectService;

  @Operation(summary = "Get a list of projects")
  @GetMapping
  List<ProjectDto> getProjects(
      @RequestParam(name = "title", required = false) String title, Authentication auth)
      throws NotFoundException {

    if (title != null) return List.of(projectService.getByTitle(title));

    return projectService.getAll();
  }

  @Operation(summary = "Get one project by ID")
  @GetMapping("{id}")
  ProjectDto getOneById(@PathVariable Integer id) throws NotFoundException {
    return projectService.getById(id);
  }

  @Operation(summary = "Update a project")
  @PutMapping("{id}")
  void updateProject(@RequestBody UpdateProjectDto updateProjectDto, Authentication auth)
      throws NotFoundException {
    String uid = auth.getName();

    projectService.updateProject(updateProjectDto, uid);
  }

  @Operation(summary = "Create new project")
  @ResponseStatus(HttpStatus.CREATED)
  @PostMapping
  ProjectDto createProject(@RequestBody NewProjectDto newProjectDto, Authentication auth)
      throws AlreadyExistsException {

    String uid = auth.getName();

    return projectService.createProject(newProjectDto, uid);
  }

  @Operation(summary = "Delete a project")
  @DeleteMapping("{projectId}")
  void deleteProjectById(@PathVariable Integer id) throws NotFoundException {
    projectService.deleteById(id);
  }
}
