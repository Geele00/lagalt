package no.lagalt.server.Service;

import no.lagalt.server.Mappers.Message.MessageMapper;
import no.lagalt.server.Models.ActiveDtos.MessageDto.MessageDto;
import no.lagalt.server.Models.Message.Message;
import no.lagalt.server.Repository.LagaltUserRepository;
import no.lagalt.server.Repository.MessageBoardRepository;
import no.lagalt.server.Repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDateTime;
import java.util.Objects;
import java.util.Optional;

@Service
public class MessageServiceImpl {

    private final MessageRepository messageRepository;
    private final MessageBoardRepository messageBoardRepository;
    private final LagaltUserRepository lagaltUserRepository;
    @Autowired
    private MessageMapper messageMapper;

    public MessageServiceImpl(MessageRepository messageRepository, MessageBoardRepository messageBoardRepository, LagaltUserRepository lagaltUserRepository, MessageMapper messageMapper) {
        this.messageRepository = messageRepository;
        this.messageBoardRepository = messageBoardRepository;
        this.lagaltUserRepository = lagaltUserRepository;
        this.messageMapper = messageMapper;
    }



    public MessageDto createMessage(MessageDto messageDto) {
        Message message = messageMapper.toEntity(messageDto);
        message.setTimestamp(LocalDateTime.now());
        message.setScore(0);
        message = messageRepository.save(message);
        return messageMapper.toDto(message);
    }







}
