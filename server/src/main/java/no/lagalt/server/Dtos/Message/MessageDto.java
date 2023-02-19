package no.lagalt.server.Dtos.Message;

import no.lagalt.server.Entity.LagaltUser;

import java.time.LocalDateTime;

public class MessageDto {

    private final String text;
    private final LagaltUser lagaltUser;
    private final LocalDateTime timeStamp;

    public MessageDto(String text, LagaltUser lagaltUser, LocalDateTime timeStamp) {
        this.text = text;
        this.lagaltUser = lagaltUser;
        this.timeStamp = timeStamp;
    }
}
