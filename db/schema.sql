DROP DATABASE seqburgers_db;

CREATE DATABASE seqburgers_db;

USE seqburgers_db;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(75) NOT NULL,
    consumed BOOLEAN,
    PRIMARY KEY (id)
);
