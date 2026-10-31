# YouTube Video Assessment System

## 1. Project Overview

The **YouTube Video Assessment System** is a web-based application designed to evaluate students' technical knowledge, presentation skills, communication skills, and practical understanding through YouTube video presentations.

Mentors can evaluate student videos using predefined assessment criteria and assign scores out of 100.

The system calculates the total score and determines the student's readiness level based on the assessment results.

## 2. Project Purpose

The main purpose of this project is to provide a structured platform for evaluating students through video-based assessments.

It helps mentors:

* Evaluate students' technical knowledge.
* Check practical implementation skills.
* Assess communication and presentation skills.
* Provide feedback to students.
* Track students' performance.

## 3. Technologies Used

| Layer       | Technology         |
| ----------- | ------------------ |
| Frontend    | React.js           |
| Backend     | Python FastAPI     |
| Database    | MySQL              |
| API Server  | Uvicorn            |
| API Testing | Postman            |
| Code Editor | Visual Studio Code |

## 4. Assessment Criteria

The system evaluates students based on 10 criteria:

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

Each criterion is scored from 0 to 10.

**Maximum Total Score: 100**

## 5. Readiness Levels

| Score  | Readiness Level           |
| ------ | ------------------------- |
| 90–100 | Mentor-ready              |
| 75–89  | Workplace-ready potential |
| 60–74  | Developing                |
| 40–59  | Needs guided practice     |
| 0–39   | Rebuild fundamentals      |

## 6. Project Architecture

The project follows a layered architecture.

### Frontend

React.js is used to create the user interface and display assessment information.

### Backend

Python FastAPI handles API requests and business logic.

### Database

MySQL stores student, mentor, topic, and assessment information.

### Backend Request Flow

Routes → Controllers → Services → Repositories → MySQL Database

## 7. Project Folder Structure

```text
youTube_videoAssessmentAPI/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── StudentInformation.jsx
│   │   │   ├── AssessmentRubric.jsx
│   │   │   ├── CriterionCard.jsx
│   │   │   ├── OverallResult.jsx
│   │   │   ├── ScoringGuide.jsx
│   │   │   └── Footer.jsx
│   │   │
│   │   ├── services/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   │
│   └── package.json
│
├── backend/
│   ├── config/
│   │   └── database.py
│   │
│   ├── models/
│   │
│   ├── repositories/
│   │   ├── student_repository.py
│   │   ├── mentor_repository.py
│   │   ├── topic_repository.py
│   │   └── assessment_repository.py
│   │
│   ├── services/
│   │   ├── student_service.py
│   │   ├── mentor_service.py
│   │   ├── topic_service.py
│   │   └── assessment_service.py
│   │
│   ├── controllers/
│   │   ├── student_controller.py
│   │   ├── mentor_controller.py
│   │   ├── topic_controller.py
│   │   └── assessment_controller.py
│   │
│   ├── routes/
│   │   ├── student_routes.py
│   │   ├── mentor_routes.py
│   │   ├── topic_routes.py
│   │   └── assessment_routes.py
│   │
│   ├── main.py
│   └── requirements.txt
│
└── README.md
```

## 8. Software Requirements

Install the following software:

1. Python
2. MySQL Server
3. MySQL Workbench
4. Visual Studio Code
5. Node.js and npm (for React frontend development only)

## 9. Backend Installation and Setup

### Step 1: Open Backend Folder

```powershell
cd backend
```

### Step 2: Create Python Virtual Environment

```powershell
python -m venv venv
```

### Step 3: Activate Virtual Environment

```powershell
venv\Scripts\activate
```

### Step 4: Install Required Packages

```powershell
pip install fastapi uvicorn mysql-connector-python
```

### Step 5: Save Dependencies

```powershell
pip freeze > requirements.txt
```

### Step 6: Run Backend Server

```powershell
uvicorn main:app --reload
```

Backend URL:

```text
http://127.0.0.1:8000
```

FastAPI Swagger Documentation:

```text
http://127.0.0.1:8000/docs
```

## 10. Frontend Installation and Setup

### Step 1: Open Frontend Folder

```powershell
cd frontend
```

### Step 2: Install Dependencies

```powershell
npm install
```

### Step 3: Run React Application

```powershell
npm run dev
```

Frontend URL:

```text
http://localhost:5173
```

## 11. Database

Database: `youtube_video_assessment`

Main tables:

* Student_information
* Mentor_Information
* Topics
* Assessment

The Assessment table connects students, mentors, and topics using foreign keys.

It stores assessment scores, total score, readiness level, mentor feedback, and assessment date.

## 12. Application Workflow

1. Student information is selected.
2. Mentor information is selected.
3. Assessment topic is selected.
4. Mentor evaluates the student's video.
5. Mentor assigns scores for all 10 criteria.
6. System calculates the total score.
7. System determines the readiness level.
8. Assessment results are saved in MySQL.
9. Assessment details can be retrieved through the API.

## 13. Future Enhancements

* Student login and authentication.
* Mentor login and authentication.
* YouTube video URL integration.
* Assessment history.
* Student performance dashboard.
* PDF assessment report.
* Admin dashboard.
* Integration with TFLCoMentor.

## 14. Project Information

**Project Name:** YouTube Video Assessment System

**Frontend:** React.js

**Backend:** Python FastAPI

**Database:** MySQL

**Architecture:** Routes → Controllers → Services → Repositories → Database
