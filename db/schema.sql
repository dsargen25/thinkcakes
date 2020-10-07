drop database if exists project2_dev;
create database project2_dev;

CREATE TABLE User (
  id int(11) AUTO_INCREMENT NOT NULL,
  firstName varchar(30) NOT NULL,
  lastName varchar(30),
  userName varchar(60), --SAME AS 'CREATOR' UNDER THE CAKES TABLE
  email varchar(50) NOT NULL,
  password varchar(32) NOT NULL,
  profileUrl varchar(40),
  PRIMARY KEY (id)
);

CREATE TABLE Cakes (
  id int(11) AUTO_INCREMENT NOT NULL,
  name varchar(30) NOT NULL,
  creator varchar(60) NOT NULL, --SAME AS 'USERNAME' UNDER THE USER TABLE
  difficulty int(5) NOT NULL,
  instructions varchar(2000) NOT NULL,
  ingredients varchar(2000) NOT NULL,
  cakeimageUrl varchar(40) NOT NULL,
  cakeLikes smallint NOT NULL, 
  cakeComment varchar(2000) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE Comments (
  id int(11) AUTO_INCREMENT NOT NULL,
  user varchar(60), --SAME AS 'CREATOR' IN THE CAKES TABLE AND 'USERNAME'
  body varchar(500) NOT NULL,
  likes smallint NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO User (firstName, lastName, email, password, profileUrl)
VALUES ('Adam', 'Gates', 'adamgates@mail.com', 'adam', 'https://i.ibb.co/D8sLYHh/adamgates.jpg');

INSERT INTO User (firstName, lastName, email, password, profileUrl)
VALUES ('Mark', 'Lee', 'marklee@mail.com', 'mark', 'https://i.ibb.co/G2jZHt0/marklee.jpg');

INSERT INTO User (firstName, lastName, email, password, profileUrl)
VALUES ('Carla', 'Bean', 'carlabean@mail.com', 'carla', 'https://i.ibb.co/tYNcD47/carlabean.jpg');
