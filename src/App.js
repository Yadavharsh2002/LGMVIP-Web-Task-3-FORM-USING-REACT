import React, { useState } from 'react';
import './App.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    imageLink: '',
    gender: '',
    skills: [],
  });

  const [enrolledStudents, setEnrolledStudents] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    const updatedSkills = checked
      ? [...formData.skills, name]
      : formData.skills.filter((skill) => skill !== name);

    setFormData({
      ...formData,
      skills: updatedSkills,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form data:', formData);

    setEnrolledStudents([...enrolledStudents, formData]);

    setFormData({
      name: '',
      email: '',
      website: '',
      imageLink: '',
      gender: '',
      skills: [],
    });
  };

  return (
    <div className='container'>
      <h1 className='heading'>Student Enrollment Form</h1>
      <div className='form' style={{ display: 'flex' }}>
        <div className='reg-form'>
          <form onSubmit={handleSubmit}>
            <div className='name'>
              <label>
                <span>Name:</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </label>
            </div>
            <br />
            <div className='email'>
              <label>
                <span>Email:</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </label>
            </div>
            <br />
            <div className='website'>
              <label>
                <span>Website:</span>
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                />
              </label>
            </div>
            <br />
            <div className='img'>
              <label>
                Image link:
                <input
                  type="text"
                  name="imageLink"
                  value={formData.imageLink}
                  onChange={handleChange}
                />
              </label>
            </div>
            <br />
            <div className='gender'>
              <label>
                <span>Gender:</span>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === 'male'}
                  onChange={handleChange}
                />
                Male
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === 'female'}
                  onChange={handleChange}
                />
                Female
              </label>
            </div>
            <br />
            <div className='skills'>
              <label>
                <span>Skills:</span>
                <input
                  type="checkbox"
                  name="Python"
                  checked={formData.skills.includes('Python')}
                  onChange={handleCheckboxChange}
                />
                Python
                <input
                  type="checkbox"
                  name="SQL"
                  checked={formData.skills.includes('SQL')}
                  onChange={handleCheckboxChange}
                />
                SQL
                <input
                  type="checkbox"
                  name="C"
                  checked={formData.skills.includes('C')}
                  onChange={handleCheckboxChange}
                />
                C
                <input
                  type="checkbox"
                  name="C++"
                  checked={formData.skills.includes('C++')}
                  onChange={handleCheckboxChange}
                />
                C++
                <input
                  type="checkbox"
                  name="Java"
                  checked={formData.skills.includes('Java')}
                  onChange={handleCheckboxChange}
                />
                Java
              </label>
            </div>
            <br />
            <br />
            <button className='blue-button' type="submit">Enroll students</button>
          </form>
        </div>
        <div className='enrolled-students'>
          <h2>Enrolled Students</h2>
          {enrolledStudents.map((student, index) => (
            <div key={index} className='student-card'>
              <div className='student-info'>
                <p><strong>Name:</strong> {student.name}</p>
                <p><strong>Email:</strong> {student.email}</p>
                <p><strong>Website:</strong> {student.website}</p>
                <p><strong>Gender:</strong> {student.gender}</p>
                <p><strong>Skills:</strong> {student.skills.join(', ')}</p>
              </div>
              <div className='student-image'>
                {student.imageLink && (
                  <img
                    src={student.imageLink}
                    alt="Profile"
                    style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;