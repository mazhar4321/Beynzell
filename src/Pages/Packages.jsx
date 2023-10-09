import React, { useState } from "react";
import Headerss from "../component/Home/Header";
import AdsComponent from "../component/AdsComponent";
import { Breadcrumb, Switch, Select } from "antd";
import SettingContent from "../component/setting/SettingContent";

import greenTick from "../assets/greenTickIcon.png";

const { Option } = Select;

function Packages() {
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
      <div className="card-shadow my-5 p-4 px-4 lg:w-5/12 w-full mx-auto">
        <div className="flex justify-between">
          <div>
            <h1 className="text-textColor font-medium text-lg">
              Silver Package
            </h1>
            <p className="text-sm font-medium pt-3 text-[#0068B3]">
              Ads left 3/5
            </p>
          </div>
          <div className="border w-16 h-8 rounded-3xl flex justify-center items-center bg-[#9CE5AE]">
            <p className="font-medium text-md ">Active</p>
          </div>
        </div>
        <div className="mt-8  py-5 border--#EAECF0]">
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
              <p className="text-[#667085]">Featuring for 1.5 days</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-14 mb-6">
          <div className="border w-6/12 text-center pt-2 pb-2 mr-3 rounded-md cursor-pointer">
            <a href="/upgrade">Upgrade</a>
            
          </div>
          <div className="border w-6/12 text-center pt-2 pb-2 rounded-md bg-[#101828] cursor-pointer">
            <p className="text-white">Post Ad</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Packages;
