import { RelevantExperienceCard } from "./relevantExperienceCard";

export function RelevantExperienceInfo({
  jobs,
  onChange,
  addExperienceInfo,
  addResponsibility,
  responsibilityOnChange,
}) {
  return (
    <form id="experienceInfo">
      <legend>Relevant Experience</legend>
      {jobs.map((job, i) => {
        return (
          <div key={i}>
            <RelevantExperienceCard
              companyName={job.companyName}
              title={job.title}
              responsibilities={job.responsibilities}
              startDate={job.startDate}
              endDate={job.endDate}
              onChange={onChange}
              index={i}
              responsibilityOnChange={responsibilityOnChange}
            />
            <button type="button" onClick={() => addResponsibility(i)}>
              Add Responsibility
            </button>
          </div>
        );
      })}
      <button type="button" onClick={addExperienceInfo}>
        Add Experience
      </button>
    </form>
  );
}
