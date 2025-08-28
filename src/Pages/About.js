import '../Style/App.css';
import '../Style/MainGrid.css';

export default function About() {

  const resume = 'Resume/Chen_Griner_Resume.pdf'
  return (
    <div className="right-section academic-history">

    <div className="my-summary">
    <p>
I have a Ph.D. from the Department of Electrical Engineering at Ben Gurion University from 2024. 
My Ph.D. research was about novel technologies for datacenter network architecture and their optimization and modeling.
I am currently searching for a challenging academic position where I can expand my research interests to include ML, and its application in datacenter networking. 
    </p>
    </div>
    

    <div className='more-about-me'>
    <div className='bulletpoints'>
      <h2>Can Find about me...</h2>
       <div className='diveder'></div>
      <ul>
        <li>
          <div className='resume-link'>
            <span>Resumé </span>
           <a href={`${process.env.PUBLIC_URL}/${resume}`} target="_blank" rel="noopener noreferrer">Full Version</a>
          </div>
        </li>
       {/* 
       <li>
          <div className='teaching-statment'>
             <a href='/'>Teaching Statment</a>
          </div>
        </li>
       */} 
      </ul>
    </div>
   
  {/*<div className='highlights-container'>
    <h2>Highlights</h2>
     <div className='diveder'></div>

  <div className='highlight'>
    <div className='highlight-date'>
      <p>Jun. 2024</p>
    </div>
    <div className='highlight-content'>
      <p>Teaching Experience</p>
      <span>Taught undergraduate courses in Algorithms and Artificial Intelligence at the University of Babbage.</span>
      <ul>
        <li>Algorithms </li>
        <li>Algorithms</li>
        <li>Algorithms</li>
      </ul>
      <span>Taught undergraduate courses in Algorithms and Artificial</span>
    </div>
    <div className='highlight-logo'>
      <svg viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000" width="40" height="40"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M512 960c-92.8 0-160-200-160-448S419.2 64 512 64s160 200 160 448-67.2 448-160 448z m0-32c65.6 0 128-185.6 128-416S577.6 96 512 96s-128 185.6-128 416 62.4 416 128 416z" fill="#050D42"></path><path d="M124.8 736c-48-80 92.8-238.4 307.2-363.2S852.8 208 899.2 288 806.4 526.4 592 651.2 171.2 816 124.8 736z m27.2-16c33.6 57.6 225.6 17.6 424-97.6S905.6 361.6 872 304 646.4 286.4 448 401.6 118.4 662.4 152 720z" fill="#050D42"></path><path d="M899.2 736c-46.4 80-254.4 38.4-467.2-84.8S76.8 368 124.8 288s254.4-38.4 467.2 84.8S947.2 656 899.2 736z m-27.2-16c33.6-57.6-97.6-203.2-296-318.4S184 246.4 152 304 249.6 507.2 448 622.4s392 155.2 424 97.6z" fill="#050D42"></path><path d="M512 592c-44.8 0-80-35.2-80-80s35.2-80 80-80 80 35.2 80 80-35.2 80-80 80zM272 312c-27.2 0-48-20.8-48-48s20.8-48 48-48 48 20.8 48 48-20.8 48-48 48zM416 880c-27.2 0-48-20.8-48-48s20.8-48 48-48 48 20.8 48 48-20.8 48-48 48z m448-432c-27.2 0-48-20.8-48-48s20.8-48 48-48 48 20.8 48 48-20.8 48-48 48z" fill="#6e84f2"></path></g></svg>
    </div> 
  </div>
    <div className='highlight'>
    <div className='highlight-date'>
      <p>Jun. 2024</p>
    </div>
    <div className='highlight-content'>
      <p>Teaching Experience</p>
      <span>Taught undergraduate courses in Algorithms and Artificial Intelligence at the University of Babbage.</span>
      <ul>
        <li>Algorithms </li>
        <li>Algorithms</li>
        <li>Algorithms</li>
      </ul>
      <span>Taught undergraduate courses in Algorithms and Artificial</span>
    </div>
    <div className='highlight-logo'>
      <svg viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000" width="40" height="40"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M512 960c-92.8 0-160-200-160-448S419.2 64 512 64s160 200 160 448-67.2 448-160 448z m0-32c65.6 0 128-185.6 128-416S577.6 96 512 96s-128 185.6-128 416 62.4 416 128 416z" fill="#050D42"></path><path d="M124.8 736c-48-80 92.8-238.4 307.2-363.2S852.8 208 899.2 288 806.4 526.4 592 651.2 171.2 816 124.8 736z m27.2-16c33.6 57.6 225.6 17.6 424-97.6S905.6 361.6 872 304 646.4 286.4 448 401.6 118.4 662.4 152 720z" fill="#050D42"></path><path d="M899.2 736c-46.4 80-254.4 38.4-467.2-84.8S76.8 368 124.8 288s254.4-38.4 467.2 84.8S947.2 656 899.2 736z m-27.2-16c33.6-57.6-97.6-203.2-296-318.4S184 246.4 152 304 249.6 507.2 448 622.4s392 155.2 424 97.6z" fill="#050D42"></path><path d="M512 592c-44.8 0-80-35.2-80-80s35.2-80 80-80 80 35.2 80 80-35.2 80-80 80zM272 312c-27.2 0-48-20.8-48-48s20.8-48 48-48 48 20.8 48 48-20.8 48-48 48zM416 880c-27.2 0-48-20.8-48-48s20.8-48 48-48 48 20.8 48 48-20.8 48-48 48z m448-432c-27.2 0-48-20.8-48-48s20.8-48 48-48 48 20.8 48 48-20.8 48-48 48z" fill="#6e84f2"></path></g></svg>
    </div> 
  </div>
    <div className='highlight'>
    <div className='highlight-date'>
      <p>Jun. 2024</p>
    </div>
    <div className='highlight-content'>
      <p>Teaching Experience</p>
      <span>Taught undergraduate courses in Algorithms and Artificial Intelligence at the University of Babbage.</span>
      <ul>
        <li>Algorithms </li>
        <li>Algorithms</li>
        <li>Algorithms</li>
      </ul>
      <span>Taught undergraduate courses in Algorithms and Artificial</span>
    </div>
    <div className='highlight-logo'>
      <svg viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000" width="40" height="40"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M512 960c-92.8 0-160-200-160-448S419.2 64 512 64s160 200 160 448-67.2 448-160 448z m0-32c65.6 0 128-185.6 128-416S577.6 96 512 96s-128 185.6-128 416 62.4 416 128 416z" fill="#050D42"></path><path d="M124.8 736c-48-80 92.8-238.4 307.2-363.2S852.8 208 899.2 288 806.4 526.4 592 651.2 171.2 816 124.8 736z m27.2-16c33.6 57.6 225.6 17.6 424-97.6S905.6 361.6 872 304 646.4 286.4 448 401.6 118.4 662.4 152 720z" fill="#050D42"></path><path d="M899.2 736c-46.4 80-254.4 38.4-467.2-84.8S76.8 368 124.8 288s254.4-38.4 467.2 84.8S947.2 656 899.2 736z m-27.2-16c33.6-57.6-97.6-203.2-296-318.4S184 246.4 152 304 249.6 507.2 448 622.4s392 155.2 424 97.6z" fill="#050D42"></path><path d="M512 592c-44.8 0-80-35.2-80-80s35.2-80 80-80 80 35.2 80 80-35.2 80-80 80zM272 312c-27.2 0-48-20.8-48-48s20.8-48 48-48 48 20.8 48 48-20.8 48-48 48zM416 880c-27.2 0-48-20.8-48-48s20.8-48 48-48 48 20.8 48 48-20.8 48-48 48z m448-432c-27.2 0-48-20.8-48-48s20.8-48 48-48 48 20.8 48 48-20.8 48-48 48z" fill="#6e84f2"></path></g></svg>
    </div> 
  </div>
    </div>*/}
  </div>
</div>
  )
}

