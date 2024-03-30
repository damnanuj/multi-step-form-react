import React, { useState } from 'react'

const Stepper = ({stepsList}) => {
  const[currentStep, setCurrentStep] = useState(0)
    //stepsList == array
    const stepsCount = stepsList.length;
    const steps = []
    
    for(let i =0; i<stepsCount; i++){
        steps.push(
          <div 
              onClick={()=>setCurrentStep(i)} 
              className={`step ${currentStep >= i ? "active" :""}`} 
              key={i}>{i+1}
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
      <div className='steps-container'>
        <div className='steps'>{steps}</div>
        <div className='progressLine' style={{width : `${progressLineWidth}%`}}></div>
        <div className='progressLineGray'></div>
      </div>
      <div className='eachForm'>{stepsList[currentStep]}</div>
      <div className='buttons'>
        <button onClick={prevStep} className='back'>Back</button>
        <button onClick={nextStep} className='next'>{currentStep<2 ? "Next" : "Submit"}</button>
      </div>
    </section>
  )
}

export default Stepper
