Order Management System - Authentication API

Overview

This API provides role-based authentication for the Order Management System, allowing users to register and log in based on their roles (Manufacturer, Seller, Admin, Customer).

Authentication Endpoints

1. Register a User

Endpoint: POST /api/auth/register

Description: Registers a new user with a specific role.

Request Body:

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

{
  "message": "User registered successfully",
  "user": {
    "id": "<generated_user_id>",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "manufacturer"
  }
}

2. Login

Endpoint: POST /api/auth/login

Description: Logs in a registered user and provides a JWT token.

Request Body:

{
  "email": "john@example.com",
  "password": "password123"
}

Response:

{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3Yzk3YmM0Y2FiNDExMjhmOGEyNGIzNyIsImlhdCI6MTc0MTI1ODM2MSwiZXhwIjoxNzQxMjYxOTYxfQ.Z9jyDfqxaQ4ghYDlI2gKirhWL6n8bXVNPuYT-GTppe8"
}

