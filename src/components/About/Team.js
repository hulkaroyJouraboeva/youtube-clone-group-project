import "./Team.css";

export const Team = ({ teammate }) => {
  const { pic, name, bio, github, linkedin } = teammate;
  // let info = `${firstName} ${lastName} ${bio} ${github} ${linkedin}`;

  return (
    <div class="bio-card">
      <div class="bio-card-inner">
        <div class="bio-card-front">
          <p>{pic}</p>
        </div>
        <div class="bio-card-back">
          <h3>{name}</h3>
          <h4>{bio}</h4>
          <h4>{github}</h4>
          <h4>{linkedin}</h4>
        </div>
      </div>
    </div>
  );
};

export default Team;