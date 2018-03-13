BEGIN;

DROP TABLE IF EXISTS posts, users;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255),
  email VARCHAR(255),
  password VARCHAR(255) 
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  content VARCHAR(255),
  liked BOOLEAN,
  FOREIGN KEY (user_id) REFERENCES users (id)
);


COMMIT;
