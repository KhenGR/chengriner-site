import React from 'react'
import '../Style/App.css';
import '../Style/MainGrid.css';

export default function ConnectionDetails() {
return (
<div className="content-grid">
  <div className="left-section">
    <div className="connection-details">
      <div className="profile-circle">
        <img src="profile.jpg" alt="Profile Image" />
      </div>
      <p className="person-name">Dr. Ada Lovelace</p>
      <div className="links-with-logos">
        <div>
          <img src="github-logo.png" alt="GitHub" width="20" />
          <a href="#">GitHub</a>
        </div>
        <div>
          <img src="linkedin-logo.png" alt="LinkedIn" width="20" />
          <a href="#">LinkedIn</a>
        </div>
        <div>
          <img src="twitter-logo.png" alt="Twitter" width="20" />
          <a href="#">Twitter</a>
        </div>
      </div>
      </div>
      </div>
    </div>
  )
}
