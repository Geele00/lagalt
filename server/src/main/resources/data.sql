INSERT INTO lagalt_user(bio, email, first_name,last_name,gender, user_name, date_of_creation, dob)
values ('test', 'test@test.com', 'Abbas', 'Shihab', 0,'user1', '06-27-1994', '06-27-1994'),
       ('test', 'test@test.com', 'Wes', 'keiser', 0,'user2', '01-01-2000', '01-01-2000'),
       ('test', 'test@test.com', 'Maria', 'J', 1,'user3', '01-01-2000', '01-01-2000'),
       ('test', 'test@test.com', 'Geele', 'Egal', 0,'user4', '01-01-2000', '01-01-2000'),
       ('test', 'test@test.com', 'Testuser', '2', 1,'testuser2', '01-01-2000', '01-01-2000');


INSERT INTO skill(skill_id, added_by, name)
VALUES (1, 0, 'Frontend'),
       (2, 0, 'Html'),
       (3, 0, 'JavaScript'),
       (4, 0, 'React'),
       (5, 0, 'FullStack'),
       (6, 0, 'Backend');
