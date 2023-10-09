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
import apartmentImg from "../assets/apartmentImg.png";
import apartmentImg2 from "../assets/apartmentImg2.png";
import apartmentImg3 from "../assets/apartmentImg3.png";
import locationIcon from "../assets/locationIcon.png";
import bedIcon from "../assets/bedIcon.png";
import bathIcon from "../assets/bathIcon3.png";
import squareFootIcon from "../assets/squareFootIcon3.png";
import swimmingPoolIcon from "../assets/swimmingPoolIcon.png";
import gymIcon from "../assets/gym2.png";
import parkingIcon from "../assets/parkingIcon.png";
import tickIcon from "../assets/tickIcon.png";
import map2 from "../assets/map2.png"

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MobileCards from "../component/mobilecard/MobileCard";
import "../Pages/PropertiesLandingPage.css"

const { Search } = Input;

function PropertiesLandingPage() {
  const Myimages = [
    { id: 0, url: { url: apartmentImg } },
    { id: 1, url: { url: apartmentImg2 } },
    { id: 2, url: { url: apartmentImg3 } },
  ];

  const [bannerImg, setBannerImg] = useState(apartmentImg);
  const [sliderImg, setSliderImg] = useState();

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
                Big Layout | Pool View | Semi Furnished
              </h1>
              <div className="landing-page-custom-carousel-arrow w-full">
                <Carousel
                  className="landing-page-custom-carousel-arrow"
                  responsive={responsives}
                  showDots={true} // Add this if you want to display navigation dots
                  arrows={true}
                  infinite
                >
                  <div>
                    <img src={apartmentImg} className=" custom-height  " />
                  </div>
                  <div>
                    <img src={bannerImg} className=" custom-height  " />
                  </div>
                </Carousel>
              </div>
              <div className="flex w-full gap-4 ">
                {Myimages.map((img, index) => {
                  return (
                    <>
                      <img
                        src={img.url.url}
                        key={index}
                        alt="error"
                        onClick={() => {
                          setBannerImg(img.url.url);
                        }}
                        className="pt-10 rounded-md w-36 object-cover"
                      />
                    </>
                  );
                })}
              </div>

              <hr className=" border-gray-300 mt-7 mb-6" />

              <div className="flex">
                <div className="pr-2">
                  <img src={locationIcon} />
                </div>
                <div>
                  <p>Koa Canvas, Mohammed bin Rashid City</p>
                </div>
              </div>
              <hr className=" border-gray-300 mt-6" />

              <p className="mt-14 font-medium text-lg">Highlights</p>

              <div className="small-images-div flex gap-5 mt-6">
                <div className=" flex border w-48 justify-center h-24 items-center">
                  <div className=" flex flex-col items-center">
                    <div>
                      <img src={bedIcon} />
                    </div>
                    <div>
                      <p className="text-sm pt-3 font-medium">2 Beds</p>
                    </div>
                  </div>
                </div>

                <div className="flex border w-48 justify-center h-24 items-center">
                  <div className=" flex flex-col items-center">
                    <div>
                      <img src={bathIcon} />
                    </div>
                    <div>
                      <p className="text-sm border-none pt-3 font-medium">
                        2 Baths
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex border w-48 justify-center h-24 items-center">
                  <div className=" flex flex-col items-center">
                    <div>
                      <img src={squareFootIcon} />
                    </div>
                    <div>
                      <p className="text-sm pt-3 font-medium">
                        Warranty Available
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="small-images-div flex gap-5 mt-6">
                <div className=" flex border w-48 justify-center h-24 items-center">
                  <div className=" flex flex-col items-center">
                    <div>
                      <img src={swimmingPoolIcon} />
                    </div>
                    <div>
                      <p className="text-sm pt-3 font-medium">2 Beds</p>
                    </div>
                  </div>
                </div>

                <div className="flex border w-48 justify-center h-24 items-center">
                  <div className=" flex flex-col items-center">
                    <div>
                      <img src={gymIcon} />
                    </div>
                    <div>
                      <p className="text-sm border-none pt-3 font-medium">
                        2 Baths
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex border w-48 justify-center h-24 items-center">
                  <div className=" flex flex-col items-center">
                    <div>
                      <img src={parkingIcon} />
                    </div>
                    <div>
                      <p className="text-sm pt-3 font-medium">
                        Warranty Available
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <hr className=" border-gray-300 mt-7" />

              <div className="other-amenities-div mt-10">
                <p className="text-xl font-medium ">Other Amenities</p>
                <div className="search-items-div flex gap-2 mt-5 cursor-pointer">
                  <div className="border border-gray-300  h-8 flex items-center justify-center w-28 rounded-2xl ">
                    <img src={tickIcon} className="pr-2" />
                    <p className="text-sm font-medium text-[#1d2939]">
                      Central Ac
                    </p>
                  </div>
                  <div className="border border-gray-300  h-8 flex items-center justify-center w-24 rounded-2xl ">
                    <img src={tickIcon} className="pr-2" />
                    <p className="text-sm font-medium text-[#1d2939]">
                      Balcony
                    </p>
                  </div>
                  <div className="border border-gray-300  h-8 flex items-center justify-center w-36 rounded-2xl ">
                    <img src={tickIcon} className="pr-2" />
                    <p className="text-sm font-medium text-[#1d2939]">
                      CCTV Security
                    </p>
                  </div>
                  <div className="border border-gray-300  h-8 flex items-center justify-center w-32 rounded-2xl ">
                    <img src={tickIcon} className="pr-2" />
                    <p className="text-sm font-medium text-[#1d2939]">
                      Pets Allowed
                    </p>
                  </div>
                </div>

                <div className="search-items-div flex gap-2 mt-5 cursor-pointer">
                  <div className="border border-gray-300  h-8 flex items-center justify-center w-36 rounded-2xl ">
                    <img src={tickIcon} className="pr-2" />
                    <p className="text-sm font-medium text-[#1d2939]">
                      Service Elavator
                    </p>
                  </div>
                  <div className="border border-gray-300  h-8 flex items-center justify-center w-24 rounded-2xl ">
                    <img src={tickIcon} className="pr-2" />
                    <p className="text-sm font-medium text-[#1d2939]">
                      Intercom
                    </p>
                  </div>
                  <div className="border border-gray-300  h-8 flex items-center justify-center w-52 rounded-2xl ">
                    <img src={tickIcon} className="pr-2" />
                    <p className="text-sm font-medium text-[#1d2939]">
                      Reception/Waiting Room
                    </p>
                  </div>
                </div>

                <p className="font-medium text-[#0068B3] text-sm pt-4">
                  Show More
                </p>
              </div>

              <hr className=" border-gray-300 mt-7" />

              <p className="mt-14 mb-7 font-medium text-lg">Property Info</p>

              <div className="specifications-table">
                <div className="table-row ">
                  <div className="table-cell w-3/12">
                    <p className="text-[#475467] text-xs pb-1">Furnish</p>
                    <p className="font-medium text-md">Semi Furnished</p>
                  </div>
                  <div className="table-cell w-3/12">
                    <p className="text-[#475467] text-xs pb-1">Apartment for</p>
                    <p className="font-medium text-md">Rent</p>
                  </div>
                  <div className="table-cell">
                    <p className="text-[#475467] text-xs pb-1">Rent is Paid</p>
                    <p className="font-medium text-md">Yearly</p>
                  </div>
                </div>

                <div className="table-row">
                  <div className="table-cell w-3/12">
                    <p className="text-[#475467] text-xs pb-1">Listed by</p>
                    <p className="font-medium text-md">Landlord</p>
                  </div>
                  <div className="table-cell">
                    <p className="text-[#475467] text-xs pb-1">
                      Property Reference
                    </p>
                    <p className="font-medium text-md">AP-R-23811</p>
                  </div>
                  <div className="table-cell">
                    <p className="text-[#475467] text-xs pb-1">RERA Permit Number</p>
                    <p className="font-medium text-md">321458029</p>
                  </div>
                </div>

                <div className="table-row">
                  <div className="table-cell w-3/12">
                    <p className="text-[#475467] text-xs pb-1">Posted On</p>
                    <p className="font-medium text-md">March 24th, 2023</p>
                  </div>
                  <div className="table-cell">
                    <p className="text-[#475467] text-xs pb-1">
                      Update
                    </p>
                    <p className="font-medium text-md">2 mins Ago</p>
                  </div>
                  {/* <!-- Empty cell for the third column --> */}
                  <div className="table-cell"></div>
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
        </div>


        <div className="card-shadow-3 mt-5 custom-height-3 w-full">
            <div className="pr-5 pl-5 pt-8 pb-8">
              <p className="font-medium text-2xl pb-2">AED 85,000 Yearly</p>
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
                <div className="relative w-full overflow-hidden">
                  <div>
                    <img src={map2} className="pt-5 w-full " />
                  </div>
                  <div>
                    <img
                      src={mapCircle}
                      className="absolute left-20 top-10 w-36"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* <div>
              <AdsComponent
                style={{ height: "725px" }}
                iconStyle={{ height: "60px" }}
              />
            </div> */}
          </div>
      </div>
    </>
  );
}

export default PropertiesLandingPage;
