import "../styles/generalInfoForm.css";

// General info contains name, email, phone, city/state, and github
export function GeneralInfo({
  firstName,
  lastName,
  email,
  phone,
  city,
  state,
  github,
  onChange,
}) {
  return (
    <form id="generalInfo">
      <legend>
        <u>General Info</u>
      </legend>
      <div>
        <label htmlFor="first-name">First Name:</label>
        <input
          type="text"
          name="firstName"
          id="first-name"
          placeholder="John/Jane"
          value={firstName}
          onChange={(e) => onChange(e)}
        />
      </div>

      <div>
        <label htmlFor="last-name">Last Name:</label>
        <input
          type="text"
          name="lastName"
          id="last-name"
          placeholder="Doe"
          value={lastName}
          onChange={(e) => onChange(e)}
        />
      </div>

      <div>
        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@gmail.com"
          value={email}
          onChange={(e) => onChange(e)}
        />
      </div>

      <div>
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="(888) 888-8888"
          value={phone}
          onChange={(e) => onChange(e)}
        />
      </div>

      <div>
        <label htmlFor="city">City:</label>
        <input
          type="text"
          name="city"
          id="city"
          placeholder="city"
          value={city}
          onChange={(e) => onChange(e)}
        />
      </div>

      <div>
        <label htmlFor="state">State:</label>
        <input
          type="text"
          name="state"
          id="state"
          placeholder="ST"
          value={state}
          onChange={(e) => onChange(e)}
        />
      </div>

      <div>
        <label htmlFor="github">Github:</label>
        <input
          type="text"
          name="github"
          id="github"
          placeholder="HatcherBlair"
          value={github}
          onChange={(e) => onChange(e)}
        />
      </div>
    </form>
  );
}
