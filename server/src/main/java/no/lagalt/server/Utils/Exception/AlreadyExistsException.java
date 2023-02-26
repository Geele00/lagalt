package no.lagalt.server.Utils.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class AlreadyExistsException extends RuntimeException {
  public AlreadyExistsException(int id) {
    super("Resource with id: " + id + " already exists in the database.");
  }

  public AlreadyExistsException() {
    super("Resource  already exists in the database.");
  }

  public AlreadyExistsException(String message) {
    super(message);
  }
}
