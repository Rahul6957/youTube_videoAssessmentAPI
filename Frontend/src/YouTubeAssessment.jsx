import React, { useMemo, useState } from "react";

const criteria = [
  { title: "Introduction & Topic Overview", description: "Introduces themselves and clearly explains the selected Python topic." },
  { title: "Conceptual Understanding", description: "Demonstrates a correct understanding of the core concepts." },
  { title: "Technical Accuracy", description: "Uses correct Python terminology, syntax, and explanations." },
  { title: "Practical Examples", description: "Uses relevant examples or real-world use cases to explain the topic." },
  { title: "Code Demonstration", description: "Explains code clearly and demonstrates how it works." },
  { title: "Problem-Solving Ability", description: "Explains the problem, approach, and reasoning behind the solution." },
  { title: "Communication Skills", description: "Speaks clearly, confidently, and in an organized manner." },
  { title: "Presentation Structure", description: "Follows a logical flow with a clear beginning, middle, and conclusion." },
  { title: "Time Management", description: "Covers the topic effectively within the allotted presentation time." },
  { title: "Questions & Professionalism", description: "Responds to questions thoughtfully and maintains professional conduct." },
];

const initialScores = Array(criteria.length).fill(0);

function getReadiness(total) {
  if (total >= 90) return { label: "Excellent — Job Ready", tone: "excellent" };
  if (total >= 75) return { label: "Good — Nearly Ready", tone: "good" };
  if (total >= 60) return { label: "Developing — Needs Practice", tone: "developing" };
  if (total >= 40) return { label: "Needs Improvement", tone: "weak" };
  return { label: "Not Yet Ready", tone: "poor" };
}

