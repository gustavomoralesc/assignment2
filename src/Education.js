import React from 'react';

const Education = ({ education }) => {
  return (
    <div id="fourthblock" className="fourthblock">
      <div id="educationtitle" className="fourthblock">
        <p>Education</p>
      </div>
      <div id="fourthblockright">
        {education.map((edu, index) => (
          <div key={index}>
            <div id={`njit${index}`} className="fourthblock">
              <p>{edu.institution}</p>
            </div>
            <div id={`njitinfo${index}`} className="fourthblock">
              <p>{edu.degree}</p>
              <p>{edu.period}</p>
              <p>GPA: {edu.gpa}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
