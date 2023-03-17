package no.lagalt.server.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class NotFoundException extends RuntimeException {
  public NotFoundException(int id) {
    super("Resource not found in database with id: " + id);
  }

  public NotFoundException() {
    super("Resource not found in database");
  }

  public NotFoundException(String message) {
    super(message);
  }
}
