
function StudentInformation({ student, onChange }) {
  return (
    <section className="card student-information">
      <h2>Student Information</h2>

      <div className="student-form-grid">
        {/* Student Name / ID */}
        <div className="form-group">
          <label htmlFor="student-name">
            Student name / ID
          </label>

          <input
            type="text"
            id="student-name"
            name="name"
            placeholder="Enter student name or ID"
            value={student.name}
            onChange={onChange}
          />
        </div>

        {/* Python Topic */}
        <div className="form-group">
          <label htmlFor="python-topic">
            Python topic
          </label>

          <input
            type="text"
            id="python-topic"
            name="topic"
            placeholder="e.g. Decorators, Generators, Exceptions"
            value={student.topic}
            onChange={onChange}
          />
        </div>

        {/* Evaluating Mentor */}
        <div className="form-group">
          <label htmlFor="evaluating-mentor">
            Evaluating mentor
          </label>

          <input
            type="text"
            id="evaluating-mentor"
            name="mentor"
            placeholder="Mentor name"
            value={student.mentor}
            onChange={onChange}
          />
        </div>

        {/* Assessment Date */}
        <div className="form-group">
          <label htmlFor="assessment-date">
            Assessment date
          </label>

          <input
            type="text"
            id="assessment-date"
            name="date"
            placeholder="DD-MM-YYYY"
            value={student.date}
            onChange={onChange}
          />
        </div>
      </div>
    </section>
  );
}

export default StudentInformation;

