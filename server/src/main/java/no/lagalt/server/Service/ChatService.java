package no.lagalt.server.Service;

import java.util.Collections;
import java.util.List;
import no.lagalt.server.Dtos.Chat.*;
import no.lagalt.server.Dtos.Message.*;
import no.lagalt.server.Dtos.Page.PageDto;
import no.lagalt.server.Entity.*;
import no.lagalt.server.Enum.ExceptionArgumentType;
import no.lagalt.server.Exception.*;
import no.lagalt.server.Exception.Chat.ChatEmptyException;
import no.lagalt.server.Exception.User.UserNotFoundException;
import no.lagalt.server.Mapper.*;
import no.lagalt.server.Repository.*;
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

  private Chat findChatByUsers(List<LagaltUser> users) throws ChatNotFoundException {
    return chatRepo.findByUsersIn(users).orElseThrow(() -> new ChatNotFoundException());
  }

  private LagaltUser findUserByUid(String uid) throws UserNotFoundException {
    return userRepo
        .findByUid(uid)
        .orElseThrow(() -> new UserNotFoundException(uid, ExceptionArgumentType.UID));
  }

  private LagaltUser findUserByUsername(String username) throws UserNotFoundException {
    return userRepo
        .findByUsername(username)
        .orElseThrow(() -> new UserNotFoundException(username, ExceptionArgumentType.USERNAME));
  }

  public MessageDto postMessage(String uid, NewMessageDto newMessageDto) {

    String recipientUsername = newMessageDto.getRecipientUsername();

    LagaltUser author = findUserByUid(uid);

    LagaltUser recipient = findUserByUsername(recipientUsername);

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
      Chat existingChat = findChatByUsers(users);
      List<Message> messages = existingChat.getMessages();
      messages.add(newMessage);
      chat = existingChat;
    }

    Chat savedChat = chatRepo.saveAndFlush(chat);
    List<Message> updatedMessages = savedChat.getMessages();
    Message lastMessage = updatedMessages.get(updatedMessages.size() - 1);
    return messageMapper.toDto(lastMessage);
  }

  public PageDto<ChatMessageDto> getMessages(
      String uid, String recipientUsername, Pageable pageable)
      throws ChatEmptyException, UserNotFoundException {

    List<Message> messages =
        findChatByUsers(List.of(findUserByUsername(recipientUsername), findUserByUid(uid)))
            .getMessages();

    Collections.reverse(messages);

    int messagesSize = messages.size();

    if (messagesSize == 0) throw new ChatEmptyException();

    int offsetIdx = (int) pageable.getOffset();

    int lastMessageRequestedIdx = offsetIdx + pageable.getPageSize();

    int lastItemIdx =
        messagesSize < lastMessageRequestedIdx ? messagesSize : lastMessageRequestedIdx;

    if (messagesSize < offsetIdx) {
      return null;
    }

    List<Message> sub = messages.subList(offsetIdx, lastItemIdx);
    Collections.reverse(sub);

    List<ChatMessageDto> dtoList = chatMapper.toChatMessageDto(sub);

    boolean hasNextPage = messagesSize - offsetIdx > offsetIdx ? false : true;

    return new PageDto<ChatMessageDto>(dtoList, pageable.getPageNumber(), hasNextPage);
  }

  public ChatDto save(Chat chat) {
    Chat savedChat = chatRepo.save(chat);

    return chatMapper.toDto(savedChat);
  }
}
