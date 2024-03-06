import { RelevantExperienceCard } from "./relevantExperienceCard";

export function RelevantExperienceInfo(props) {
  const jobs = props.info.map((job) => {
    return <RelevantExperienceCard key={job.companyName} value={job} />;
  });

  return (
    <fieldset>
      <legend>Relevant Experience</legend>
      {jobs}
      <button>Add another job</button>
    </fieldset>
  );
}
