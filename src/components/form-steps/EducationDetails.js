import React, { useState } from 'react'

const EducationDetails = ({onSave}) => {
    const [course, setCourse] = useState('');
    const [branch, setBranch] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSave({ course, branch });
    };
  return (
    <div className='education-container'>
      <h3>Course and Branch Selection Form</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="course">Select Course:</label>
                <select id="course" name="course" value={course} onChange={(e) => setCourse(e.target.value)} required>
                    <option value="">Select</option>
                    <option value="engineering">Engineering</option>
                    <option value="medical">Medical</option>
                    <option value="arts">Arts</option>
                </select>

                <label htmlFor="branch">Select Branch:</label>
                <select id="branch" name="branch" value={branch} onChange={(e) => setBranch(e.target.value)} required>
                    <option value="">Select</option>
                    {course === 'engineering' && (
                        <>
                            <option value="computer">Computer Science</option>
                            <option value="mechanical">Mechanical</option>
                            <option value="electrical">Electrical</option>
                        </>
                    )}
                    {course === 'medical' && (
                        <>
                            <option value="anatomy">Anatomy</option>
                            <option value="physiology">Physiology</option>
                            <option value="pharmacology">Pharmacology</option>
                        </>
                    )}
                    {course === 'arts' && (
                        <>
                            <option value="literature">Literature</option>
                            <option value="history">History</option>
                            <option value="philosophy">Philosophy</option>
                        </>
                    )}
                </select>

                <button type='submit'>Save</button>
            </form>
    </div>
  )
}

export default EducationDetails
