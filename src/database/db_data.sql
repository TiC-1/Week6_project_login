BEGIN;

INSERT INTO users (username, email, password) VALUES ('Matteo', 'matteo@tic.it', user);
INSERT INTO users (username, email, password) VALUES ('Iannis', 'iannis@tic.it', user);
INSERT INTO users (username, email, password) VALUES ('Alberto', 'alberto@tic.it');
INSERT INTO users (username, email, password) VALUES ('Claudio', 'claudio@tic.it');
INSERT INTO users (username, email, password) VALUES ('Giulia', 'giulia@tic.it');

INSERT INTO posts (title, content, liked) VALUES ('Come home from work singing', 'Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum', false);
INSERT INTO posts (title, content, liked) VALUES ('Wake up Snow White', 'Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum', false);
INSERT INTO posts (title, content, liked) VALUES ('Throw apples out in the trash!', 'Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum', false);
INSERT INTO posts (title, content, liked) VALUES ('Call Prince Charming', 'Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum', false);


COMMIT;
