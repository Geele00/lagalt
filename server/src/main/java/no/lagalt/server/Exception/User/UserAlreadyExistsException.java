package no.lagalt.server.Exception.User;

import no.lagalt.server.Enum.ExceptionArgumentType;
import no.lagalt.server.Exception.AlreadyExistsException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.BAD_REQUEST)
public class UserAlreadyExistsException extends AlreadyExistsException {

  public UserAlreadyExistsException() {
    super("User already exists with the provided username");
  }

  public UserAlreadyExistsException(String arg, ExceptionArgumentType type) {
    super(
        type == ExceptionArgumentType.USERNAME
            ? "User already exists with username: " + arg
            : "ERROR(UserNotFoundException): Valid exception message argument not provided");
  }
}
