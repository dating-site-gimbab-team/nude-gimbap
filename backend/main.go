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

	// Create a new ServeMux to combine all the routers
	mainMux := http.NewServeMux()

	// Add the main router
	mainMux.Handle("/", router.NewMainLoggedRouter(db))

	// Add the user router
	mainMux.Handle("/api/users", router.NewUserLoggedRouter(db))
	mainMux.Handle("/api/users/", router.NewUserLoggedRouter(db))

	log.Println("Server is listening on port 8080...")
	log.Fatal(http.ListenAndServe(":8080", mainMux))
}
