package com.example.server.Service;

import com.example.server.Models.Project.Project;
import com.example.server.Repository.ProjectRepository;
import com.example.server.Utils.Exception.NotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collection;
@Service
public class ProjectServiceImpl {

    private final ProjectRepository projectRepository;

    public ProjectServiceImpl(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

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

    public void delete(Project entity) {

    }

    public void deleteById(Integer integer) {

    }
}
