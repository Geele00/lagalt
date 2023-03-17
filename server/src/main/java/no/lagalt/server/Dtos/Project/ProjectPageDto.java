package no.lagalt.server.Dtos.Project;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ProjectPageDto<T> {

  List<T> projects;

  Integer pageNumber;

  boolean hasNextPage;
}
