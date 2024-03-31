import React from 'react'

const Ocupation = () => {
  return (
    <div className='ocupation-container'>
      <form>
        <label>Ocupation</label>
        <select>
          <option>Student</option>
          <option>Working Professional</option>
          <option>Retired</option>
        </select>
       
        <button>Save</button>
      </form>
    </div>
  )
}

export default Ocupation
