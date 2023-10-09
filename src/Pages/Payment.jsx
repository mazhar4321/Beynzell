import React, { useState } from "react";
import Headerss from "../component/Home/Header";
import AdsComponent from "../component/AdsComponent";
import { Breadcrumb, Switch, Select } from "antd";
import SettingContent from "../component/setting/SettingContent";
const { Option } = Select;

import masterLogo from "../assets/masterCardLogo.png";
import appleLogo from "../assets/ApplePay.png";
import trashIcon from "../assets/trash.png";

function Payment() {
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
        <h1 className="text-textColor font-medium text-2xl mt-10">Payments</h1>

        <div className="mt-16 ">
          <h1 className="font-bold text-xl">Saved</h1>
        </div>

        <div className="mt-5 flex border rounded-md pt-5 pl-5 pb-5">
          <div>
            <img src={masterLogo} className="mr-5 pt-2 w-9" />
          </div>

          <div className="w-full">
            <div className="flex items-center justify-between w-full">
              <div>
                <p className="">Mastercard Ending in 1234</p>
              </div>
              <div className="pr-3">
                <img src={trashIcon} />
              </div>
            </div>
            <p className="text-[#a9a9a9] text-sm pt-1">Expiry in 06/2024</p>
            <p className="text-[#767474] font-medium pt-2  text-sm">
              Set as Default{" "}
              <span className="text-[#0068B3] pl-1 text-md">Edit</span>
            </p>
          </div>
        </div>

        <div className="mt-5 flex border rounded-md pt-5 pl-5 pb-5">
          <div>
            <img src={masterLogo} className="mr-5 pt-2 w-9" />
          </div>

          <div className="w-full">
            <div className="flex items-center justify-between w-full">
              <div>
                <p className="">Mastercard Ending in 1234</p>
              </div>
              <div className="pr-3">
                <img src={trashIcon} />
              </div>
            </div>
            <p className="text-[#a9a9a9] text-sm pt-1">Expiry in 06/2024</p>
            <p className="text-[#767474] font-medium pt-2  text-sm">
              Set as Default{" "}
              <span className="text-[#0068B3] pl-1 text-md">Edit</span>
            </p>
          </div>
        </div>

        <div className="mt-5 flex border rounded-md pt-5 pl-5 pb-5">
          <div>
            <img src={appleLogo} className="mr-5 pt-2 w-9" />
          </div>

          <div className="w-full ">
            <div className="flex items-center justify-between w-full">
              <div>
                <p className="">Mastercard Ending in 1234</p>
              </div>
              <div className="pr-3">
                <img src={trashIcon} />
              </div>
            </div>
            <p className="text-[#a9a9a9] text-sm pt-1">Expiry in 06/2024</p>
            <p className="text-[#767474] font-medium pt-2  text-sm">
              Set as Default{" "}
              <span className="text-[#0068B3] pl-1 text-md">Edit</span>
            </p>
          </div>
        </div>
        <div className="w-full">
        <p className="text-[#0068B3] mt-5 mb-5 font-bold text-md">+ Add</p>
        </div>
      </div>
    </div>
  );
}

export default Payment;
