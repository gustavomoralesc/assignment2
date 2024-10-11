import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import PersonalProfile from './PersonalProfile';
import WorkExperience from './WorkExperience';
import Skills from './Skills';
import Education from './Education';

function App() {
  const [resumeData] = useState({
    name: "Zh Rimel",
    jobTitle: "Data Scientist",
    email: "abc@gmail.com",
    website: "abc.github.io/abc",
    mobile: "01234567890",
    personalProfile: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    workExperience: [
      { title: "Job Title at Company", period: "August 2022 - December 2023", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat" },
      { title: "Job Title at Company 2", period: "August 2020 - December 2021", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat" }
    ],
    skills: ["A Key skill", "A Key skill", "A Key skill", "A Key skill", "A Key skill"],
    education: [
      { institution: "New Jersey Institute of Technology", degree: "BS in Computer Science", period: "2018 - 2022", gpa: "3.9" },
      { institution: "New Jersey Institute of Technology", degree: "MS in Data Science", period: "2022 - 2023", gpa: "4.0" }
    ]
  });

  return (
    <div className="App">
      <Header name={resumeData.name} jobTitle={resumeData.jobTitle} email={resumeData.email} website={resumeData.website} mobile={resumeData.mobile} />
      <hr color="yellow" />
      <PersonalProfile profile={resumeData.personalProfile} />
      <hr />
      <WorkExperience experience={resumeData.workExperience} />
      <hr />
      <Skills skills={resumeData.skills} />
      <hr />
      <Education education={resumeData.education} />
    </div>
  );
}

export default App;

