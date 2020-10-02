drop database if exists project2_dev;
create database project2_dev;

CREATE TABLE User (
  id int(11) AUTO_INCREMENT NOT NULL,
  firstName varchar(30) NOT NULL,
  lastName varchar(30 ),
  email varchar(50) NOT NULL,
  password varchar(32) NOT NULL,
  isAdmin boolean,
  PRIMARY KEY (id)
);

CREATE TABLE Cakes (
  id int(11) AUTO_INCREMENT NOT NULL,
  name varchar(30) NOT NULL,
  difficulty int(5) NOT NULL,
  ingredients varchar(500) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE Comments (
  id int(11) AUTO_INCREMENT NOT NULL,
  title varchar(30),
  body varchar(500) NOT NULL,
  likes boolean,
  PRIMARY KEY (id)
);



