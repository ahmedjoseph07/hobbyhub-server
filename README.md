# 🎯 Hobby Hub Server

🔗 **Live Site:** [https://hobbyhub.vercel.app](https://hobbyhub.vercel.app)

This is the backend server for the Hobby Hub application. It's built with **Node.js**, **Express**, and **MongoDB**, providing the API endpoints for managing user-created hobby groups.

---

## 📚 Table of Contents

-   [Features](#-features)
-   [Tech Stack](#️-tech-stack)
-   [Getting Started (Local Setup)](#-getting-started-local-setup)
-   [Core API Endpoints](#-core-api-endpoints)
-   [Scripts](#-scripts)
-   [Dependencies](#-dependencies)
-   [Feedback](#-feedback)
-   [License](#-license)

---

## 🌟 Features

-   📁 **CRUD Functionality for Groups**: Create, Read, Update, and Delete groups using streamlined API endpoints.
-   🔍 **Explore All Groups**: View a complete list of available hobby groups from different categories and interests.
-   👤 **User-Specific Groups**: Fetch and manage groups created by or associated with a specific user.
-   ➕ **Create New Groups**: Users can create their own groups with unique names and descriptions.
-   🛠️ **Edit & Update Groups**: Modify group details anytime with PUT requests to the server.
-   ❌ **Delete Groups**: Easily remove groups when they’re no longer needed.
-   📬 **Email-Based Filtering**: Retrieve all groups tied to a user's email for personalized views.
-   🌐 **CORS-Enabled REST API**: Seamless communication with frontend apps hosted on different domains.

---

## 🛠️ Tech Stack

-   **Node.js**
-   **Express.js**
-   **MongoDB Atlas**
-   **dotenv** (for environment variables)
-   **CORS** (for cross-origin access)

---

## 📦 Getting Started (Local Setup)

1. Clone the project:

    ```bash
    git clone https://github.com/your-username/hobby-hub-backend.git
    cd hobby-hub-backend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file with the following:

    ```env
    DB_USER=your_mongodb_user
    DB_PASS=your_mongodb_password
    PORT=3000
    ```

4. Run the server:

    ```bash
    node index.js
    ```

5. Visit `https://hobby-hub-server-flax.vercel.app` to confirm it’s running.

---

## 📁 Core API Endpoints

| Method | Endpoint                  | Description                       |
| ------ | ------------------------- | --------------------------------- |
| GET    | `/`                       | Base route, returns "Hello"       |
| GET    | `/all-groups`             | Fetch all groups                  |
| GET    | `/all-groups/:id`         | Get details of a single group     |
| GET    | `/my-groups/:id`          | Get a user's specific group by ID |
| GET    | `/all-groups/user/:email` | Groups filtered by user email     |
| POST   | `/create-group`           | Create a new group                |
| PUT    | `/my-groups/:id`          | Update a specific group by ID     |
| DELETE | `/my-groups/:id`          | Delete a group by ID              |

---

## 📜 Scripts

-   \`\`: Starts the server using `nodemon` (ideal for development).

    ```bash
    npm start
    ```

-   \`\`: No tests are currently defined.

    ```bash
    npm test
    ```

---

## 📦 Dependencies

-   \`\`: ^2.8.5 — Middleware to enable CORS.
-   \`\`: ^16.5.0 — Loads environment variables from `.env`.
-   \`\`: ^5.1.0 — Minimalist web framework.
-   \`\`: ^6.16.0 — Official MongoDB driver.

---

## 📬 Feedback

Have suggestions or want to contribute? Feel free to open issues or pull requests.

---

## 📄 License

This project is licensed under the ISC License.
