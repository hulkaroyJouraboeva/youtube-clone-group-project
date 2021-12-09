import TeamList from "./TeamList";
import Team from "./Team";

export const About = () => {
  const team = TeamList.map((teammates) => {
      return (
    <Team key={teammates.firstName} teammate={teammates} />
  )});
    

  return (
    <section className="team-list">
      <h2>Our Team</h2>
      <div className="">{team}</div>
    </section>
  );
};

export default About;