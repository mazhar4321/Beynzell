import React, { useState } from "react";
import Headerss from "../component/Home/Header";
import AdsComponent from "../component/AdsComponent";
import { Breadcrumb, Switch, Select, Button, Dropdown, Checkbox } from "antd";
import SettingContent from "../component/setting/SettingContent";
import carRed from "../assets/carRed.png";

import greenTick from "../assets/greenTickIcon.png";
import dotsIcon from "../assets/3DotsIcon.png";
import eyeIcon from "../assets/eyeIcon.png";
import clock from "../assets/clock.png";
import iphone from "../assets/iphone13.png";
import infoIcon from "../assets/infoIcon.png";
import editIcon from "../assets/editIcon.png";
import ipad from "../assets/ipad.png";
import editIconDropdown from "../assets/editIconDropdown.png";
import promoteIconDropdown from "../assets/promoteDropdownIcon.png";
import soldIconDropdown from "../assets/soldDropdownIcon.png";
import deleteIconDropdown from "../assets/deleteDropdownIcon.png";

const { Option } = Select;

function MyAds() {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
    // You can add additional logic here to handle language changes
  };

  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          //   href="https://www.antgroup.com"
        >
          <Checkbox>Motors</Checkbox>
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          //   href="https://www.aliyun.com"
        >
          <Checkbox>Electronics</Checkbox>
        </a>
      ),
    },
  ];

  const custom = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          //   href="https://www.antgroup.com"
        >
          <div className="w-44 ">
            <img src={editIconDropdown} />
          </div>
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          //   href="https://www.aliyun.com"
        >
          <img src={promoteIconDropdown} />
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          //   href="https://www.aliyun.com"
        >
          <img src={soldIconDropdown} />
        </a>
      ),
    },
    {
      key: "4",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          //   href="https://www.aliyun.com"
        >
          <img src={deleteIconDropdown} />
        </a>
      ),
    },
  ];

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
      <div className="card-shadow-2 my-5 p-4 px-4 lg:w-7/12 w-full mx-auto">
        <div className="w-full">
          <div>
            <h1 className="text-textColor font-medium text-2xl">My Ads</h1>
            {/* <hr className="w-full mt-6"></hr> */}
          </div>
        </div>

        <div className="mt-5 flex justify-between">
          <div className="flex gap-2 flex-wrap">
            <div className="border text-sm  w-16 h-8 flex justify-center items-center rounded-2xl">
              <p>All (6)</p>
            </div>

            <div className="border text-sm w-36 h-8 flex justify-center items-center rounded-2xl">
              <p>Under Review(1)</p>
            </div>

            <div className="border text-sm  w-20 h-8 flex justify-center items-center rounded-2xl">
              <p>Live(2)</p>
            </div>

            <div className="border text-sm  w-32 h-8 flex justify-center items-center rounded-2xl">
              <p>Rejected(1)</p>
            </div>

            <div className="border text-sm  w-24 h-8 flex justify-center items-center rounded-2xl">
              <p>Draft(6)</p>
            </div>

            <div className="border text-sm  w-24 h-8 flex justify-center items-center rounded-2xl">
              <p>Expired(6)</p>
            </div>
          </div>

          <div className="flex">
            <div>
              <Dropdown menu={{ items }} trigger={["click"]}>
                <p className="pr-1 font-medium text-[#0068B3] cursor-pointer ">
                  Show{" "}
                </p>
              </Dropdown>
            </div>
            <div className="border rounded-full h-7 bg-[#cce1f0] w-7">
              <span className="text-sm pl-2 text-[#0068B3]">2</span>
            </div>
          </div>
        </div>
        <hr className="w-full mt-6"></hr>

        <p className="mt-9 mb-6 text-lg font-bold ">Motors</p>

        <p className="text-xs text-[#5a6474] text-center pb-2 pt-5">
          29 Jan 2023
        </p>

        <div className="border  rounded-xl">
          <div className=" flex gap-5 pt-4 pl-4 pb-4 rounded-lg justify-between">
            <div className="flex gap-5 md:flex-row flex-col">
            <div>
              <img src={carRed} className="w-full" />
            </div>

            <div>
              <div className="flex">
                <div className="border rounded-xl bg-[#ffe9bc] w-16 h-6 flex justify-center items-center">
                  <p className=" text-xs font-bold ">Pending</p>
                </div>
              </div>

              <p className="font-bold pt-1">BMW 3 Series</p>
              <p className="text-xs pt-1">AED 91,900</p>
              <p className="text-xs pt-1 text-[#858991]">
                Zyed City - Aby Dhabi
              </p>
            </div>
            </div>

            <div className="flex justify-end  ml-2 cursor-pointer">
              <Dropdown menu={{ items: custom }} trigger={["click"]}>
                <div className="h-7">
                  <img src={dotsIcon} />
                </div>
              </Dropdown>
            </div>
          </div>


          <div className="flex items-center justify-between mx-4 mb-3">

          </div>
        </div>

        <p className="text-xs text-[#5a6474] text-center pb-2 pt-9">
          29 Jan 2023
        </p>

        <div className="border  rounded-xl">
          <div className=" flex gap-5 pt-4 pl-4 pb-4 rounded-lg justify-between">
            <div className="flex gap-5 md:flex-row flex-col">
            <div>
              <img src={carRed} className="w-full" />
            </div>

            <div>
              <div className="flex">
                <div className="border rounded-xl bg-[#9ce5ae] w-12 h-6 flex justify-center items-center">
                  <p className=" text-xs font-bold ">Live</p>
                </div>
              </div>

              <p className="font-bold pt-1">BMW 3 Series</p>
              <p className="text-xs pt-1">AED 91,900</p>
              <p className="text-xs pt-1 text-[#858991]">
                Zyed City - Aby Dhabi
              </p>
            </div>
            </div>

            <div className="flex justify-end  ml-2 cursor-pointer">
              <Dropdown menu={{ items: custom }} trigger={["click"]}>
                <div className="h-7">
                  <img src={dotsIcon} />
                </div>
              </Dropdown>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <hr className="mt-1 mb-2 w-full mx-4 "></hr>
          </div>

          <div className="flex items-center justify-between mx-4 mb-3">
            <div className="flex gap-1">
              <div>
                <img src={eyeIcon} />
              </div>
              <div className="text-xs text-[#858991]">23 views</div>
            </div>

            <div className="flex gap-1">
              <div>
                <img src={clock} />
              </div>
              <div>
                <p className="text-xs text-[#858991]">Expires in 2 days</p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-xs text-[#5a6474] text-center pb-2 pt-9">
          29 Jan 2023
        </p>

        <div className="border  rounded-xl">
          <div className=" flex gap-5 pt-4 pl-4 pb-4 rounded-lg justify-between">
            <div className="flex gap-5 md:flex-row flex-col">
            <div>
              <img src={carRed} className="w-full" />
            </div>

            <div>
              <div className="flex">
                <div className="border rounded-xl bg-[#9ce5ae] w-12 h-6 flex justify-center items-center">
                  <p className=" text-xs font-bold ">Live</p>
                </div>
              </div>

              <p className="font-bold pt-1">BMW 3 Series</p>
              <p className="text-xs pt-1">AED 91,900</p>
              <p className="text-xs pt-1 text-[#858991]">
                Zyed City - Aby Dhabi
              </p>
            </div>
            </div>

            <div className="flex justify-end  ml-2 cursor-pointer">
              <Dropdown menu={{ items: custom }} trigger={["click"]}>
                <div className="h-7">
                  <img src={dotsIcon} />
                </div>
              </Dropdown>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <hr className="mt-1 mb-2 w-full mx-4 "></hr>
          </div>

          <div className="flex items-center justify-between mx-4 mb-3">
            <div className="flex gap-1">
              <div>
                <img src={eyeIcon} />
              </div>
              <div className="text-xs text-[#858991]">23 views</div>
            </div>

            <div className="flex gap-1">
              <div>
                <img src={clock} />
              </div>
              <div>
                <p className="text-xs text-[#858991]">Expires in 2 days</p>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-9 mb-6 text-lg font-bold ">Electronics</p>

        <p className="text-xs text-[#5a6474] text-center pb-2 pt-5">
          29 Jan 2023
        </p>

        <div className="border  rounded-xl">
          <div className=" flex gap-5 pt-4 pl-4 pb-4 rounded-lg">
            <div>
              <img src={iphone} />
            </div>

            <div>
              <div className="flex">
                <div className="border rounded-xl bg-[#ffd4d2] w-20 h-6 flex justify-center items-center">
                  <p className=" text-xs font-bold ">Rejected</p>
                </div>
              </div>

              <p className="font-bold pt-1">iPhone 13 pro</p>
              <p className="text-xs pt-1">AED 91,900</p>
              <p className="text-xs pt-1 text-[#858991]">
                Zyed City - Aby Dhabi
              </p>
            </div>

            <div className="flex justify-end w-8/12 ml-2 cursor-pointer">
              <Dropdown menu={{ items: custom }} trigger={["click"]}>
                <div className="h-7">
                  <img src={dotsIcon} />
                </div>
              </Dropdown>
            </div>
          </div>

          <div className="flex justify-center items-center">
            {/* <hr className="mt-1 mb-2 w-full mx-4 "></hr> */}
          </div>

          <div className="flex items-center justify-between mx-4 mb-3 bg-[#f2f4f7] rounded-md h-9">
            <div className="flex gap-1 pl-4">
              <div>
                <img src={infoIcon} />
              </div>
              <div className="text-sm ">
                We are unable to verify your number, click on edit to change
              </div>
            </div>

            <div className="flex items-center gap-2 cursor-pointer">
              <div>
                <img src={editIcon} />
              </div>
              <div>
                <p className="text-sm font-bold text-[#0f70b7] pr-4">Edit</p>
              </div>
            </div>
          </div>

          <div className="w-12/12 mb-3 mt-5 ">
            <hr className=" w-12/12 ml-5 mr-5"></hr>

            <div className="flex gap-1 mt-3 justify-end mr-4">
              <div>
                <img src={clock} />
              </div>
              <div>
                <p className="text-xs text-[#858991]">Expires in 2 days</p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-xs text-[#5a6474] text-center pb-2 pt-5">
          29 Jan 2023
        </p>

        <div className="border  rounded-xl">
          <div className=" flex gap-5 pt-4 pl-4 pb-4 rounded-lg">
            <div>
              <img src={ipad} />
            </div>

            <div>
              <div className="flex">
                <div className="border rounded-xl bg-[#d0d5dd] w-20 h-6 flex justify-center items-center">
                  <p className=" text-xs font-bold ">Expired</p>
                </div>
              </div>

              <p className="font-bold pt-1">iPad Pro</p>
              <p className="text-xs pt-1">AED 91,900</p>
              <p className="text-xs pt-1 text-[#858991]">
                Zyed City - Aby Dhabi
              </p>
            </div>

            <div className="flex justify-end w-8/12 ml-2 cursor-pointer">
              <Dropdown menu={{ items: custom }} trigger={["click"]}>
                <div className="h-7">
                  <img src={dotsIcon} />
                </div>
              </Dropdown>
            </div>
          </div>
        </div>

        <p className="text-xs text-[#5a6474] text-center pb-2 pt-5">
          29 Jan 2023
        </p>

        <div className="border  rounded-xl">
          <div className=" flex gap-5 pt-4 pl-4 pb-4 rounded-lg">
            <div>
              <img src={ipad} />
            </div>

            <div>
              <div className="flex">
                <div className="border rounded-xl bg-[#d0d5dd] w-20 h-6 flex justify-center items-center">
                  <p className=" text-xs font-bold ">Draft</p>
                </div>
              </div>

              <p className="font-bold pt-1">Samsung note S20</p>
              <p className="text-xs pt-1">AED 91,900</p>
              <p className="text-xs pt-1 text-[#858991]">
                Zyed City - Aby Dhabi
              </p>
            </div>

            <div className="flex justify-end w-8/12 ml-2 mr-2 cursor-pointer">
              <Dropdown menu={{ items: custom }} trigger={["click"]}>
                <div className="h-7">
                  <img src={dotsIcon} />
                </div>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAds;
