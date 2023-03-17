package no.lagalt.server.Exception.Project;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.FORBIDDEN)
public class NotOwnerException extends RuntimeException {

  public NotOwnerException() {
    super("ACCESS DENIED: User is not owner");
  }
}
