import { Breadcrumb } from 'antd'
import React from 'react'
import RightArrow from '../assets/chevron-right.svg'
import Alert from '../assets/alert-circle.svg'
import receiptsearch from '../assets/receipt-search.svg'
import BZlogo from '../assets/Bzlogo.svg'
function Notification() {
  return (
    <div className='container mx-auto'>
        
        <Breadcrumb className='my-5'
    separator=">"
    items={[
      {
        title: 'Home',
      },
      {
        title: 'Notification',
        href: '',
      },
    ]}
  />
           <div className='card-shadow lg:w-1/2 w-full mx-auto py-4 px-4'>
                 <h1 className='text-textColor font-medium text-xl'>Notifcation</h1>
                  <h6 className='text-textLight font-medium mt-5 text-center text-xs mb-3'>1 Feb 2023</h6>
                  <div className='border rounded-md py-4 px-6 flex justify-between items-center'>
                     <div className='flex items-center gap-8'>
                        <img className='bg-[#FFD4D2] p-1 rounded-full' src={Alert} alt="" />
                        <div>
                        <h1 className='text-textColor font-medium text-lg'>Your Package Expires soon</h1>
                        <h6 className='text-textLight text-xs font-normal'>Renew now</h6>
                        </div>
                     </div>
                     <img src={RightArrow} alt="" />
                  </div>
                  <h6 className='text-textLight font-medium mt-5 text-center text-xs mb-3'>1 Feb 2023</h6>
                  <div className='border rounded-md py-4 px-6 flex justify-between items-center'>
                     <div className='flex items-center gap-8'>
                        <img className='bg-[#FFD4D2] p-1 rounded-full' src={Alert} alt="" />
                        <div>
                        <h1 className='text-textColor font-medium text-lg'>Ad Rejected</h1>
                        <h6 className='text-textLight text-xs font-normal'>Reason goes here</h6>
                        </div>
                     </div>
                     <img src={RightArrow} alt="" />
                  </div>
                  <div className='border rounded-md py-4 px-6 flex justify-between items-center mt-4'>
                     <div className='flex items-center gap-8'>
                        <img className='bg-[#FFBA14] p-1 rounded-full' src={receiptsearch} alt="" />
                        <div>
                        <h1 className='text-textColor font-medium text-lg'>Your ad is under review</h1>
                        </div>
                     </div>
                     <img src={RightArrow} alt="" />
                  </div>
                  <div className='border rounded-md py-4 px-6 flex justify-between items-center mt-4'>
                     <div className='flex items-center gap-8'>
                        <img src={BZlogo} alt="" />
                        <div>
                        <h1 className='text-textColor font-medium text-lg'>Your ad is under review</h1>
                        </div>
                     </div>
                     <img src={RightArrow} alt="" />
                  </div>

                  <h6 className='text-textLight font-medium mt-5 text-center text-xs mb-3'>27 Jan 2023</h6>
                  <div className='border rounded-md py-4 px-6 flex justify-between items-center'>
                     <div className='flex items-center gap-8'>
                        <img className='bg-[#FFBA14] p-1 rounded-full' src={receiptsearch} alt="" />
                        <div>
                        <h1 className='text-textColor font-medium text-lg'>Your Ad Is live now</h1>
                        </div>
                     </div>
                     <img src={RightArrow} alt="" />
                  </div>
                  <div className='border rounded-md py-4 px-6 flex justify-between items-center mt-4'>
                     <div className='flex items-center gap-8'>
                        <img className='bg-[#FFBA14] p-1 rounded-full' src={receiptsearch} alt="" />
                        <div>
                        <h1 className='text-textColor font-medium text-lg'>Your ad is under review  </h1>
                        </div>
                     </div>
                     <img src={RightArrow} alt="" />
                  </div>
           </div>
    </div>
  )
}

export default Notification