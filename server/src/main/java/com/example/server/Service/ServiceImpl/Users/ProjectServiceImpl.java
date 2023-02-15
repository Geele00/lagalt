package com.example.server.Service.ServiceImpl.Users;

import com.example.server.Models.Users.Project;
import com.example.server.Repository.Users.ProjectRepository;
import com.example.server.Service.Interface.Users.ProjectService;
import com.example.server.Utils.Exception.NotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collection;
@Service
public class ProjectServiceImpl implements ProjectService {

    private final ProjectRepository projectRepository;

    public ProjectServiceImpl(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    @Override
    public Project findById(Integer id) {
        if (projectRepository.existsById(id)) {
            return projectRepository.findById(id).get();
        } else {
            throw new NotFoundException(id);
        }
    }

    @Override
    public Collection<Project> findAll() {
        return null;
    }

    @Override
    public Project add(Project entity) {
        return null;
    }

    @Override
    public Project update(Project entity) {
        return null;
    }

    @Override
    public void delete(Project entity) {

    }

    @Override
    public void deleteById(Integer integer) {

    }
}
