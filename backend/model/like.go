package model

import (
	"database/sql"
	"time"
)

type Like struct {
	ID         int       `json:"id"`
	BoardID    int       `json:"board_id"`
	UserID     int       `json:"user_id"`
	LikeStatus int       `json:"like_status"`
	CreatedAt  time.Time `json:"created_at"`
}

type LikeModel struct {
	DB *sql.DB
}

func (m LikeModel) ToggleLike(board_id, user_id int) error {
	tx, err := m.DB.Begin()
	if err != nil {
		return err
	}
	defer tx.Rollback()

	var existingLike Like
	query := `SELECT id, like_status FROM Likes WHERE board_id = ? AND user_id = ?`
	err = tx.QueryRow(query, board_id, user_id).Scan(&existingLike.ID, &existingLike.LikeStatus)
	if err != nil && err != sql.ErrNoRows {
		return err
	}

	if err == sql.ErrNoRows {
		// Create new like
		query = `INSERT INTO Likes (board_id, user_id, like_status) VALUES (?, ?, 1)`
		_, err = tx.Exec(query, board_id, user_id)
	} else {
		// Toggle existing like
		newStatus := 1 - existingLike.LikeStatus // Toggle between 0 and 1
		query = `UPDATE Likes SET like_status = ? WHERE id = ?`
		_, err = tx.Exec(query, newStatus, existingLike.ID)
	}

	if err != nil {
		return err
	}

	return tx.Commit()
}
