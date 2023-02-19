package no.lagalt.server.Controller;

import no.lagalt.server.Dtos.Channel.ChannelDto;
import no.lagalt.server.Service.ChannelServiceImpl;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("api/v1/channel")
public class ChannelController {

    private final ChannelServiceImpl channelServiceImpl;

    public ChannelController(ChannelServiceImpl channelServiceImpl) {
        this.channelServiceImpl = channelServiceImpl;
    }


    @PostMapping("")
    public ResponseEntity<ChannelDto> createChannel(@RequestBody ChannelDto channelDto) {
        ChannelDto savedChannel = channelServiceImpl.createChannel(channelDto);
        return ResponseEntity.created(URI.create("/api/channels/" + savedChannel.getId())).body(savedChannel);
    }

    @GetMapping("")
    public ResponseEntity<List<ChannelDto>> getAllChannels() {
        List<ChannelDto> channels = channelServiceImpl.getAllChannels();
        return ResponseEntity.ok().body(channels);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ChannelDto> getChannelById(@PathVariable("id") int id) {
        ChannelDto channel = channelServiceImpl.getChannelById(id);
        return ResponseEntity.ok().body(channel);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ChannelDto> updateChannel(@PathVariable("id") int id, @RequestBody ChannelDto channelDto) {
        ChannelDto savedChannel = channelServiceImpl.updateChannel(id, channelDto);
        return ResponseEntity.ok().body(savedChannel);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteChannel(@PathVariable("id") int id) {
        channelServiceImpl.deleteChannel(id);
        return ResponseEntity.noContent().build();
    }
}
