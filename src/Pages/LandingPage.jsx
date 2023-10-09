import React, { useEffect, useState } from "react";
import Headerss from "../component/Home/Header";
import AdsComponent from "../component/AdsComponent";
import "../Pages/UsedCars.css";
import { Breadcrumb, Button, Input } from "antd";
import "../Pages/LandingPage.css";

import ihponeBanner from "../assets/iphoneBanner.png";
import iphoneImg from "../assets/iphoneBlueSmall.png";
import iphoneImg2 from "../assets/iphoneImg2.png";
import iphoneImg3 from "../assets/iphoneImg3.png";
import userIcon from "../assets/singleUserIcon.png";
import noDamageIcon from "../assets/noDamageIcon.png";
import warrantyIcon from "../assets/warrantyIcon.png";
import sellerLogo from "../assets/sellerNameLogo.png";
import sellerChatIcon from "../assets/sellerChatIcon.png";
import callicon from "../assets/callicon.png";
import mapIcon from "../assets/mapIcon.png";
import mapCircle from "../assets/mapCircle.png";
import downArrow from "../assets/chevron-down-blue.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MobileCards from "../component/mobilecard/MobileCard";

const { Search } = Input;

function LandingPage() {
  const Myimages = [
    { id: 0, url: { url: ihponeBanner } },
    { id: 1, url: { url: iphoneImg2 } },
    { id: 2, url: { url: iphoneImg3 } },
  ];

  const handleArrowClick = (direction) => {
    console.log(`Arrow clicked: ${direction}`);
    // Additional logic if needed
  };

  const [bannerImg, setBannerImg] = useState(ihponeBanner);
  const [isBannerImg, setIsBannerImg] = useState(false);

  console.log(isBannerImg);
  const [sliderImg, setSliderImg] = useState();

  const bannerFunc = (img) =>{
    setBannerImg(img)
    setIsBannerImg(true)
  }

  const responsives = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
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

  return (
    <>
      <div className="container mx-auto">
        <Headerss />
        <div className="breadcrum text-SkyColor ">
          <Breadcrumb
            className="text-SkyColor font-thin pt-5"
            separator=">"
            items={[
              {
                title: "Home",
              },
              {
                title: "Setting",
              },
            ]}
          />
        </div>

        <div className="flex gap-5">
          <div className="card-shadow-2  mt-5">
            <div className="pr-5 pl-5 pt-8 pb-8">
              <h1 className="font-medium text-2xl mb-5">
                Iphone 13 - 128GB (Blue) - Warranty Available
              </h1>
              <div className="landing-page-custom-carousel-arrow w-full">
                {/* <Carousel
                  className="landing-page-custom-carousel-arrow"
                  responsive={responsives}
                  showDots={true}
                  arrows={true}
                  customRightArrow={<CustomArrowRight setToggleBanner={setToggleBanner} setToggleBanner2={setToggleBanner2}/>}  
                  infinite
                >
                    <img src={bannerImg} />

                </Carousel> */}

                <Carousel
                  className="landing-page-custom-carousel-arrow"
                  responsive={responsives}
                  showDots={true}
                  arrows={true}
                  infinite
                  afterChange={() => {
                    setIsBannerImg(false);
                  }}
                >
                  {isBannerImg ? (
                    <img src={bannerImg} />
                  ) : (
                    Myimages.map((img, index) => (
                      <div key={index}>
                        <img src={img.url.url} className="custom-height" />
                      </div>
                    ))
                  )}
                </Carousel>

                {/* <Carousel
                  className="landing-page-custom-carousel-arrow"
                  responsive={responsives}
                  showDots={true}
                  arrows={true}
                  infinite
                  customRightArrow={<CustomArrowRight setToggleBanner={setToggleBanner}/>}

                >                    
                  {Myimages.map((img, index) => (
                    <div key={index}>
                      <img src={img.url.url} className="custom-height" />
                    </div>
                  ))}
            
                </Carousel> */}
              </div>
              <div className="flex w-full gap-4 ">
                {Myimages.map((img, index) => (
                  <img
                    src={img.url.url}
                    key={index}
                    alt="error"
                    onClick={() => {
                      // setBannerImg(img.url.url);
                      bannerFunc(img.url.url)
                    }}
                    className="pt-10 rounded-md w-36 object-cover"
                  />
                ))}
              </div>

              <p className="mt-14 font-medium text-lg">Highlights</p>

              <div className="small-images-div flex gap-5 mt-6">
                <div className=" flex border w-48 justify-center h-24 items-center">
                  <div className=" flex flex-col items-center">
                    <div>
                      <img src={userIcon} />
                    </div>
                    <div>
                      <p className="text-sm pt-3 font-medium">Single User</p>
                    </div>
                  </div>
                </div>

                <div className="flex border w-48 justify-center h-24 items-center">
                  <div className=" flex flex-col items-center">
                    <div>
                      <img src={noDamageIcon} />
                    </div>
                    <div>
                      <p className="text-sm pt-3 font-medium">No Damage</p>
                    </div>
                  </div>
                </div>

                <div className="flex border w-48 justify-center h-24 items-center">
                  <div className=" flex flex-col items-center">
                    <div>
                      <img src={warrantyIcon} />
                    </div>
                    <div>
                      <p className="text-sm pt-3 font-medium">
                        Warranty Available
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-14 mb-7 font-medium text-lg">Specification</p>

              <div className="specifications-div ">
                <div className="flex justify-between w-4/12">
                  <div>
                    <p className="text-[#475467] text-xs pb-1">Model</p>
                    <p className="font-medium text-md">iPhone 13</p>
                  </div>

                  <div>
                    <p className="text-[#475467] text-xs pb-1">Age</p>
                    <p className="font-medium text-md"> 1 Year</p>
                  </div>

                  <div>
                    <p className="text-[#475467] text-xs pb-1">Memory</p>
                    <p className="font-medium text-md"> 128 GB</p>
                  </div>
                </div>
              </div>

              <div className="specifications-div-2 mt-10 ">
                <div className="flex justify-between w-3/12">
                  <div>
                    <p className="text-[#475467] text-xs pb-1">Box Available</p>
                    <p className="font-medium text-md">Yes</p>
                  </div>

                  <div>
                    <p className="text-[#475467] text-xs pb-1">Includes</p>
                    <p className="font-medium text-md">Charger, Backcase</p>
                  </div>
                </div>
              </div>

              <p className="mt-14 mb-6 font-medium text-lg">Description</p>

              <p> Good condition with warranty available</p>

              <p className="mt-12">AD id 12345</p>
              <p className="mt-5">
                is there any issue?{" "}
                <span className="text-[#0068B3] font-medium">Report Ad</span>
              </p>
            </div>
          </div>

          <div className="card-shadow-3 mt-5 custom-height-2">
            <div className="pr-5 pl-5 pt-8 pb-8">
              <p className="font-medium text-2xl pb-2">AED 2,000</p>
              <p className="text-[#667085] text-xs">Posted 2 days ago</p>
              <hr className=" border-gray-300 mt-7" />

              <div className="mt-5 flex items-center">
                <div>
                  <img src={sellerLogo} />
                </div>
                <div className="pl-2">
                  <p className="text-[#0068B3] font-medium">Anas bin Malik</p>
                </div>
              </div>
              <hr className=" border-gray-300 mt-6" />

              <div className="mt-9">
                <div className="bg-[#0068B3] text-[#FCFCFD] flex items-center justify-center cursor-pointer h-11 rounded-md">
                  <div className="pr-3">
                    <img src={sellerChatIcon} />
                  </div>
                  <div>
                    <p> Chat with Seller </p>
                  </div>
                </div>

                <div className="bg-[white] border border-gray-300 text-[black] flex items-center justify-center cursor-pointer h-11 rounded-md mt-4">
                  <div className="pr-3">
                    <img src={callicon} />
                  </div>
                  <div>
                    <p> 9876543210 </p>
                  </div>
                </div>
              </div>

              <div className="map-div mt-14">
                <p className="text-2xl font-medium">Posted in</p>
                <p className="text-[#667085] text-sm pt-1">Zayed City, Dubai</p>
                <div className="relative">
                  <div>
                    <img src={mapIcon} className="pt-5 w-full" />
                  </div>
                  <div>
                    <img
                      src={mapCircle}
                      className="absolute right-56 top-16 w-36"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <AdsComponent
                style={{ height: "725px" }}
                iconStyle={{ height: "60px" }}
              />
            </div>
          </div>
        </div>

        <div className="related-items-div flex items-center justify-between w-4/12 mt-10">
          <div className="mb-3">
            <p className="font-bold text-xl">Related Items</p>
          </div>
          <div className="flex items-center gap-1">
            <div>
              <p className="font-medium">
                Sort by{" "}
                <span className="text-[#0068B3] cursor-pointer">Default</span>
              </p>
            </div>
            <div className="cursor-pointer">
              <img src={downArrow} />
            </div>
          </div>
        </div>

        <div className="search-items-div flex gap-2 mt-5 cursor-pointer">
          <div className="border border-gray-300  h-8 flex items-center justify-center w-24 rounded-2xl ">
            <p className="text-sm">iphone 13</p>
          </div>
          <div className="border border-gray-300  h-8 flex items-center justify-center w-32 rounded-2xl ">
            <p className="text-sm">iphone 13 Pro</p>
          </div>
          <div className="border border-gray-300  h-8 flex items-center justify-center w-24 rounded-2xl ">
            <p className="text-sm">iphone 12</p>
          </div>
          <div className="border border-gray-300  h-8 flex items-center justify-center w-24 rounded-2xl ">
            <p className="text-sm">S20 Ultra</p>
          </div>
        </div>

        <div className="flex mt-10 gap-4  justify-between cursor-pointer">
          <MobileCards />
          <MobileCards />
          <MobileCards />
          <MobileCards />
        </div>
      </div>
    </>
  );
}

export default LandingPage;
