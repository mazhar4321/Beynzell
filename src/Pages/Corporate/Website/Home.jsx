import { Button } from 'antd'
import React, { useRef } from 'react'
import ViderPlayer from '../../../assets/Video-player.png'
// import Pattern from '../../../assets/Background-pattern.png'
import Pattern from '../../../assets/Background.png'
import Right1 from '../../../assets/Right-band.png'
import Right2 from '../../../assets/Right-band2.png'
import Right3 from '../../../assets/Right-band3.png'
import Left1 from '../../../assets/Left-band.png'
import left2 from '../../../assets/Left-band2.png'
import DashboardImg from '../../../assets/dashboard-screen.png'
import Advanced from '../../../assets/featured-icon.png'
import Control from '../../../assets/featured-icon2.png'
import Rating from '../../../assets/featured-icon3.png'
import UsedCar from '../../../assets/used-car.png'
import UsedCarParts from '../../../assets/used-car-parts.png'
import Property from '../../../assets/property.png'
import Coummunity from '../../../assets/community.png'
import Arrow from '../../../assets/arrow-right.png'
import ArrowLeft from "../../../assets/Testiomonial-back-arrow.png";
import ArrowRight from "../../../assets/Testiomonial-arrow.png";
import Content from "../../../assets/Content.png";
import Logos from "../../../assets/logos.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CustomArrows = ({ next, previous }) => (
    <div className="flex justify-center my-10">
      <button
        onClick={previous}
        className=" bg-gray-200 rounded-full mr-10 flex items-center"
      >
        <img src={ArrowLeft} alt="Left Arrow" />
      </button>
      <button
        onClick={next}
        className=" bg-gray-200 rounded-full flex items-center"
      >
        <img src={ArrowRight} alt="Right Arrow" />
      </button>
    </div>
  );
const responsives = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

