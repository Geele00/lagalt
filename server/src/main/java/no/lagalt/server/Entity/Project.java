package no.lagalt.server.Entity;

import jakarta.persistence.*;
import java.util.Date;
import java.util.List;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Entity(name = "project")
public class Project {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "projectId")
  private int id;

  @Column(name = "title", nullable = false)
  private String title;

  @Column(name = "description", nullable = false)
  private String description;

  @Column(name = "creationDatetime")
  private Date creationDatetime;

  @Column(name = "updatedDatetime")
  private Date updatedDatetime;

  @Column(name = "link_Source")
  private String linkSource;

  @OneToMany(mappedBy = "project")
  private List<Notification> notification;

  @OneToMany()
  @JoinColumn(name = "industryId")
  private List<Industry> industry;

  @ManyToOne
  @JoinColumn(name = "projects")
  private LagaltUser lagaltUsers;

  @OneToOne(mappedBy = "project", cascade = CascadeType.ALL, orphanRemoval = true)
  private MessageBoard messageBoard;
}
