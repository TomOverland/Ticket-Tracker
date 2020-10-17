CREATE DATABASE ticket_tracker_db;
USE ticket_tracker_db;

CREATE TABLE tickets
(
    id int NOT NULL AUTO_INCREMENT,
    title varchar(30) NOT NULL,
    body varchar(250) NOT NULL,
    PRIMARY KEY(id)
);