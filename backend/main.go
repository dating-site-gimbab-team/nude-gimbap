package main

import (
	"backend/config"
	"backend/router"
	"log"
	"net/http"
)

func main() {
	db, err := config.NewDB()
	if err != nil {
		log.Fatal("Error connecting to the database:", err)
	}
	defer db.Close()

	router := router.NewLoggedRouter(db)

	log.Println("Server is listening on port 8080...")
	log.Fatal(http.ListenAndServe(":8080", router))
}
