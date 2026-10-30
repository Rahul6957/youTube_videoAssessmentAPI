function CriterionCard({ criterion, index, score, onScoreChange }) {
  return (
    <div className="criterion-card">
      <div className="criterion-header">
        <div className="criterion-title-group">
          <h3>
            {index + 1}. {criterion.title}
          </h3>

          <p>{criterion.description}</p>
        </div>

        <div className="criterion-score">
          <strong>{score}</strong>
          <span> / 10</span>
        </div>
      </div>

      <div className="score-slider-container">
        <input
          type="range"
          min="0"
          max="10"
          step="1"
          value={score}
          onChange={(event) =>
            onScoreChange(Number(event.target.value))
          }
          aria-label={`Score for ${criterion.title}`}
          className="score-slider"
        />

        <div className="score-labels">
          <span>0 — Insufficient</span>
          <span>5 — Developing</span>
          <span>10 — Excellent</span>
        </div>
      </div>
    </div>
  );
}

export default CriterionCard;