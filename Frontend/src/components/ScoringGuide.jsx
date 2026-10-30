function ScoringGuide() {
  const scoringBands = [
    {
      range: "9–10",
      title: "Excellent",
      description:
        "Independent explanation, strong demonstration and real-world connection.",
    },
    {
      range: "7–8",
      title: "Good",
      description:
        "Correct and clear, with minor gaps or occasional reliance on notes.",
    },
    {
      range: "5–6",
      title: "Developing",
      description:
        "Understands basics but needs more depth, clarity or troubleshooting.",
    },
    {
      range: "3–4",
      title: "Weak",
      description:
        "Mostly memorized; limited understanding or incomplete demonstration.",
    },
    {
      range: "0–2",
      title: "Insufficient evidence",
      description:
        "Cannot explain the core idea or provide meaningful evidence.",
    },
  ];

  return (
    <section className="card scoring-guide">
      <h2>Scoring Guide</h2>

      <div className="scoring-bands">
        {scoringBands.map((band) => (
          <div className="scoring-band" key={band.range}>
            <div className="scoring-band-heading">
              <strong>{band.range}</strong>

              <h3>{band.title}</h3>
            </div>

            <p>{band.description}</p>
          </div>
        ))}
      </div>

      <div className="readiness-guide">
        <h3>Suggested readiness bands</h3>

        <p>
          90–100 Mentor-ready · 75–89 Workplace-ready potential ·
          60–74 Developing · 40–59 Needs guided practice ·
          0–39 Rebuild fundamentals.
        </p>

        <p className="guide-note">
          These are internal guidance bands, not universal hiring
          standards.
        </p>
      </div>
    </section>
  );
}

export default ScoringGuide;