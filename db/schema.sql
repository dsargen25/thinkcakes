drop database if exists project2_dev;
create database project2_dev;

CREATE TABLE User (
  id int(11) AUTO_INCREMENT NOT NULL,
  firstName varchar(30) NOT NULL,
  lastName varchar(30 ),
  email varchar(50) NOT NULL,
  password varchar(32) NOT NULL,
  profileUrl varchar(40) NOT NULL, --ADDITIONS HERE
  -- isAdmin boolean,
  PRIMARY KEY (id)
);

CREATE TABLE Cakes (
  id int(11) AUTO_INCREMENT NOT NULL,
  name varchar(30) NOT NULL,
  difficulty int(5) NOT NULL,
  instructions varchar(2000) NOT NULL, --ADDITIONS HERE
  ingredients varchar(2000) NOT NULL,
  cakeimageUrl varchar(40) NOT NULL, --ADDITIONS HERE
  cakeLikes smallint NOT NULL, --ADDITIONS HERE
  PRIMARY KEY (id)
);

CREATE TABLE Comments (
  id int(11) AUTO_INCREMENT NOT NULL,
  user varchar(30), --THE FIRST NAME OF THE COMMENTING USER
  -- title varchar(30),
  body varchar(500) NOT NULL,
  -- likes boolean,
  likes smallint NOT NULL, --NEED THE NUMBER OF LIKES
  PRIMARY KEY (id)
);



