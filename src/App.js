
import { useEffect, useState } from 'react';
import './App.css';
import Profile from './components/Profile';
import Stepper from './components/Stepper';
import BasicInformation from './components/form-steps/BasicInformation';
import EducationDetails from './components/form-steps/EducationDetails';

import PersonalDetails from './components/form-steps/PersonalDetails';



function App() {
  const [userData, setUserData] = useState(null);

   // Function to save user data
   const saveUserData = (data) => {
    setUserData(prevData => ({ ...prevData, ...data }));
    // console.log(data);
  };
  useEffect(() => {
    console.log(userData);
  }, [userData]);
  const stepsList = [<BasicInformation onSave={saveUserData}/>, 
                      <PersonalDetails onSave={saveUserData}/>, 
                      <EducationDetails onSave={saveUserData}/>
                    ]

  return (
    <div className="main-container">
      <div className='formStep-wrapper'>
        
            <Stepper stepsList= {stepsList}/>

        
      </div>
      
      
    </div>
  );
}

export default App;
