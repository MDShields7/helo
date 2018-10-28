DROP TABLE IF EXISTS helo_users;

CREATE TABLE helo_users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50),
    password TEXT 
);

INSERT INTO helo_users ( username, password ) VALUES ( 'hambone', 'h4l0g0d' ),
('hi', 'bye');

SELECT * FROM helo_users;

SELECT * FROM helo_users WHERE ( username = 'hi' AND password = 'bye');