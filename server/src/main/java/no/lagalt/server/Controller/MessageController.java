package no.lagalt.server.Controller;

import no.lagalt.server.Models.ActiveDtos.MessageDto.MessageDto;
import no.lagalt.server.Service.MessageServiceImpl;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/message")
public class MessageController {


    private final MessageServiceImpl messageService;

    public MessageController(MessageServiceImpl messageService) {
        this.messageService = messageService;
    }

    @PostMapping
    public MessageDto createMessage(@RequestBody MessageDto messageDto) {
        return messageService.createMessage(messageDto);
    }

}
