import cave from "./team_pics/pipvsewing.jpg";
import hulk from "./team_pics/hulk.png";
import ana from "./team_pics/ana.png";
import steph from "./team_pics/stephgit.jpg";
// import steph from "./team_pics/steph.jpg"

export const team = [
  {
    pic: (
      <img src={cave} alt="cave" style={{ width: "300px", height: "300px" }} />
    ),
    name: "Eric Cave",
    bio: "Software Engineer that is passionate about sports, video games, and my children...",
    github: <a href="https://github.com/caveman49">GitHub</a>,
    linkedin: <a href="linkedin.com/in/eric-caveman">LinkedIn</a>,
  },
  {
    pic: (
      <img src={hulk} alt="hulk" style={{ width: "300px", height: "300px" }} />
    ),
    name: "Hulkaroy Jouraboeva",
    bio: "I am on the road to becoming a full stack web developer at Pursuit, a 1-year intensive program that trains individuals in software engineering.",
    github: <a href="https://github.com/hulkaroyJouraboeva">GitHub</a>,
    linkedin: (
      <a href="https://www.linkedin.com/in/hulkaroy-jouraboeva-8998a6218/">
        LinkedIn
      </a>
    ),
  },
  {
    pic: (
      <img src={ana} alt="ana" style={{ width: "300px", height: "300px" }} />
    ),
    name: "Triane Peart",
    bio: "Full Stack Engineer with a love of art & design. Most people see a jumbled mess; I see something fun for me to craft.",
    github: <a href="https://github.com/TrianePeart">GitHub</a>,
    linkedin: <a href="www.linkedin.com/in/trianepeart">LinkedIn</a>,
  },
  {
    pic: (
      <img
        src={steph}
        alt="steph"
        style={{ width: "300px", height: "300px" }}
      />
    ),
    name: "Stephanie Lucano",
    bio: "I am completing an intensive year long fellowship at Pursuit to build my career as a software engineer. I have a background in chemistry. In college I took a wide range of chemistry courses all taught very differently.",
    github: <a href="https://github.com/Stephanie-Lucano">GitHub</a>,
    linkedin: (
      <a href="https://www.linkedin.com/in/stephanie-lucano-b84764150/">
        LinkedIn
      </a>
    ),
  },
];

export default team;