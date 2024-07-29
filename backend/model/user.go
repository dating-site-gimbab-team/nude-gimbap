package model

import (
	"database/sql"
)

type User struct {
	ID   int    `json:"id"`
	Name string `json:"name"`
	Age  int    `json:"age"`
}

type UserModel struct {
	DB *sql.DB
}

func (m *UserModel) GetAllUsers() ([]User, error) {
	rows, err := m.DB.Query("SELECT id, name, age FROM users")
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var users []User
	for rows.Next() {
		var user User
		err := rows.Scan(&user.ID, &user.Name, &user.Age)
		if err != nil {
			return nil, err
		}
		users = append(users, user)
	}

	return users, rows.Err()
}

func (m *UserModel) GetUserByID(id int) (*User, error) {
	row := m.DB.QueryRow("SELECT id, name, age FROM users WHERE id = ?", id)
	var user User
	err := row.Scan(&user.ID, &user.Name, &user.Age)
	if err == sql.ErrNoRows {
		return nil, nil
	}
	return &user, err
}

func (m *UserModel) InsertUser(name string, age int) (int64, error) {
	res, err := m.DB.Exec("INSERT INTO users (name, age) VALUES (?, ?)", name, age)
	if err != nil {
		return 0, err
	}
	return res.LastInsertId()
}

func (m *UserModel) UpdateUserName(id int, name string) error {
	_, err := m.DB.Exec("UPDATE users SET name = ? WHERE id = ?", name, id)
	return err
}

func (m *UserModel) DeleteUser(id int) error {
	_, err := m.DB.Exec("DELETE FROM users WHERE id = ?", id)
	return err
}
