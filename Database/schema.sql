DROP DATABASE movielist;

CREATE DATABASE movielist;

use movielist;

CREATE TABLE movies (
  movie_id INT AUTO_INCREMENT NOT NULL,
  moviename VARCHAR(1000) NOT NULL,
  isWatched BOOLEAN default 0,
  PRIMARY KEY (movie_id)
);

INSERT INTO movies (moviename)
VALUES
  ('Mean Girls'),
  ('Hackers'),
  ('The Grey'),
  ('Sunshine'),
  ('Ex Machina');
