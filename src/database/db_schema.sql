BEGIN;

DROP TABLE IF EXISTS posts, users;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(255),
  email VARCHAR(255),
  password VARCHAR(255)
);

CREATE TABLE posts (
  post_id SERIAL PRIMARY KEY,
  content VARCHAR(255),
  created_id INT references users(user_id),
  liked BOOLEAN
);


COMMIT;
