package no.lagalt.server.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@ToString
@Entity(name = "message")
public class Message {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String text;

    private LocalDateTime timestamp;

    private int score;

    @ManyToOne
    @JoinColumn(name = "altuserId")
    private LagaltUser lagaltUser;

    @ManyToOne
    @JoinColumn(name = "messageBoardId")
    private MessageBoard messageBoard;

    @OneToMany(mappedBy = "parentMessage", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Message> replies = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "parentMessageId")
    private Message parentMessage;
}
