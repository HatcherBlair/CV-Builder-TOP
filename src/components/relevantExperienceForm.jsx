import { RelevantExperienceCard } from "./relevantExperienceCard";
import "../styles/experienceInfoForm.css";

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
          <div key={i} className="job">
            <RelevantExperienceCard
              companyName={job.companyName}
              title={job.title}
              responsibilities={job.responsibilities}
              startDate={job.startDate}
              endDate={job.endDate}
              onChange={onChange}
              index={i}
              responsibilityOnChange={responsibilityOnChange}
              addResponsibility={addResponsibility}
            />
          </div>
        );
      })}
      <button type="button" onClick={addExperienceInfo} className="exp-btn">
        Add Experience
      </button>
    </form>
  );
}
