import React from 'react'

const BasicInformation = () => {
  return (
    <div className='basicInf-Container'>
      <form>
        <label>Name</label>
        <input type='text'/>
        <label>Email</label>
        <input type='email'/>
        <button>Save</button>
      </form>
    </div>
  )
}

export default BasicInformation
