import React from 'react';

const Header = ({ name, jobTitle, email, website, mobile }) => {
  return (
    <div id="toplevel">
      <div className="firstinfo">
        <div id="name" className="person"><p>{name}</p></div>
        <div id="job" className="person"><p>{jobTitle}</p></div>
      </div>
      <div className="secondinfo">
        <div id="email" className="person"><p>Email: <span className="emaillink">{email}</span></p></div>
        <div id="web" className="person"><p>Web: {website}</p></div>
        <div id="mobile" className="person"><p>Mobile: {mobile}</p></div>
      </div>
    </div>
  );
};

export default Header;
