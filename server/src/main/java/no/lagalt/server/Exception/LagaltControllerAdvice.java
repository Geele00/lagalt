package no.lagalt.server.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class LagaltControllerAdvice {

  @ResponseStatus(value = HttpStatus.FORBIDDEN)
  @ExceptionHandler(ForbiddenException.class)
  @ResponseBody
  public ResponseEntity<String> handleForbiddenException(ForbiddenException ex) {
    return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Error: " + ex.getMessage());
  }

  @ResponseStatus(value = HttpStatus.NOT_FOUND)
  @ExceptionHandler(NotFoundException.class)
  @ResponseBody
  public ResponseEntity<String> handleNotFoundException(NotFoundException ex) {
    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error: " + ex.getMessage());
  }

  @ResponseStatus(value = HttpStatus.NOT_FOUND)
  @ExceptionHandler(AlreadyExistsException.class)
  @ResponseBody
  public ResponseEntity<String> handleAlreadyExistsException(AlreadyExistsException ex) {
    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error: " + ex.getMessage());
  }
}
