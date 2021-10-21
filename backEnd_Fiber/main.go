package main

import (
    "github.com/gofiber/fiber/v2"
    "github.com/gofiber/fiber/v2/middleware/cors"
    "gorm.io/driver/mysql"
	"gorm.io/gorm"
)

type Item struct{
    Id string `gorm:"unique"`
    Question string 
    Answer string
}

var DB *gorm.DB

func main() {
    connection, err := gorm.Open(mysql.Open("sqluser:password@/DemoDB"), &gorm.Config{})
	if err != nil {
		panic("could not connect to the database")
	}
    DB = connection
    connection.AutoMigrate(&Item{})

    app := fiber.New()
    app.Use(cors.New())
    app.Post("/hello", Hello)
    app.Get("/test", test)
    
    app.Listen(":8000")
}

func test(c *fiber.Ctx)error{
    return c.SendString("Hello, World")
}

func Hello(c *fiber.Ctx) error {
    var data map[string]string
    if err := c.BodyParser(&data); err != nil {
        return err
    }
    user := Item{}
    id := data["id"]
    DB.First(&user, id)
    return c.JSON(user)
}