import React, { useState } from 'react';

const BasicInformation = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted:', { name, email });
    setSubmitted(true);
  };

  return (
    <div className='basicInf-Container'>
      <h3>Basic Details</h3>
      {submitted ? (
        <p>Form submitted successfully!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input 
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Enter your name...'
            required
          />
          <label>Email:</label>
          <input 
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter your valid email...'
            required
          />
          <button type="submit">Save</button>
        </form>
      )}
    </div>
  );
}

export default BasicInformation;
