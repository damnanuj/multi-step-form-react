
import './App.css';
import Steps from './components/Steps';
import StepsControl from './components/StepsControl';

function App() {
  return (
    <div className="main-container">
      <div className='steps-holder'>
        <Steps/>
        <StepsControl/>
      </div>
    </div>
  );
}

export default App;
