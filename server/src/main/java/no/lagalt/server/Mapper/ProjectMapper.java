package no.lagalt.server.Mapper;

import java.util.List;
import no.lagalt.server.Dtos.Project.*;
import no.lagalt.server.Dtos.Search.ProjectSearchResult;
import no.lagalt.server.Entity.Project;
import no.lagalt.server.Interfaces.IProjectSearchResult;
import org.mapstruct.BeanMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.mapstruct.NullValuePropertyMappingStrategy;

@Mapper(
    componentModel = "spring",
    uses = {SkillMapper.class, UserMapper.class})
public interface ProjectMapper {

  // @Mapping(target = "createdAt", ignore = true)
  // @Mapping(target = "updatedAt", ignore = true)
  // @Mapping(target = "projectId", ignore = true)
  // @Mapping(target = "messageBoard", ignore = true)
  // @Mapping(target = "owner", ignore = true)
  // @Mapping(target = "admins", ignore = true)
  @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
  Project toProject(NewProjectDto newProjectDto);

  ProjectDto toDto(Project project);

  List<ProjectDto> toDto(List<Project> project);

  ProjectPreviewDto toPreviewDto(Project project);

  List<ProjectPreviewDto> toPreviewDto(List<Project> project);

  @Mapping(target = "industryNames", source = "res.industries.name")
  @Mapping(target = "wantedSkillsNames", source = "res.wantedSkillsNames.name")
  List<ProjectSearchResult> toSearchResultDto(List<IProjectSearchResult> res);

  @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
  void updateProjectFromDto(UpdateProjectDto dto, @MappingTarget Project project);
}
