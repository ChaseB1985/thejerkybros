DROP DATABASE IF EXISTS jerky_db;

CREATE DATABASE jerky_db;

USE jerky_db;
 
CREATE TABLE jerky_orders (
	id INT AUTO_INCREMENT NOT NULL,
    jerky_name VARCHAR(30) NOT NULL,
    devoured BOOLEAN DEFAULT 0,
    PRIMARY KEY (id)
);