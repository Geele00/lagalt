package no.lagalt.server.Service;

import java.util.Collections;
import java.util.List;
import no.lagalt.server.Dtos.Chat.*;
import no.lagalt.server.Dtos.Message.*;
import no.lagalt.server.Entity.*;
import no.lagalt.server.Mapper.*;
import no.lagalt.server.Repository.*;
import no.lagalt.server.Utils.Exception.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

@Service
public class ChatService {

  @Autowired private ChatRepository chatRepo;
  @Autowired private UserRepository userRepo;

  @Autowired private ChatMapper chatMapper;
  @Autowired private MessageMapper messageMapper;

  public boolean existsById(Integer id) {
    return chatRepo.existsById(id);
  }

  public boolean existsByUsers(List<LagaltUser> users) {
    return chatRepo.existsByUsersIn(users);
  }

  private Chat findByUsers(List<LagaltUser> users) throws ChatNotFoundException {
    return chatRepo.findByUsersIn(users).orElseThrow(() -> new ChatNotFoundException());
  }

  public MessageDto postMessage(String uid, NewMessageDto newMessageDto) {

    String recipientUsername = newMessageDto.getRecipientUsername();

    LagaltUser author =
        userRepo
            .findByUid(uid)
            .orElseThrow(() -> new NotFoundException("User not found in database"));

    LagaltUser recipient =
        userRepo
            .findByUsername(recipientUsername)
            .orElseThrow(() -> new NotFoundException(recipientUsername));

    List<LagaltUser> users = List.of(author, recipient);

    Message newMessage = messageMapper.toMessage(newMessageDto);
    newMessage.setRecipient(recipient);
    newMessage.setAuthor(author);

    Chat chat = null;

    if (!existsByUsers(users)) {
      Chat newChat = new Chat();
      newChat.setUsers(users);
      newChat.setMessages(List.of(newMessage));
      chat = newChat;

    } else {
      Chat existingChat = findByUsers(users);
      List<Message> messages = existingChat.getMessages();
      messages.add(newMessage);
      chat = existingChat;
    }

    Chat savedChat = chatRepo.saveAndFlush(chat);
    List<Message> updatedMessages = savedChat.getMessages();
    Message lastMessage = updatedMessages.get(updatedMessages.size() - 1);
    return messageMapper.toDto(lastMessage);
  }

  public Page<ChatMessageDto> getMessages(String uid, String recipientUsername, Pageable pageable) {

    LagaltUser user = userRepo.findByUid(uid).orElseThrow(() -> new NotFoundException());

    LagaltUser recipient =
        userRepo.findByUsername(recipientUsername).orElseThrow(() -> new NotFoundException());

    Chat chat = findByUsers(List.of(user, recipient));

    List<Message> messages = chat.getMessages();
    Collections.reverse(messages);
    int messagesSize = messages.size();

    int pageSize = pageable.getPageSize();
    int offsetIdx = (int) pageable.getOffset();

    int lastItemRequestedIdx = offsetIdx + pageSize;

    int lastItemIdx = messagesSize < lastItemRequestedIdx ? messagesSize : lastItemRequestedIdx;

    if (messagesSize < offsetIdx) {
      return null;
    }

    List<Message> sub = messages.subList(offsetIdx, lastItemIdx);
    Collections.reverse(sub);

    Page<Message> messagePage = new PageImpl<Message>(sub, pageable, messagesSize);

    return messagePage.map(
        message -> {
          ChatMessageDto dto = chatMapper.toChatMessageDto(message);
          return dto;
        });
  }

  public ChatDto save(Chat chat) {
    Chat savedChat = chatRepo.save(chat);

    return chatMapper.toDto(savedChat);
  }
}
