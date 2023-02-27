package no.lagalt.server.Controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import java.util.List;
import no.lagalt.server.Dtos.Project.*;
import no.lagalt.server.Service.ProjectService;
import no.lagalt.server.Utils.Exception.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@Tag(name = "Projects")
@CrossOrigin(origins = "*") // Required for front-end. Remove before deployment for security
@RequestMapping(path = "api/v1/projects")
@RestController
public class ProjectController {

  @Autowired private ProjectService projectService;

  @Operation(summary = "Get a list of projects")
  @GetMapping
  public List<ProjectDto> getProjects() throws NotFoundException {
    return projectService.getAll();
  }

  @Operation(summary = "Get one project by ID")
  @GetMapping("{id}")
  public ProjectDto getOneById(@PathVariable Integer id) throws NotFoundException {
    return projectService.getById(id);
  }

  @Operation(summary = "Update a project")
  @PutMapping("{id}")
  public ProjectDto updateProject(
      @RequestBody UpdateProjectDto updateProjectDto, @PathVariable Integer id)
      throws NotFoundException {
    if (!projectService.validateExists(id)) throw new NotFoundException(id);

    ProjectDto savedProject = projectService.save(updateProjectDto);

    return savedProject;
  }
}
