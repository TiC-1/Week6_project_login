BEGIN;

INSERT INTO users (username, email, password) VALUES ('Matteo', 'matteo@tic.it', '$2a$10$/VEP0V7yxcHvnen09h1VHuJ73wlK1wSSuFOKzC.vpBdwePR2zxl96');
INSERT INTO users (username, email, password) VALUES ('Iannis', 'iannis@tic.it', '$2a$10$un8zH8z.2UOEUAA..q0HNej7Zg0OtZ1HJVXhMIE0TdOdP05jAhceK');
INSERT INTO users (username, email, password) VALUES ('Alberto', 'alberto@tic.it', '$2a$10$cO4d/xEHBilynVXB3eWV7ejQoe13skYhV5MQmkLrGYsnM1YHw/QWO');
INSERT INTO users (username, email, password) VALUES ('Claudio', 'claudio@tic.it', '$2a$10$c2Uszq3mNMMpWtoSe.ehpObRkwD/xkdtb9bQv2F6iqm2pqrJmMA0K');
INSERT INTO users (username, email, password) VALUES ('Giulia', 'giulia@tic.it', '$2a$10$pgzgeR9rC55BIlLdF/Y.xOESABUA3qhtfy7YPCgyxpgM2KwQwijgq');

INSERT INTO posts (content, created_id, liked) VALUES ('1 Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum', 1, false);
INSERT INTO posts (content, created_id, liked) VALUES ('2 Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum', 4, false);
INSERT INTO posts (content, created_id, liked) VALUES ('3 Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum', 3, false);
INSERT INTO posts (content, created_id, liked) VALUES ('4 Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum', 2, false);
INSERT INTO posts (content, created_id, liked) VALUES ('5 Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum', 5, false);


COMMIT;
