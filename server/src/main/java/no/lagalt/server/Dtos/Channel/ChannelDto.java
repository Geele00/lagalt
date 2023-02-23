package no.lagalt.server.Dtos.Channel;

import lombok.Data;
import no.lagalt.server.Dtos.Message.MessageDto;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Data
public class ChannelDto {

    private int id;
    private String name;
    private LocalDateTime creationDate;
    private List<MessageDto> messageDto;

}
