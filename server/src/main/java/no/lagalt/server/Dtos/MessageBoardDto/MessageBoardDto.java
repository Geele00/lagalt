package no.lagalt.server.Dtos.MessageBoardDto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import java.time.LocalDate;

@Data
public class MessageBoardDto {
    @JsonIgnore
    private int id;
    @JsonIgnore
    private int projectId;
    private String name;
    private LocalDate creationDate;

}
