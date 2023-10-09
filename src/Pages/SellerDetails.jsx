import React, { useState } from 'react'
import bgImage from '../assets/image-wrap-bg.png'
import msg from '../assets/message-square.svg'
import call from '../assets/call.svg'
import heart from '../assets/heart-add.svg'
import share from '../assets/share-2.svg'
import phone1 from '../assets/phone1.png'
import phone2 from '../assets/phone2.png'
import phone3 from '../assets/phone3.png'
import phone4 from '../assets/phone4.png'
import phone5 from '../assets/phone5.png'
import { Avatar, Button } from 'antd';
import Cards from '../component/carscard/Cards'
import Headerss from '../component/Home/Header'

function SellerDetails() {
    const UserList = ['U', 'Lucy', 'Tom', 'Edward'];
    const [user, setUser] = useState(UserList[0]);
  return (
    <div>
        <div className='w-full'>
            <Headerss/>
            <img src={bgImage} alt="" className='w-full' />
        </div>
        <div className='container mx-auto flex lg:flex-row flex-col gap-10 lg:-mt-10 mt-10'>
               <div className='card-shadow flex items-center justify-center flex-col gap-4 p-4 lg:w-4/12 w-full h-fit'>
               <Avatar
               size={{
                xs: 24,
                sm: 32,
                md: 40,
                lg: 64,
                xl: 80,
                xxl: 100,
              }}
        style={{
          backgroundColor: '#F9703A',
          verticalAlign: 'middle',
        }}
        // size="large"
      >
        {user}
      </Avatar>
      <div className='text-center'>
      <h1 className='font-medium text-textColor'>Anas bin Malik</h1>
      <p className='text-textLight font-thin text-sm'>Member since Jan 2023</p>
      </div>
      <div className='flex flex-col gap-1 w-full border-b pb-6'>
        <button className='bg-[#0068B3] px-2 py-1 rounded-sm text-white w-full flex items-center gap-1 text-center justify-center' type='primary'> <img src={msg} alt="" />Chat with Seller</button>
        <button className='border border-[#D0D5DD] px-2 py-1 rounded-sm text-black w-full flex items-center gap-1 text-center justify-center' type='primary'> <img src={call} alt="" />9876543210</button>
      </div>
      <div className='flex justify-around w-full'>
        <h1 className='flex gap-2'>
            <img src={heart} alt="" />
            Favorite
        </h1>
        <h1 className='flex gap-2'>
            <img src={share} alt="" />
            Share
        </h1>
      </div>
               </div>
               <div className='card-shadow w-full p-4'>
                           <h1 className='mt-5 text-xl font-medium'>Live Ads</h1>
                           <div className='flex flex-wrap -mx-4 mt-10'>
                           <div className="w-full md:w-1/3 px-4 mb-8">
                             <Cards url={phone1}/>
                           </div>
                           <div className="w-full md:w-1/3 px-4 mb-8">
                             <Cards url={phone2}/>
                           </div>
                           <div className="w-full md:w-1/3 px-4 mb-8">
                             <Cards url={phone3}/>
                           </div>
                           <div className="w-full md:w-1/3 px-4 mb-8">
                             <Cards url={phone4}/>
                           </div>
                           <div className="w-full md:w-1/3 px-4 mb-8">
                             <Cards url={phone5}/>
                           </div>
                           <div className="w-full md:w-1/3 px-4 mb-8">
                             <Cards url={phone3}/>
                           </div>
                           </div>
               </div>
        </div>
    </div>
  )
}

export default SellerDetails