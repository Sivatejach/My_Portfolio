import { IoIosApps } from "react-icons/io";
import { FaTools, FaBug } from "react-icons/fa";
import { SiSkillshare } from "react-icons/si";

export const SKILLS = [
  {
    title: "Frontend",
    icon: IoIosApps, 
    skills: [
      { skill: "HTML5", percentage: "80%" },
      { skill: "CSS3 (Sass/SCSS)", percentage: "90%" },
      { skill: "JavaScript", percentage: "75%" },
      { skill: "React.js", percentage: "80%" },
    ],
  },
  {
    title: "Backend",
    icon: FaTools,
    skills: [
      { skill: "Node.js", percentage: "70%" },
      { skill: "Express.js", percentage: "65%" },
    ],
  },
  {
    title: "Tools",
    icon: FaBug,
    skills: [
      { skill: "Git & GitHub", percentage: "85%" },
      { skill: "Visual Studio Code", percentage: "75%" },
      { skill: "Responsive Design", percentage: "70%" },
    ],
  },
  {
    title: "Soft Skills",
    icon: SiSkillshare,
    skills: [
      { skill: "Problem-solving", percentage: "70%" },
      { skill: "Collaboration", percentage: "85%" },
      { skill: "Attention to Detail", percentage: "85%" },
    ],
  },
];
