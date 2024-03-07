import { useState } from "react";
import { Resume } from "./components/resume.jsx";
import { InfoForm } from "./components/infoForm.jsx";
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
      responsibilities: [],
      startDate: "",
      endDate: "",
    },
  ]);

  function updateGeneralInfo(info) {
    setGeneralInfo(info);
  }
  function updateEducationInfo(info) {
    setEducationInfo(info);
  }
  function updateExperienceInfo(info) {
    setExperienceInfo(info);
  }

  function handleClick() {
    if (submitted) {
      // Change to edit screen and fill in form values
    } else {
      // Fill in Resume values
      const formData = new FormData(document.getElementById("resumeForm"));
      console.log(formData);
    }

    setSubmitted(!submitted);
  }

  return (
    <>
      <button onClick={handleClick}>{submitted ? "Edit" : "Submit"}</button>
      {submitted ? (
        <Resume
          generalInfo={generalInfo}
          updateGeneralInfo={updateGeneralInfo}
          educationInfo={educationInfo}
          updateEducationInfo={updateEducationInfo}
          experienceInfo={experienceInfo}
          updateExperienceInfo={updateExperienceInfo}
        />
      ) : (
        <InfoForm
          generalInfo={generalInfo}
          updateGeneralInfo={updateGeneralInfo}
          educationInfo={educationInfo}
          updateEducationInfo={updateEducationInfo}
          experienceInfo={experienceInfo}
          updateExperienceInfo={updateExperienceInfo}
        />
      )}
    </>
  );
}

export default App;
