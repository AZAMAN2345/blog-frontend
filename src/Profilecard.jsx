const PROFILE = ({ name, age, job }) => {
  return (
    <>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <p>{job}</p>
    </>
  );

  <PROFILE name="John Doe" age={30} job="Web Developer"></PROFILE>;
};
export default PROFILE;
