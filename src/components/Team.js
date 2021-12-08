export const Team = ({ teammate }) => {
  const { firstName, lastName, bio, github, linkedin } = teammate;
  // let info = `${firstName} ${lastName} ${bio} ${github} ${linkedin}`;

  return (
    <article className="bio">
      <h3>{firstName}</h3>
      <h4>{lastName}</h4>
      <h4>{bio}</h4>
      <h4>{github}</h4>
      <h4>{linkedin}</h4>
    </article>
  );
};

export default Team;
