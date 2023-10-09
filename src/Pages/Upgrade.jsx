import React, { useState } from "react";
import Headerss from "../component/Home/Header";
import AdsComponent from "../component/AdsComponent";
import { Breadcrumb, Switch, Select } from "antd";
import SettingContent from "../component/setting/SettingContent";

import greenTick from "../assets/greenTickIcon.png";

const { Option } = Select;

function Upgrade() {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
    // You can add additional logic here to handle language changes
  };
  return (
    <div className="container mx-auto">
      <Headerss />
      <div className="my-5">
        <AdsComponent />
      </div>
      <div className="breadcrum text-SkyColor ">
        <Breadcrumb
          className="text-SkyColor font-thin"
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
      <div className="card-shadow my-5 p-4 px-4 lg:w-1/2 w-full mx-auto">
        <div className="w-full">
          <div>
            <h1 className="text-textColor font-medium text-2xl">Upgrade</h1>
            <hr className="w-full mt-6"></hr>
          </div>
        </div>

        <p className="mt-9">Choose your Plan</p>

        <div className="flex justify-between mt-10 mb-6">
          <div className="border w-7/12 text-center pt-2 pb-2 flex flex-col justify-center items-center mr-3 rounded-2xl hover:border-blue-500 cursor-pointer ">
            <p className="font-bold text-xl mt-5">1200 AED</p>

            <div className="border w-16 h-8 mt-4 rounded-3xl flex justify-center items-center bg-[#CCE1F0]">
              <p className="font-medium text-md ">Silver</p>
            </div>

            <div className="mt-6  pb-5 border--#EAECF0]">
              <div className="flex">
                <div className="bg-[#D2F3DA] w-7 h-7 flex justify-center items-center rounded-full mr-3">
                  <img src={greenTick} />
                </div>
                <div>
                  <p className="text-[#667085]">Each for 3 days</p>
                </div>
              </div>

              <div className="flex pt-4 pb-4">
                <div className="bg-[#D2F3DA] w-7 h-7 flex justify-center items-center rounded-full mr-3">
                  <img src={greenTick} />
                </div>
                <div>
                  <p className="text-[#667085]">upto 15 days</p>
                </div>
              </div>

              <div className="flex">
                <div className="bg-[#D2F3DA] w-7 h-7 flex justify-center items-center rounded-full mr-3">
                  <img src={greenTick} />
                </div>
                <div>
                  <p className="text-[#667085] text-left">
                    Featuring for 1.5 <br></br> days
                  </p>
                </div>
              </div>

           
            </div>
            <div className="border text-center bg-[#0068B3] pt-2 pb-2 mb-5 mt-3 w-44 rounded-md">
                <p className="text-white">Select</p>
              </div>
          </div>


          <div className="border w-7/12 text-center pt-2 pb-2 flex flex-col justify-center items-center mr-3 rounded-2xl hover:border-blue-500 cursor-pointer">
            <p className="font-bold text-xl mt-5">1200 AED</p>

            <div className="border w-16 h-8 mt-4 rounded-3xl flex justify-center items-center bg-[#CCE1F0]">
              <p className="font-medium text-md ">Gold</p>
            </div>

            <div className="mt-6  pb-5 border--#EAECF0]">
              <div className="flex">
                <div className="bg-[#D2F3DA] w-7 h-7 flex justify-center items-center rounded-full mr-3">
                  <img src={greenTick} />
                </div>
                <div>
                  <p className="text-[#667085]">Each for 3 days</p>
                </div>
              </div>

              <div className="flex pt-4 pb-4">
                <div className="bg-[#D2F3DA] w-7 h-7 flex justify-center items-center rounded-full mr-3">
                  <img src={greenTick} />
                </div>
                <div>
                  <p className="text-[#667085]">upto 15 days</p>
                </div>
              </div>

              <div className="flex">
                <div className="bg-[#D2F3DA] w-7 h-7 flex justify-center items-center rounded-full mr-3">
                  <img src={greenTick} />
                </div>
                <div>
                  <p className="text-[#667085] text-left">
                    Featuring for 1.5 <br></br> days
                  </p>
                </div>
              </div>

           
            </div>
            <div className="border text-center bg-[#0068B3] pt-2 pb-2 mb-5 mt-3 w-44 rounded-md">
                <p className="text-white">Select</p>
              </div>
          </div>

          <div className="border w-7/12 text-center pt-2 pb-2 flex flex-col justify-center items-center mr-3 rounded-2xl hover:border-blue-500 cursor-pointer">
            <p className="font-bold text-xl mt-5">1200 AED</p>

            <div className="border w-24 h-8 mt-4 rounded-3xl flex justify-center items-center bg-[#CCE1F0]">
              <p className="font-medium text-md ">Daimond</p>
            </div>

            <div className="mt-6  pb-5 border--#EAECF0]">
              <div className="flex">
                <div className="bg-[#D2F3DA] w-7 h-7 flex justify-center items-center rounded-full mr-3">
                  <img src={greenTick} />
                </div>
                <div>
                  <p className="text-[#667085]">Each for 3 days</p>
                </div>
              </div>

              <div className="flex pt-4 pb-4">
                <div className="bg-[#D2F3DA] w-7 h-7 flex justify-center items-center rounded-full mr-3">
                  <img src={greenTick} />
                </div>
                <div>
                  <p className="text-[#667085]">upto 15 days</p>
                </div>
              </div>

              <div className="flex">
                <div className="bg-[#D2F3DA] w-7 h-7 flex justify-center items-center rounded-full mr-3">
                  <img src={greenTick} />
                </div>
                <div>
                  <p className="text-[#667085] text-left">
                    Featuring for 1.5 <br></br> days
                  </p>
                </div>
              </div>

           
            </div>
            <div className="border text-center bg-[#0068B3] pt-2 pb-2 mb-5 mt-3 w-44 rounded-md">
                <p className="text-white">Select</p>
              </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Upgrade;
