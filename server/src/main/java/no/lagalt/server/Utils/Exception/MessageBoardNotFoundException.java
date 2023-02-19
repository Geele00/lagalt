package no.lagalt.server.Utils.Exception;

public class MessageBoardNotFoundException extends RuntimeException {

    public MessageBoardNotFoundException(int id){
        super(String.format("MessageBoard with id" + id ,"Not found"));
    }

}
