import React from 'react'
import Logo from '../../assets/corporate-logo.svg'
import { Button } from 'antd'

function CorporateNavbar() {
  return (
    <div className='border-b border-borderColor '>
     <div className="container mx-auto py-4 flex justify-between">
     <img src={Logo} alt="" />
     <div className='flex gap-4'>
        <Button className="bg-textColor font-medium text-white">
            Register
        </Button>
        <Button className='font-medium'>
            Login
        </Button>
     </div>
     </div>
    </div>
  )
}

export default CorporateNavbar