package no.lagalt.server.Controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/messageBoard")
public class MessageBoardController {
  //
  // @Autowired private MessageBoardService messageBoardService;
  //
  // @GetMapping
  // public List<MessageBoardDto> getAllMessageBoards() {
  //   return messageBoardService.getAllMessageBoards();
  // }
  //
  // @GetMapping("/{id}")
  // public MessageBoardDto getMessageBoardById(@PathVariable int id) {
  //   return messageBoardService.getMessageBoardById(id);
  // }
  // /*
  // @PostMapping
  // @ResponseStatus(HttpStatus.CREATED)
  // public MessageBoardDto createMessageBoard(@RequestBody MessageBoardDto messageBoardDto) {
  //     return messageBoardService.createMessageBoard(messageBoardDto);
  // }*/
  //
  // @PutMapping("/{id}")
  // public MessageBoardDto updateMessageBoard(
  //     @PathVariable int id, @RequestBody MessageBoardDto messageBoardDto) {
  //   return messageBoardService.updateMessageBoard(id, messageBoardDto);
  // }
  //
  // @DeleteMapping("/{id}")
  // @ResponseStatus(HttpStatus.NO_CONTENT)
  // public void deleteMessageBoard(@PathVariable int id) {
  //   messageBoardService.deleteMessageBoard(id);
  // }
}
