// import React, { useState } from "react";
// import "./Skills.css";
// import { SKILLS } from "../../utils/data";
// import SkillCard from "./SkillCard/SkillCard";
// import SkillsInfoCard from "./SkillsInfoCard/SkillsInfoCard";

// const Skills = () => {
//   const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

//   const handleSelectedSkill = (data) => {
//     setSelectedSkill(data);  // Fixed the function call
//   };

//   return (
//     <section id="skills" className="skills-container">
//       <h5>Technical Proficiency</h5>
//       <div className="skills-content">
//         <div className="skills">
//           {SKILLS.map((item, index) => (
//             <SkillCard
//               key={index}
//               title={item.title}
//               Icon={item.icon}
//               isActive={selectedSkill.title === item.title}
//               onClick={() => handleSelectedSkill(item)} // Fixing the function call
//             />
//           ))}
//         </div>
//         <div className="skills-info">
//           <SkillsInfoCard heading={selectedSkill.title} skills={selectedSkill.skills} />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;



























import React from "react";
import skills from "../../utils/skills";
import "./Skills.css"; // Import the CSS file

// Function to shuffle an array randomly
const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const Skills = () => {
  // Shuffle skills to get a random arrangement each time
  const shuffledSkills = shuffleArray(skills);

  // Define rows with different skill counts
  const row1 = shuffledSkills.slice(0, 6);
  const row2 = shuffledSkills.slice(6, 15);
  const row3 = shuffledSkills.slice(15, 20);

  return (
    <div className="skills-container">
      <h5>My Skills</h5>
      <div className="skills-content">
        <div className="skill-row">
          {row1.map((skill, index) => (
            <button key={index} className="skill-button">{skill}</button>
          ))}
        </div>
        <div className="skill-row">
          {row2.map((skill, index) => (
            <button key={index} className="skill-button">{skill}</button>
          ))}
        </div>
        <div className="skill-row">
          {row3.map((skill, index) => (
            <button key={index} className="skill-button">{skill}</button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
