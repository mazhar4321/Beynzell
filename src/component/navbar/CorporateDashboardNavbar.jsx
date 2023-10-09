import React, { useState } from 'react'
import Logo from '../../assets/corporate-logo.svg'
import Setting from '../../assets/settings-01.png'
import Notification from '../../assets/bell-01.png'
import Zap from '../../assets/zap.png'
import { Avatar } from 'antd'
import { useNavigate } from 'react-router-dom'
function CorporateDashboardNavbar() {
    const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  const navigate = useNavigate()
  return (
    <div className='border-b border-borderColor'>
    <div className='container mx-auto py-4 flex flex-col gap-5 md:flex-row justify-between '>
    <div className='flex lg:gap-10 gap-1'>
      <img onClick={()=>navigate("/corporates")} className='w-16 lg:w-fit' src={Logo} alt="" />
      <button
        className={` border-none cursor-pointer py-2 lg:px-4 px-2 transition text-xs lg:text-lg ${
          activeButton === 'ads' ? 'bg-gray-200 font-semibold' : ''
        }`}
        onClick={() => handleButtonClick('ads')}
      >
        Ads
      </button>
      <button
        className={` border-none cursor-pointer py-2 lg:px-4 px-2 transition text-xs lg:text-lg ${
          activeButton === 'chats' ? 'bg-gray-200 font-semibold' : ''
        }`}
        onClick={() => handleButtonClick('chats')}
      >
        Chats
      </button>
      <button
        className={` border-none cursor-pointer py-2 lg:px-4 px-2 transition text-xs lg:text-lg ${
          activeButton === 'insights' ? 'bg-gray-200 font-semibold' : ''
        }`}
        onClick={() => handleButtonClick('insights')}
      >
        Insights
      </button>
      <button
        className={` border-none cursor-pointer py-2 lg:px-4 px-2 transition text-xs lg:text-lg  ${
          activeButton === 'users' ? 'bg-gray-200 font-semibold' : ''
        }`}
        onClick={() => handleButtonClick('users')}
      >
        Users
      </button>
    </div>
            <div className='flex md:gap-10 justify-between items-center'>
                <button className='flex gap-1 px-2 rounded-md items-center border border-borderColor py-1'>
                    <img src={Zap} alt="" />
                    Upgrade now</button>
                <img src={Setting} alt="" className='w-fit h-fit' />
                <img src={Notification} alt="" className='w-fit h-fit' />
                <Avatar/>
            </div>
    </div>
    </div>
  )
}

export default CorporateDashboardNavbar