export function NameAndContact({ info }) {
  return (
    <div>
      <h1>
        {info.firstName} {info.lastName}
      </h1>

      <h3>
        {info.email} | {info.phone} | {info.city}, {info.state}
      </h3>

      <h4>{info.github}</h4>
    </div>
  );
}
