import { GeneralInfo } from "./generalInfoForm";
import { EducationInfo } from "./educationInfoForm";
import { RelevantExperienceInfo } from "./relevantExperienceForm";

// Creates the form
export function InfoForm({
  generalInfo,
  updateGeneralInfo,
  educationInfo,
  updateEducationInfo,
  experienceInfo,
  updateExperienceInfo,
}) {
  // Generate work experience from experienceInfo fieldset
  function generateExperienceInfo(fieldset) {
    const experienceInfo = [];
    // Get all the fieldsets
    const jobSets = fieldset.querySelectorAll("fieldset");

    jobSets.forEach((jobSet) => {
      experienceInfo.push({
        companyName: jobSet.elements.companyName.value,
        title: jobSet.elements.jobTitle.value,
        responibilities: jobSet.elements.responsibilities.value,
        startDate: jobSet.elements.startYear.value,
        endDate: jobSet.elements.endYear.value,
      });
    });

    return experienceInfo;
  }

  // Handles form submission
  function submitForm(e) {
    e.preventDefault();
    // General info
    updateGeneralInfo({
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.emailAddress.value,
      phone: e.target.phoneNum.value,
      city: e.target.city.value,
      state: e.target.state.value,
      github: e.target.github.value,
    });

    // Education info
    updateEducationInfo({
      school: e.target.school.value,
      degree: e.target.degree.value,
      startDate: e.target.startYear.value,
      endDate: e.target.endYear.value,
    });

    // Experience info
    updateExperienceInfo(generateExperienceInfo(e.target.experienceInfo));
  }

  return (
    <form id="resumeForm" onSubmit={submitForm}>
      <GeneralInfo info={generalInfo} />
      <EducationInfo info={educationInfo} />
      <RelevantExperienceInfo info={experienceInfo} />
      <button type="submit">Submit</button>
    </form>
  );
}
