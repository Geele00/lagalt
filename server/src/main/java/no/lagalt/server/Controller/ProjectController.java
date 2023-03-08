package no.lagalt.server.Controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import java.security.Principal;
import java.util.List;
import no.lagalt.server.Dtos.Project.*;
import no.lagalt.server.Service.ProjectService;
import no.lagalt.server.Utils.Exception.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
      @RequestParam(name = "title", required = false) String title, Principal principal)
      throws NotFoundException {

    System.out.println(principal);

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
  ProjectDto updateProject(@RequestBody UpdateProjectDto updateProjectDto, @PathVariable Integer id)
      throws NotFoundException {
    if (!projectService.validateExists(id)) throw new NotFoundException(id);

    ProjectDto savedProject = projectService.save(updateProjectDto);

    return savedProject;
  }

  @Operation(summary = "Create new project")
  @ResponseStatus(HttpStatus.CREATED)
  @PostMapping
  ProjectDto createProject(@RequestBody NewProjectDto newProjectDto) throws AlreadyExistsException {

    return projectService.createProject(newProjectDto);
  }

  @Operation(summary = "Delete a project")
  @DeleteMapping("{projectId}")
  void deleteProjectById(@PathVariable Integer id) throws NotFoundException {
    projectService.deleteById(id);
  }
}
