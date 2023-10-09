import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Breadcrumb, Button, Checkbox, DatePicker, Progress, Radio, Select, Slider, Tag } from 'antd';
import CustomInput from '../component/myProfile/CustomInput';
import CustomTextArea from '../component/myProfile/CustomTextArea';
import Plus from '../assets/add-circle.svg'
import Minus from '../assets/minus-circle.svg'
import UploadImg from '../assets/upload-cloud.svg'
import Locate from '../assets/Locate.svg'
import CheckIcon from '../assets/Check-icon.svg'
import AdsImage from '../assets/adsImage.svg'
import CloseIcon from '../assets/close.svg'
import PaymentMethod from '../assets/payment-method-icon.svg'
import MasterCard from '../assets/mastercard.svg'
import ApplePay from '../assets/applepay.svg'
import DownArrow from '../assets/arrow-down.svg'
import { InboxOutlined , CloseOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

import moment from 'moment'; // Import the moment.js library
import CompactInput from '../component/myProfile/CompactInput';
const { Dragger } = Upload;


const GoogleMapComponent = withGoogleMap(({ center }) => (
    <GoogleMap defaultZoom={12} defaultCenter={center}>
      <Marker position={center} />
    </GoogleMap>
  ));


function AdsPost() {
    const { categoryName, detailName } = useParams();
    console.log(categoryName, detailName)
    const [currentStep, setCurrentStep] = useState(1);

    const handleNextStep = () => {
        setCurrentStep((prevStep) => prevStep < 4 ? prevStep + 1 : prevStep);
      };
    
      const handlePreviousStep = () => {
        setCurrentStep((prevStep) => prevStep > 1 ? prevStep - 1 : prevStep);
      };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <Step1Content />;
      case 2:
        return <Step2Content />;
      case 3:
        return <Step3Content />;
      case 4:
        return <Step4Content />;
      default:
        return null;
    }
  };
  return (
    <div className='container mx-auto py-5'>
      <div className='w-1/2 mx-auto'>
       <Breadcrumb  style={{ margin: '16px 0' ,   }}>
        <Breadcrumb.Item className='text-SkyColor'> {categoryName}</Breadcrumb.Item>
        <Breadcrumb.Item className='text-SkyColor'> {detailName}</Breadcrumb.Item>
      </Breadcrumb>
      </div>
      <div className='card-shadow lg:w-1/2 w-full mx-auto py-5 px-4'>
      <h1 className='text-textColor text-xl font-medium'>{currentStep == 1 ? "Enter Ad details" : currentStep == 2 ? "Enter your details" : currentStep == 3 ? "Select your plan" : currentStep == 3 && Step3NextContent ? "Sumary" : "Payment"}</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: '100%',  }}>
          <h2 className='text-textGrey text-xs font-medium'>Step {currentStep}/4</h2>
          {renderStepContent()}
          <div className='flex gap-10'>
          {currentStep === 2 && (
            <button className='w-full border border-borderColor text-textColor font-medium' onClick={handlePreviousStep}>Edit Ad details</button>
          )}
          {currentStep <= 4 && (
            <button className='w-full text-center bg-[#101828] text-white py-2 font-medium rounded-md' onClick={handleNextStep}>{currentStep == 3 ? "Pay" : currentStep == 4 ? "Pay" : "Next"}</button>
          )}
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
const Step1Content = () => {
    
  const [selectedCar, setSelectedCar] = useState('BMW');
  const [activeFuelIndex, setActiveFuelIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeInsurence, setActiveInsurence] = useState(null);
  const itemCount = 4; // Initialize with 4 items
  const fuelTypes = ['Gasoline', 'Diesel', 'CNG', 'Hybrid', 'Electric'];
  const Insurence = ['Yes', 'No']
  const [selectedDate, setSelectedDate] = useState(null);
  const [toggle , setToggle] = useState(false)
  

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleFuelTypeClick = (index) => {
    if (activeFuelIndex === index) {
      setActiveFuelIndex(null); // Toggle off the active state if clicked again
    } else {
      setActiveFuelIndex(index); // Set the clicked index as active
    }
  };
  const handleInsurenceTypeClick = (index) => {
    if (activeFuelIndex === index) {
        setActiveInsurence(null); // Toggle off the active state if clicked again
    } else {
        setActiveInsurence(index); // Set the clicked index as active
    }
  };

  const handleItemClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Toggle off the active state if clicked again
    } else {
      setActiveIndex(index); // Set the clicked index as active
    }

    console.log("Clicked item:", index + 1);
  };

  const handleCarSelect = (value) => {
    setSelectedCar(value);
  };

  const carOptions = [
    'Sedan',
    'SUV',
    'Hatchback',
    'Convertible',
    // Add more car types as needed
  ];
  const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  const [fileList, setFileList] = useState([]);
  const [thumbnailIndex, setThumbnailIndex] = useState(-1);
  const maxImages = 15;

  const handleFileChange = ({ fileList }) => {
    setFileList(fileList);
  };

  const handleRemove = (file) => {
    const updatedFileList = fileList.filter(item => item !== file);
    setFileList(updatedFileList);

    // Update thumbnail selection if removed image was the thumbnail
    if (thumbnailIndex === fileList.indexOf(file)) {
      setThumbnailIndex(-1);
    }
  };
  const handleThumbnailClick = (index) => {
    if (thumbnailIndex === index) {
      setThumbnailIndex(-1); // Deselect thumbnail if clicked again
    } else {
      setThumbnailIndex(index);
    }
  };

  const getTotalSize = () => {
    const totalBytes = fileList.reduce((total, file) => total + file.size, 0);
    const totalKB = totalBytes / 1024; // Convert bytes to KB
    return totalKB.toFixed(2); // Display total size in KB with 2 decimal places
  };

  const uploadProps = {
    multiple: true,
    fileList,
    beforeUpload: (file) => {
      if (fileList.length + 1 <= maxImages) {
        setFileList(prevFileList => [...prevFileList, file]); // Use functional update
      } else {
        message.warning(`You can only upload up to ${maxImages} images.`);
      }
      return false;
    },
  };
