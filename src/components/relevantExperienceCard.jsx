// Each card has company name, title, summary of responsibilities, start date, end date
export function RelevantExperienceCard(value) {
  // TODO: Render responsibilities "reactively"
  // TODO: Add button to add more responsibilities
  // Haven't found out if the same start and end year from education is going to be a problem yet

  return (
    <fieldset>
      <legend>{value.companyName ? value.companyName : "Job"}</legend>

      <label htmlFor="company-name">Company Name:</label>
      <input
        type="text"
        name="companyName"
        id="company-name"
        placeholder="Odin Corp"
      >
        {value.companyName}
      </input>

      <label htmlFor="job-title">Job Title:</label>
      <input
        type="text"
        name="jobTitle"
        id="job-title"
        placeholder="Senior Fullstack Wizzard"
      >
        {value.title}
      </input>

      <label htmlFor="responsibilities">Summary of Responsibilities:</label>
      <input
        type="text"
        name="responsibilities"
        id="responsibilities"
        placeholder="Made the stack full"
      >
        {value.responsibilities}
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
