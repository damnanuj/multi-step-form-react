
import './App.css';
import Profile from './components/Profile';
import Stepper from './components/Stepper';
import BasicInformation from './components/form-steps/BasicInformation';
import EducationDetails from './components/form-steps/EducationDetails';

import PersonalDetails from './components/form-steps/PersonalDetails';



function App() {
  const stepsList = [<BasicInformation/>, <PersonalDetails/>, <EducationDetails/>]
  return (
    <div className="main-container">
      <div className='formStep-wrapper'>
        
            <Stepper stepsList= {stepsList}/>

        
      </div>
      
      
    </div>
  );
}

export default App;
