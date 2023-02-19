package no.lagalt.server.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Entity(name = "notification")
public class Notification {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "notificationId", nullable = false)
    private int id;

    @Column(name = "ProjectName")
    private String nameOfProject;

    private String content;
    @ManyToOne()
    private LagaltUser lagaltUser;
    @ManyToOne
    private Project project;
}
