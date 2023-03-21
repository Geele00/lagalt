package no.lagalt.server.Exception.Skill;


import no.lagalt.server.Enum.ExceptionArgumentType;
import no.lagalt.server.Exception.NotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class SkillNotFoundException extends NotFoundException {

  public SkillNotFoundException(int id) {
    super("Skill was not found in database with id: " + id);
  }

  public SkillNotFoundException(String arg, ExceptionArgumentType type) {
    super(
        type == ExceptionArgumentType.TITLE
            ? "Skill was not found in the database with title" + arg
            : "ERROR(SkillNotFoundException): Exception message argument not provided");
  }

  public SkillNotFoundException(String message) {
    super(message);
  }
}
