import React, { useState } from 'react'

const PersonalDetails = ({onSave}) => {
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
  
    const handleSubmit = (event) => {
        event.preventDefault();
        onSave({ dob, gender });
    };
  return (
    <div className='personalDetails-container'>
       
                <h3>Personal Details Form</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="dob">Date of Birth:</label>
                <input type="date" id="dob" name="dob" value={dob} onChange={(e) => setDob(e.target.value)} required />

                <label htmlFor="gender">Gender:</label>
                <select id="gender" name="gender" value={gender} onChange={(e) => setGender(e.target.value)} required>
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                <button type="submit">Save</button>
            </form>
    </div>
  )
}

export default PersonalDetails
