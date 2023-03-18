package no.lagalt.server.Exception.Chat;

import no.lagalt.server.Exception.NotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ChatEmptyException extends NotFoundException {

  public ChatEmptyException(String message) {
    super(message);
  }

  public ChatEmptyException() {
    super("Chat is empty");
  }
}
