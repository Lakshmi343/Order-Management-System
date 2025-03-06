
Order Management System API Documentation
Overview
This API provides role-based authentication and product management for the Order Management System. Users can register, log in, and manage products based on their roles (Manufacturer, Seller, Admin, Customer).

Authentication API
Register a User
Endpoint: POST /api/auth/register
Description: Registers a new user with a specific role.

Request Body:

json
Copy
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "manufacturer"
}
Roles Supported:

manufacturer

seller

admin

customer

Response:

json
Copy
{
  "message": "User registered successfully",
  "user": {
    "id": "<generated_user_id>",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "manufacturer"
  }
}
Login
Endpoint: POST /api/auth/login
Description: Logs in a registered user and provides a JWT token.

Request Body:

json
Copy
{
  "email": "john@example.com",
  "password": "password123"
}
Response:

json
Copy
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3Yzk3YmM0Y2FiNDExMjhmOGEyNGIzNyIsImlhdCI6MTc0MTI1ODM2MSwiZXhwIjoxNzQxMjYxOTYxfQ.Z9jyDfqxaQ4ghYDlI2gKirhWL6n8bXVNPuYT-GTppe8"
}
Product API
Add a Product
Endpoint: POST /api/products/add
Description: Adds a new product to the system.

Request Body:

json
Copy
{
  "name": "Product 1",
  "description": "This is a sample product",
  "quantity": 10,
  "price": 100
}
Response:

json
Copy
{
  "name": "Product 1",
  "description": "This is a sample product",
  "status": "available",
  "quantity": 10,
  "price": 100,
  "_id": "67c982bfeb52826afbd6ee01",
  "__v": 0
}
Update Product Status
Endpoint: PUT /api/products/{productId}/status
Description: Updates the status of a specific product.

Request Body:

json
Copy
{
  "status": "out-of-stock"
}
Response:

json
Copy
{
  "_id": "67c982bfeb52826afbd6ee01",
  "name": "Product 1",
  "description": "This is a sample product",
  "status": "out-of-stock",
  "quantity": 10,
  "price": 100,
  "__v": 0
}


