import { NameAndContact } from "./nameAndContact";
import { EducationSection } from "./educationSection";
import { ExperienceSection } from "./experienceSection";
import "../styles/resume.css";

// Creates HTML resume from form information
export function Resume({ generalInfo, educationInfo, experienceInfo }) {
  return (
    <div className="resume">
      <NameAndContact info={generalInfo} />
      <EducationSection info={educationInfo} />
      <ExperienceSection info={experienceInfo} />
    </div>
  );
}
