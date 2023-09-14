CREATE DATABASE students;

CREATE TABLE students (
    ID SERIAL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    age INT, 
    dob DATE
    ); 