function CorporateHome() {
    const carouselRef = useRef(null);
  return (
    <div className=' mx-auto'>
        <div className=''>
    <div className='text-center bg-[#E6F0F7]'>
        <h1 className='text-textColor font-bold text-3xl pt-14 text-center'>Become a Corporate Seller to <br/>
simplify your sales ads and listings today!</h1>
<p className='text-center text-textLight font-normal text-lg mt-6'>With Buynzell's corporate services, you can streamline the process of creating <br/> and listing your sales ads, saving you time and effort.</p>
  <Button className='bg-[#FFBA14] font-medium text-white my-6'>
    Get Started
  </Button>
    </div>
    <div className='text-center flex justify-center relative overflow-hidden    '>
        <img  className='z-50    mt-10' src={ViderPlayer} alt="" />
        <img className='absolute w-full h-64 -z-10' src={Pattern} alt="" />
        <img className='absolute  right-0 h-28 z-10 w-1/3 top-0' src={Right1} alt="" />
        <img className='absolute  right-0 h-36 transform rotate-3 w-1/3 top-10' src={Right2} alt="" />
        <img className='absolute  right-0 h-28  top-20' src={Right3} alt="" />
        <img className='absolute  left-0 h-36 w-1/3 top-60' src={left2} alt="" />
        <img className='absolute  left-0 h-36 w-1/3  top-40' src={Left1} alt="" />
    </div>
    </div>
    <div className='flex justify-center  my-6'>
        <div className='my-6'>
        <h1 className='text-textColor font-bold text-3xl my-6 text-center'>Benefits of Corporate Seller</h1>
        <p className='text-textLight font-normal mb-8 text-center'>Description</p>
        <img className='w-full' src={DashboardImg} alt="" />
        </div>
    </div>
    <div className="container mx-auto">
    <div className="mx-auto pb-10 grid grid-cols-1 md:grid-cols-3 gap-10 items-center border-b border-borderColor">
        <div className='flex flex-col items-center'>
              <img src={Advanced} alt="" />
              <h1 className='text-textColor font-semibold my-4 text-lg'>Advanced Dashboard</h1>
              <p className='text-textLight font-normal text-center'>Give your team the autonomy they need with <br/> access to as many cards as they need. Authorise <br/> purchases with a click. Simple.</p>
        </div>
        <div className='flex flex-col items-center'>
              <img src={Control} alt="" />
              <h1 className='text-textColor font-semibold my-4 text-lg'>Complete Control</h1>
              <p className='text-textLight font-normal text-center'>An all-in-one platform that helps you balance  <br/> everything your team need to be happy and your <br/>finances in order.</p>
        </div>
        <div className='flex flex-col items-center'>
              <img src={Rating} alt="" />
              <h1 className='text-textColor font-semibold my-4 text-lg'>Ratings and Reviews</h1>
              <p className='text-textLight font-normal text-center'>Every card comes with configurable spending  <br/> limits, purchase restrictions, and cancellations for <br/>each employee and team.</p>
        </div>
       
        </div>
        <div className='flex justify-center  my-6'>
        <div className='my-6'>
        <h1 className='text-textColor font-bold text-3xl my-6 text-center'>Choose your Business</h1>
        <p className='text-textLight font-normal mb-8 text-center'>Description</p>
        
        </div>
        </div>
        <div className="w-full my-6  border-b border-borderColor relative">
        <Carousel 
        arrows={false}
        ref={carouselRef}
        responsive={responsives}>
         <div className='w-11/12'>
            <img className='w-full rounded-lg' src={UsedCar} alt="" />
            <div className='px-2'>
            <h1 className='my-2 text-textColor font-semibold'>Used Cars Trading</h1>
            <p className='text-textLight font-medium mb-3'>Description</p>
            <Button className='border border-SkyColor text-SkyColor font-medium rounded-sm flex gap-2 items-center'>
                Discover
                <img src={Arrow} alt="" />
            </Button>
            </div>
         </div>
         <div className='w-11/12'>
            <img className='w-full rounded-lg' src={UsedCarParts} alt="" />
            <div className='px-2'>
            <h1 className='my-2 text-textColor font-semibold'>Used Auto Part Trading</h1>
            <p className='text-textLight font-medium mb-3'>Description</p>
            <Button className='border border-SkyColor text-SkyColor font-medium rounded-sm flex gap-2 items-center'>
                Discover
                <img src={Arrow} alt="" />
            </Button>
            </div>
         </div>
         <div className='w-11/12'>
            <img className='w-full rounded-lg' src={Property} alt="" />
            <div className='px-2'>
            <h1 className='my-2 text-textColor font-semibold'>Property</h1>
            <p className='text-textLight font-medium mb-3'>Description</p>
            <Button className='border border-SkyColor text-SkyColor font-medium rounded-sm flex gap-2 items-center'>
                Discover
                <img src={Arrow} alt="" />
            </Button>
            </div>
         </div>
         <div className='w-11/12'>
            <img className='w-full rounded-lg' src={Coummunity} alt="" />
            <div className='px-2'>
            <h1 className='my-2 text-textColor font-semibold'>Community</h1>
            <p className='text-textLight font-medium mb-3'>Description</p>
            <Button className='border border-SkyColor text-SkyColor font-medium rounded-sm flex gap-2 items-center'>
                Discover
                <img src={Arrow} alt="" />
            </Button>
            </div>
         </div>
         <div className='w-11/12'>
            <img className='w-full rounded-lg' src={Coummunity} alt="" />
            <div className='px-2'>
            <h1 className='my-2 text-textColor font-semibold'>Community</h1>
            <p className='text-textLight font-medium mb-3'>Description</p>
            <Button className='border border-SkyColor text-SkyColor font-medium rounded-sm flex gap-2 items-center'>
                Discover
                <img src={Arrow} alt="" />
            </Button>
            </div>
         </div>
         <div className='w-11/12'>
            <img className='w-full rounded-lg' src={Coummunity} alt="" />
            <div className='px-2'>
            <h1 className='my-2 text-textColor font-semibold'>Community</h1>
            <p className='text-textLight font-medium mb-3'>Description</p>
            <Button className='border border-SkyColor text-SkyColor font-medium rounded-sm flex gap-2 items-center'>
                Discover
                <img src={Arrow} alt="" />
            </Button>
            </div>
         </div>
        
       
        
          
        </Carousel>
        <CustomArrows
        next={() => carouselRef.current.next()} // Connect next action to button
        previous={() => carouselRef.current.previous()} // Connect previous action to button
      />
      </div>
      <div className='flex justify-center  my-6'>
        <div className='my-6'>
        <h1 className='text-textColor font-bold text-3xl my-6 text-center'>Why Us</h1>
        <p className='text-textLight font-normal mb-8 text-center'>Here’s the three reason to consider us</p>
        
        </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-52 items-center pb-20 my-10 border-b border-borderColor'>
            <div>
                <div className='flex gap-4 my-4'>
                    <img className='h-fit' src={Advanced} alt="" />
                    <div className='mt-5'>
                    <h1 className='text-textColor font-semibold text-xl mb-2'>Simplified Ads Posting</h1>
        <p className='text-textLight font-normal '>Simplify ad posting with our user-friendly platform. Create and post ads in just a few clicks and reach your target audience quickly. Say goodbye to complicated forms and confusing interfaces - start seeing results today!</p>
        
                    </div>
                </div>
                <div className='flex gap-4 my-4'>
                    <img className='h-fit' src={Advanced} alt="" />
                    <div className='mt-5'>
                    <h1 className='text-textColor font-semibold text-xl mb-2'>Make Smarter Decisions</h1>
        <p className='text-textLight font-normal '>Simplify ad posting with our user-friendly platform. Create and post ads in just a few clicks and reach your target audience quickly. Say goodbye to complicated forms and confusing interfaces - start seeing results today!</p>
        
                    </div>
                </div>
                <div className='flex gap-4 my-4'>
                    <img className='h-fit' src={Advanced} alt="" />
                    <div className='mt-5'>
                    <h1 className='text-textColor font-semibold text-xl mb-2'>Encourage Responsible Buying and Selling</h1>
        <p className='text-textLight font-normal '>Simplify ad posting with our user-friendly platform. Create and post ads in just a few clicks and reach your target audience quickly. Say goodbye to complicated forms and confusing interfaces - start seeing results today!</p>
        
                    </div>
                </div>
                
                   
            </div>
            <div >
    <img className='w-full' src={Content} alt="" />
            </div>
        </div>
        <div className='py-16 flex gap-20 justify-between'>
            <div className='px-4 w-1/2'>
                <h1 className='text-textColor font-bold text-4xl mb-16 '>Join over 4,000+ Traders  growing  <br/>with Buynzell</h1>
                <Button className='rounded-sm font-medium h-10'>Contact Sales</Button>
            </div>
            <div className='w-1/2'> 
                   <img className='w-full' src={Logos} alt="" />
            </div>
        </div>
    </div>
    </div>
  )
}

export default CorporateHome