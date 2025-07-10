import React from 'react'
import '../Style/App.css';
import '../Style/MainGrid.css';
import { Link } from 'react-router-dom';

export default function AcademicInfo() {
  return (
    <div className="right-section academic-history">

    <div className="my-summary">
    <p>
    I am Chen Griner, a recent Ph.D. graduate in Communication Engineering, having completed 
    my studies in 2024. During my doctoral research, I focused on topics such as wireless communication, 
    signal processing, and network optimization. I published four peer-reviewed articles in respected journals, contributing 
    meaningful insights to the field. My work combined both theoretical modeling and practical applications, aiming to solve real-world 
    communication challenges. I actively collaborated with other researchers and participated in international conferences. With a strong academic 
    background and hands-on research experience, I am now looking to apply my 
    knowledge in academia or the tech industry, where I can continue to innovate and grow.
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
            <a href='/'>short</a>
           <span> or </span>
           <a href='/'>full</a>
          </div>
           
        </li>
        <li>
          <div className='teaching-statment'>
             <a href='/'>Teaching Statment</a>
          </div>
        </li>
      </ul>
    </div>
   
  <div className='highlights-container'>
    <h2>Highlights</h2>
     <div className='diveder'></div>

  <div className='highlight'>
    <div className='highlight-date'>
      Jun. 2024
    </div>
    <div className='highlight-content'>
      <h4>Teaching Experience</h4>
      <p>Taught undergraduate courses in Algorithms and Artificial Intelligence at the University of Babbage.</p>
    </div> 
  </div>
  
  <div className='highlight'>
    <div className='highlight-date'>
      Jun. 2024
    </div>
    <div className='highlight-content'>
      <h4>Teaching Experience</h4>
      <p>Taught undergraduate courses in Algorithms and Artificial Intelligence at the University of Babbage.</p>
    </div> 
  </div>
    
    </div>
  </div>
</div>
  )
}

