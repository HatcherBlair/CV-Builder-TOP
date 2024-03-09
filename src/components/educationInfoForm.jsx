import "../styles/educationInfoForm.css";

// Education info includes school, degree, and date studied
export function EducationInfo({ schools, onChange, addEducation }) {
  return (
    <form id="educationInfo">
      <legend>
        <u>Education Experience</u>
      </legend>
      {schools.map((school, i) => (
        <div key={i} className="school">
          <h4 className="university-header">University:</h4>
          <div>
            <label htmlFor="school">University Attended:</label>
            <input
              type="text"
              name="school"
              id="school"
              placeholder="The University of Odin"
              value={school.school}
              onChange={(e) => onChange(e, i)}
            />
          </div>

          <div>
            <label htmlFor="degree">Degree Obtained:</label>
            <input
              type="text"
              name="degree"
              id="degree"
              placeholder="Fullstack Pro"
              value={school.degree}
              onChange={(e) => onChange(e, i)}
            />
          </div>

          <div>
            <label htmlFor="start-year">Start year:</label>
            <input
              type="text"
              name="startDate"
              id="start-year"
              placeholder="Yesterday"
              value={school.startDate}
              onChange={(e) => onChange(e, i)}
            />
          </div>

          <div>
            <label htmlFor="end-year">Completion year:</label>
            <input
              type="text"
              name="endDate"
              id="end-year"
              placeholder="Ongoing"
              value={school.endDate}
              onChange={(e) => onChange(e, i)}
            />
          </div>
        </div>
      ))}

      <button type="button" onClick={addEducation}>
        Add Degree
      </button>
    </form>
  );
}
