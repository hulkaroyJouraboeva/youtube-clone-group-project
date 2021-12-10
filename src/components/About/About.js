import TeamList from "./TeamList";
import Team from "./Team";
<<<<<<< HEAD:src/components/About/About.js
import "./About.css";

export const About = () => {
  const team = TeamList.map((teammates) => {
    return <Team key={teammates.name} teammate={teammates} />;
  });
=======
import "./Team.css";

export const About = () => {
  const team = TeamList.map((teammates) => {
      return (
    <Team key={teammates.name} teammate={teammates} />
  )});
    
>>>>>>> 53c79b6f3bec50429659401022bcb2958d3ba208:src/components/About.js

  return (
    <section className="team-list">
      <h2>Our Team</h2>
      <div className="team">{team}</div>
    </section>
  );
};

export default About;
