import Js from "../assets/Portfolio/Js.png";
import react from "../assets/Portfolio/react.png";
import html from "../assets/Portfolio/html.png";
import css from "../assets/Portfolio/css.png";
import figma from "../assets/Portfolio/figma.png";
import java from "../assets/Portfolio/java.png";
import python from "../assets/Portfolio/python.png";
import letterC from "../assets/Portfolio/letter-c.png";
import motherboard from "../assets/Portfolio/motherboard.png";
import ts from "../assets/Portfolio/ts.png";
import mui from "../assets/Portfolio/mui.png";
import saas from "../assets/Portfolio/saas.png";
import next from "../assets/Portfolio/next.png";
import JRMTaxi from "../assets/Portfolio/JRMTaxi.png";
import Ludo2 from "../assets/Portfolio/Ludo2.png";
import ONG from "../assets/Portfolio/ONG.png";
import RoboCompilador from "../assets/Portfolio/robocop.png";
import RedesNeuraisPY from "../assets/Portfolio/rnpy.png";
import bracoRobo from "../assets/Portfolio/bracoRobo.jpg";
import CMDChatbot from "../assets/Portfolio/cmd.png";

export const languagesEnum: Record<string, string> = {
  JavaScript: Js,
  React: react,
  HTML: html,
  CSS: css,
  Figma: figma,
  ReactNative: react,
  Java: java,
  Python: python,
  CSharp: letterC,
  Arduino: motherboard,
  TypeScript: ts,
  MaterialUI: mui,
  Saas: saas,
  NextJS: next,
};

export const Projects = [
  {
    id: 1,
    name: "JRMTaxi",
    description:
      "App de catalogo de taxistas com objetivo de facilitar o contato entre clientes de taxistas",
    image: JRMTaxi,
    languages: ["React Native", "Figma"],
  },
  {
    id: 2,
    name: "Ludo Game",
    description:
      "Jogo Ludo com finalidade de praticar lógica de programação, manipulação do DOM, algoritmos e interação com o usuário",
    languages: ["HTML", "CSS", "JavaScript"],
    image: Ludo2,
  },
  {
    id: 3,
    name: "Projeto ONG",
    description:
      "Projeto com finalidade de simular o sistema interno de uma ONG que acolhe pessoas com diversas necessidades",
    languages: ["ReactJS", "Figma", "React Native", "Java"],
    image: ONG,
  },
  {
    id: 4,
    name: "Robo Compilador",
    description:
      "Consiste na construção de uma linguagem de programação que será utilizada para conduzir um robô na travessia de um campo",
    languages: ["HTML", "CSS", "JavaScript"],
    image: RoboCompilador,
  },
  {
    id: 5,
    name: "Rede Neural de previsão de plantações",
    description:
      "O projeto utiliza três redes neurais integradas para otimizar o cultivo em uma estufa.",
    languages: ["Python"],
    image: RedesNeuraisPY,
  },
  {
    id: 6,
    name: "Braço Robótico",
    description: "Braço robotico com programação manual e automática",
    languages: ["Arduino", "C#"],
    image: bracoRobo,
  },
  {
    id: 7,
    name: "CMD chatbot",
    description: "Assistente local para auxiliar o usuário",
    languages: ["JavaScript"],
    image: CMDChatbot,
  },
];
