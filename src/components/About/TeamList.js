import cave from "./pipvsewing.jpg";
import hulk from "./hulk.png";
import ana from "./ana.png";
// import steph from "./steph.jpg/";
// import nope from "./steph_img_that_wont_work.jpeg"

export const team = [
  {
    pic: <img src={cave} alt="cave" />,
    name: "Eric Cave",
    bio: "Software Engineer that is passionate about sports, video games, and my children...",
    github: "https://github.com/caveman49",
    linkedin: "linkedin.com/in/eric-caveman",
  },
  {
    pic: <img src={hulk} alt="hulk" />,
    name: "Hulkaroy Jouraboeva",
    bio: "I am on the road to becoming a full stack web developer at Pursuit, a 1-year intensive program that trains individuals in software engineering.",
    github: "https://github.com/hulkaroyJouraboeva",
    linkedin: "https://www.linkedin.com/in/hulkaroy-jouraboeva-8998a6218/",
  },
  {
    pic: <img src={ana} alt="ana" />,
    name: "Triane Peart",
    bio: "Full Stack Engineer with a love of art & design. Most people see a jumbled mess; I see something fun for me to craft.",
    github: "https://github.com/TrianePeart",
    linkedin: "www.linkedin.com/in/trianepeart",
  },
  {
    // pic: <img src={steph} alt="steph" />,
    name: "Stephanie Lucano",
    bio: "I am completing an intensive year long fellowship at Pursuit to build my career as a software engineer. I have a background in chemistry. In college I took a wide range of chemistry courses all taught very differently.",
    github: " ",
    linkedin: "https://www.linkedin.com/in/stephanie-lucano-b84764150/",
  },
];

export default team;
