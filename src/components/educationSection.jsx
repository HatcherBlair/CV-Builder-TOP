export function EducationSection({ info }) {
  return (
    <div>
      <h4>{info.school}</h4>
      <h5>{info.degree}</h5>
      <p>
        {info.startDate} - {info.endDate}
      </p>
    </div>
  );
}
