import React from 'react';
import './RoleSection.css';
import teacherImage from '../../assets/teacherImage.png'; // Path to your Teacher image
import studentImage from '../../assets/studentImage.png'; // Path to your Student image

function RoleSection() {
  return (
    <div className="role-section">
      <div className="role-card teacher">
        <h2>Teacher</h2>
        <p>Manage classes, assign work, and track student progress with ease.</p>
        <img src={teacherImage} alt="Teacher" className="role-image" />
      </div>
      <div className="role-card student">
        <h2>Student</h2>
        <p>Access assignments, view timetables, and communicate with teachers.</p>
        <img src={studentImage} alt="Student" className="role-image" />
      </div>
    </div>
  );
}

export default RoleSection;
