// Education info includes school, degree, and date studied
export function EducationInfo(value) {
  return (
    <fieldset>
      <legend>Education Experience:</legend>

      <label htmlFor="school">University Attended:</label>
      <input
        type="text"
        name="school"
        id="school"
        placeholder="The University of Odin"
      >
        {value.school}
      </input>

      <label htmlFor="degree">Degree Obtained:</label>
      <input type="text" name="degree" id="degree" placeholder="Fullstack Pro">
        {value.degree}
      </input>

      <label htmlFor="start-year">Start year:</label>
      <input
        type="text"
        name="startYear"
        id="start-year"
        placeholder="Yesterday"
      >
        {value.startDate}
      </input>

      <label htmlFor="end-year">Completion year:</label>
      <input type="text" name="endYear" id="end-year" placeholder="Ongoing">
        {value.endDate}
      </input>
    </fieldset>
  );
}
