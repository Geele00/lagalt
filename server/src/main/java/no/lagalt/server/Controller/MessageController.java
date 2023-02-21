package no.lagalt.server.Controller;

import no.lagalt.server.Dtos.Message.MessageDto;
import no.lagalt.server.Service.MessageServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;

@RestController
@RequestMapping("api/v1/message")
public class MessageController {


    private final MessageServiceImpl messageService;

    public MessageController(MessageServiceImpl messageService) {
        this.messageService = messageService;
    }

    @PostMapping
    public ResponseEntity<MessageDto> createMessage(@RequestBody MessageDto messageDto, @RequestParam("channelId") int channelId) {
        MessageDto createdMessageDto = messageService.createMessage(messageDto, channelId);
        return ResponseEntity.ok(createdMessageDto);
    }


    @GetMapping("/{id}")
    public ResponseEntity<MessageDto> getMessageById(@PathVariable("id") int messageId) {
        MessageDto messageDto = messageService.getMessageById(messageId);
        if (messageDto != null) {
            return ResponseEntity.ok(messageDto);
        } else {
            return ResponseEntity.notFound().build();
        }
    }



    @PutMapping("/{id}")
    public ResponseEntity<MessageDto> updateMessage(@PathVariable("id") int messageId, @RequestBody MessageDto messageDto) {
        messageDto.setMessageDtoId(messageId);
        MessageDto updatedMessageDto = messageService.updateMessage(messageDto);
        if (updatedMessageDto != null) {
            return ResponseEntity.ok(updatedMessageDto);
        } else {
            return ResponseEntity.notFound().build();
        }
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMessage(@PathVariable("id") int messageId) {
        messageService.deleteMessage(messageId);
        return ResponseEntity.noContent().build();
    }



    @PostMapping("/{parentId}/reply")
    public ResponseEntity<MessageDto> createReplyMessage(
            @PathVariable int parentId, @RequestBody MessageDto messageDto) {
        MessageDto replyMessage = messageService.createReplyMessage(parentId, messageDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(replyMessage);
    }

}
