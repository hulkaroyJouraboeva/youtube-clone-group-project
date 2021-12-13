import "./Team.css";
import "animate.css";

export const Team = ({ teammate }) => {
  const { pic, name, bio, github, linkedin } = teammate;
  // let info = `${firstName} ${lastName} ${bio} ${github} ${linkedin}`;

  return (
    <div className="bio-card">
      <div className="bio-card-inner">
        <div className="bio-card-front">
          <p className="animate__animated animate__lightSpeedInLeft">{pic}</p>
        </div>
        <div className="bio-card-back">
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
