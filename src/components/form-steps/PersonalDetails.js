import React, { useEffect, useState } from 'react'

const PersonalDetails = ({onSave}) => {
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const [formValid, setFormValid] = useState(false);
    const [dobValid, setDobValid] = useState(true)
    const [genderValid, setGenderValid] = useState(true)
    const [personalSaved, setPersonalSaved] = useState(false)


    useEffect(() => {
      // DOB validation
      const today = new Date();
      const selectedDate = new Date(dob);
      const isValidDate = selectedDate <= today;
      setDobValid(isValidDate);

      // gender validation
      const isValidGender = gender !== '';
      setGenderValid(isValidGender);

      // formis valid or not
      const isFormValid = isValidDate && isValidGender;
      setFormValid(isFormValid);
      
    }, [gender, dob]);

    
  
    const handleSubmit = (event) => {
        event.preventDefault();
        setPersonalSaved(true)
 
         if (formValid) {
             onSave({ dob, gender });
         }
    };
  return (
    <div className='personalDetails-container'>
       
                
                {
                  personalSaved ? (
                    <p>Personal Information Saved successfully!</p>
                  ) : (
                    <>
                    <h3>Personal Details Form</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="dob">Date of Birth:</label>
                <input className={!dobValid ? 'invalid' : ''} type="date" id="dob" name="dob" value={dob} onChange={(e) => setDob(e.target.value)} required />

                <label className={!genderValid ? 'invalid' : ''} htmlFor="gender">Gender:</label>
                <select id="gender" name="gender" value={gender} onChange={(e) => setGender(e.target.value)} required>
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                <button 
                  style={{ backgroundColor: formValid ? 'skyblue' : 'gray' }}
                  disabled={!formValid} type="submit">Save
                </button>
            </form>
            </>
            )
          }
    </div>
  )
}

export default PersonalDetails
