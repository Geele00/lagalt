package no.lagalt.server.Service;

import java.util.Collection;
import no.lagalt.server.Entity.Project;
import no.lagalt.server.Repository.ProjectRepository;
import no.lagalt.server.Utils.Exception.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {

  @Autowired private ProjectRepository projectRepository;

  public Project findById(Integer id) {
    if (projectRepository.existsById(id)) {
      return projectRepository.findById(id).get();
    } else {
      throw new NotFoundException(id);
    }
  }

  public Collection<Project> findAll() {
    return null;
  }

  public Project add(Project entity) {
    return null;
  }

  public Project update(Project entity) {
    return null;
  }

  public void delete(Project entity) {}

  public void deleteById(Integer integer) {}
}
