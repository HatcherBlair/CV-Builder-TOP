import { GeneralInfo } from "./generalInfoForm";
import { EducationInfo } from "./educationInfoForm";
import { RelevantExperienceInfo } from "./relevantExperienceForm";

export function InfoForm() {
  // Contains the stored information from generalInfo form
  const generalInfo = {
    firstName: "",
    lastName: "",
    email: "",
    phone: NaN,
    city: "",
    state: "",
    github: "",
  };

  // Contains the stored information from educationInfo
  const educationInfo = {
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
  };

  // Contains the stored information from Experience info cards
  const experienceInfo = [
    {
      companyName: "",
      title: "",
      responsibilities: [],
      startDate: "",
      endDate: "",
    },
  ];

  return (
    <form>
      <GeneralInfo info={generalInfo} />
      <EducationInfo info={educationInfo} />
      <RelevantExperienceInfo info={experienceInfo} />
    </form>
  );
}
