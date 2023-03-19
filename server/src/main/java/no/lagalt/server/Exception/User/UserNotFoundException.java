package no.lagalt.server.Exception.User;

import no.lagalt.server.Enum.ExceptionArgumentType;
import no.lagalt.server.Exception.NotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class UserNotFoundException extends NotFoundException {

  public UserNotFoundException() {
    super("User was not found in database");
  }

  public UserNotFoundException(int id) {
    super("User was not found in database with id: " + id);
  }

  public UserNotFoundException(String arg, ExceptionArgumentType type) {
    super(
        type == ExceptionArgumentType.UID
            ? "User was not found in the database with the provided UID"
            : type == ExceptionArgumentType.USERNAME
                ? "User was not found in database with username: " + arg
                : "ERROR(UserNotFoundException): Valid exception message argument not provided");
  }

  public UserNotFoundException(String message) {
    super(message);
  }
}
