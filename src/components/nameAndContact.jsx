import "../styles/resume.css";

export function NameAndContact({ info }) {
  return (
    <div className="general-info">
      <h1>
        {info.firstName ? info.firstName : "First Name"}{" "}
        {info.lastName ? info.lastName : "Last name"}
      </h1>

      <h3>
        {info.email ? info.email : "Email@email.com"} |{" "}
        {info.phone ? info.phone : "(888) 888-8888"} |{" "}
        {info.city ? info.city : "City"}, {info.state ? info.state : "ST"}
      </h3>

      <h4>{info.github ? info.github : "Github"}</h4>
    </div>
  );
}
