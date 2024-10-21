package model

import (
	"database/sql"
	"time"
)

type User struct {
	ID           int       `json:"id"`
	Name         string    `json:"name"`
	Age          int       `json:"age"`
	Gender       int       `json:"gender"`
	PhoneNumber  string    `json:"phone_number"`
	ProfileImage string    `json:"profile_image"`
	Provider     string    `json:"provider"`
	CreatedAt    time.Time `json:"created_at"`
}

type ItemDTO struct {
	ID           int     `json:"id"`
	Name         string  `json:"name"`
	Age          int     `json:"age"`
	Gender       int     `json:"gender"`
	PhoneNumber  string  `json:"phone_number"`
	ProfileImage *string `json:"profile_image"`
	Provider     string  `json:"provider"`
}

type CreateUserDTO struct {
	Name         string `json:"name"`
	Age          int    `json:"age"`
	Gender       int    `json:"gender"`
	PhoneNumber  string `json:"phone_number"`
	ProfileImage string `json:"profile_image"`
	Provider     string `json:"provider"`
}

type UserModel struct {
	DB *sql.DB
}

func (m *UserModel) GetAllUsers() ([]ItemDTO, error) {
	rows, err := m.DB.Query("SELECT id, name, age, gender, profile_image, provider FROM Users WHERE id != 1")
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var users []ItemDTO = []ItemDTO{}
	for rows.Next() {
		var user ItemDTO
		err := rows.Scan(&user.ID, &user.Name, &user.Age, &user.Gender, &user.ProfileImage, &user.Provider)
		if err != nil {
			return nil, err
		}
		users = append(users, user)
	}

	return users, rows.Err()
}

func (m *UserModel) GetUserByID(id int) (*User, error) {
	row := m.DB.QueryRow("SELECT id, name, age, profile_image FROM Users WHERE id = ?", id)
	var user User
	err := row.Scan(&user.ID, &user.Name, &user.Age, &user.ProfileImage)
	if err == sql.ErrNoRows {
		return nil, nil
	}
	return &user, err
}

func (m *UserModel) InsertUser(user CreateUserDTO) (int64, error) {
	tx, err := m.DB.Begin()
	if err != nil {
		return 0, err
	}
	defer tx.Rollback()

	res, err := tx.Exec("INSERT INTO Users (name, age, gender, phone_number, profile_image, provider) VALUES (?, ?, ?, ?, ?, ?)", user.Name, user.Age, user.Gender, user.PhoneNumber, user.ProfileImage, user.Provider)
	if err != nil {
		return 0, err
	}
	tx.Commit()
	return res.LastInsertId()
}

func (m *UserModel) UpdateUserName(id int, name string) (int64, error) {
	tx, err := m.DB.Begin()
	if err != nil {
		return 0, err
	}
	defer tx.Rollback()

	res, err := m.DB.Exec("UPDATE Users SET name = ? WHERE id = ?", name, id)
	if err != nil {
		return 0, err
	}
	tx.Commit()
	return res.LastInsertId()
}

func (m *UserModel) UpdateAge(id int, age int) (int64, error) {
	tx, err := m.DB.Begin()
	if err != nil {
		return 0, err
	}
	defer tx.Rollback()

	res, err := m.DB.Exec("UPDATE Users SET age = ? WHERE id = ?", age, id)
	if err != nil {
		return 0, err
	}
	tx.Commit()
	return res.LastInsertId()
}

func (m *UserModel) UpdateProfileImage(id int, profile_image string) (int64, error) {
	tx, err := m.DB.Begin()
	if err != nil {
		return 0, err
	}
	defer tx.Rollback()

	res, err := m.DB.Exec("UPDATE Users SET profile_image = ? WHERE id = ?", profile_image, id)
	if err != nil {
		return 0, err
	}
	tx.Commit()
	return res.LastInsertId()
}

func (m *UserModel) DeleteUser(id int) (int64, error) {
	tx, err := m.DB.Begin()
	if err != nil {
		return 0, err
	}
	defer tx.Rollback()

	res, err := m.DB.Exec("DELETE FROM Users WHERE id = ?", id)
	if err != nil {
		return 0, err
	}
	tx.Commit()
	return res.LastInsertId()
}
