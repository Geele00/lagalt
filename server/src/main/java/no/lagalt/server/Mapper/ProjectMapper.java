package no.lagalt.server.Mapper;

import java.util.List;
import no.lagalt.server.Dtos.Project.NewProjectDto;
import no.lagalt.server.Dtos.Project.ProjectDto;
import no.lagalt.server.Dtos.Project.ProjectPreviewDto;
import no.lagalt.server.Entity.Project;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(
    componentModel = "spring",
    uses = {SkillMapper.class, UserMapper.class})
public interface ProjectMapper {

  @Mapping(target = "createdAt", ignore = true)
  @Mapping(target = "updatedAt", ignore = true)
  @Mapping(target = "projectId", ignore = true)
  @Mapping(target = "messageBoard", ignore = true)
  @Mapping(target = "owner", ignore = true)
  Project toProject(NewProjectDto newProjectDto);

  ProjectDto toDto(Project project);

  List<ProjectDto> toDto(List<Project> project);

  ProjectDto previewToDto(ProjectPreviewDto project);

  ProjectPreviewDto toPreviewDto(Project project);
}
