// Education info includes school, degree, and date studied
export function EducationInfo({
  school,
  degree,
  startDate,
  endDate,
  onChange,
}) {
  return (
    <form id="educationInfo">
      <legend>Education Experience:</legend>

      <label htmlFor="school">University Attended:</label>
      <input
        type="text"
        name="school"
        id="school"
        placeholder="The University of Odin"
        value={school}
        onChange={(e) => onChange(e)}
      />

      <label htmlFor="degree">Degree Obtained:</label>
      <input
        type="text"
        name="degree"
        id="degree"
        placeholder="Fullstack Pro"
        value={degree}
        onChange={(e) => onChange(e)}
      />

      <label htmlFor="start-year">Start year:</label>
      <input
        type="text"
        name="startDate"
        id="start-year"
        placeholder="Yesterday"
        value={startDate}
        onChange={(e) => onChange(e)}
      />

      <label htmlFor="end-year">Completion year:</label>
      <input
        type="text"
        name="endDate"
        id="end-year"
        placeholder="Ongoing"
        value={endDate}
        onChange={(e) => onChange(e)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
