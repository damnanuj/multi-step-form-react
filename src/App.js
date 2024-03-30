
import './App.css';
import Stepper from './components/Stepper';
import BasicInformation from './components/form-steps/BasicInformation';
import Ocupation from './components/form-steps/Ocupation';
import PersonalDetails from './components/form-steps/PersonalDetails';



function App() {
  const stepsList = [<BasicInformation/>, <PersonalDetails/>, <Ocupation/>]
  return (
    <div className="main-container">
      <div className='formStep-wrapper'>
        
            <Stepper stepsList= {stepsList}/>

        
      </div>
      
      
    </div>
  );
}

export default App;
