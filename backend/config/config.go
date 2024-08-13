package config

import (
	"os"
	"fmt"
	"database/sql"
	"backend/utils"

	_ "github.com/go-sql-driver/mysql"
)

func NewDB() (*sql.DB, error) {
	err := utils.LoadEnv(".env")
	if err != nil {
		fmt.Printf("Error loading .env file: %s\n", err)
	}
	
    dbHost := os.Getenv("DB_HOST")
    if dbHost == "" {
        dbHost = "127.0.0.1"
    }
	
    dbPort := os.Getenv("DB_PORT")
    if dbPort == "" {
        dbPort = "3306"
    }
	
    dbPW := os.Getenv("DB_PW")
    if dbPort == "" {
        dbPort = "nude1234!!"
    }

	db_url := fmt.Sprintf("root:%s@tcp(%s:%s)/nude", dbPW, dbHost, dbPort)
	db, err := sql.Open("mysql", db_url)
	if err != nil {
		return nil, err
	}

	err = db.Ping()
	if err != nil {
		return nil, err
	}

	return db, nil
}
