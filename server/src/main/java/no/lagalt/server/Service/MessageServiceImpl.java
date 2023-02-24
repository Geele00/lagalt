package no.lagalt.server.Service;

import java.util.List;
import no.lagalt.server.Dtos.Message.MessageDto;
import no.lagalt.server.Entity.Message;
import no.lagalt.server.Mappers.Message.MessageMapper;
import no.lagalt.server.Repository.MessageRepository;
import no.lagalt.server.Utils.Exception.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MessageServiceImpl {
  @Autowired private MessageRepository messageRepo;
  @Autowired private MessageMapper messageMapper;

  public boolean existsById(Integer id) {
    return messageRepo.existsById(id);
  }

  public MessageDto findById(Integer id) throws NotFoundException {
    Message message = messageRepo.findById(id).orElseThrow(() -> new NotFoundException(id));
    return messageMapper.toDto(message);
  }

  public List<MessageDto> findAll() {
    List<Message> messages = messageRepo.findAll();

    return messageMapper.toDto(messages);
  }

  public MessageDto save(Message message) {
    Message savedMessage = messageRepo.save(message);

    return messageMapper.toDto(savedMessage);
  }

  public void deleteById(Integer id) throws NotFoundException {
    try {
      messageRepo.deleteById(id);
    } catch (NotFoundException err) {
      throw err;
    }
  }

  // public MessageDto createMessage(MessageDto messageDto, int channelId) {
  //     Message message = new Message();
  //     message.setText(messageDto.getText());
  //     message.setTimestamp(LocalDateTime.now());
  //     message.setScore(0);
  //     message.setParentMessage(null);
  //
  //     // Find the channel by id
  //     Channel channel = channelRepository.findById(channelId)
  //             .orElseThrow(() -> new EntityNotFoundException("Channel not found with id: " +
  // channelId));
  //
  //     // Set the channel for the message
  //     message.setChannel(channel);
  //
  //     // Save the message
  //     message = messageRepository.save(message);
  //
  //     LocalDateTime timestamp = message.getTimestamp();
  //
  //
  //     // Return a DTO for the saved message
  //     return new
  // MessageDto(message.getId(),message.getText(),message.getMessagename(),timestamp,
  //             message.getScore(),message.getId());
  // }
  //
  // public MessageDto getMessageById(int messageId) {
  //     Message message = messageRepository.findById(messageId).orElse(null);
  //     if (message == null) {
  //         return null;
  //     }
  //     MessageDto messageDto = new MessageDto();
  //     messageDto.setMessageDtoId(message.getId());
  //     messageDto.setText(message.getText());
  //     messageDto.setTimeStamp(message.getTimestamp());
  //     messageDto.setScore(message.getScore());
  //     messageDto.setChannelId(message.getChannel().getId());
  //     return messageDto;
  // }
  //
  //
  // public MessageDto updateMessage(MessageDto messageDto) {
  //     Message message = messageRepository.findById(messageDto.getMessageDtoId()).orElse(null);
  //     if (message == null) {
  //         return null;
  //     }
  //     message.setText(messageDto.getText());
  //     message.setScore(messageDto.getScore());
  //     messageRepository.save(message);
  //     return messageDto;
  // }
  //
  // public void deleteMessage(int messageId) {
  //     messageRepository.deleteById(messageId);
  // }
  //
  //
  //
  //
  // public MessageDto createReplyMessage(int messageId, MessageDto messageDto) {
  //     // Find the parent message in the database
  //     Message parentMessage = messageRepository.findById(messageId)
  //             .orElseThrow(() -> new NotFoundException("Parent message not found"));
  //
  //     // Get the channelId from the parent message
  //     int channelId = parentMessage.getChannel().getId();
  //
  //     // Create a new message entity for the reply
  //     Message replyMessage = messageMapper.toEntity(messageDto);
  //     replyMessage.setTimestamp(LocalDateTime.now());
  //
  //     // Set the channel of the reply message to the same channel as the parent message
  //     Channel channel = new Channel();
  //     channel.setId(channelId);
  //     replyMessage.setChannel(channel);
  //
  //     // Set the parent message of the reply message
  //     replyMessage.setParentMessage(parentMessage);
  //
  //     // Save the reply message to the database
  //     replyMessage = messageRepository.save(replyMessage);
  //
  //     LocalDateTime timestamp = replyMessage.getTimestamp();
  //
  //
  //     // Return the DTO representation of the reply message
  //     return new MessageDto(replyMessage.getId(),replyMessage.getText(),replyMessage.
  //             getMessagename(),timestamp, replyMessage.getScore(), messageId);
  // }
  //
  //
  // public void upvoteMessage(int id) {
  //     Message message = messageRepository.findById(id)
  //             .orElseThrow(() -> new NotFoundException("Message not found with this id"));
  //
  //     int upvotes = message.getScore();
  //     message.setScore(upvotes + 1);
  //
  //     messageRepository.save(message);
  // }
  //
  // public void downvoteMessage(int id) {
  //     Message message = messageRepository.findById(id)
  //             .orElseThrow(() -> new NotFoundException("Message id"));
  //
  //     int downvotes = message.getScore();
  //     message.setScore(downvotes + 1);
  //
  //     messageRepository.save(message);
  // }

}
