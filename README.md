# Hobby-Hub-Server

This is the backend server for the Hobby-Hub application. It's built with **Node.js**, **Express**, and **MongoDB**, providing the API endpoints for managing user hobbies.

---

## Table of Contents

* [Features](#features)
* [Installation](#installation)
* [Usage](#usage)
* [Scripts](#scripts)
* [Dependencies](#dependencies)
* [License](#license)

---

## Features

* **RESTful API:** Provides well-defined API endpoints for various operations.
* **MongoDB Integration:** Uses MongoDB for database management.
* **CORS Enabled:** Allows cross-origin requests.
* **Environment Variables:** Securely manages configuration with `dotenv`.

---

## Installation

To get this project up and running on your local machine, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd hobby-hub-server
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Create a `.env` file:**
    In the root directory, create a file named `.env` and add your MongoDB connection string. For example:
    ```
    MONGODB_URI="your_mongodb_connection_string"
    ```
    Replace `"your_mongodb_connection_string"` with your actual MongoDB connection URI.

---

## Usage

Once installed, you can start the server.

---

## Scripts

* **`npm start`**: Starts the server using `nodemon`, which automatically restarts the server when file changes are detected. This is ideal for development.

    ```bash
    npm start
    ```
* **`npm test`**: Currently, there are no tests defined for this project.

    ```bash
    npm test
    ```

---

## Dependencies

* **`cors`**: ^2.8.5 - Provides a Connect/Express middleware that can be used to enable CORS with various options.
* **`dotenv`**: ^16.5.0 - Loads environment variables from a `.env` file into `process.env`.
* **`express`**: ^5.1.0 - Fast, unopinionated, minimalist web framework for Node.js.
* **`mongodb`**: ^6.16.0 - The official MongoDB driver for Node.js.

---

## License

This project is licensed under the ISC License.