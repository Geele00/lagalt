package no.lagalt.server.Service;

import jakarta.persistence.EntityNotFoundException;
import no.lagalt.server.Entity.Channel;
import no.lagalt.server.Mappers.Message.MessageMapper;
import no.lagalt.server.Dtos.Message.MessageDto;
import no.lagalt.server.Entity.Message;
import no.lagalt.server.Repository.ChannelRepository;
import no.lagalt.server.Repository.MessageBoardRepository;
import no.lagalt.server.Repository.MessageRepository;
import no.lagalt.server.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Service
public class MessageServiceImpl {
    @Autowired
    private final MessageRepository messageRepository;
    @Autowired
    private final MessageBoardRepository messageBoardRepository;
    @Autowired
    private final UserRepository userRepository;
    @Autowired
    private final ChannelRepository channelRepository;
    @Autowired
    private MessageMapper messageMapper;

    public MessageServiceImpl(MessageRepository messageRepository, MessageBoardRepository messageBoardRepository,
                              UserRepository userRepository, ChannelRepository channelRepository, MessageMapper messageMapper) {
        this.messageRepository = messageRepository;
        this.messageBoardRepository = messageBoardRepository;
        this.userRepository = userRepository;
        this.channelRepository = channelRepository;
        this.messageMapper = messageMapper;
    }



    public MessageDto createMessage(MessageDto messageDto, int channelId) {
        Message message = new Message();
        message.setText(messageDto.getText());
        message.setTimestamp(LocalDateTime.now());
        message.setScore(0);
        message.setParentMessage(null);

        // Find the channel by id
        Channel channel = channelRepository.findById(channelId)
                .orElseThrow(() -> new EntityNotFoundException("Channel not found with id: " + channelId));

        // Set the channel for the message
        message.setChannel(channel);

        // Save the message
        message = messageRepository.save(message);

        // Return a DTO for the saved message
        return new MessageDto(message.getId(),message.getText(),message.getLagaltUsername(),message.getTimestamp(),
                message.getScore(),message.getId());
    }

    public MessageDto getMessageById(int messageId) {
        Message message = messageRepository.findById(messageId).orElse(null);
        if (message == null) {
            return null;
        }
        MessageDto messageDto = new MessageDto();
        messageDto.setMessageDtoId(message.getId());
        messageDto.setText(message.getText());
        messageDto.setTimeStamp(message.getTimestamp());
        messageDto.setScore(message.getScore());
        messageDto.setChannelId(message.getChannel().getId());
        return messageDto;
    }


    public MessageDto updateMessage(MessageDto messageDto) {
        Message message = messageRepository.findById(messageDto.getMessageDtoId()).orElse(null);
        if (message == null) {
            return null;
        }
        message.setText(messageDto.getText());
        message.setScore(messageDto.getScore());
        messageRepository.save(message);
        return messageDto;
    }

    public void deleteMessage(int messageId) {
        messageRepository.deleteById(messageId);
    }





}