console.log(fileList)
    return(
<div className='mt-10'>
      <h2 className='text-textColor text-sm font-medium'>Car Info</h2>
      <Select
            placeholder="Select car type"
            value={selectedCar}
            onChange={handleCarSelect}
            className='w-full border border-[#D0D5DD] p-1 mt-2 rounded-md'
            suffixIcon={<img src={DownArrow} alt=''/>}
            
          >
            {carOptions.map((carType) => (
              <Option key={carType} value={carType}>
                {carType}
              </Option>
            ))}
          </Select>
          <Select className='w-full border border-[#D0D5DD] p-1 mt-2 rounded-md' suffixIcon={<img src={DownArrow} alt=''/>} defaultValue="series 3">
            <Option>Series 3</Option>
          </Select>
          <Select className='w-full border border-[#D0D5DD] p-1 mt-2 rounded-md' suffixIcon={<img src={DownArrow} alt=''/>} defaultValue="series 3">
            <Option>2018</Option>
          </Select>
          <div>
            <CustomInput/>
          </div>
          <div>
            <CustomInput/>
          </div>
          <div>
            <CustomTextArea/>
          </div>
          <div className='flex gap-2 items-center mt-2' onClick={()=> setToggle(!toggle)}>
            <h1 className='text-SkyColor text-sm font-medium'>Addition info</h1>
            <img src={!toggle ? Plus : Minus} alt="" />
          </div>
          {toggle &&   <div className={`transition-content ${toggle ? 'toggle-visible' : ''}`}>
            <div className='mt-3 font-medium text-textGrey'>
                <h1 className=' text-lg '>No of Owners</h1>
                <div className='flex gap-3 mt-2'>
                {Array.from({ length: itemCount }, (_, index) => (
          <h1
            key={index}
            onClick={() => handleItemClick(index)}
            className={`p-3 w-8 h-8 items-center flex justify-center border rounded-full ${
              activeIndex === index ? 'bg-colorPrimary text-white' : ''
            }`}
          >
            {index + 1}
            {index === 3 && itemCount >= 4 ? '+' : ''}
          </h1>
        ))}
                </div>
            </div>
            <div className='mt-3 font-medium text-textGrey'>
                <h1>Fuel Type</h1>
                <div className='flex gap-3 mt-2'>
                {fuelTypes.map((fuelType, index) => (
          <h1
            key={index}
            onClick={() => handleFuelTypeClick(index)}
            className={`p-3 h-8 items-center flex justify-center border rounded-full ${
              activeFuelIndex === index ? 'bg-colorPrimary text-white' : ''
            }`}
          >
            {fuelType}
          </h1>
        ))}
                </div>
            </div>
            <div className='mt-3 font-medium text-textGrey'>
                <h1>Is Insurance Available ?</h1>
                <div className='flex gap-3 mt-2'>
                {Insurence.map((insurence, index) => (
          <h1
            key={index}
            onClick={() => handleInsurenceTypeClick(index)}
            className={`p-3 h-8 items-center flex justify-center border rounded-full ${
                activeInsurence === index ? 'bg-colorPrimary text-white' : ''
            }`}
          >
            {insurence}
          </h1>
        ))}
                </div>
            </div>

            <div className='mt-2'>
            <DatePicker
            className='w-full border border-[#D0D5DD] p-1 mt-2 rounded-md px-2 py-2'
          value={selectedDate}
          onChange={handleDateChange}
          format='YYYY-MM-DD' // Set the desired format
        />
        {/* {selectedDate && (
        <p>Selected Date: {moment(selectedDate).format('YYYY-MM-DD')}</p>
      )} */}
      </div>
          <div className='mb-4 border-b'>
      <Select className='w-full border border-[#D0D5DD] p-1 mt-2 rounded-md ' defaultValue="Red">
            <Option>Red</Option>
          </Select>
          </div>
         
          </div>}
      {/* Include exterior car details */}
      <div className='my-4'>
            <h1 className='my-2 font-medium text-textColor'>Add Photos</h1>

            <div>
      <Dragger {...uploadProps}>
        <p className="ant-upload-drag-icon flex justify-center">
          <img className='bg-[#F2F4F7] p-2 rounded-full' src={UploadImg} alt="" />
        </p>
        <p style={{ color: '#0068B3' }} className="ant-upload-text text-SkyColor font-medium">
          Click to upload <span className='text-textLight'>drag and drop</span>
        </p>
        <p className="ant-upload-hint text-textLight font-medium">
          PNG, JPG or JPEG (max {maxImages} photos)
        </p>
      </Dragger>
      <div className="mt-4 border rounded-md py-2 px-2">
      <p className='text-textGrey text-sm font-medium'>Car Pic: {fileList.length}</p>
      <p className='text-textGrey text-sm'>Total Size: {getTotalSize()}KB</p> {/* Add "KB" directly after the size */}
      <Progress percent={((fileList.length / maxImages) * 100).toFixed(0)} />
    </div>
      <div className="mt-4">
        {fileList.map((file, index) => (
          <div key={index} className="image-item" style={{ width: '24%', display: 'inline-block', position: 'relative', marginRight: '10px' }}>
            <img onClick={() => handleThumbnailClick(index)} src={URL.createObjectURL(file)} alt={`Uploaded ${index + 1}`} style={{ width: '100%', maxWidth: '100%', maxHeight: '100px' }} />
            <Button className='bg-[#FFA09B] text-dangerColor flex justify-center items-center' type="danger" size="small" shape="circle" icon={<CloseOutlined />} onClick={() => handleRemove(file)} style={{ position: 'absolute', top: '5px', right: '5px' }} />
            {/* <Radio.Group onChange={() => handleThumbnailSelect(index)} value={thumbnailIndex}>
              <Radio value={index}>Set as Thumbnail</Radio>
            </Radio.Group> */}
            {thumbnailIndex === index && <span className="thumbnail-label">Thumbnail</span>}
           
          </div>
        ))}
      </div>
    </div>
    <div className='mt-6 border-b pb-6'>
        <CompactInput defaultValue="AED"/>
    </div>
    <div className='my-4'>
        <h1 className='text-sm font-medium text-textGrey'>By proceeding, you agree to our <span className='text-SkyColor'>Terms of use</span> & <span className='text-SkyColor'>Privacy Policy</span></h1>
    </div>
          </div>
    </div>
    )
}
    

  
  const Step2Content = () => {
    const [selectedLocation, setSelectedLocation] = useState({ lat: 25.276987, lng: 55.296249 }); // Default location

  const handleCityChange = (value) => {
    // Update the selected location based on the city
    if (value === 'Abu Dhabi') {
      setSelectedLocation({ lat: 24.466667, lng: 54.366669 });
    } else if (value === 'Dubai') {
      setSelectedLocation({ lat: 25.276987, lng: 55.296249 });
    }
  };
  useEffect(() => {
    // Initialize Google Map
    const map = new window.google.maps.Map(document.getElementById('google-map'), {
      center: selectedLocation,
      zoom: 12,
    });

    // Add marker
    new window.google.maps.Marker({
      position: selectedLocation,
      map: map,
    });
  }, [selectedLocation]);
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
    return(
    <div>
      <h2 className='font-medium text-textColor text-xl my-4'>Location</h2>
      <Select className='w-full border border-[#D0D5DD] p-1 mt-2 rounded-md ' defaultValue="Dubai" onChange={handleCityChange}>
        <Option value="Abu Dhabi">Abu Dhabi</Option>
        <Option value="Dubai">Dubai</Option>
      </Select>
      <Select className='w-full border border-[#D0D5DD] p-1 mt-2 rounded-md ' defaultValue="Zayed City">
            <Option>Zayed City</Option>
          </Select>
          <div className='flex my-4 gap-2 font-medium'>
            <img src={Locate} alt="" />
            <h1 className='text-SkyColor text-xs'>Locate Me</h1>
           
          </div>
          <div>
          <div id="google-map" style={{ height: '300px', width: '100%' }} />
      </div>
      <div className='mt-5'>
        <h1 className='font-medium text-textColor text-xl'>Contact Details</h1>
        <div>
            <CustomInput value="Shamsu"/>
        </div>
        <div>
            <CustomInput value="Design.shamsu@gmail.com" type="email"/>
        </div>
        <div>
            <CompactInput defaultValue="+971"/>
        </div>
        <div className='my-4'>
        <Checkbox onChange={onChange}>Show my contact on Ad info</Checkbox>
        </div>
      </div>
    </div>
  )};
  
  const Step3Content = () => {
    const [inputValue, setInputValue] = useState(1);
    const [selectedCard, setSelectedCard] = useState(null);
    const [nextStep , setNextStep] = useState(false)

    const handleCardSelect = (cardIndex) => {
      setSelectedCard(cardIndex);
    };
  
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
    const onChange = (newValue) => {
      setInputValue(newValue);
    };
    
    return(
      <>
    {nextStep ? <Step3NextContent/> :
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
    }
    </>
  )};
  
  const Step3NextContent = () => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleSelectChange = (values) => {
      setSelectedOptions(values);
    };
  
    const handleTagClose = (tag) => {
      const updatedOptions = selectedOptions.filter(option => option !== tag);
      setSelectedOptions(updatedOptions);
    };
    return(
    <div className='mt-6'>
      <div className='flex justify-between'>
      <div className='flex gap-4'>
          <img src={AdsImage} alt="" />
          <div>
            <h1 className='text-textColor font-medium '>BMW 3 SERIES</h1>
            <h6 className='text-Grey600 text-sm font-semibold'>AED 91,900</h6>
            <div className='text-textLight text-xs font-medium flex gap-1 items-center mt-1'>
              <h4>Zayed City</h4>
              <div className='w-1 h-1 bg-textLight rounded-full'/>
              <h4>Abu Dhabi</h4>
            </div>
          </div>
      </div>
      <div>
        <h1 className='bg-yellowColor px-3 py-1 rounded-full text-sm font-semibold'>Feature</h1>
      </div>
      </div>
      <div className='mt-6 discount'>
               <h1 className='text-textColor font-medium text-lg'>Discount</h1>
               <Select
        placeholder="Firstsell"
        value={selectedOptions}
        onChange={handleSelectChange}
        style={{ width: '100%' }}
        className='w-full border border-[#D0D5DD] p-1 mt-2 rounded-md'
        // closeIcon={<img src={CloseIcon} alt=''/>}
        suffixIcon={<img src={CloseIcon} alt=''/>}
      >
        <Option value="option1">Firstsell</Option>
        <Option value="option2">Option 2</Option>
        <Option value="option3">Option 3</Option>
        {/* Add more options here */}
      </Select>
      </div>
      <div className='mt-6 border-b border-borderColor pb-5'>
            <h1 className='text-textColor font-medium text-lg'>Price detials</h1>
            <div className='flex justify-between mt-4'>
              <div className='flex gap-1 '>
                <h2 className='text-textGrey font-normal text-sm'>5 Day Ad</h2>
                <h2 className='text-sm font-medium text-SkyColor'> Edit</h2>
              </div>
              <h1 className='text-textGrey font-normal text-sm'>AED 123</h1>
            </div>
            <div className='flex justify-between mt-2'>
              <div className='flex gap-1'>
                <h2 className='text-textGrey font-normal text-sm'>Premium Gold</h2>
              </div>
              <h1 className='text-textGrey font-normal text-sm'>AED 123</h1>
            </div>
            <div className='flex justify-between mt-2'>
              <div className='flex gap-1'>
                <h2 className='text-textGrey font-normal text-sm'>2.5 day Feature</h2>
              </div>
              <h1 className='text-textGrey font-normal text-sm'>AED 123</h1>
            </div>
            <div className='flex justify-between mt-2'>
              <div className='flex gap-1'>
                <h2 className='text-textGrey font-normal text-sm'>VAT 5%</h2>
              </div>
              <h1 className='text-textGrey font-normal text-sm'>AED 123</h1>
            </div>
            <div className='flex justify-between mt-4'>
              <div className='flex gap-1 '>
                <h2 className='text-textGrey font-normal text-sm'>Discount</h2>
                <h2 className='text-sm font-medium text-SkyColor'> Firstsell</h2>
              </div>
              <h1 className='text-textGrey font-normal text-sm'>AED 123</h1>
            </div>
      </div>
      <div className='flex justify-between my-4'>
        <h1 className='text-textColor font-medium text-base'>Total</h1>
        <h1 className='text-textColor font-medium text-base'>AED 2123</h1>
      </div>
    </div>
  )};
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
    <div className='mt-6'>
    <h1 className='text-textColor font-medium text-lg'>Saved</h1>
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
      <div className='my-4'>
        <Checkbox className='text-textLight font-medium'>Saved my card</Checkbox>
      </div>
    </div>
  )};
export default AdsPost