import React from 'react'
import Alert from '../../assets/alert.svg'
import CarImage from '../../assets/carimage.png'
import Edit from '../../assets/edit.svg'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

function Reviews() {
    const navigate = useNavigate()
  return (
    <div className='card-shadow  lg:w-7/12 w-full mx-auto px-4'>
             <h1 className='py-4 text-textColor font-medium text-xl'>Review</h1>
             <div className='bg-[#FEF2F2] border-l-4 rounded-md border-dangerColor px-6 py-4'>
               
                <div className='flex gap-4 justify-start items-start'> 
                <img src={Alert} alt="" />
                <div className='font-medium'>
                    <h1 className='text-dangerColor font-semibold'>Alert</h1>
                    <p className='text-[#2B2B2B] mt-1'>Alert informs users about important changes or conditions in the interface. Use this component if you need to communicate to users in a prominent way.</p>
                    </div>
                </div>
                <div className='justify-end flex my-3 gap-5'>
                    <Button className='bg-[#AC273433]'>
                    Buy for  2 ads  
                    </Button>
                    <Button className='bg-dangerColor text-white'>
                    Buy packages
                    </Button>
                </div>
             </div>
             <div  class="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4 border-b border-borderColor">
                <div className='border border-borderColor my-4 rounded-lg px-4 flex  py-4'>
                    <div className='border-r border-[#D9D9D9] w-1/2 font-medium'>
                        <h1 className='text-Grey600 text-sm'>No. of Ads used</h1>
                        <p className='text-textColor text-xl mt-2'>10</p>
                    </div>
                    <div className='px-4 font-medium'>
                        <h1 className='text-Grey600 text-sm'>No. of promotion used</h1>
                        <p className='text-textColor text-xl mt-2'>50 Days </p>
                    </div>
                </div>
                <div className='border w-full border-borderColor my-4 rounded-lg px-4 flex  py-4'>
                    <div className='border-r border-[#D9D9D9] w-1/2 font-medium'>
                        <h1 className='text-Grey600 text-sm'>Ads available</h1>
                        <div className='flex justify-between mt-2'>
                        <p className='text-dangerColor text-xl'>0  </p>
                        <Button type='text' className='text-colorPrimary font-medium'>Upgrade</Button>
                        </div>
                    </div>
                    <div className='pl-4 font-medium w-1/2'>
                        <h1 className='text-Grey600 text-sm'>Promotion available</h1>
                        <div className='flex justify-between w-full mt-2'>
                        <p  className='text-dangerColor text-xl'>0 Days </p>
                        <Button type='text' className='text-colorPrimary font-medium'>Upgrade</Button>
                        </div>
                    </div>
                </div>
             </div>
             <div className='my-4'>
                <h1 className='my-4 text-textColor font-medium text-lg'>Ads List</h1>
                <div  class="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4 border-b border-borderColor">
                           <div className='border border-borderColor my-4 rounded-lg px-4 flex  py-4 justify-between '>
                                <div className='flex gap-5'>
                                    <img src={CarImage} alt="" />
                                    <div>
                                        <h1 className='text-textColor font-medium'>BMW 3 SERIES</h1>
                                        <p className='text-Grey600 text-xs font-semibold mt-2'>AED 91,900</p>
                                        <div className='flex gap-1 text-textLight mt-1 text-xs'>
                                            <p c>Zayed City</p>
                                            <div/>
                                            <p>Abu Dhabi</p>
                                        </div>
                                    </div>
                                </div>
                                <div >
                                    <h1 className='text-textColor px-2 bg-[#F2F4F7] rounded-md font-medium'>5 day promotion</h1>
                                    <img className='mt-5 float-right' src={Edit} alt="" />
                                </div>
                           </div>
                           <div className='border border-borderColor my-4 rounded-lg px-4 flex  py-4 justify-between '>
                                <div className='flex gap-5'>
                                    <img src={CarImage} alt="" />
                                    <div>
                                        <h1 className='text-textColor font-medium'>BMW 3 SERIES</h1>
                                        <p className='text-Grey600 text-xs font-semibold mt-2'>AED 91,900</p>
                                        <div className='flex gap-1 text-textLight mt-1 text-xs'>
                                            <p c>Zayed City</p>
                                            <div/>
                                            <p>Abu Dhabi</p>
                                        </div>
                                    </div>
                                </div>
                                <div >
                                    <h1 className='text-textColor px-2 bg-[#F2F4F7] rounded-md font-medium'>5 day promotion</h1>
                                    <img className='mt-5 float-right' src={Edit} alt="" />
                                </div>
                           </div>
                           <div className='border border-borderColor my-4 rounded-lg px-4 flex  py-4 justify-between '>
                                <div className='flex gap-5'>
                                    <img src={CarImage} alt="" />
                                    <div>
                                        <h1 className='text-textColor font-medium'>BMW 3 SERIES</h1>
                                        <p className='text-Grey600 text-xs font-semibold mt-2'>AED 91,900</p>
                                        <div className='flex gap-1 text-textLight mt-1 text-xs'>
                                            <p c>Zayed City</p>
                                            <div/>
                                            <p>Abu Dhabi</p>
                                        </div>
                                    </div>
                                </div>
                                <div >
                                    <h1 className='text-textColor px-2 bg-[#F2F4F7] rounded-md font-medium'>5 day promotion</h1>
                                    <img className='mt-5 float-right' src={Edit} alt="" />
                                </div>
                           </div>
                           <div className='border border-borderColor my-4 rounded-lg px-4 flex  py-4 justify-between '>
                                <div className='flex gap-5'>
                                    <img src={CarImage} alt="" />
                                    <div>
                                        <h1 className='text-textColor font-medium'>BMW 3 SERIES</h1>
                                        <p className='text-Grey600 text-xs font-semibold mt-2'>AED 91,900</p>
                                        <div className='flex gap-1 text-textLight mt-1 text-xs'>
                                            <p c>Zayed City</p>
                                            <div/>
                                            <p>Abu Dhabi</p>
                                        </div>
                                    </div>
                                </div>
                                <div >
                                    <h1 className='text-textColor px-2 bg-[#F2F4F7] rounded-md font-medium'>5 day promotion</h1>
                                    <img className='mt-5 float-right' src={Edit} alt="" />
                                </div>
                           </div>
                </div>
             </div>

             <div className='flex justify-end mt-8 pb-4'>
     
        <div className='border bg-white w-56 h-10 flex items-center justify-center rounded-md'>
            <p className='cursor-pointer'>Save to Draft</p>
        </div>
        <Button onClick={()=> navigate("/corporates/payment")} className='border bg-[#101928] w-56 h-10 flex items-center justify-center ml-5 rounded-md' 
       
        >
            <p className='text-white cursor-pointer' >Submit</p>
        </Button>
    </div>
    </div>
  )
}

export default Reviews