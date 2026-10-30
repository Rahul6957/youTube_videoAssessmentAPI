import { useState } from "react";

import Header from "./components/Header";
import StudentInformation from "./components/StudentInformation";
import AssessmentRubric from "./components/AssessmentRubric";
import OverallResult from "./components/OverallResult";
import ScoringGuide from "./components/ScoringGuide";
import Footer from "./components/Footer";

import "./App.css";

const criteria = [
  {
    title: "Depth of understanding",
    description:
      "Explains the concept in their own words and why it works.",
  },
  {
    title: "Practical demonstration",
    description:
      "Runs working Python code and explains important lines and output.",
  },
  {
    title: "Problem-solving ability",
    description:
      "Covers a real use case, edge cases, errors or limitations.",
  },
  {
    title: "Content composition",
    description:
      "Uses a logical structure: introduction, explanation, demo and conclusion.",
  },
  {
    title: "Storytelling ability",
    description:
      "Uses a relatable scenario, analogy or example to teach the concept.",
  },
  {
    title: "Communication skills",
    description:
      "Speaks clearly and uses technical vocabulary appropriately.",
  },
  {
    title: "Presentation and confidence",
    description:
      "Appears prepared, composed and comfortable explaining the topic.",
  },
  {
    title: "Visual and video quality",
    description:
      "Audio, code, slides, diagrams and screen recording are clear and useful.",
  },
  {
    title: "AI literacy and independent thinking",
    description:
      "Validates AI-assisted content and can explain and modify their solution.",
  },
  {
    title: "Professionalism and audience engagement",
    description:
      "Respects the time limit, acknowledges sources and ends professionally.",
  },
];

const initialStudent = {
  name: "",
  topic: "",
  mentor: "",
  date: "",
};

const initialScores = Array(10).fill(0);

function getReadiness(total) {
  if (total >= 90) {
    return {
      title: "Mentor-ready",
      description:
        "Strong independent explanation, demonstration and communication.",
    };
  }

  if (total >= 75) {
    return {
      title: "Workplace-ready potential",
      description:
        "Good foundation with a few areas to strengthen.",
    };
  }

  if (total >= 60) {
    return {
      title: "Developing",
      description:
        "More practice needed in applying and explaining concepts.",
    };
  }

  if (total >= 40) {
    return {
      title: "Needs guided practice",
      description:
        "Targeted support needed in understanding or communication.",
    };
  }

  return {
    title: "Rebuild fundamentals",
    description:
      "Revisit the concept and submit a fresh demonstration.",
  };
}

function App() {
  const [student, setStudent] = useState(initialStudent);
  const [scores, setScores] = useState(initialScores);
  const [feedback, setFeedback] = useState("");
  const [notice, setNotice] = useState("");

  const total = scores.reduce((sum, score) => sum + score, 0);
  const readiness = getReadiness(total);

  // Student information update
  function handleStudentChange(event) {
    const { name, value } = event.target;

    setStudent((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  // Rubric score update
  function handleScoreChange(index, value) {
    const score = Number(value);

    setScores((previous) =>
      previous.map((oldScore, i) =>
        i === index ? score : oldScore
      )
    );
  }

  // Create assessment report
  function createReport() {
    const studentName = student.name.trim() || "Not entered";
    const topic = student.topic.trim() || "Not entered";
    const mentor = student.mentor.trim() || "Not entered";
    const date = student.date.trim() || "Not entered";
    const mentorFeedback = feedback.trim() || "Not entered";

    const criterionReport = criteria
      .map(
        (criterion, index) =>
          `${index + 1}. ${criterion.title}: ${scores[index]}/10`
      )
      .join("\n");

    return `TRANSFLOWER LEARNING — PYTHON MENTOR CHALLENGE
VIDEO-BASED EMPLOYABILITY ASSESSMENT

Student: ${studentName}
Python topic: ${topic}
Evaluating mentor: ${mentor}
Assessment date: ${date}

${criterionReport}

TOTAL: ${total}/100
READINESS LEVEL: ${readiness.title}
Interpretation: ${readiness.description}

MENTOR FEEDBACK:
${mentorFeedback}

Note: This is one source of employability evidence, not a standalone hiring decision.`;
  }

  // Copy report to clipboard
  async function handleCopyReport() {
    const report = createReport();

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(report);
      } else {
        const textarea = document.createElement("textarea");

        textarea.value = report;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";

        document.body.appendChild(textarea);
        textarea.select();

        const copied = document.execCommand("copy");
        textarea.remove();

        if (!copied) {
          throw new Error("Copy command failed");
        }
      }

      setNotice("Assessment report copied successfully!");
    } catch {
      setNotice(
        "Unable to copy automatically. Please try again or use Print / Save as PDF."
      );
    }
  }

  // Print or save as PDF
  function handlePrint() {
    setNotice("");
    window.print();
  }

  // Reset assessment form
  function handleReset() {
    const confirmed = window.confirm(
      "Are you sure you want to reset the entire assessment?"
    );

    if (!confirmed) {
      return;
    }

    setStudent({ ...initialStudent });
    setScores([...initialScores]);
    setFeedback("");
    setNotice("");
  }

  return (
    <div className="app">
      <Header />

      <main className="main-container">
        <StudentInformation
          student={student}
          onChange={handleStudentChange}
        />

        <AssessmentRubric
          criteria={criteria}
          scores={scores}
          onScoreChange={handleScoreChange}
        />

        <OverallResult
          total={total}
          readiness={readiness}
          feedback={feedback}
          onFeedbackChange={(event) =>
            setFeedback(event.target.value)
          }
          onCopy={handleCopyReport}
          onPrint={handlePrint}
          onReset={handleReset}
          notice={notice}
        />

        <ScoringGuide />
      </main>

      <Footer />
    </div>
  );
}

export default App;