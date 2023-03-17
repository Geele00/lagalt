package no.lagalt.server.Controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import no.lagalt.server.Dtos.Chat.ChatMessageDto;
import no.lagalt.server.Dtos.Message.MessageDto;
import no.lagalt.server.Dtos.Message.NewMessageDto;
import no.lagalt.server.Dtos.Page.PageDto;
import no.lagalt.server.Exception.*;
import no.lagalt.server.Service.ChatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@Tag(name = "Chat")
@CrossOrigin // Required for front-end. Remove before deployment for security
@RequestMapping(path = "api/v1/chats")
@RestController
public class ChatController {

  @Autowired private ChatService chatService;

  @Operation(summary = "Get a list of projects for the feed")
  @GetMapping
  PageDto<ChatMessageDto> getChat(
      Pageable pageable,
      Authentication auth,
      @RequestParam(name = "target", required = false) String targetUsername)
      throws NotFoundException {

    String uid = auth.getName();

    return chatService.getMessages(uid, targetUsername, pageable);
  }

  @Operation(summary = "Post a message to the chat")
  @PostMapping
  MessageDto postMessage(@RequestBody NewMessageDto newMessageDto, Authentication auth)
      throws NotFoundException {

    String uid = auth.getName();

    return chatService.postMessage(uid, newMessageDto);
  }
}
