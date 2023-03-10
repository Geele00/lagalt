package no.lagalt.server.Service;

import java.time.LocalDateTime;
import java.util.List;
import no.lagalt.server.Dtos.Chat.ChatDto;
import no.lagalt.server.Dtos.Message.MessageDto;
import no.lagalt.server.Dtos.Message.NewMessageDto;
import no.lagalt.server.Entity.Chat;
import no.lagalt.server.Entity.LagaltUser;
import no.lagalt.server.Entity.Message;
import no.lagalt.server.Mapper.ChatMapper;
import no.lagalt.server.Mapper.MessageMapper;
import no.lagalt.server.Repository.ChatRepository;
import no.lagalt.server.Repository.UserRepository;
import no.lagalt.server.Utils.Exception.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ChatService {
  @Autowired private ChatRepository chatRepo;
  @Autowired private ChatMapper chatMapper;
  @Autowired private UserRepository userRepo;
  @Autowired private MessageMapper messageMapper;

  public boolean existsById(Integer id) {
    return chatRepo.existsById(id);
  }

  public boolean existsByUsers(List<LagaltUser> users) {
    return chatRepo.existsByUsersIn(users);
  }

  private Chat findById(Integer id) throws NotFoundException {
    return chatRepo.findById(id).orElseThrow(() -> new NotFoundException(id));
  }

  public ChatDto getById(Integer id) throws NotFoundException {
    Chat chat = chatRepo.findById(id).orElseThrow(() -> new NotFoundException(id));
    return chatMapper.toDto(chat);
  }

  private Chat findByUsers(List<LagaltUser> users) throws NotFoundException {
    return chatRepo.findByUsersIn(users).orElseThrow(() -> new NotFoundException());
  }

  public void postMessage(String uid, NewMessageDto newMessageDto) {

    String recipientUserName = newMessageDto.getRecipientUsername();

    LagaltUser author =
        userRepo
            .findByUid(uid)
            .orElseThrow(() -> new NotFoundException("User not found in database"));

    LagaltUser recipient =
        userRepo
            .findByUserName(recipientUserName)
            .orElseThrow(() -> new NotFoundException(recipientUserName));

    List<LagaltUser> users = List.of(author, recipient);

    Message newMessage = messageMapper.toMessage(newMessageDto);
    newMessage.setCreatedAt(LocalDateTime.now());
    newMessage.setRecipient(recipient);
    newMessage.setAuthor(author);

    if (!existsByUsers(users)) {
      Chat newChat = new Chat();
      newChat.setUsers(users);
      newChat.setMessages(List.of(newMessage));
      save(newChat);
    } else {
      Chat chat = findByUsers(users);
      List<Message> messages = chat.getMessages();
      messages.add(newMessage);
      save(chat);
    }
  }

  public List<MessageDto> getMessages(String uid, String recipientUserName) {

    LagaltUser user = userRepo.findByUid(uid).orElseThrow(() -> new NotFoundException());

    LagaltUser recipient =
        userRepo.findByUserName(recipientUserName).orElseThrow(() -> new NotFoundException());

    Chat chat = findByUsers(List.of(user, recipient));

    List<Message> messages = chat.getMessages();

    // restrict amount of messages

    return messageMapper.toDto(messages);
  }

  public ChatDto save(Chat chat) {
    Chat savedChat = chatRepo.save(chat);

    return chatMapper.toDto(savedChat);
  }

  public void deleteById(Integer id) throws NotFoundException {
    try {
      chatRepo.deleteById(id);
    } catch (NotFoundException err) {
      throw err;
    }
  }
}
