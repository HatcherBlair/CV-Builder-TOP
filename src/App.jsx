import { useState } from "react";
import { Resume } from "./components/resume.jsx";
import { GeneralInfo } from "./components/generalInfoForm.jsx";
import { EducationInfo } from "./components/educationInfoForm.jsx";
import { RelevantExperienceInfo } from "./components/relevantExperienceForm.jsx";
import "./App.css";

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [generalInfo, setGeneralInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    github: "",
  });
  const [educationInfo, setEducationInfo] = useState({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
  });
  const [experienceInfo, setExperienceInfo] = useState([
    {
      companyName: "",
      title: "",
      responsibilities: [""],
      startDate: "",
      endDate: "",
    },
  ]);

  function handleGeneralInfoChange(e) {
    const { name, value } = e.target;
    setGeneralInfo({ ...generalInfo, [name]: value });
  }

  function handleEducationInfoChange(e) {
    const { name, value } = e.target;
    setEducationInfo({ ...educationInfo, [name]: value });
  }

  function handleExperienceInfoChange(e, i) {
    const { name, value } = e.target;
    const updatedExperienceInfo = [...experienceInfo];
    updatedExperienceInfo[i] = { ...updatedExperienceInfo[i], [name]: value };
    setExperienceInfo(updatedExperienceInfo);
  }

  function addExperienceInfo() {
    setExperienceInfo([
      ...experienceInfo,
      {
        companyName: "",
        title: "",
        responsibilities: [""],
        startDate: "",
        endDate: "",
      },
    ]);
  }

  function addResponsiblity(i) {
    const updatedExperienceInfo = [...experienceInfo];
    updatedExperienceInfo[i].responsibilities.push("");
    setExperienceInfo(updatedExperienceInfo);
  }

  function handleResponsibilityChange(e, i, subI) {
    const updatedExperienceInfo = [...experienceInfo];
    updatedExperienceInfo[i].responsibilities[subI] = e.target.value;
    setExperienceInfo(updatedExperienceInfo);
  }

  function handleClick() {
    setSubmitted(!submitted);
  }
  return (
    <>
      <button onClick={handleClick}>
        {submitted ? "Edit" : "View Resume"}
      </button>
      {submitted ? (
        <Resume
          generalInfo={generalInfo}
          educationInfo={educationInfo}
          experienceInfo={experienceInfo}
        />
      ) : (
        <>
          <GeneralInfo
            firstName={generalInfo.firstName}
            lastName={generalInfo.lastName}
            email={generalInfo.email}
            phone={generalInfo.phone}
            city={generalInfo.city}
            state={generalInfo.state}
            github={generalInfo.github}
            onChange={handleGeneralInfoChange}
          />
          <EducationInfo
            school={educationInfo.school}
            degree={educationInfo.degree}
            startDate={educationInfo.startDate}
            endDate={educationInfo.endDate}
            onChange={handleEducationInfoChange}
          />
          <RelevantExperienceInfo
            jobs={experienceInfo}
            onChange={handleExperienceInfoChange}
            addExperienceInfo={addExperienceInfo}
            responsibilityOnChange={handleResponsibilityChange}
            addResponsibility={addResponsiblity}
          />
        </>
      )}
    </>
  );
}

export default App;
