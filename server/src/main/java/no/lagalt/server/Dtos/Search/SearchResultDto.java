package no.lagalt.server.Dtos.Search;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class SearchResultDto {

  List<Integer> results;
}
