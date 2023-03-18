package no.lagalt.server.Exception.Project;

import no.lagalt.server.Enum.ExceptionArgumentType;
import no.lagalt.server.Exception.NotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ProjectNotFoundException extends NotFoundException {

  public ProjectNotFoundException(int id) {
    super("Project was not found in database with id: " + id);
  }

  public ProjectNotFoundException(String arg, ExceptionArgumentType type) {
    super(
        type == ExceptionArgumentType.TITLE
            ? "Project was not found in the database with title" + arg
            : "ERROR(ProjectNotFoundException): Exception message argument not provided");
  }

  public ProjectNotFoundException(String message) {
    super(message);
  }
}
