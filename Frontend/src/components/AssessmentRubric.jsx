import CriterionCard from "./CriterionCard";

function AssessmentRubric({ criteria, scores, onScoreChange }) {
  return (
    <section className="card assessment-rubric">
      <div className="section-heading">
        <h2>Assessment Rubric — 100 Marks</h2>

        <p>
          Choose a score from 0 to 10 for each parameter.
          Evaluate observable evidence, not just video polish.
        </p>
      </div>

      <div className="criteria-list">
        {criteria.map((criterion, index) => (
          <CriterionCard
            key={criterion.title}
            criterion={criterion}
            index={index}
            score={scores[index]}
            onScoreChange={(newScore) =>
              onScoreChange(index, newScore)
            }
          />
        ))}
      </div>
    </section>
  );
}

export default AssessmentRubric;