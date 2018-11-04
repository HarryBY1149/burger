DROP DATABASE IF EXISTS burgerdb;

CREATE DATABASE burgerdb;

USE burgerdb;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(100) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
);