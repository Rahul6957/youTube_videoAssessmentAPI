# youTube_videoAssessmentAPI
This project helps mentors evaluate students based on their Python knowledge, practical coding demonstrations, communication skills and video presentation quality.
# YouTube Video Assessment System

## 1. Project Overview

The YouTube Video Assessment System is a full-stack web application developed using React.js, Node.js, Express.js, and MySQL.

This application helps mentors evaluate students based on their Python knowledge, practical coding demonstrations, communication skills, and YouTube video presentations.

The system provides an interactive frontend for mentors to assess students and a backend API to process and store assessment records in a MySQL database.

## 2. Project Purpose

The main purpose of this project is to develop a digital platform for evaluating students through video-based technical assessments.

Students present Python topics through video presentations. Mentors evaluate their performance using predefined assessment criteria and assign marks from 0 to 10 for each criterion.

The system automatically calculates the total score out of 100 and determines the student's readiness level.

It also maintains assessment records so that mentors can view, update, and manage student evaluation results.

## 3. Key Features

* Display student information.
* Display mentor information.
* Display available Python topics.
* Create video-based student assessments.
* Evaluate students using 10 assessment criteria.
* Assign marks from 0 to 10 for each criterion.
* Automatically calculate total marks out of 100.
* Automatically determine student readiness levels.
* Add mentor feedback.
* View assessment reports.
* Update assessment records.
* Delete assessment records.
* Store assessment data in MySQL.

## 4. Technologies Used

| Technology | Purpose                          |
| ---------- | -------------------------------- |
| React.js   | Frontend user interface          |
| JavaScript | Application logic                |
| HTML5      | Web page structure               |
| CSS3       | UI styling                       |
| Node.js    | Backend runtime environment      |
| Express.js | REST API development             |
| MySQL      | Database management              |
| MySQL2     | Node.js and MySQL connectivity   |
| CORS       | Frontend-backend communication   |
| Nodemon    | Automatic backend server restart |
| Postman    | API testing                      |

## 5. System Architecture

The application follows a full-stack architecture.

```text
             React Frontend
                   |
                   | HTTP Requests
                   v
              Express Routes
                   |
                   v
               Controller
                   |
                   v
                Service
                   |
                   v
               Repository
                   |
                   v
              MySQL Database
```

### Backend Architecture Responsibilities

* **Routes:** Define API endpoints.
* **Controller:** Handle HTTP requests and responses.
* **Service:** Implement business logic and validations.
* **Repository:** Execute SQL queries.
* **Config:** Manage database connections.

## 6. Assessment Criteria

Each criterion is evaluated from 0 to 10 marks.

1. Depth of Understanding
2. Practical Demonstration
3. Problem-Solving Ability
4. Content Composition
5. Storytelling Ability
6. Communication Skills
7. Presentation and Confidence
8. Visual and Video Quality
9. AI Literacy and Independent Thinking
10. Professionalism and Audience Engagement

**Total Marks: 100**

## 7. Student Readiness Levels

| Score  | Readiness Level           |
| ------ | ------------------------- |
| 90–100 | Mentor-ready              |
| 75–89  | Workplace-ready potential |
| 60–74  | Developing                |
| 40–59  | Needs guided practice     |
| 0–39   | Rebuild fundamentals      |

## 8. Project Folder Structure

```text
youTube_videoAssessmentAPI/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── backend/
│   ├── config/
│   │   └── db.js
│   │
│   ├── repositories/
│   │   ├── studentRepository.js
│   │   ├── mentorRepository.js
│   │   ├── topicRepository.js
│   │   └── assessmentRepository.js
│   │
│   ├── services/
│   │   ├── studentService.js
│   │   ├── mentorService.js
│   │   ├── topicService.js
│   │   └── assessmentService.js
│   │
│   ├── controllers/
│   │   ├── studentController.js
│   │   ├── mentorController.js
│   │   ├── topicController.js
│   │   └── assessmentController.js
│   │
│   ├── routes/
│   │   ├── studentRoutes.js
│   │   ├── mentorRoutes.js
│   │   ├── topicRoutes.js
│   │   └── assessmentRoutes.js
│   │
│   ├── server.js
│   └── package.json
│
└── README.md
```

## 9. Software Requirements

Install the following software before starting the project:

* Node.js
* Visual Studio Code
* MySQL Server
* MySQL Workbench (optional)
* Postman (for API testing)

## 10. Installation and Setup

### Step 1: Clone or Open the Project

Open the project folder in VS Code.

### Step 2: Frontend Setup

Open a terminal:

```bash
cd frontend
```

Install frontend dependencies:

```bash
npm install
```

If creating the React application from scratch using Vite:

```bash
npm create vite@latest frontend -- --template react
cd frontend
npm install
```

### Step 3: Backend Setup

Open another terminal:

```bash
cd backend
```

Initialize Node.js:

```bash
npm init -y
```

Install backend dependencies:

```bash
npm install express mysql2 cors
```

Install Nodemon:

```bash
npm install --save-dev nodemon
```

### Step 4: Database Setup

Open MySQL Workbench.

Create the database:

```sql
CREATE DATABASE python_mentor_assessment;
```

Create the required tables:

* Student_information
* Mentor_Information
* Topics
* Assessment

Ensure the table names and columns match the backend SQL queries.

### Step 5: Database Configuration

Open:

```text
backend/config/db.js
```

Configure your MySQL connection details:

```javascript
const mysql = require("mysql2/promise");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "YOUR_MYSQL_PASSWORD",
    database: "python_mentor_assessment"
});

module.exports = db;
```

Replace `YOUR_MYSQL_PASSWORD` with your actual MySQL password.

## 11. How to Run the Project

The frontend and backend must run in separate terminals.

### Terminal 1: Start Backend

```bash
cd backend
npm run dev
```

Expected output:

```text
MySQL Connected Successfully
Server running at http://localhost:3000
```

### Terminal 2: Start Frontend

```bash
cd frontend
npm run dev
```

Vite will display the frontend URL, usually:

```text
http://localhost:5173
```

Open this URL in your browser.

## 12. API Endpoints

Base URL:

```text
http://localhost:3000
```

| Method | Endpoint             | Description           |
| ------ | -------------------- | --------------------- |
| GET    | /api/students        | Get all students      |
| GET    | /api/mentors         | Get all mentors       |
| GET    | /api/topics          | Get all Python topics |
| POST   | /api/assessments     | Create assessment     |
| GET    | /api/assessments     | Get all assessments   |
| GET    | /api/assessments/:id | Get assessment by ID  |
| PUT    | /api/assessments/:id | Update assessment     |
| DELETE | /api/assessments/:id | Delete assessment     |

## 13. Application Workflow

1. Mentor opens the React application.
2. The application retrieves student, mentor, and topic information from the backend APIs.
3. Mentor selects a student and Python topic.
4. Mentor evaluates the student's video presentation.
5. Mentor assigns marks for all 10 criteria.
6. React sends the assessment data to the Node.js backend.
7. Backend validates the scores and calculates the total.
8. Backend determines the readiness level.
9. Assessment information is saved in MySQL.
10. Mentor can view and manage assessment records.

## 14. Future Enhancements

* User authentication and authorization.
* Separate mentor and student dashboards.
* Student assessment history.
* PDF assessment report generation.
* Video URL management.
* Assessment analytics and progress tracking.

---

**Project Name:** YouTube Video Assessment System

**Application Type:** Full Stack Web Application

**Frontend:** React.js

**Backend:** Node.js + Express.js

**Database:** MySQL

**Architecture:** Repository-Service-Controller
