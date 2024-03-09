export function ExperienceSection({ info }) {
  return (
    <div>
      <h2>Relevant Experience</h2>
      {info.map((job, i) => (
        <div key={i}>
          <h4>{job.companyName ? job.companyName : "Company"}</h4>
          <h5>{job.title ? job.title : "Position"}</h5>
          <p>Summary of Responsibilities</p>
          <ul>
            {job.responsibilities.map((task, subI) => (
              <li key={subI}>{job.responsibilities[subI]}</li>
            ))}
          </ul>
          <p>
            {job.startDate ? job.startDate : "Start Date"} -
            {job.endDate ? job.endDate : "End Date"}
          </p>
        </div>
      ))}
    </div>
  );
}
