# Ethiopian Real Estate Hub: Connecting Buyers and Sellers

Welcome to the Ethiopian Real Estate Hub repository! This web application aims to connect property buyers and sellers in Ethiopia. The project is built using the MERN stack (MongoDB, Express.js, React.js, and Node.js) and offers a platform for users to list and browse real estate properties such as houses, apartments, and land.

## Table of Contents

- [Project Description](#project-description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Project Description

The Ethiopian Real Estate Hub is designed to facilitate real estate transactions in Ethiopia by providing a user-friendly platform where sellers can list their properties and buyers can browse, search, and contact sellers. This project is part of a portfolio for a software engineering certificate and showcases full-stack development skills.

## Features

- User authentication and authorization (registration and login)
- Property listing with detailed information and images
- Search and filter functionality for properties
- Contact property owners directly through the platform
- Responsive design for a seamless experience across devices

## Technologies Used

- **Frontend:** React.js, HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Other Tools and Libraries:** Axios, Mongoose, JWT for authentication

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/kidus-t-w/property_listing.git
   cd property_listing
   ```

2. **Install backend dependencies:**
   ```sh
   cd server
   npm install
   ```

3. **Install frontend dependencies:**
   ```sh
   cd ../client
   npm install
   ```

4. **Set up environment variables:**

   Create a `.env` file in the `backend` directory and add the following variables:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

5. **Start the development servers:**

   **Backend:**
   ```sh
   cd server
   npm run dev
   ```

   **Frontend:**
   ```sh
   cd ../client
   npm start
   ```

## Usage

- **Frontend:** The frontend server will start on `http://localhost:3000`
- **Backend:** The backend server will start on `http://localhost:5000`

Access the application in your browser at `http://localhost:3000`.

## Development

For development, you can use the following commands:

- **Frontend:**
  - `npm start`: Starts the frontend development server
  - `npm run build`: Builds the frontend for production

- **Backend:**
  - `npm run dev`: Starts the backend development server with nodemon
  - `npm start`: Starts the backend server

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure your code follows the project's coding standards and passes all tests.

1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Create a new pull request


## Contact

For any questions or suggestions, please contact:

- **Kidus Tilahun**
- Email: [kidusk69@gmail.com]
