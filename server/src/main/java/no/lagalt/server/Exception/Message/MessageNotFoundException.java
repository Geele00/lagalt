package no.lagalt.server.Exception.Message;

import no.lagalt.server.Exception.NotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class MessageNotFoundException extends NotFoundException {

  public MessageNotFoundException(int id) {
    super("Message was not found in database with id: " + id);
  }

  public MessageNotFoundException() {
    super("Message was not found in database");
  }

  public MessageNotFoundException(String message) {
    super(message);
  }
}
