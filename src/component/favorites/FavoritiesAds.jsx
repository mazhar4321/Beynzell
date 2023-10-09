import React from 'react'
import Cards from '../carscard/Cards'
import Trash from '../../assets/trash-2.svg'

function FavoritiesAds() {
  return (
    <div className='flex flex-wrap justify-between '>
     <div className=' w-full md:w-1/2 lg:w-1/4'>
           <Cards expire="expire in 7 days"/>
           <div className='flex gap-2 mt-4'>
                 <img src={Trash} alt="" />
                 <button className='text-[#D92D20] font-medium'>Delete</button>
           </div>
     </div>
     <div className=' w-full md:w-1/2 lg:w-1/4'>
           <Cards expire="expire in 3 days" />
     </div>
     <div className=' w-full md:w-1/2 lg:w-1/4'>
           <Cards expire="expire in today"/>
     </div>
     <div className=' w-full md:w-1/2 lg:w-1/4'>
           <Cards expire="expire in 7 days"/>
     </div>
    </div>
  )
}

export default FavoritiesAds