export function EducationSection({ info }) {
  return (
    <div>
      <h2>Education</h2>
      {info.map((school, i) => (
        <div key={i} className="education-card">
          <h4>{school.school ? school.school : "University"}</h4>
          <h5>{school.degree ? school.degree : "Degree Obtained"}</h5>
          <p className="education-dates">
            {school.startDate ? school.startDate : "Start Date"} -{" "}
            {school.endDate ? school.endDate : "End Date"}
          </p>
        </div>
      ))}
    </div>
  );
}
