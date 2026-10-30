function OverallResult({
  total,
  readiness,
  feedback,
  onFeedbackChange,
  onCopy,
  onPrint,
  onReset,
  notice,
}) {
  return (
    <section className="card overall-result">
      <h2>Overall Result</h2>

      <div className="result-summary">
        <div className="total-score">
          <span className="result-label">Total Score</span>

          <div className="score-value">
            {total}
            <span> / 100</span>
          </div>
        </div>

        <div className="readiness-result">
          <span className="result-label">Readiness Level</span>

          <h3>{readiness.title}</h3>

          <p>{readiness.description}</p>
        </div>
      </div>

      <div className="feedback-section">
        <label htmlFor="mentor-feedback">
          Mentor feedback — evidence, strengths and next steps
        </label>

        <textarea
          id="mentor-feedback"
          rows="5"
          placeholder="Example: Explains loops clearly. Next step: demonstrate a boundary case and explain why it occurs."
          value={feedback}
          onChange={onFeedbackChange}
        />
      </div>

      <div className="result-actions">
        <button
          type="button"
          className="btn btn-primary"
          onClick={onCopy}
        >
          Copy Assessment Report
        </button>

        <button
          type="button"
          className="btn btn-secondary"
          onClick={onPrint}
        >
          Print / Save as PDF
        </button>

        <button
          type="button"
          className="btn btn-danger"
          onClick={onReset}
        >
          Reset Form
        </button>
      </div>

      {notice && (
        <p className="notice-message" role="status">
          {notice}
        </p>
      )}
    </section>
  );
}

export default OverallResult;