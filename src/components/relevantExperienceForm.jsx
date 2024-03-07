import { RelevantExperienceCard } from "./relevantExperienceCard";
import { v4 as uuid } from "uuid";

export function RelevantExperienceInfo(props) {
  const jobs = props.info.map((job) => {
    return <RelevantExperienceCard key={uuid()} value={job} />;
  });

  return (
    <fieldset name="experienceInfo" form="resumeForm">
      <legend>Relevant Experience</legend>
      {jobs}
      <RelevantExperienceCard value={props.info[0]} />
    </fieldset>
  );
}
