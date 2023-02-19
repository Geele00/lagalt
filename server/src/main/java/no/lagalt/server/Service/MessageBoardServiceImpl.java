package no.lagalt.server.Service;

import no.lagalt.server.Mappers.MessageBoardMapper.MessageBoardMapper;
import no.lagalt.server.Models.ActiveDtos.MessageBoardDto.MessageBoardDto;
import no.lagalt.server.Models.MessageBoard.MessageBoard;
import no.lagalt.server.Repository.MessageBoardRepository;
import no.lagalt.server.Utils.Exception.MessageBoardNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MessageBoardServiceImpl {

    private final MessageBoardRepository messageBoardRepository;
    private final MessageBoardMapper messageBoardMapper;

    public MessageBoardServiceImpl(MessageBoardRepository messageBoardRepository, MessageBoardMapper messageBoardMapper) {
        this.messageBoardRepository = messageBoardRepository;
        this.messageBoardMapper = messageBoardMapper;
    }



    public List<MessageBoardDto> getAllMessageBoards() {
        List<MessageBoard> messageBoards = messageBoardRepository.findAll();
        return messageBoardMapper.toDtoList(messageBoards);
    }

    public MessageBoardDto getMessageBoardById(int id) {
        MessageBoard messageBoard = messageBoardRepository.findById(id)
                .orElseThrow(() -> new MessageBoardNotFoundException(id));
        return messageBoardMapper.toDto(messageBoard);
    }
/*
    public MessageBoardDto createMessageBoard(MessageBoardDto messageBoardDto) {
        MessageBoard messageBoard = messageBoardMapper.toEntity(messageBoardDto);
        MessageBoard savedMessageBoard = messageBoardRepository.save(messageBoard);
        return messageBoardMapper.toDto(savedMessageBoard);
    }*/

    public MessageBoardDto updateMessageBoard(int id, MessageBoardDto messageBoardDto) {
        MessageBoard existingMessageBoard = messageBoardRepository.findById(id)
                .orElseThrow(() -> new MessageBoardNotFoundException(id));
        MessageBoard updatedMessageBoard = messageBoardMapper.updateFromDto(messageBoardDto, existingMessageBoard);
        MessageBoard savedMessageBoard = messageBoardRepository.save(updatedMessageBoard);
        return messageBoardMapper.toDto(savedMessageBoard);
    }

    public void deleteMessageBoard(int id) {
        messageBoardRepository.deleteById(id);
    }


}
