package no.lagalt.server.Service;

import org.springframework.stereotype.Service;

@Service
public class MessageBoardService {
  //
  // @Autowired private MessageBoardRepository messageBoardRepository;
  // @Autowired private MessageBoardMapper messageBoardMapper;
  //
  // public List<MessageBoardDto> getAllMessageBoards() {
  //   List<MessageBoard> messageBoards = messageBoardRepository.findAll();
  //   return messageBoardMapper.toDtoList(messageBoards);
  // }
  //
  // public MessageBoardDto getMessageBoardById(int id) {
  //   MessageBoard messageBoard =
  //       messageBoardRepository
  //           .findById(id)
  //           .orElseThrow(() -> new MessageBoardNotFoundException(id));
  //   return messageBoardMapper.toDto(messageBoard);
  // }
  // /*
  // public MessageBoardDto createMessageBoard(MessageBoardDto messageBoardDto) {
  //     MessageBoard messageBoard = messageBoardMapper.toEntity(messageBoardDto);
  //     MessageBoard savedMessageBoard = messageBoardRepository.save(messageBoard);
  //     return messageBoardMapper.toDto(savedMessageBoard);
  // }*/
  //
  // public MessageBoardDto updateMessageBoard(int id, MessageBoardDto messageBoardDto) {
  //   MessageBoard existingMessageBoard =
  //       messageBoardRepository
  //           .findById(id)
  //           .orElseThrow(() -> new MessageBoardNotFoundException(id));
  //   MessageBoard updatedMessageBoard =
  //       messageBoardMapper.updateFromDto(messageBoardDto, existingMessageBoard);
  //   MessageBoard savedMessageBoard = messageBoardRepository.save(updatedMessageBoard);
  //   return messageBoardMapper.toDto(savedMessageBoard);
  // }
  //
  // public void deleteMessageBoard(int id) {
  //   messageBoardRepository.deleteById(id);
  // }
}
