CREATE DATABASE logs;

USE logs;

CREATE TABLE users(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    user varchar(50),
    name varchar(100),
    rol varchar(50),
    pass varchar(255)
);

DESCRIBE users;
