export function ExperienceSection({ info }) {
  return (
    <div>
      <h2>Relevant Experience</h2>
      {info.map((job, i) => (
        <div key={i} className="experience">
          <h4>{job.companyName ? job.companyName : "Company"}</h4>
          <h5>{job.title ? job.title : "Position"}</h5>
          <p className="responsiblities-header-resume">
            Summary of Responsibilities
          </p>
          <ul className="responsibilities-list">
            {job.responsibilities.map((task, subI) => (
              <li key={subI}>{job.responsibilities[subI]}</li>
            ))}
          </ul>
          <p className="experience-dates">
            {job.startDate ? job.startDate : "Start Date"} -
            {job.endDate ? job.endDate : "End Date"}
          </p>
        </div>
      ))}
    </div>
  );
}
