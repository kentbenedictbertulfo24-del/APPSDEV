function StudentProfile({ name, program, year, status }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{program}</p>
      <p>{year}</p>
      <p>Status: {status}</p>
    </div>
  );
}

export default StudentProfile;