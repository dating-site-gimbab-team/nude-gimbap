DROP TABLE IF EXISTS Boards;
DROP TABLE IF EXISTS Likes;
DROP TABLE IF EXISTS Users;

CREATE TABLE Users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(64) NOT NULL,
    age INT NOT NULL,
    gender TINYINT NOT NULL,
    phone_number VARCHAR(16) NOT NULL,
    profile_image VARCHAR(512) NULL,
    provider VARCHAR(32) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Boards (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    content TEXT NULL,
    user_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(id)
);

CREATE TABLE Likes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    board_id INT NOT NULL,
    user_id INT NOT NULL,
    like_status TINYINT NOT NULL, -- 1 for like, 0 for unlike
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (board_id) REFERENCES Boards(id),
    FOREIGN KEY (user_id) REFERENCES Users(id),
    UNIQUE (board_id, user_id) -- Ensuring one like/unlike per user per board
);