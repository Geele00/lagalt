package no.lagalt.server.Service;

import java.util.List;
import no.lagalt.server.Dtos.Message.MessageDto;
import no.lagalt.server.Entity.Message;
import no.lagalt.server.Exception.Message.MessageNotFoundException;
import no.lagalt.server.Mapper.MessageMapper;
import no.lagalt.server.Repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MessageService {
  @Autowired private MessageRepository messageRepo;
  @Autowired private MessageMapper messageMapper;

  public boolean existsById(Integer id) {
    return messageRepo.existsById(id);
  }

  public MessageDto findById(Integer id) throws MessageNotFoundException {
    Message message = messageRepo.findById(id).orElseThrow(() -> new MessageNotFoundException(id));

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

  public void deleteById(Integer id) throws MessageNotFoundException {
    try {
      messageRepo.deleteById(id);
    } catch (MessageNotFoundException err) {
      throw err;
    }
  }
}
