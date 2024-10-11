import React from 'react';

const PersonalProfile = ({ profile }) => {
  return (
    <div id="firstblock" className="firstblock">
      <div id="personalprofile" className="firstblock">
        <p>Personal Profile</p>
      </div>
      <div id="personalprofiledescription" className="firstblock">
        <p>{profile}</p>
      </div>
    </div>
  );
};

export default PersonalProfile;
