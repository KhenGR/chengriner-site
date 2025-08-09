import ProfileImage from "../Assets/profile_picture.jpg";
import '../Style/App.css';
import '../Style/MainGrid.css';

export default function ConnectionDetails() {

return (
<div className="content-grid">
  <div className="left-section">
    <div className="connection-details">
      <div className="profile-circle">
        <img src={ProfileImage} alt="Profile" />
      </div>
      <p className="person-name">Dr. Chen Griner</p>
      <div className="links-with-logos">
        <div className='link link-1'>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github</title> <rect width="24" height="24" fill="none"></rect> <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z"></path> </g></svg>
          <a href="https://github.com/KhenGR">GitHub</a>
        </div>
        <div className='link link-2'>
          <svg fill="#000000" viewBox="-5.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>linkedin</title> <path d="M0 8.219v15.563c0 1.469 1.156 2.625 2.625 2.625h15.563c0.719 0 1.406-0.344 1.844-0.781 0.469-0.469 0.781-1.063 0.781-1.844v-15.563c0-1.469-1.156-2.625-2.625-2.625h-15.563c-0.781 0-1.375 0.313-1.844 0.781-0.438 0.438-0.781 1.125-0.781 1.844zM2.813 10.281c0-1 0.813-1.875 1.813-1.875 1.031 0 1.875 0.875 1.875 1.875 0 1.031-0.844 1.844-1.875 1.844-1 0-1.813-0.813-1.813-1.844zM7.844 23.125v-9.531c0-0.219 0.219-0.406 0.375-0.406h2.656c0.375 0 0.375 0.438 0.375 0.719 0.75-0.75 1.719-0.938 2.719-0.938 2.438 0 4 1.156 4 3.719v6.438c0 0.219-0.188 0.406-0.375 0.406h-2.75c-0.219 0-0.375-0.219-0.375-0.406v-5.813c0-0.969-0.281-1.5-1.375-1.5-1.375 0-1.719 0.906-1.719 2.125v5.188c0 0.219-0.219 0.406-0.438 0.406h-2.719c-0.156 0-0.375-0.219-0.375-0.406zM2.875 23.125v-9.531c0-0.219 0.219-0.406 0.375-0.406h2.719c0.25 0 0.406 0.156 0.406 0.406v9.531c0 0.219-0.188 0.406-0.406 0.406h-2.719c-0.188 0-0.375-0.219-0.375-0.406z"></path> </g></svg>
          <a href="https://www.linkedin.com/in/chengriner/">LinkedIn</a>
        </div>
        <div className='link link-3'>
          <svg fill="#000000" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 0c-8.839 0-16 7.161-16 16s7.161 16 16 16c8.839 0 16-7.161 16-16s-7.161-16-16-16zM9.823 5.839c0.704 0 1.265 0.573 1.265 1.26 0 0.688-0.561 1.265-1.265 1.265-0.692-0.004-1.26-0.567-1.26-1.265 0-0.697 0.563-1.26 1.26-1.26zM8.864 9.885h1.923v13.391h-1.923zM13.615 9.885h5.197c4.948 0 7.125 3.541 7.125 6.703 0 3.439-2.687 6.699-7.099 6.699h-5.224zM15.536 11.625v9.927h3.063c4.365 0 5.365-3.312 5.365-4.964 0-2.687-1.713-4.963-5.464-4.963z"></path> </g></svg>
          <a href="https://orcid.org/0000-0003-1473-2977">Orcid</a>
        </div>
        <div className='link link-4'>
         <svg fill="#000000" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.573 2.729c-0.729 0.484-4.292 2.849-7.917 5.255s-6.589 4.396-6.589 4.422c0 0.026 0.182 0.146 0.406 0.266 0.224 0.13 3.797 2.109 7.953 4.411l7.542 4.193 0.193-0.099c0.109-0.052 2.891-1.641 6.188-3.521l5.99-3.427 0.036 10.599h3.557v-12.401l-4.615-3.094c-6.219-4.167-11.188-7.448-11.307-7.474-0.063-0.010-0.703 0.38-1.438 0.87zM7.141 22.177l0.016 2.672 8.828 5.292 8.891-5.339v-2.641c0-1.458-0.016-2.646-0.031-2.646-0.021 0-1.76 1.042-3.87 2.323l-4.406 2.661-0.578 0.339-1.755-1.052c-1.464-0.875-2.927-1.755-4.385-2.641l-2.672-1.615c-0.031-0.010-0.042 1.177-0.036 2.646z"></path> </g></svg>
          <a href="https://scholar.google.com/citations?user=ideTGfcAAAAJ&hl=en&oi=ao">Google scholar</a>
        </div>
      </div>
    </div>
      </div>
    </div>
  )
}
