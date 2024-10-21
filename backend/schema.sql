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

CREATE TABLE Likes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL, -- 평가를 하는 사용자
    liked_user_id INT NOT NULL, -- 평가를 받는 사용자
    like_status TINYINT NOT NULL, -- 1 for like, 0 for unlike
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(id),
    FOREIGN KEY (liked_user_id) REFERENCES Users(id),
    UNIQUE (user_id, liked_user_id) -- Ensuring one like/unlike per user per user
);
