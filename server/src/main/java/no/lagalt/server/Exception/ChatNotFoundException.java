package no.lagalt.server.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ChatNotFoundException extends RuntimeException {

  public ChatNotFoundException() {
    super("Chat not found in database");
  }

  public ChatNotFoundException(String message) {
    super(message);
  }
}
