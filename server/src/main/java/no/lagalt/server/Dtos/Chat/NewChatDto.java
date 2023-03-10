package no.lagalt.server.Dtos.Chat;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import no.lagalt.server.Dtos.User.UserDto;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class NewChatDto {

  List<UserDto> users;
}
