INSERT INTO lagalt_user(bio, email, first_name, last_name,gender, username, created_at, dob, profile_status, uid)
values ('test', 'test@test.com', 'Abbas', 'Shihab', 0,'user1', '06-27-1994', '06-27-1994', 1, 'tempUID1'),
       ('Wes bio section', 'lkjlkj@gmail.com', 'Wes', 'Keiser', 0, 'weskeiser', '01-01-2000', '01-01-2000', 1, 'Ewe103Eg10WHbXvXcWbnUHpROLF2'),
       ('test', 'test@test.com', 'Maria', 'J', 1,'user3', '01-01-2000', '01-01-2000', 1, 'tempUID3'),
       ('test', 'test@test.com', 'Geele', 'Egal', 0,'user4', '01-01-2000', '01-01-2000', 1, 'tempUID4'),
       ('Anonymous user', 'anon@lagalt.no', 'Anon', 'NotLoggedIn', 0, 'anon', '01-01-2000', '01-01-2000', 1, 'rEQcRBFc4NNsKwvhOJVyENoMio72'),
       ('test', 'test@test.com', 'Testuser', '2', 1,'testuser2', '01-01-2000', '01-01-2000', 1, 'tempUID5');
INSERT INTO skill(added_by, name)
VALUES (0, 'Frontend'),
       (0, 'Html'),
       (0, 'JavaScript'),
       (0, 'React'),
       (0, 'FullStack'),
       (0, 'Backend');
