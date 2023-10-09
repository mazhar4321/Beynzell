import { Button, Input, Select } from 'antd'
import React, { useState } from 'react'
import UsserIcom from '../../../assets/user.png'
import Email from '../../../assets/email.png'
import CustomTextArea from '../../../component/myProfile/CustomTextArea';
import UploadImg from '../../../assets/upload-cloud.svg'
import Tick from '../../../assets/Tick.png'
import Celebrate from '../../../assets/Celebrate.png'
import Logo from '../../../assets/corporate-logo.svg'
import { message, Upload } from 'antd';
const { Dragger } = Upload;


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

  const maxImages = 15; 
const { Option } = Select;

const citiesInDubai = [
  'UAE',
  'Abu Dhabi',
  'Sharjah',
  // Add more cities as needed
];
function JoinCorporate() {
    const [next , setNext] = useState(false)
    const selectStyles = {
        border: 'none',
        boxShadow: 'none',
        color: '#667085 !important', // Custom color
      };
  return (
    <>
     <Head/>
    <div className='bg-[#F9FAFB] py-10 h-screen '>
   <div className='container mx-auto'>

    {next ? <SuccessfullyConfirm/> :  
    <div className='card-shadow lg:w-1/3 md:w-1/2 w-full mx-auto rounded-sm px-6 py-6'>
    <h1 className='text-textColor font-medium pb-5 border-b border-borderColor'>Enter the details</h1>
    <div className='border-b border-borderColor pb-4'>
       <h1 className='my-2'>Contact Info</h1>
       <Input
       className='px-1 my-2'
       prefix={<img className='w-6' src={UsserIcom}/>}
       placeholder='Name'
       />
       <Input
       className='px-1 my-2'
       prefix={<img className='w-6' src={Email}/>}
       placeholder='Email'
       type='email'
       />
<div className="border rounded-md pl-2 my-2 flex items-center space-x-4">
 <Select suffixIcon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M5 7.5L10 12.5L15 7.5" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>}  style={selectStyles} defaultValue={citiesInDubai[0]} className="w-28">
   {citiesInDubai.map((city) => (
     <Option key={city} value={city}>
       {city}
     </Option>
   ))}
 </Select>
 <Input className='border-0' placeholder="Phone Number" />
</div>
    </div>
    <div className='border-b border-borderColor pb-4'>
    <h1 className='my-2'>Business Info</h1>
    <Input
    className='px-2 my-2'
    placeholder='Entity Name'
    />
    <CustomTextArea
    />
    </div>
    <div className='my-6 pb-6 border-b border-borderColor'>
    <h1 className='my-2'>Upload Trade License</h1>

    <Dragger {...props} style={{background:"#fff"}}>
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


    </div>
    <div>
    <p className='font-normal text-textColor my-4'>By submitting, you agree to our<span className='text-SkyColor'>Terms of use & Privacy Policy </span> </p>
    <div className='w-full flex gap-5'>
       <Button className='w-full py-2 h-10'>
           Cancel
       </Button>
       <Button className="bg-textColor text-white w-full py-2 h-10" onClick={()=> setNext(true)}>
           Submit
       </Button>
    </div>
    </div>
</div>
    
}
</div>
    </div>
    </>
  )
}


const Successfully = ()=>{
    return(
        <div className='card-shadow lg:w-1/3 md:1/2 w-full mx-auto rounded-sm px-6 py-6'>
        <div className='border-b border-borderColor pb-4 flex gap-4 items-center'>
            <img src={Tick} alt="" />
            <h1 className='text-textColor font-medium text-xl'>Successfully Submitted</h1>
        </div>
        <div className='border-b border-borderColor pb-4 my-6'>
            <h1  className='text-textColor font-medium my-4 text-lg'>So, What's Next</h1>
            <p className='text-black font-normal'>
            We'll be contacting you within the next 48 hours to verify the details of your business. This verification process is essential to confirm the legitimacy and trustworthiness of your business, giving both you and your customers peace of mind. We're committed to working with you to finalize this important step for your business, and look forward to speaking with you soon!
            </p>
        </div>
        <div className='my-4'>
            <p className='text-textGrey font-normal'>If you didn’t get any calls within 48hrs, Then reach to <span className='text-SkyColor'>1800 000 00</span> </p>
            <div className='flex justify-center'>
            <Button className='text-textGrey font-medium my-4 mt-6 w-1/3'>
            Back to Home
            </Button>
            </div>
        </div>
        </div>
    )
}

const SuccessfullyConfirm = ()=>{
    return(
        <div className='card-shadow lg:w-1/3 md:1/2 w-full mx-auto rounded-sm px-6 py-6'>
        <div className='border-b border-borderColor pb-4 flex gap-4 items-center'>
            <img src={Celebrate} alt="" />
            <h1 className='text-textColor font-medium text-xl'>Hurray! We got you</h1>
        </div>
        <div className='border-b border-borderColor pb-4 my-6'>
            <p className='text-black font-normal'>
            We have confirmed the successful verification of your business. To proceed further, we kindly request a payment of <span className='text-textColor'>AED 1,234.</span> 
            </p>
        </div>
        <div className='my-4'>
            <p className='text-textGrey font-normal text-center'>Any issue? Need  <span className='text-SkyColor'>Help</span> </p>
            <div className='flex justify-center'>
            <Button className='text-white bg-textColor font-medium my-4 mt-6 w-full h-10'>
            Pay AED 1,234
            </Button>
            </div>
        </div>
        </div>
    )
}


const Head = ()=>{
    return(
        <div className='border-b border-borderColor bg-white '>
        <div className="container mx-auto py-4 flex justify-between">
        <img src={Logo} alt="" />
           <Button type='text' className='text-textColor font-medium hidden md:block'>
               Join Corporate
           </Button>
           <Button type='text' className='font-medium text-SkyColor'>
               Cancel
           </Button>
        </div>
       </div>
    )
}

export default JoinCorporate