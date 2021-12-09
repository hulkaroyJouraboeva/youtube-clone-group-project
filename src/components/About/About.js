import TeamList from "./TeamList";
import Team from "./Team";
import "./About.css";

export const About = () => {
  const team = TeamList.map((teammates) => {
    return <Team key={teammates.name} teammate={teammates} />;
  });

  return (
    <section className="team-list">
      <h2>Our Team</h2>
      <div className="team">{team}</div>
    </section>
  );
};

export default About;
