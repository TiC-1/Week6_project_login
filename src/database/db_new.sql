BEGIN;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(255),
  email VARCHAR(255),
  password VARCHAR(255) 
);

DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
  posts_id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  content VARCHAR(255),
  liked BOOLEAN,
  FOREIGN KEY (posts_id) REFERENCES users (user_id)
);


COMMIT;
