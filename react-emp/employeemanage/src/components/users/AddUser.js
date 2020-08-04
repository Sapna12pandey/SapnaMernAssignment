import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import PageOne from './steps/PageOne';
import PageTwo from './steps/PageTwo';
import PageThree from './steps/PageThree';
import PageFourth from './steps/PageFourth';


function AddUser(){

  const [currentStep, setCurrentStep] = useState(1);

  //set hook getter and setter hook for the whole form data
  const [formData, setFormData] = useState({
      email: '',
      firstname:'',
      lastname: '',
      phone: '',
      currentaddress: '',
      permanentaddress: '',
      facebook:'www.facebook.com',
      github:'www.github.com',
      linkedin:'www.linkedin.com',
      hobbies:'',
      year:'',
      collage:'',
      course:'',
      percentage:'',
      companyname:'',
      fromdate:'',
      todate:'',
      designation:'',
      course2:'',
      collage2:'',
      year2:'',
      percentage2:''


     
  })
  
  const [visibleSteps, setVisibleSteps] = useState({
     PageOne: true,
     PageTwo: false,
     PageThree: false,
      PageFourth:false
  });
  
  let showStep = () => { // displays the current step
      if (currentStep === 2 && visibleSteps.PageTwo === true) {
          return <PageTwo setFormData = { setFormData } formData = { formData } setCurrentStep = { setCurrentStep } setVisibleSteps = { setVisibleSteps } visibleSteps = { visibleSteps } />
      } else if (currentStep === 3 && visibleSteps.PageThree === true) {
          return <PageThree setFormData = { setFormData } formData = { formData } setCurrentStep = { setCurrentStep } setVisibleSteps = { setVisibleSteps } visibleSteps = { visibleSteps } />
      }else if (currentStep === 4 && visibleSteps.PageFourth === true) {
        return <PageFourth setFormData = { setFormData } formData = { formData } setCurrentStep = { setCurrentStep } setVisibleSteps = { setVisibleSteps } visibleSteps = { visibleSteps } />
    }
       else {
          return <PageOne setFormData = { setFormData } formData = { formData } setCurrentStep = { setCurrentStep } setVisibleSteps = { setVisibleSteps } visibleSteps = { visibleSteps } />
      }
  }

  return (
    <div className="container step-container">
        <h3 className="text-muted" style={{ textTransform: 'capitalize'}}> Complete Form Below </h3>
        <div className="row" style={{ margin :'25px 0 10px 0' }}>
            <div className={ currentStep === 1 ? "col col-sm-3 step-card active" : "col col-md-3 step-card" }>
            Personal Details
            </div>
            <div className={ currentStep === 2 ? "col col-sm-3 step-card active" : "col col-md-3 step-card" }>
                Educational Details
            </div>
            <div className={ currentStep === 3 ? "col col-sm-3 step-card active" : "col col-md-3 step-card" }>
                Professional Details
            </div>
            <div className={ currentStep === 4 ? "col col-sm-3 step-card active" : "col col-md-3 step-card" }>
                Social-Hobbies
            </div>
        </div>
        { showStep() }
    </div>
  );
 
}


export default AddUser;
