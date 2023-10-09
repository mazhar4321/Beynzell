import React from 'react'
import rightArrow from '../../assets/chevron-right.svg'
import { useNavigate } from 'react-router'


function SettingContent({title, items}) {
  const navigate = useNavigate()

  const navigateFunc = (e) =>{
    if(e == "My Profile"){
      navigate("/profile")
    }

    if(e == "My Ads"){
      navigate("/myads")
    }

    if(e == "Favorites"){
      navigate("/favorites")
    }

    if(e == "My Profile"){
      navigate("/profile")
    }

    if(e == "Packages"){
      navigate("/packages")
    }

    if(e == "Saved payments"){
      navigate("/payments")
    }

    if(e == "Payment history"){
      navigate("/paymenthistory")
    }

    if(e == "FAQs"){
      navigate("/faq")
    }

    if(e == "Report an Issue"){
      navigate("/reportissue")
    }

    if(e == "Terms & Conditions"){
      navigate("/termsandconditions")
    }



  }

  return (
    <div>
        <h1 className='text-textColor font-medium text-lg'>{title}</h1>
        {items && items.map((e)=>{
            return(
                <div onClick={()=> navigateFunc(e)}  className='flex justify-between items-center my-2'>
                    <h1 className='text-sm text-SkyColor'>{e}</h1>
                    <img src={rightArrow} alt="" />
                    </div>
            )
        })}
    </div>
  )
}

export default SettingContent