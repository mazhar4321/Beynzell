import { Button, Checkbox, Select, Slider } from 'antd';
import React from 'react'
import { useState } from 'react';
import CheckIcon from '../../../assets/Check-icon.svg'
import CustomInput from '../../../component/myProfile/CustomInput';
import MasterCard from '../../../assets/mastercard.svg'
import ApplePay from '../../../assets/applepay.svg'
import DownArrow from '../../../assets/arrow-down.svg'




const pricingData = [
    {
      title: 'Basic',
      price: '$9.99',
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
    },
    {
      title: 'Standard',
      price: '$19.99',
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
    },
    {
      title: 'Premium',
      price: '$29.99',
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    },
  ];
function PaymentMethod() {
    const [selectedCard, setSelectedCard] = useState(null);
    const [nextStep , setNextStep] = useState(false)
    const [inputValue, setInputValue] = useState(1);

    const handleCardSelect = (cardIndex) => {
        setSelectedCard(cardIndex);
      };
      const onChange = (newValue) => {
        setInputValue(newValue);
      };
  return (
    <div className='bg-backgroundColor py-6'>
        {nextStep ? <Step4Content/>
        :
         <div className='card-shadow lg:w-1/3 w-full mx-auto py-5 px-4'>
      <h1 className='text-textColor text-xl font-medium'>Select your plan</h1>
      <div className='relative'>
    {/* <h2 className='font-medium text-textColor text-xl my-4'>Select your plan</h2> */}
   {/* Include performance car details */}
   <div className='my-4'>
     <h1 className='text-SkyColor font-medium text-base'>{inputValue} Day <span className='text-textColor'>(AED 200)</span></h1>
   </div>
   <Slider
       min={1}
       max={20}
       onChange={onChange}
       value={typeof inputValue === 'number' ? inputValue : 0}
     />
     <div className='flex justify-between items-center pb-6 border-b border-borderColor'>
     <Checkbox className='flex gap-2' >
         <h1 className='text-sm font-medium text-[#344054] mt-4'>Feature In Category</h1>
         <span className='text-textGrey text-xs font-normal'>For 2.5 days</span>
     </Checkbox>
     <h1 className='text-sm font-medium text-[#344054] mt-4'>AED 100</h1>
     </div>
     <div className='flex justify-between items-center pb-6 border-b border-borderColor'>
     <Checkbox className='flex gap-2' >
         <h1 className='text-sm font-medium text-[#344054] mt-4'>Feature In Category</h1>
         <span className='text-textGrey text-xs font-normal'>For 2.5 days</span>
     </Checkbox>
     <h1 className='text-sm font-medium text-[#344054] mt-4'>AED 100</h1>
     </div>
     <div className='my-4'>
                  <h1 className='font-medium text-textColor text-lg'>Try Packages </h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-8 gap-2 pb-6 border-b border-borderColor">
   {pricingData.map((card, index) => (
     <div
       key={index}
       className={`flex flex-col p-4 w-full bg-gray-100 rounded-md cursor-pointer ${
         selectedCard === index ? 'bg-blue-500 text-white' : ''
       }`}
       onClick={() => handleCardSelect(index)}
     >
         <div className='flex flex-row-reverse'>
       <div className={`flex justify-center items-center w-6 h-6 border border-[#98A2B3] rounded-full overflow-hidden `}>
         {selectedCard === index && <span className="text-white w-full h-full text-xs flex justify-center items-center border-[#0068B3] bg-[#0068B3]">&#10003;</span>}
       </div>
       <h2 className="text-lg font-medium text-center mx-auto text-textColor">{card.title}</h2>
       </div>
       <h2 className="text-base font-semibold text-center mx-auto mt-5 text-textColor bg-[#CCE1F0] rounded-full px-3 py-1 text-textColor">{card.title}</h2>
       <ul className="mt-4">
         {card.features.map((feature, featureIndex) => (
           <li key={featureIndex} className="mt-2 flex gap-4 items-center text-[#667085] text-lg font-medium">
             <img src={CheckIcon} alt="" className='w-6  ' />
             {feature}
           </li>
         ))}
       </ul>
     </div>
   ))}
 </div>

 <div className='flex text-textColor font-semibold text-lg justify-between my-4'>
     <h1>Total</h1>
     <h1>AED 2000</h1>
 </div>
 <div>
     <h1 className='text-textLight font-normal'>5% Vat will be charged at checkout
Text
Sub Text</h1>
 </div>
     </div>
     <button className='w-full text-center bg-[#101828] text-white py-2  font-medium rounded-md absolute -bottom-14 ' onClick={()=> setNextStep(true)}>Continue</button>
 </div>
    </div>
}
    </div>
  )
}

const Step4Content = () => {
    const [selectedCard, setSelectedCard] = useState(null);

  const handleCheckboxChange = (cardIndex) => {
    setSelectedCard(cardIndex);
  };

  const renderPaymentCard = (cardIndex, endingNumber, expiryDate, img) => {
    const isSelected = selectedCard === cardIndex;
    return (
      <div
        key={cardIndex}
        className={`flex justify-between my-4 border py-4 rounded-md px-4  items-start ${
          isSelected ? 'border-[#0068B3] bg-[#E6F0F7] border' : ''
        }`}
      >
        <div className='flex gap-6 items-start '>
          <img src={img} alt='' />
          <div>
            <h1 className='text-textGrey font-medium text-base'>
              Visa ending in {endingNumber}
            </h1>
            <h1 className='text-textLight font-normal text-sm'>
              Expiry {expiryDate}
            </h1>
            <div className='flex font-medium text-sm gap-2 mt-1'>
              <h1 className='text-textLight'>Set as default</h1>
              <h1 className='text-SkyColor'>Edit</h1>
            </div>
          </div>
        </div>
        <div className='payment-method'>
        <Checkbox
          checked={isSelected}
          onChange={() => handleCheckboxChange(cardIndex)}
          className={`custom-checkbox ${isSelected ? 'selected' : ''}`}
        />
        </div>
      </div>
    );
  };
  
    return(
    <div className='mt-6 lg:w-1/3 w-full mx-auto bg-white px-4 card-shadow'>
    <h1 className='text-textColor font-medium text-lg pt-5'>Saved</h1>
    <div>
    {renderPaymentCard(1, '1234', '06/2024' , PaymentMethod)}
      {renderPaymentCard(2, '5678', '09/2023', MasterCard)}
      {renderPaymentCard(3, '9012', '12/2025', ApplePay)}
    </div>
    <div className='flex justify-between lg:flex-row flex-col'>
    <h1 className='text-textColor font-medium text-lg'>Pay Through</h1>
    <div className='flex gap-2'>
    <img src={PaymentMethod} alt="" />
    <img src={MasterCard} alt="" />
    <img src={ApplePay} alt="" />
    </div>
    </div>
    <Select
        placeholder="Credit or debit Card"
        style={{ width: '100%' }}
        className='w-full border border-[#D0D5DD] p-1 mt-2 rounded-md my-4'
        // closeIcon={<img src={CloseIcon} alt=''/>}
        suffixIcon={<img src={DownArrow} alt=''/>}
      >
        <Option value="option1">Credit or debit Card</Option>
        <Option value="option2">Apple pay</Option>
        {/* Add more options here */}
      </Select>
      <div>
        <CustomInput label="Name on card"/>
        <CustomInput label="Card Number"/>
      </div>
      <div className='flex justify-between gap-10 my-4'>
        <div className=' w-full'>
      <CustomInput label="Expiry"/>
      </div>
      <div className=' w-full'>
      <CustomInput label="CNIC"/>
      </div>
      </div>
      <div className='my-4 border-b border-borderColor pb-8'>
        <Checkbox className='text-textLight font-medium'>Saved my card</Checkbox>
      </div>
      <div className='my-4 pb-4'>
        <Button className='bg-textColor text-white w-full h-10'>Pay AED 345</Button>
      </div>
    </div>
  )};

export default PaymentMethod