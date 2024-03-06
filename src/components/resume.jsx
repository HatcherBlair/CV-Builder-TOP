import { NameAndContact } from "./nameAndContact";
import { EducationSection } from "./educationSection";
import { ExperienceSection } from "./experienceSection";

// Creates HTML resume from form information
export function Resume({ generalInfo, educationInfo, experienceInfo }) {
  return (
    <div>
      <NameAndContact info={generalInfo} />
      <EducationSection info={educationInfo} />
      <ExperienceSection info={experienceInfo} />
    </div>
  );
}

// Initial values for resume
Resume.defaultProps = {
  generalInfo: {
    firstName: "firstName",
    lastName: "lastName",
    email: "example@gmail.com",
    phone: "(888) 8888-888",
    city: "Empty City",
    state: "ST",
    github: "HatcherBlair",
  },
  educationInfo: {
    school: "The University of Odin",
    degree: "Fullstack",
    startDate: "now",
    endDate: "now",
  },
  experienceInfo: [
    {
      companyName: "test",
      title: "test",
      responsibilities: ["test", "test3", "test3"],
      startDate: "test",
      endDate: "test",
    },
  ],
};
