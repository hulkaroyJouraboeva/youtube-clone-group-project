import "./Team.css";
import 'animate.css';

export const Team = ({ teammate }) => {
  const { pic, name, bio, github, linkedin } = teammate;
  // let info = `${firstName} ${lastName} ${bio} ${github} ${linkedin}`;

  return (
    <div class="bio-card">
      <div class="bio-card-inner">
        <div class="bio-card-front">
          {/* <p>{pic}</p> */}
          <p class="animate__animated animate__lightSpeedInLeft">{pic}</p>
          {/* <div class="animate__animated animate__bounce animate__infinite">{pic}</div> */}
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