export default function YouTubeAssessment() {
  const [student, setStudent] = useState({
    name: "",
    id: "",
    topic: "",
    mentor: "",
    date: new Date().toISOString().slice(0, 10),
  });
  const [scores, setScores] = useState(initialScores);
  const [feedback, setFeedback] = useState("");
  const [notice, setNotice] = useState("");

  const total = useMemo(() => scores.reduce((sum, score) => sum + Number(score), 0), [scores]);
  const readiness = getReadiness(total);

  const updateStudent = (field, value) =>
    setStudent((current) => ({ ...current, [field]: value }));

  const reportText = () => {
    return [
      "TRANSFLOWER LEARNING — PYTHON MENTOR CHALLENGE",
      "Video-Based Employability Assessment",
      "",
      `Student Name: ${student.name || "—"}`,
      `Student ID: ${student.id || "—"}`,
      `Python Topic: ${student.topic || "—"}`,
      `Mentor: ${student.mentor || "—"}`,
      `Assessment Date: ${student.date || "—"}`,
      "",
      "ASSESSMENT SCORES",
      ...criteria.map((item, index) => `${index + 1}. ${item.title}: ${scores[index]}/10`),
      "",
      `Total Score: ${total}/100`,
      `Readiness: ${readiness.label}`,
      "",
      `Mentor Feedback: ${feedback || "—"}`,
    ].join("\n");
  };

  const copyReport = async () => {
    try {
      await navigator.clipboard.writeText(reportText());
      setNotice("Assessment report copied successfully.");
    } catch {
      setNotice("Clipboard access is unavailable. Use Print / Save as PDF instead.");
    }
    window.setTimeout(() => setNotice(""), 3500);
  };

  const resetForm = () => {
    setStudent({ name: "", id: "", topic: "", mentor: "", date: new Date().toISOString().slice(0, 10) });
    setScores(initialScores);
    setFeedback("");
    setNotice("");
  };

  return (
    <div className="assessment-app">
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; background: #f4f6f9; font-family: Inter, Segoe UI, Arial, sans-serif; color: #242833; }
        .assessment-app { min-height: 100vh; padding-bottom: 30px; }
        .topbar { background: linear-gradient(135deg, #8e111b, #c62835); color: white; padding: 28px 22px 30px; box-shadow: 0 4px 14px #6f0c151c; }
        .topbar-inner { max-width: 1100px; margin: auto; }
        .brand { font-size: 13px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; opacity: .9; }
        .topbar h1 { margin: 10px 0 7px; font-size: clamp(25px, 4vw, 36px); line-height: 1.2; }
        .topbar p { margin: 0; color: #ffe9eb; font-size: 15px; }
        .container { max-width: 1100px; margin: 25px auto; padding: 0 18px; }
        .card { background: #fff; border: 1px solid #e8eaf0; border-radius: 13px; padding: 23px; margin-bottom: 20px; box-shadow: 0 5px 20px #1e293b08; }
        .section-heading { display: flex; gap: 12px; align-items: center; margin: 0 0 19px; font-size: 20px; color: #292d38; }
        .section-number { display: inline-flex; align-items: center; justify-content: center; width: 32px; height: 32px; border-radius: 9px; background: #fff0f1; color: #b51e2a; font-size: 14px; font-weight: 800; flex-shrink: 0; }
        .student-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 17px; }
        .field label { display: block; font-size: 13px; font-weight: 700; margin-bottom: 7px; color: #454b58; }
        .field input, .field textarea { width: 100%; border: 1px solid #d9dde6; border-radius: 8px; padding: 11px 12px; background: #fff; font: inherit; font-size: 14px; outline: none; }
        .field input:focus, .field textarea:focus { border-color: #c62835; box-shadow: 0 0 0 3px #c6283514; }
        .rubric-intro { color: #6b7280; font-size: 14px; margin: -8px 0 18px; line-height: 1.5; }
        .criterion { border: 1px solid #eceef3; border-radius: 10px; padding: 16px; margin-bottom: 12px; }
        .criterion-top { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; }
        .criterion h3 { margin: 0 0 5px; font-size: 15px; }
        .criterion p { margin: 0; color: #737987; font-size: 13px; line-height: 1.45; }
        .score-pill { min-width: 55px; text-align: center; background: #fff0f1; color: #b51e2a; border-radius: 8px; padding: 7px 9px; font-weight: 800; font-size: 14px; }
        .slider-row { display: flex; align-items: center; gap: 12px; margin-top: 15px; }
        .slider-row span { font-size: 11px; color: #858b98; }
        .slider-row input { width: 100%; accent-color: #b51e2a; cursor: pointer; }
        .result-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
        .result-box { border-radius: 11px; padding: 19px; background: #f7f8fb; border: 1px solid #eceef3; }
        .result-label { color: #6d7380; font-size: 12px; text-transform: uppercase; font-weight: 800; letter-spacing: .8px; }
        .total-line { display: flex; align-items: baseline; gap: 7px; margin-top: 7px; }
        .total-number { font-size: 39px; font-weight: 850; color: #a71925; line-height: 1.1; }
        .total-max { color: #8a909b; font-size: 15px; }
        .readiness { display: inline-block; margin-top: 9px; padding: 7px 10px; border-radius: 7px; font-size: 13px; font-weight: 800; }
        .excellent { color: #17663b; background: #dcfce7; } .good { color: #1d4ed8; background: #dbeafe; }
        .developing { color: #854d0e; background: #fef3c7; } .weak { color: #9a3412; background: #ffedd5; } .poor { color: #991b1b; background: #fee2e2; }
        .feedback { margin-top: 16px; } .feedback textarea { min-height: 110px; resize: vertical; }
        .actions { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 18px; }
        .btn { border: 0; border-radius: 8px; padding: 11px 16px; font-size: 14px; font-weight: 750; cursor: pointer; transition: transform .15s, opacity .15s; }
        .btn:hover { transform: translateY(-1px); opacity: .92; } .btn-primary { color: white; background: #b51e2a; }
        .btn-secondary { color: #333947; background: #edf0f5; } .btn-outline { color: #a71925; border: 1px solid #e4a4a9; background: white; }
        .notice { margin-top: 12px; font-size: 13px; color: #17663b; font-weight: 650; }
        .guide-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px; }
        .guide-item { padding: 12px; border-radius: 9px; background: #f8f9fb; border: 1px solid #eceef3; }
        .guide-item strong { display: block; font-size: 14px; margin-bottom: 5px; } .guide-item span { color: #777e8b; font-size: 12px; }
        .footer { text-align: center; color: #8a909b; font-size: 12px; padding: 10px 18px 0; }
        @media (max-width: 700px) { .student-grid, .result-grid { grid-template-columns: 1fr; } .card { padding: 17px; } .guide-grid { grid-template-columns: repeat(2, 1fr); } .topbar { padding: 23px 18px; } }
        @media print { body { background: white; } .topbar { print-color-adjust: exact; -webkit-print-color-adjust: exact; } .container { max-width: none; margin: 12px auto; padding: 0; } .card { box-shadow: none; break-inside: avoid; padding: 15px; } .actions, .notice, .footer { display: none !important; } .criterion { break-inside: avoid; } .assessment-app { padding: 0; } }
      `}</style>

      <header className="topbar">
        <div className="topbar-inner">
          <div className="brand">Transflower Learning</div>
          <h1>Python Mentor Challenge</h1>
          <p>Video-Based Employability Assessment · 20-Minute Presentation</p>
        </div>
      </header>

      <main className="container">
        <section className="card">
          <h2 className="section-heading"><span className="section-number">01</span> Student Information</h2>
          <div className="student-grid">
            <div className="field"><label htmlFor="student-name">Student Name</label><input id="student-name" value={student.name} onChange={(e) => updateStudent("name", e.target.value)} placeholder="Enter student full name" /></div>
            <div className="field"><label htmlFor="student-id">Student ID</label><input id="student-id" value={student.id} onChange={(e) => updateStudent("id", e.target.value)} placeholder="Enter student ID" /></div>
            <div className="field"><label htmlFor="topic">Python Topic</label><input id="topic" value={student.topic} onChange={(e) => updateStudent("topic", e.target.value)} placeholder="e.g. OOP, Decorators, FastAPI" /></div>
            <div className="field"><label htmlFor="mentor">Mentor / Evaluator</label><input id="mentor" value={student.mentor} onChange={(e) => updateStudent("mentor", e.target.value)} placeholder="Enter mentor name" /></div>
            <div className="field"><label htmlFor="date">Assessment Date</label><input id="date" type="date" value={student.date} onChange={(e) => updateStudent("date", e.target.value)} /></div>
          </div>
        </section>

        <section className="card">
          <h2 className="section-heading"><span className="section-number">02</span> Assessment Rubric</h2>
          <p className="rubric-intro">Rate each criterion from 0 to 10. Move each slider to reflect the student's performance. The total score updates automatically.</p>
          {criteria.map((criterion, index) => (
            <div className="criterion" key={criterion.title}>
              <div className="criterion-top">
                <div><h3>{index + 1}. {criterion.title}</h3><p>{criterion.description}</p></div>
                <div className="score-pill">{scores[index]} / 10</div>
              </div>
              <div className="slider-row">
                <span>0</span>
                <input aria-label={`${criterion.title} score`} type="range" min="0" max="10" step="1" value={scores[index]} onChange={(e) => setScores((current) => current.map((score, i) => i === index ? Number(e.target.value) : score))} />
                <span>10</span>
              </div>
            </div>
          ))}
        </section>

        <section className="card">
          <h2 className="section-heading"><span className="section-number">03</span> Overall Result</h2>
          <div className="result-grid">
            <div className="result-box">
              <div className="result-label">Total Assessment Score</div>
              <div className="total-line"><span className="total-number">{total}</span><span className="total-max">/ 100</span></div>
              <div className="readiness" style={{ background: "#fff0f1", color: "#a71925" }}>{Math.round(total)}% score</div>
            </div>
            <div className="result-box">
              <div className="result-label">Readiness Level</div>
              <div style={{ marginTop: 12 }}><span className={`readiness ${readiness.tone}`}>{readiness.label}</span></div>
            </div>
          </div>
          <div className="field feedback"><label htmlFor="feedback">Mentor Feedback / Recommendations</label><textarea id="feedback" value={feedback} onChange={(e) => setFeedback(e.target.value)} placeholder="Write strengths, areas to improve, and recommended next steps..." /></div>
          <div className="actions">
            <button className="btn btn-primary" onClick={copyReport}>Copy Assessment Report</button>
            <button className="btn btn-secondary" onClick={() => window.print()}>Print / Save as PDF</button>
            <button className="btn btn-outline" onClick={resetForm}>Reset Form</button>
          </div>
          {notice && <div className="notice" role="status">{notice}</div>}
        </section>

        <section className="card">
          <h2 className="section-heading"><span className="section-number">04</span> Scoring Guide</h2>
          <div className="guide-grid">
            <div className="guide-item"><strong>9–10 · Excellent</strong><span>Strong understanding and delivery</span></div>
            <div className="guide-item"><strong>7–8 · Good</strong><span>Good performance with small gaps</span></div>
            <div className="guide-item"><strong>5–6 · Developing</strong><span>Basic understanding; needs practice</span></div>
            <div className="guide-item"><strong>3–4 · Weak</strong><span>Significant improvement needed</span></div>
            <div className="guide-item"><strong>0–2 · Insufficient</strong><span>Little or no evidence demonstrated</span></div>
          </div>
          <p className="rubric-intro" style={{ margin: "17px 0 0" }}><strong>Readiness bands:</strong> 90–100 Excellent · 75–89 Good · 60–74 Developing · 40–59 Needs Improvement · 0–39 Not Yet Ready.</p>
        </section>
        <div className="footer">Transflower Learning · Python Mentor Challenge · Video-Based Employability Assessment</div>
      </main>
    </div>
  );
}
