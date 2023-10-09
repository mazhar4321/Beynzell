import React, { useState } from 'react'
import Headerss from '../component/Home/Header'
import AdsComponent from '../component/AdsComponent'
import { Breadcrumb, Switch, Select } from 'antd'
import SettingContent from '../component/setting/SettingContent'
import DownArrow from '../assets/arrow-down.svg'
const { Option } = Select;
function Setting() {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
    // You can add additional logic here to handle language changes
  };
  return (
    <div className='container mx-auto'>
        <Headerss/>
        <div className='my-5'>
        <AdsComponent/>
        </div>
        <div className='breadcrum text-SkyColor '>
        <Breadcrumb className='text-SkyColor font-thin'
        separator=">"
    items={[
      {
        title: 'Home',
      },
      {
        title: 'Setting',
      },
    ]}
  />
        </div>
        <div className='card-shadow my-5 p-4 px-4 lg:w-1/2 w-full mx-auto'>
                <h1 className='text-textColor font-medium text-lg'>Settings</h1>
                <div className='mt-8 border-b py-5 border--#EAECF0]'>
                    <SettingContent title="Account" items={["My Profile", "My Ads", "Favorites"]}/>
                </div>
                <div className='border-b py-5 border--#EAECF0]'>
                    <h1 className='text-textColor font-medium text-lg'>Notification</h1>
                    <div className='flex justify-between items-center mt-2 text-sm text-[#344054]'>
                        <h6>General</h6>
                        <Switch defaultChecked onChange={onChange} />
                    </div>
                    <div className='flex justify-between items-center mt-2 text-sm text-[#344054]'>
                        <h6>Chat</h6>
                        <Switch defaultChecked onChange={onChange} />
                    </div>
                    
                </div>
                <div className='mt-4 border-b py-5 border--#EAECF0]'>
                <SettingContent title="Subscription" items={["Packages"]}/>
                </div>
                <div className='mt-4 border-b py-5 border--#EAECF0]'>
                <SettingContent title="Payment" items={["Saved payments", "Payment history"]}/>
                </div>
                <div className='mt-4 border-b py-5 border--#EAECF0]'>
                <h1>Language</h1>
                <Select  suffixIcon={<img src={DownArrow} alt=''/>} className='mt-2 border w-1/3' defaultValue="en" style={{ width: 150 }} onChange={handleLanguageChange}>
        <Option value="en">English</Option>
        <Option value="es">Spanish</Option>
        <Option value="fr">French</Option>
        <Option value="de">German</Option>
        {/* Add more language options as needed */}
      </Select>
                </div>
                <div className='mt-4 border-b py-5 border--#EAECF0]'>
                <SettingContent title="Support" items={["FAQs", "Contact us", "Report an Issue"]}/>
                </div>
                <div className='mt-4 border-b py-5 border--#EAECF0]'>
                <SettingContent title="Privacy" items={["Terms & Conditions"]}/>
                </div>

        <div className="mt-6 font-medium">
          <h1 className="text-textColor text-lg">Deactivate account</h1>
          <h2 className="mt-4 text-[#D92D20] ">Delete Account</h2>
        </div>
      </div>
    </div>
  );
}

export default Setting;
