import React, { useState } from 'react'

const PersonalDetails = () => {
  const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
   
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can handle form submission, e.g., sending data to a server
        console.log('Form submitted:', { dob, gender, phoneNumber });
    };
  return (
    <div className='personalDetails-container'>
        <h2>Personal Details Form</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="dob">Date of Birth:</label><br />
                <input type="date" id="dob" name="dob" value={dob} onChange={(e) => setDob(e.target.value)} required /><br /><br />

                <label htmlFor="gender">Gender:</label><br />
                <select id="gender" name="gender" value={gender} onChange={(e) => setGender(e.target.value)} required>
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select><br /><br />

               

                <label htmlFor="phoneNumber">Phone Number:</label><br />
                <input type="tel" id="phoneNumber" name="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} pattern="[0-9]{10}" placeholder="Enter 10-digit phone number" required /><br /><br />

                <input type="submit" value="Submit" />
            </form>
    </div>
  )
}

export default PersonalDetails
