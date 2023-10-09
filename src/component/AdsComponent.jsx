import React from 'react'
import AdsIcon from '../assets/homeadsicon.svg'

function AdsComponent({style , iconStyle}) {
  return (
    <div style={style ? style : null} className='my-10 top-search py-5 px-5 flex items-center justify-center '>
    <img src={AdsIcon} style={iconStyle ? iconStyle : null}  alt="" />
  </div>
  )
}

export default AdsComponent