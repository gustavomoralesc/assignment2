import React from 'react';

const Skills = ({ skills }) => {
  return (
    <div id="thirdblock" className="thirdblock">
      <div id="keyskillstitle" className="thirdblock">
        <p>Key Skills</p>
      </div>
      <div id="firstskillsblock">
        {skills.map((skill, index) => (
          <div key={index} id={`akeyskill${index + 1}`} className="thirdblock">
            <p>{skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
