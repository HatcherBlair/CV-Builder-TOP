// Each card has company name, title, summary of responsibilities, start date, end date
export function RelevantExperienceCard({
  companyName,
  title,
  responsibilities,
  startDate,
  endDate,
  onChange,
  index,
  responsibilityOnChange,
}) {
  // Generates the responsibility input fields
  function generateResponsibilities(tasks, index) {
    return tasks.map((task, i) => (
      <input
        key={i}
        type="text"
        name="responsibilities"
        id="responsibilities"
        placeholder="Made the stack full"
        value={task}
        onChange={(e) => responsibilityOnChange(e, index, i)}
      />
    ));
  }

  return (
    <div>
      <legend>{companyName ? companyName : "Job"}</legend>

      <label htmlFor="company-name">Company Name:</label>
      <input
        type="text"
        name="companyName"
        id="company-name"
        placeholder="Odin Corp"
        value={companyName}
        onChange={(e) => onChange(e, index)}
      />

      <label htmlFor="job-title">Job Title:</label>
      <input
        type="text"
        name="title"
        id="job-title"
        placeholder="Senior Fullstack Wizzard"
        value={title}
        onChange={(e) => onChange(e, index)}
      />

      <label htmlFor="responsibilities">Summary of Responsibilities:</label>
      {generateResponsibilities(responsibilities, index)}

      <label htmlFor="start-year">Start year:</label>
      <input
        type="text"
        name="startDate"
        id="start-year"
        placeholder="Yesterday"
        value={startDate}
        onChange={(e) => onChange(e, index)}
      />

      <label htmlFor="end-year">Completion year:</label>
      <input
        type="text"
        name="endDate"
        id="end-year"
        placeholder="Ongoing"
        value={endDate}
        onChange={(e) => onChange(e, index)}
      />
    </div>
  );
}
