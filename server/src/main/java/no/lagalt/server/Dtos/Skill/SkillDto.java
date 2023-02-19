package no.lagalt.server.Dtos.Skill;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import no.lagalt.server.Dtos.User.UserDto;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SkillDto {
    private Integer skillId;

    private String name;

    private String addedBy;

    // private List<Industry> industries;

    private List<UserDto> users;
}
