import React from 'react';

const WorkExperience = ({ experience }) => {
  return (
    <div id="secondblock" className="secondblock">
      <div id="secondblockleft" className="secondblock">
        <p>Work Experience</p>
      </div>
      <div id="secondblockright" className="secondblock">
        {experience.map((job, index) => (
          <div key={index}>
            <div id={`jobtitle${index + 1}`} className="secondblock">
              <p>{job.title} ({job.period})</p>
            </div>
            <div id={`jobtitle${index + 1}description`} className="secondblock">
              <p>{job.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
