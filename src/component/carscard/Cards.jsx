import React from 'react'
import car from '../../assets/car2.svg'
import location from '../../assets/location.svg'
import messageIcon from '../../assets/message-square.svg'

function Cards({url, expire}) {
    console.log(url)
  return (
    <div className='flex flex-col gap-5 '>
        <div className='relative'>
        <img src={url ? url : car} alt="" className='w-full h-52' />
        {expire &&
         <div className='absolute left-2 top-0 bg-[#FFD4D2] rounded-md px-4 py-2'>
            <h1 className='text-[#D92D20] font-medium text-sm'>{expire}</h1>
            </div>}
            </div>
        <div className='gap-4'>
            <h1 className='font-semibold text-textColor'>AED 2,100,00</h1>
            <div className='flex gap-2 items-center mt-3'>
                <h6 className='text-textLight text-sm'>Rolls-Royce</h6>
                <div className='w-1 h-1 text-textLight rounded-md bg-[#D0D5DD]'/>
                <h6 className='text-textLight text-sm'>Ghost 2015</h6>
            </div>
            <div className='flex gap-2 items-center mt-2'>
                    <img src={location} alt="" /> <h6 className='text-textLight text-sm'>Al Quaz</h6> 
                    <div className='w-1 h-1 text-textLight rounded-md bg-[#D0D5DD]'/>
                    <h6 className='text-textLight text-sm'>Dubai</h6>
            </div>
        </div>
        <div className='flex items-center gap-2 border-SkyColor border px-4 py-1 w-24 rounded-sm'>
            <img src={messageIcon} alt="" />
            <h6 className='text-SkyColor text-sm'>Chat</h6>
        </div>
    </div>
  )
}

export default Cards