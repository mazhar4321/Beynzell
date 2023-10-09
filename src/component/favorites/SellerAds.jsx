import { Avatar } from 'antd'
import React from 'react'
import Trash from '../../assets/trash-2.svg'
import chat from '../../assets/message-square.svg'
function SellerAds() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
        <div className=' border px-6 py-6 rounded-md'>
            <div className='flex justify-around items-center mb-5 '>
            <Avatar size="large" />
            <div>
                <h1 className='text-textColor font-medium text-xl'>Syed</h1>
                <h6 className='font-medium text-xs text-textLight'>Member since Jan 2023</h6>
            </div>
            </div>
            <div className='flex justify-around     w-full'>
                 <div className='flex items-center gap-1'>
                    <img src={chat} alt="" />
                    <h1 className='text-SkyColor font-medium font-medium underline'>Chat</h1>
                 </div>
                 <div className='flex items-center gap-1'>
                    <img src={chat} alt="" />
                    <h1 className='text-SkyColor font-medium font-medium underline'>Call</h1>
                 </div>
                 
            </div>
            <div className='flex justify-center my-4 gap-3'>
                         <img src={Trash} alt="" />
                         <h1 className='underline text-dangerColor'>Remove</h1>
                 </div>
        </div>
        <div className=' border px-6 py-6 rounded-md'>
            <div className='flex justify-around items-center mb-5'>
            <Avatar size="large" />
            <div>
                <h1 className='text-textColor font-medium text-xl'>Syed</h1>
                <h6 className='font-medium text-xs text-textLight'>Member since Jan 2023</h6>
            </div>
            </div>
            <div className='flex justify-around     w-full'>
                 <div className='flex items-center gap-1'>
                    <img src={chat} alt="" />
                    <h1 className='text-SkyColor font-medium font-medium underline'>Chat</h1>
                 </div>
                 <div className='flex items-center gap-1'>
                    <img src={chat} alt="" />
                    <h1 className='text-SkyColor font-medium font-medium underline'>Call</h1>
                 </div>
                 
            </div>
            <div className='flex justify-center my-4 gap-3'>
                         <img src={Trash} alt="" />
                         <h1 className='underline text-dangerColor'>Remove</h1>
                 </div>
        </div>
        <div className=' border px-6 py-6 rounded-md'>
            <div className='flex justify-around items-center mb-5'>
            <Avatar size="large" />
            <div>
                <h1 className='text-textColor font-medium text-xl'>Syed</h1>
                <h6 className='font-medium text-xs text-textLight'>Member since Jan 2023</h6>
            </div>
            </div>
            <div className='flex justify-around     w-full'>
                 <div className='flex items-center gap-1'>
                    <img src={chat} alt="" />
                    <h1 className='text-SkyColor font-medium font-medium underline'>Chat</h1>
                 </div>
                 <div className='flex items-center gap-1'>
                    <img src={chat} alt="" />
                    <h1 className='text-SkyColor font-medium font-medium underline'>Call</h1>
                 </div>
                 
            </div>
            <div className='flex justify-center my-4 gap-3'>
                         <img src={Trash} alt="" />
                         <h1 className='underline text-dangerColor'>Remove</h1>
                 </div>
        </div>
        <div className=' border px-6 py-6 rounded-md'>
            <div className='flex justify-around items-center mb-5'>
            <Avatar size="large" />
            <div>
                <h1 className='text-textColor font-medium text-xl'>Syed</h1>
                <h6 className='font-medium text-xs text-textLight'>Member since Jan 2023</h6>
            </div>
            </div>
            <div className='flex justify-around     w-full'>
                 <div className='flex items-center gap-1'>
                    <img src={chat} alt="" />
                    <h1 className='text-SkyColor font-medium font-medium underline'>Chat</h1>
                 </div>
                 <div className='flex items-center gap-1'>
                    <img src={chat} alt="" />
                    <h1 className='text-SkyColor font-medium font-medium underline'>Call</h1>
                 </div>
                 
            </div>
            <div className='flex justify-center my-4 gap-3'>
                         <img src={Trash} alt="" />
                         <h1 className='underline text-dangerColor'>Remove</h1>
                 </div>
        </div>
    </div>
  )
}

export default SellerAds