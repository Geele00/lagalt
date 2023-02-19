package no.lagalt.server.Controller;

import no.lagalt.server.Models.ActiveDtos.MessageBoardDto.MessageBoardDto;
import no.lagalt.server.Service.MessageBoardServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/messageBoard")
public class MessageBoardController {

    private MessageBoardServiceImpl messageBoardServiceImpl;

    public MessageBoardController(MessageBoardServiceImpl messageBoardServiceImpl) {
        this.messageBoardServiceImpl = messageBoardServiceImpl;
    }

    @GetMapping
    public List<MessageBoardDto> getAllMessageBoards() {
        return messageBoardServiceImpl.getAllMessageBoards();
    }

    @GetMapping("/{id}")
    public MessageBoardDto getMessageBoardById(@PathVariable int id) {
        return messageBoardServiceImpl.getMessageBoardById(id);
    }
/*
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public MessageBoardDto createMessageBoard(@RequestBody MessageBoardDto messageBoardDto) {
        return messageBoardServiceImpl.createMessageBoard(messageBoardDto);
    }*/

    @PutMapping("/{id}")
    public MessageBoardDto updateMessageBoard(@PathVariable int id, @RequestBody MessageBoardDto messageBoardDto) {
        return messageBoardServiceImpl.updateMessageBoard(id, messageBoardDto);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteMessageBoard(@PathVariable int id) {
        messageBoardServiceImpl.deleteMessageBoard(id);
    }
}
