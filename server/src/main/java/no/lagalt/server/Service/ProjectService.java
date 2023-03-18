package no.lagalt.server.Service;

import java.util.List;
import no.lagalt.server.Dtos.Page.PageDto;
import no.lagalt.server.Dtos.Project.*;
import no.lagalt.server.Entity.*;
import no.lagalt.server.Enum.ExceptionArgumentType;
import no.lagalt.server.Exception.*;
import no.lagalt.server.Exception.Project.*;
import no.lagalt.server.Exception.User.UserNotFoundException;
import no.lagalt.server.Mapper.*;
import no.lagalt.server.Repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {

  @Autowired private UserRepository userRepo;
  @Autowired private ProjectRepository projectRepo;

  @Autowired private ProjectMapper projectMapper;

  public boolean validateExists(Integer id) {
    return projectRepo.existsById(id);
  }

  public ProjectDto getByTitle(String title) throws ProjectNotFoundException {
    Project project =
        projectRepo
            .findByTitle(title)
            .orElseThrow(() -> new ProjectNotFoundException(title, ExceptionArgumentType.TITLE));

    return projectMapper.toDto(project);
  }

  public List<ProjectDto> getAllById(List<Integer> ids) throws ProjectNotFoundException {
    List<Project> project = projectRepo.findAllById(ids);

    return projectMapper.toDto(project);
  }

  private Project findById(Integer id) throws ProjectNotFoundException {
    return projectRepo.findById(id).orElseThrow(() -> new ProjectNotFoundException(id));
  }

  public ProjectDto getById(Integer id) throws ProjectNotFoundException {
    return projectMapper.toDto(findById(id));
  }

  public PageDto<ProjectPreviewDto> getPage(Pageable pageable, String uid)
      throws NotFoundException {

    Page<Project> projectsPage = projectRepo.findAll(pageable);

    if (projectsPage.isEmpty()) throw new ProjectNotFoundException("No projects found in database");

    List<Project> projects = projectsPage.toList();

    List<ProjectPreviewDto> previewDtoList = projectMapper.toPreviewDto(projects);
    Integer pageNumber = projectsPage.getNumber();
    boolean hasNextPage = projectsPage.hasNext();

    return new PageDto<ProjectPreviewDto>(previewDtoList, pageNumber, hasNextPage);
  }

  public List<ProjectDto> getAll() {
    List<Project> projects = projectRepo.findAll();

    return projectMapper.toDto(projects);
  }

  public Project save(Project project) {
    return projectRepo.save(project);
  }

  public void updateProject(UpdateProjectDto updateProjectDto, String uid)
      throws UserNotFoundException, NotProjectAdminException, NotOwnerException {

    LagaltUser user = userRepo.findByUid(uid).orElseThrow(() -> new UserNotFoundException(uid));

    Integer projectId = updateProjectDto.getProjectId();

    Project project = findById(projectId);

    boolean userIsAdmin = project.getAdmins().stream().anyMatch(admin -> admin.getUid() == uid);

    if (!userIsAdmin) throw new NotProjectAdminException();

    Integer updateOwnerId = updateProjectDto.getOwnerId();

    if (updateOwnerId != null && project.getOwner().getUserId() != user.getUserId())
      throw new NotOwnerException();

    projectMapper.updateProjectFromDto(updateProjectDto, project);

    save(project);
  }

  private LagaltUser findUserByUid(String uid) throws UserNotFoundException {
    return userRepo
        .findByUid(uid)
        .orElseThrow(() -> new UserNotFoundException(uid, ExceptionArgumentType.UID));
  }

  public boolean existsByUserAndTitle(LagaltUser user, String projectTitle) {
    return user.getProjects().stream()
        .anyMatch(project -> projectTitle.matches(project.getTitle()));
  }

  public ProjectDto createProject(NewProjectDto newProjectDto, String uid)
      throws UserNotFoundException, AlreadyExistsException {

    LagaltUser owner = findUserByUid(uid);

    String projectTitle = newProjectDto.getTitle();

    if (existsByUserAndTitle(owner, projectTitle))
      throw new ProjectAlreadyExistsException(projectTitle, ExceptionArgumentType.TITLE);

    Project newProject = projectMapper.toProject(newProjectDto);

    newProject.setOwner(owner);
    // set industries
    // set wanted skills

    Project savedProject = save(newProject);

    return projectMapper.toDto(savedProject);
  }

  public void deleteById(Integer id) throws ProjectNotFoundException {
    try {
      projectRepo.deleteById(id);
    } catch (ProjectNotFoundException err) {
      throw err;
    }
  }
}
