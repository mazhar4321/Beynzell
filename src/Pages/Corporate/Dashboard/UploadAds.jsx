import React, { useState } from 'react';
import { Button, Steps } from 'antd';
import UploadCSV from '../../Rough';
import UploadfileStep from '../../../component/corporates/UploadfileStep';
import CheckAndCorrect from '../../../component/corporates/Check&Correct';
import AddImagesAndMore from '../../../component/corporates/AddImage';
import Reviews from '../../../component/corporates/Reviews';
// import CheckAndCorrect from './CheckAndCorrect'; // Your check and correct component
// import AddImagesAndMore from './AddImagesAndMore'; // Your add images and more component
// import ReviewAndPublish from './ReviewAndPublish'; // Your review and publish component

const { Step } = Steps;



const MultiStepProcess = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [uploadedData, setUploadedData] = useState(null);
  const handleNext = (data) => {
    if (currentStep < stepsContent.length - 1) {
      setCurrentStep(currentStep + 1);
    }
    setUploadedData(data);
  };

  console.log(uploadedData)
  const stepsContent = [
    {
      title: 'Upload File',
      content: <UploadfileStep nextStep={handleNext}  />,
    },
    {
      title: 'Check and Correct',
      content: <CheckAndCorrect uploadedData={uploadedData} nextStep={handleNext}/>,
    },
    {
      title: 'Add Images and More',
      content:<AddImagesAndMore uploadedData={uploadedData} nextStep={handleNext} />,
    },
    {
      title: 'Review and Publish',
      content: <Reviews/>,
    },
  ];
  return (
    <div >
      <Steps
        current={currentStep}
        labelPlacement="vertical"
        className="w-1/2 my-4 mx-auto"
      >
        {stepsContent.map((step, index) => (
          <Step
            key={index}
            status={currentStep >= index ? 'finish' : 'wait'}
            style={{ color: currentStep >= index ? '#0068B3' : '#D0D5DD' }}
            title={<div className="step-title font-medium w-44 text-textColor text-base">{step.title}</div>}
          />
        ))}
      </Steps>
   <div className='bg-[#F9FAFB] py-2'>
      {stepsContent[currentStep].content}
      </div>

      {/* <div style={{ marginTop: '16px' }}>
        <Button
          type="primary"
          onClick={handleNext}
          disabled={currentStep === stepsContent.length - 1}
        >
          Next
        </Button>
      </div> */}
    </div>
  );
};

export default MultiStepProcess;
