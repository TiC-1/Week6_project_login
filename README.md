# Week6_project_login
full stack project with user authentication

## General purpose
Create a login App using a database and express.
Coding will be assign to 2 different teams: front-end and back-end.
Development will be TDD on both client and server side.

## User stories
As a user I want to:
- login to my profile.
- add a new post on the timeline.
- remove a post made by me.
- like a post.

## Wireframe
![img-2258](https://user-images.githubusercontent.com/19515855/37418843-6e80c7fc-27b3-11e8-8818-7ed3445eb298.JPG)


## Stretch goals
- edit posts.
- delete the posts.


## Repository structure

- server.js
- _public_
  -front end team
- _src_
  - router.js
  - handler.js _(could several files)_
  - _database_
    - db_connection.js
    - db_populate.js
    - db_schema.sql
    - db_data.sql
  - _queries_
- _test_

## Database schema
2 tables:
- users
  - id _(auto incremental)_
  - username
  - email
  - PASSWORD
- posts
  - id _(auto incremental)_
  - title
  - content
  - like BOOLEAN
  - FOREIGN KEY (user_id) REFERENCES users (id)
