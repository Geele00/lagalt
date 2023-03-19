package no.lagalt.server.Dtos.Chat;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import no.lagalt.server.Dtos.User.UserDto;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ChatDto {

  List<UserDto> users;
}
