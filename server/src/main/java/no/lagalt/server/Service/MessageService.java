package no.lagalt.server.Service;

import java.util.List;
import no.lagalt.server.Dtos.Message.MessageDto;
import no.lagalt.server.Entity.Message;
import no.lagalt.server.Mapper.MessageMapper;
import no.lagalt.server.Repository.MessageRepository;
import no.lagalt.server.Repository.UserRepository;
import no.lagalt.server.Utils.Exception.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MessageService {
  @Autowired private MessageRepository messageRepo;
  @Autowired private MessageMapper messageMapper;
  @Autowired private UserRepository userRepository;

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

  // public Page<MessageDto> getPage(Pageable pageable, String uid, String recipientUserName) {
  //
  //  Optional<LagaltUser> user = userRepository.findByUid(uid);
  //
  //  Optional<LagaltUser> recipient = userRepository.findByUserName(recipientUserName);
  //
  //  Page<Message> messagePage = messageRepo.findAll(pageable);
  //
  //  return messagePage.map(
  //      message -> {
  //        MessageDto dto = messageMapper.toDto(message);
  //        return dto;
  //      });
  // }

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
}
