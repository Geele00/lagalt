package no.lagalt.server.Exception.Project;

import no.lagalt.server.Enum.ExceptionArgumentType;
import no.lagalt.server.Exception.AlreadyExistsException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class ProjectAlreadyExistsException extends AlreadyExistsException {
  public ProjectAlreadyExistsException(int id) {
    super("Project with id: " + id + " already exists in the database.");
  }

  public ProjectAlreadyExistsException() {
    super("Project already exists in the database.");
  }

  public ProjectAlreadyExistsException(String arg, ExceptionArgumentType type) {
    super(
        type == ExceptionArgumentType.TITLE
            ? "Project with title " + arg + " already exists for user"
            : "ERROR(ProjectNotFoundException): Exception message argument not provided");
  }

  public ProjectAlreadyExistsException(String message) {
    super(message);
  }
}
