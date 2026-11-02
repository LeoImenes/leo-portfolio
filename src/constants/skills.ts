import ts from "../assets/Portfolio/ts.png";
import react from "../assets/Portfolio/react.png";
import figma from "../assets/Portfolio/figma.png";
import css from "../assets/Portfolio/css.png";
import html from "../assets/Portfolio/html.png";
import Js from "../assets/Portfolio/Js.png";
import mui from "../assets/Portfolio/mui.png";
import saas from "../assets/Portfolio/saas.png";
import next from "../assets/Portfolio/next.png";
import python from "../assets/Portfolio/python.png";
import cypress from "../assets/Portfolio/cypress.png";

export type Skill = {
  image: string;
  name: string;
  color: string; // accent glow color on hover
};

export const skillsImage: Skill[] = [
  { image: ts,     name: "TypeScript",  color: "#3178C6" },
  { image: react,  name: "React",       color: "#61DAFB" },
  { image: next,   name: "Next.js",     color: "#94A3B8" },
  { image: Js,     name: "JavaScript",  color: "#F7DF1E" },
  { image: mui,    name: "Material UI", color: "#007FFF" },
  { image: html,   name: "HTML5",       color: "#E34F26" },
  { image: css,    name: "CSS3",        color: "#1572B6" },
  { image: saas,   name: "Sass",        color: "#CC6699" },
  { image: figma,  name: "Figma",       color: "#F24E1E" },
  { image: python, name: "Python",      color: "#3776AB" },
  { image: cypress,name: "Cypress",     color: "#69D3A7" },
];
