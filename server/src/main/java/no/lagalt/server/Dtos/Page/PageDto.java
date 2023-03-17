package no.lagalt.server.Dtos.Page;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class PageDto<T> {

  List<T> content;

  Integer pageNumber;

  boolean hasNextPage;
}
