// General info contains name, email, phone, city/state, and github

export function GeneralInfo(value) {
  return (
    <fieldset name="generalInfo" form="resumeForm">
      <legend>General Info</legend>
      <label htmlFor="first-name">First Name:</label>
      <input
        type="text"
        name="firstName"
        id="first-name"
        placeholder="John/Jane"
        required
      >
        {value.firstName}
      </input>

      <label htmlFor="last-name">Last Name:</label>
      <input
        type="text"
        name="lastName"
        id="last-name"
        placeholder="Doe"
        required
      >
        {value.lastName}
      </input>

      <label htmlFor="email">Email Address:</label>
      <input
        type="email"
        name="emailAddress"
        id="email"
        placeholder="example@gmail.com"
      >
        {value.email}
      </input>

      <label htmlFor="phone">Phone Number</label>
      <input type="tel" name="phoneNum" id="phone" placeholder="(888) 888-8888">
        {value.phone}
      </input>

      <label htmlFor="city">City:</label>
      <input type="text" name="city" id="city" placeholder="city">
        {value.city}
      </input>

      <label htmlFor="state">State:</label>
      <input type="text" name="state" id="state" placeholder="ST">
        {value.state}
      </input>

      <label htmlFor="github">Github:</label>
      <input
        type="text"
        name="github"
        id="github"
        placeholder="HatcherBlair"
        required
      >
        {value.github}
      </input>
    </fieldset>
  );
}
