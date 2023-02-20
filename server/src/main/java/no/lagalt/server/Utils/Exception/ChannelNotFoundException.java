package no.lagalt.server.Utils.Exception;

public class ChannelNotFoundException extends RuntimeException{

    public ChannelNotFoundException(int id){
        super(String.format("Channel with  id" + id , "Not found"));
    }
}
