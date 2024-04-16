import React, { useState } from 'react'

const Stepper = ({stepsList}) => {
  const[currentStep, setCurrentStep] = useState(0)
    //stepsList == array
    const stepsCount = stepsList.length;
    const steps = []
    
    // Pushing step number based on how many components have in list
    for(let i =0; i<stepsCount; i++){
        steps.push(
          <div key={i} onClick={()=>setCurrentStep(i)} 
              className={`step ${currentStep >= i ? "active" :""}`}>
                {i+1}
          </div>
        )
    }
    const progressLineWidth = (100 / (stepsCount-1)) * currentStep;

    //back page function
    const prevStep = () =>{
        if(currentStep !==0){
          setCurrentStep(currentStep-1)
        }
    }
    //next page function
    const nextStep = () =>{
        if(currentStep !==stepsCount-1){
          setCurrentStep(currentStep+1)
        }
    }
  return (
    <section className='stepper'>
      {/* Top=> Steps Count */}
      <div className='steps-container'>
        <div className='steps'>{steps}</div>
        <div className='progressLine' style={{width : `${progressLineWidth}%`}}></div>
        <div className='progressLineGray'></div>
      </div>

      {/* middle => components based on step */}
      <div className='eachForm'>{stepsList[currentStep]}</div> 

      {/* Bottom => buttons */}
      <div className='buttons'>
        <button onClick={prevStep} className='back'>Back</button>
        <button onClick={nextStep} className='next'>{currentStep<2 ? "Next" : "Submit"}</button>
      </div>
    </section>
  )
}

export default Stepper
