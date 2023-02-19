package no.lagalt.server.Service;

import no.lagalt.server.Mappers.Message.MessageMapper;
import no.lagalt.server.Dtos.Message.MessageDto;
import no.lagalt.server.Entity.Message;
import no.lagalt.server.Repository.MessageBoardRepository;
import no.lagalt.server.Repository.MessageRepository;
import no.lagalt.server.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class MessageServiceImpl {

    private final MessageRepository messageRepository;
    private final MessageBoardRepository messageBoardRepository;
    private final UserRepository userRepository;
    @Autowired
    private MessageMapper messageMapper;

    public MessageServiceImpl(MessageRepository messageRepository, MessageBoardRepository messageBoardRepository, UserRepository userRepository, MessageMapper messageMapper) {
        this.messageRepository = messageRepository;
        this.messageBoardRepository = messageBoardRepository;
        this.userRepository = userRepository;
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
