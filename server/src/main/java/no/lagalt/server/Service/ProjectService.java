package no.lagalt.server.Service;

import java.util.List;
import no.lagalt.server.Dtos.Project.*;
import no.lagalt.server.Entity.*;
import no.lagalt.server.Mapper.*;
import no.lagalt.server.Repository.*;
import no.lagalt.server.Utils.Exception.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.webjars.NotFoundException;

@Service
public class ProjectService {

  @Autowired private UserRepository userRepo;
  @Autowired private ProjectRepository projectRepo;

  @Autowired private ProjectMapper projectMapper;

  public boolean validateExists(Integer id) {
    return projectRepo.existsById(id);
  }

  public ProjectDto getByTitle(String title) throws NotFoundException {
    Project project =
        projectRepo.findByTitle(title).orElseThrow(() -> new NotFoundException(title));

    return projectMapper.toDto(project);
  }

  public List<ProjectDto> getAllById(List<Integer> ids) throws NotFoundException {
    List<Project> project = projectRepo.findAllById(ids);

    return projectMapper.toDto(project);
  }

  public ProjectDto getById(Integer id) throws NotFoundException {
    Project project =
        projectRepo
            .findById(id)
            .orElseThrow(
                () ->
                    new NotFoundException("Project with ID of " + id + " not found in database."));

    return projectMapper.toDto(project);
  }

  public Page<ProjectPreviewDto> getPage(Pageable pageable, String uid) throws NotFoundException {

    Page<Project> projectsPage = projectRepo.findAll(pageable);

    if (projectsPage.isEmpty()) throw new NotFoundException("No projects found in database");

    return projectsPage.map(
        project -> {
          return projectMapper.toPreviewDto(project);
        });
  }

  public List<ProjectDto> getAll() {
    List<Project> projects = projectRepo.findAll();

    return projectMapper.toDto(projects);
  }

  public Project save(Project project) {
    return projectRepo.save(project);
  }

  public ProjectDto save(UpdateProjectDto updateProjectDto) {
    Project projectToUpdate = projectMapper.toProject(updateProjectDto);

    Project savedProject = save(projectToUpdate);

    return projectMapper.toDto(savedProject);
  }

  public ProjectDto createProject(NewProjectDto newProjectDto, String uid) {

    LagaltUser owner =
        userRepo
            .findByUid(uid)
            .orElseThrow(
                () -> new NotFoundException("User not found in database with UID: " + uid));

    String projectTitle = newProjectDto.getTitle();

    boolean alreadyExistsWithTitle =
        owner.getProjects().stream().anyMatch(project -> projectTitle.matches(project.getTitle()));

    if (alreadyExistsWithTitle)
      throw new AlreadyExistsException(
          "Project with title \"" + projectTitle + "\" already exists on your account.");

    Project newProject = projectMapper.toProject(newProjectDto);

    newProject.setOwner(owner);

    Project savedProject = save(newProject);

    return projectMapper.toDto(savedProject);
  }

  public void deleteById(Integer id) throws NotFoundException {
    try {
      projectRepo.deleteById(id);
    } catch (NotFoundException err) {
      throw err;
    }
  }
}
