package no.lagalt.server.Service;

import java.time.LocalDateTime;
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

@Service
public class ProjectService {

  @Autowired private ProjectRepository projectRepo;
  @Autowired private UserRepository userRepo;

  @Autowired private ProjectMapper projectMapper;

  public boolean validateExists(Integer id) {
    return projectRepo.existsById(id);
  }

  public ProjectDto getById(Integer id) throws NotFoundException {
    Project project = projectRepo.findById(id).orElseThrow(() -> new NotFoundException(id));

    return projectMapper.toDto(project);
  }

  public Page<ProjectDto> getPage(Pageable pageable) {

    Page<Project> projectsPage = projectRepo.findAll(pageable);

    return projectsPage.map(
        projecttt -> {
          ProjectDto dto = projectMapper.toDto(projecttt);
          return dto;
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

  public ProjectDto createProject(NewProjectDto newProjectDto) {

    Integer ownerId = newProjectDto.getOwnerId();

    LagaltUser owner =
        userRepo
            .findById(ownerId)
            .orElseThrow(
                () -> new NotFoundException("User not found in database with ID: " + ownerId));

    List<Project> existingProjects = owner.getProjects();

    String projectTitle = newProjectDto.getTitle();

    boolean alreadyExists =
        existingProjects.stream().anyMatch(project -> projectTitle.matches(project.getTitle()));

    if (alreadyExists)
      throw new AlreadyExistsException(
          "Project with title \"" + projectTitle + "\" already exists on your account.");

    Project newProject = projectMapper.toProject(newProjectDto);

    newProject.setOwner(owner);

    newProject.setCreationDateTime(LocalDateTime.now());

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
