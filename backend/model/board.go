package model

import (
	"database/sql"
	"time"
)

type Board struct {
	ID        int       `json:"id"`
	Title     string    `json:"title"`
	Content   string    `json:"content"`
	UserID    int       `json:"user_id"`
	CreatedAt time.Time `json:"created_at"`
}

type BoardModel struct {
	DB *sql.DB
}

func (m BoardModel) GetRandomByGender(gender int, limit int) ([]*Board, error) {
	query := `SELECT b.id, b.title, b.content, b.user_id, b.created_at 
			  FROM Boards b
			  JOIN Users u ON b.user_id = u.id
			  WHERE u.gender != ?
			  ORDER BY RAND()
			  LIMIT ?`
	rows, err := m.DB.Query(query, gender, limit)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var boards []*Board
	for rows.Next() {
		var b Board
		err := rows.Scan(&b.ID, &b.Title, &b.Content, &b.UserID, &b.CreatedAt)
		if err != nil {
			return nil, err
		}
		boards = append(boards, &b)
	}
	return boards, nil
}

func (m *BoardModel) GetAllBoardsByUserID(user_id int) ([]Board, error) {
	rows, err := m.DB.Query("SELECT id, title, content FROM Boards WHERE user_id = ?", user_id)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var boards []Board
	for rows.Next() {
		var board Board
		err := rows.Scan(&board.ID, &board.Title, &board.Content)
		if err != nil {
			return nil, err
		}
		boards = append(boards, board)
	}

	return boards, rows.Err()
}

func (m *BoardModel) GetBoardByID(id int) (*Board, error) {
	row := m.DB.QueryRow("SELECT id, title, content FROM Boards WHERE id = ?", id)
	var board Board
	err := row.Scan(&board.ID, &board.Title, &board.Content)
	if err == sql.ErrNoRows {
		return nil, nil
	}
	return &board, err
}

func (m *BoardModel) InsertBoard(title string, content string, user_id int) (int64, error) {
	res, err := m.DB.Exec("INSERT INTO Boards (title, content, user_id) VALUES (?, ?, ?)", title, content, user_id)
	if err != nil {
		return 0, err
	}
	return res.LastInsertId()
}

func (m *BoardModel) UpdateBoardTitle(id int, user_id int, title string) error {
	_, err := m.DB.Exec("UPDATE Boards SET title = ? WHERE id = ? AND user_id = ?", title, id, user_id)
	return err
}

func (m *BoardModel) UpdateBoardContent(id int, user_id int, content string) error {
	_, err := m.DB.Exec("UPDATE Boards SET content = ? WHERE id = ? AND user_id = ?", content, id, user_id)
	return err
}

func (m *BoardModel) DeleteBoard(id int) error {
	_, err := m.DB.Exec("DELETE FROM Boards WHERE id = ?", id)
	return err
}
