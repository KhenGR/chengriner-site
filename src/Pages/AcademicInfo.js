import React from 'react'
import '../Style/App.css';
import '../Style/MainGrid.css';
import { Link } from 'react-router-dom';

export default function AcademicInfo() {
  return (
    <div className="right-section academic-history">

    <div className="my-summary">
    <p>
    I am [Name], a recent Ph.D. graduate in Communication Engineering, having completed 
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
      <ul>
        <li>
        <span>Resumé</span>
      <Link to="/link7">short</Link>
      <Link to="/link8">full</Link>
        </li>
        <li>
          <Link to="/link9">Teaching Statment</Link>
        </li>
      </ul>
    </div>

    <div className='highlights'>

    <h2>Academic Research</h2>
    <p>Focused on machine learning techniques for natural language processing, Ada conducted research involving language models and probabilistic systems.</p>

    <h2>Teaching Experience</h2>
    <p>Taught undergraduate courses in Algorithms and Artificial Intelligence at the University of Babbage.</p>

    <h2>Publication Work</h2>
    <p>Published over 20 papers in top-tier AI journals covering neural networks, optimization, and computer vision.</p>

    <h2>Conference Presentations</h2>
    <p>Presented findings at international conferences including NeurIPS, ICML, and ACL with award-winning poster sessions.</p>

    <h2>Mentorship Programs</h2>
    <p>Guided Ph.D. students through thesis development and industry-academic collaboration projects.</p>
    </div>
  </div>
</div>
  )
}

