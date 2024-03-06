import { v4 as uuid } from "uuid";

function Responsibilities(jobDescription) {
  return jobDescription.map((responsibility) => (
    <li key={uuid()}>{responsibility}</li>
  ));
}

export function ExperienceSection({ info }) {
  const jobs = info.map((job) => {
    return (
      <div key={job.companyName}>
        <h4>{job.companyName}</h4>
        <h5>{job.title}</h5>
        <ul>{Responsibilities(job.responsibilities)}</ul>
      </div>
    );
  });

  return <div>{jobs}</div>;
}
