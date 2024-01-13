#Introduction
This project is an e-commerce API built using Node.js, Express, and MongoDB. It provides essential functionality for managing products and their variants in an e-commerce system.

Project Structure
src/: Contains the main source code.
controllers/: Handles the business logic.
models/: Defines the MongoDB data models.
routes/: Defines the API routes.
tests/: Contains test files.
index.js: The entry point of the application.
jest.config.js: Configuration file for Jest testing.
.env: Configuration file for environment variables.
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/ecommerce-api.git
Navigate to the project directory:

bash
cd ecommerce-api
Install dependencies:


npm install
Running the Application
Ensure that MongoDB is running and that the connection string in the .env file is correct.

Start the Node.js server:


npm start
The server will run on http://localhost:5000 by default.

API Endpoints
POST /api/products: Create a new product.
GET /api/products: Get all products.
GET /api/products/:id: Get a specific product by ID.
PUT /api/products/:id: Update a specific product by ID.
DELETE /api/products/:id: Delete a specific product by ID.
GET /api/products/search/:query: Search for products by name, description, or variant name.
Test Driven Development
Run tests using Jest:


npm test
Architectural Decisions
The project follows a modular structure with separate folders for controllers, models, routes, and tests.
MongoDB is used as the database for its flexibility and scalability.
The application is built using the Express.js framework for its simplicity and ease of use.
Assumptions
The MongoDB server is running locally.
The API is used in a secure environment, and authentication is not implemented for simplicity.

Additional Instructions
Ensure that the .env file is configured correctly.
Custom configurations or additional features can be added by extending the existing 
