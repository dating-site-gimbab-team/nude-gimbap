package model

import (
	"database/sql"
)

type LikeModel struct {
	DB *sql.DB
}

type Like struct {
	ID         int
	LikeStatus int
}

type CreateFeedbackDTO struct {
	UserID       int `json:"userId"`
	TargetUserID int `json:"targetUserId"`
}

func (m LikeModel) ToggleLike(user_id, liked_user_id int) error {
	// Begin a transaction
	tx, err := m.DB.Begin()
	if err != nil {
		return err
	}
	defer tx.Rollback()

	// Check if a like already exists between user_id and liked_user_id
	var existingLike Like
	query := `SELECT id, like_status FROM Likes WHERE user_id = ? AND liked_user_id = ?`
	err = tx.QueryRow(query, user_id, liked_user_id).Scan(&existingLike.ID, &existingLike.LikeStatus)
	if err != nil && err != sql.ErrNoRows {
		return err
	}

	if err == sql.ErrNoRows {
		// No existing like, insert a new like with status 1 (like)
		query = `INSERT INTO Likes (user_id, liked_user_id, like_status) VALUES (?, ?, 1)`
		_, err = tx.Exec(query, user_id, liked_user_id)
		if err != nil {
			return err
		}
	} else {
		// Like exists, toggle the like_status between 0 (unlike) and 1 (like)
		newStatus := 1 - existingLike.LikeStatus // Toggle like status
		query = `UPDATE Likes SET like_status = ? WHERE id = ?`
		_, err = tx.Exec(query, newStatus, existingLike.ID)
		if err != nil {
			return err
		}
	}

	// Commit the transaction
	return tx.Commit()
}

func (m LikeModel) ToggleDisLike(user_id, liked_user_id int) error {
	// Begin a transaction
	tx, err := m.DB.Begin()
	if err != nil {
		return err
	}
	defer tx.Rollback()

	// Check if a like already exists between user_id and liked_user_id
	var existingLike Like
	query := `SELECT id, like_status FROM Likes WHERE user_id = ? AND liked_user_id = ?`
	err = tx.QueryRow(query, user_id, liked_user_id).Scan(&existingLike.ID, &existingLike.LikeStatus)
	if err != nil && err != sql.ErrNoRows {
		return err
	}

	if err == sql.ErrNoRows {
		// No existing like, insert a new like with status 0 (like)
		query = `INSERT INTO Likes (user_id, liked_user_id, like_status) VALUES (?, ?, 0)`
		_, err = tx.Exec(query, user_id, liked_user_id)
		if err != nil {
			return err
		}
	} else {
		// Like exists, toggle the like_status between 0 (unlike) and 1 (like)
		newStatus := 0 - existingLike.LikeStatus // Toggle like status
		query = `UPDATE Likes SET like_status = ? WHERE id = ?`
		_, err = tx.Exec(query, newStatus, existingLike.ID)
		if err != nil {
			return err
		}
	}

	// Commit the transaction
	return tx.Commit()
}
