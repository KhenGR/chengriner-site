import React from 'react'
import '../Style/MainGrid.css';

export default function Teaching() {
  const courses = [
    {
      year: "2024",
      institution: "ETH Zurich",
      course: "Wireless Systems Engineering",
      position: "Coordinator",
    },
    {
      year: "2023–2024",
      institution: "Technion – Israel Institute of Technology",
      course: "Introduction to Communication Theory",
      position: "Co-lecturer",
    },
    {
      year: "2023",
      institution: "University of Cambridge",
      course: "Cognitive Radio Networks",
      position: "Guest Lecturer",
    },
    {
      year: "2022–2023",
      institution: "MIT",
      course: "Digital Signal Processing",
      position: "Teaching Assistant",
    },
    {
      year: "2022",
      institution: "ETH Zurich",
      course: "Machine Learning for Communication Systems",
      position: "Co-lecturer",
    },
    {
      year: "2021",
      institution: "Stanford University",
      course: "Advanced Wireless Protocols",
      position: "Lab Coordinator",
    },
    {
      year: "2020",
      institution: "Tel Aviv University",
      course: "Introduction to Embedded Systems",
      position: "Teaching Assistant",
    },
    {
      year: "2019–2020",
      institution: "Bar-Ilan University",
      course: "Networking and Protocols",
      position: "Lecturer",
    },
    {
      year: "2019",
      institution: "ETH Zurich",
      course: "Signals and Systems",
      position: "Course Developer",
    },
    {
      year: "2018",
      institution: "Ben-Gurion University",
      course: "Fundamentals of Telecommunication",
      position: "Instructor",
    },
  ];
  return (
    <div>
      <p>
        Under Constructions ...
      </p>
    </div>
    /*<div className="teaching-page">
      <h1>Teaching</h1>
      <p className="abstract">
        Dr. Chen Griner is passionate about delivering engaging, research-led
        education in communication systems and engineering fundamentals. Her
        teaching spans top institutions and a wide range of interdisciplinary
        technical subjects.
      </p>

      <h2>Courses</h2>
      <div className="course-list">
        {courses.map((course, index) => (
          <div className="course-row" key={index}>
            <div className="course-year">{course.year}</div>
            <div className="course-info">
              <strong>{course.institution}</strong><br />
              {course.course}<br />
              <em>{course.position}</em>
            </div>
          </div>
        ))}
      </div>
    </div>*/
  )
}
