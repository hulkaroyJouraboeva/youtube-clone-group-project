export const Team = ({ teammate }) => {
  const { pic, name, bio, github, linkedin } = teammate;
  // let info = `${firstName} ${lastName} ${bio} ${github} ${linkedin}`;

  return (
    <article className="bio">
      <p>{pic}</p>
      <h3>{name}</h3>
      <h4>{bio}</h4>
      <h4>{github}</h4>
      <h4>{linkedin}</h4>
    </article>
  );
};

export default Team;
