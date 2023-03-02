INSERT INTO lagalt_user(bio, email, first_name,last_name,gender, user_name, created_at, dob, profile_status)
values ('test', 'test@test.com', 'Abbas', 'Shihab', 0,'user1', '06-27-1994', '06-27-1994', 1),
       ('test', 'test@test.com', 'Wes', 'keiser', 0,'user2', '01-01-2000', '01-01-2000', 1),
       ('test', 'test@test.com', 'Maria', 'J', 1,'user3', '01-01-2000', '01-01-2000', 1),
       ('test', 'test@test.com', 'Geele', 'Egal', 0,'user4', '01-01-2000', '01-01-2000', 1),
       ('test', 'test@test.com', 'Testuser', '2', 1,'testuser2', '01-01-2000', '01-01-2000', 1);


INSERT INTO skill(added_by, name)
VALUES (0, 'Frontend'),
       (0, 'Html'),
       (0, 'JavaScript'),
       (0, 'React'),
       (0, 'FullStack'),
       (0, 'Backend');
