# 🐈 MeCat ✍️

A full-stack blog management application where users can create, edit, search, and manage their own blogs.

- **Frontend**: React, JavaScript, TailwindCSS
- **Backend**: Node.js, Express.js, bcrypt, jsonwebtoken
- **Database**: PostgreSQL
- **Design Tools**: Figma (UI), Google Sheets (API planning), draw.io (Database schema)

## ✨ Features

- User registration
- User login
- User logout
- View all blogs
- View own blogs
- View single blog details
- Search blogs
- Edit own blog
- Delete own blog

## 📂 Project Structure

```
├── about-me-cat/               # Project designs & database setup screenshots
|   ├── designs/                # API, UI, and database design
|   ├── screenshots/            # Database setup screenshots & web page screenshots
├── backend/                    # Backend API and server-side code
│   ├── controllers/            # Functions handling API logic for routes
│   ├── middlewares/            # Custom middlewares for authentication and input validation (register & login)
│   ├── routers/                # API routes
│   ├── utils/                  # Helper functions and utilities
│   ├── .gitignore              # Specifies files to be ignored
│   ├── app.js                  # Entry point for backend server
│   └── package.json            # Backend dependencies
├── frontend/                   # Frontend client-side code
|   ├── public/                 # Public static files
|   |   ├── images/             # Icons and images used in the frontend
│   ├── src/                    # React components, styles, etc.
│   │   ├── components/         # Reusable React components
│   │   ├── contexts/           # React context for state management
│   │   ├── pages/              # React page components
│   │   ├── App.js              # Main App component
│   │   ├── config.js           # Configuration variables (e.g., API base URL)
│   │   ├── index.css           # Global CSS / Tailwind imports
│   │   └── index.js            # React DOM rendering entry
│   ├── .gitignore              # Specifies files to be ignored by Git
│   ├── package.json            # Frontend dependencies
│   └── tailwind.config.js      # TailwindCSS configuration
└── README.md                   # The file you are currently reading
```

## ⚡️ Getting Started

#### Clone the repository:

```
git clone https://github.com/JaoShiGitHub/me-cat.git
cd me-cat
```

#### Install dependencies:

```
# Install backend dependencies
cd backend
npm install
# Install frontend dependencies
cd ../frontend
npm install
```

#### Set up environment variables:

- Create a .env file in the backend/ directory

#### Set up database:

- Database setup screenshots available in `about-me-cat/screenshots/database`

#### Run the application:

```
# Start the backend server
cd ../backend
npm start
# Start the frontend development server
cd ../frontend
npm start
```

(Grey = feature not yet included)
![API Design](https://github.com/JaoShiGitHub/me-cat/blob/main/about-me-cat/designs/api-design.png?raw=true)
![Schema](https://github.com/JaoShiGitHub/me-cat/blob/main/about-me-cat/designs/schema.png?raw=true)
![Schema](https://github.com/JaoShiGitHub/me-cat/blob/main/about-me-cat/designs/me-cat.png?raw=true)
Designed & created by JaoShiGitHub (Oshin)
