import React, {useEffect, useState } from 'react';

const BasicInformation = ({onSave}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameValid, setNameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [formValid, setFormValid] = useState(false);
  const [basicSaved, setBasicSaved] = useState(false);

  useEffect(() => {
    // Checking name and email are valid or not
    const isNameValid = name.trim() !== '';
    const isEmailValid = /\S+@\S+\.\S+/.test(email);
    setNameValid(isNameValid);
    setEmailValid(isEmailValid);
    setFormValid(isNameValid && isEmailValid);
  }, [name, email]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log('Submitted:', { name, email });
    setBasicSaved(true);
    onSave({ name, email });
  };

  return (
    <div className='basicInf-Container'>
      
      {basicSaved ? (
        <p>Basic Information Saved successfully!</p>
      ) : (
        <>
          <h3>Basic Details</h3>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input 
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Enter your name...'
            required
            className={!nameValid ? 'invalid' : ''}
          />
          <label>Email:</label>
          <input 
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter your email...'
            required
            className={!emailValid ? 'invalid' : ''}
          />
           <button type="submit" 
            disabled={!formValid} 
            style={{ backgroundColor: formValid ? 'skyblue' : 'gray' }}>
              Save
          </button>
        </form>
        </>
      )}
    </div>
  );
}

export default BasicInformation;
