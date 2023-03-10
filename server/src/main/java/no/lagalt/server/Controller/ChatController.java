package no.lagalt.server.Controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import no.lagalt.server.Dtos.Chat.ChatMessageDto;
import no.lagalt.server.Dtos.Message.NewMessageDto;
import no.lagalt.server.Service.ChatService;
import no.lagalt.server.Utils.Exception.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
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
  Page<ChatMessageDto> getChat(
      Pageable pageable,
      Authentication auth,
      @RequestParam(name = "target", required = false) String targetUsername)
      throws NotFoundException {

    String uid = auth.getName();

    Page<ChatMessageDto> chat = chatService.getMessages(uid, targetUsername, pageable);

    return chat;
  }

  @Operation(summary = "Get a list of projects for the feed")
  @PostMapping
  void postMessage(@RequestBody NewMessageDto newMessageDto, Authentication auth)
      throws NotFoundException {

    String uid = auth.getName();

    chatService.postMessage(uid, newMessageDto);
  }
}
