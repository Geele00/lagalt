package no.lagalt.server.Exception.Project;

import no.lagalt.server.Exception.ForbiddenException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.FORBIDDEN)
public class NotOwnerException extends ForbiddenException {

  public NotOwnerException() {
    super("ACCESS DENIED: User is not owner");
  }
}
