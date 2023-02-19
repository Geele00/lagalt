package no.lagalt.server.Dtos.Channel;

import lombok.Data;

import java.time.LocalDate;
@Data
public class ChannelDto {

    private int id;
  //  private int messageBoardId;
    private String name;
    private LocalDate creationDate;

}
