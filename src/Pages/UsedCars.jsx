import React, { useEffect, useState } from "react";
import Headerss from "../component/Home/Header";
import AdsComponent from "../component/AdsComponent";
import "../Pages/UsedCars.css";
import {
  Breadcrumb,
  Switch,
  Select,
  Space,
  Button,
  Drawer,
  InputNumber,
  Input,
  Checkbox,
} from "antd";
import "../Pages/SearchResults.css";
import MobileCards from "../component/mobilecard/MobileCard";
import plusSign from "../assets/showMorePlus.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import rightArrow from "../assets/arrow-right.png";
import locateIcon from "../assets/locateIcon.png";
import UsedCarCards from "../component/usedCarCard/UsedCarCards";
import arrowUp from "../assets/arrow-up.png";
import selectDownArrow from "../assets/selectDownArrow.png";
import filterIcon from "../assets/filterIcon.png";

import { SearchOutlined } from "@ant-design/icons";

const { Search } = Input;

function UsedCars() {
  const [isRotated, setIsRotated] = useState(true);
  const [isRotated2, setIsRotated2] = useState(true);
  const [isRotated3, setIsRotated3] = useState(true);
  const [isRotated4, setIsRotated4] = useState(true);
  const [isRotated5, setIsRotated5] = useState(false);
  const [isRotated6, setIsRotated6] = useState(false);
  const [isRotated7, setIsRotated7] = useState(false);
  const [isRotated8, setIsRotated8] = useState(false);
  const [isRotated9, setIsRotated9] = useState(false);
  const [isRotated10, setIsRotated10] = useState(false);
  const [isRotated11, setIsRotated11] = useState(false);
  const [isRotated12, setIsRotated12] = useState(false);
  const [isRotated13, setIsRotated13] = useState(false);
  const [isRotated14, setIsRotated14] = useState(false);
  const [isRotated15, setIsRotated15] = useState(false);
  const [isRotated16, setIsRotated16] = useState(false);
  const [isRotated17, setIsRotated17] = useState(false);
  const [isRotated18, setIsRotated18] = useState(false);
  const [isRotated19, setIsRotated19] = useState(false);
  const [isRotated20, setIsRotated20] = useState(false);

  const handleArrowClick = () => {
    setIsRotated(!isRotated);
  };

  const handleArrowClick2 = () => {
    setIsRotated2(!isRotated2);
  };

  const handleArrowClick3 = () => {
    setIsRotated3(!isRotated3);
  };

  const handleArrowClick4 = () => {
    setIsRotated4(!isRotated4);
  };

  const handleArrowClick5 = () => {
    setIsRotated5(!isRotated5);
  };

  const handleArrowClick6 = () => {
    setIsRotated6(!isRotated6);
  };

  const handleArrowClick7 = () => {
    setIsRotated7(!isRotated7);
  };

  const handleArrowClick8 = () => {
    setIsRotated8(!isRotated8);
  };

  const handleArrowClick9 = () => {
    setIsRotated9(!isRotated9);
  };

  const handleArrowClick10 = () => {
    setIsRotated10(!isRotated10);
  };

  const handleArrowClick11 = () => {
    setIsRotated11(!isRotated11);
  };

  const handleArrowClick12 = () => {
    setIsRotated12(!isRotated12);
  };

  const handleArrowClick13 = () => {
    setIsRotated13(!isRotated13);
  };

  const handleArrowClick14 = () => {
    setIsRotated14(!isRotated14);
  };

  const handleArrowClick15 = () => {
    setIsRotated15(!isRotated15);
  };

  const handleArrowClick16 = () => {
    setIsRotated16(!isRotated16);
  };

  const handleArrowClick17 = () => {
    setIsRotated17(!isRotated17);
  };

  const handleArrowClick18 = () => {
    setIsRotated18(!isRotated18);
  };

  const handleArrowClick19 = () => {
    setIsRotated19(!isRotated19);
  };

  const handleArrowClick20 = () => {
    setIsRotated20(!isRotated20);
  };

  const [open, setOpen] = useState(false);

  const onChange = (value) => {
    console.log("changed", value);
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

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

  return (
    <>
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

        <div className="filter-drawer">
          <Drawer
            title="Filter"
            placement="right"
            closeIcon={null}
            onClose={onClose}
            open={open}
            footerStyle={{ height: "100px" }}
            footer={
              <div className="flex justify-evenly items-center h-full w-full">
                <div className="clear-button-div">
                  <Button className="w-44 h-9 mr-2">Clear All</Button>
                </div>
                <div className="apply-button-div">
                  <Button className="w-44 h-9 bg-[#0068B3] text-white">Apply</Button>
                </div>
              </div>
            }
          >
            <div>
              <div className="flex justify-between">
                <div>
                  <p className="font-medium">Price (AED) </p>
                </div>
                <div className="cursor-pointer">
                  <img
                    className={`${isRotated ? "rotate-180" : ""}`}
                    src={arrowUp}
                    alt="Arrow"
                    onClick={handleArrowClick}
                  />
                </div>
              </div>
              <div
                className={`transition-all duration-300 ${
                  isRotated
                    ? "flex items-center mt-5"
                    : "opacity-0 flex items-center"
                }`}
              >
                <div className="">
                  <InputNumber
                    style={{
                      width: 150,
                    }}
                    min={1}
                    defaultValue={1}
                    onChange={onChange}
                  />
                </div>
                <p className="pl-2 pr-2">To</p>
                <div>
                  <InputNumber
                    style={{
                      width: 150,
                    }}
                    min={1}
                    defaultValue={1}
                    onChange={onChange}
                  />
                </div>
              </div>
              <hr
                className={` transition-all duration-300 ${
                  isRotated ? "mt-10 mb-5" : "mt-0 mb-5"
                }`}
              ></hr>
              <div className="flex justify-between">
                <div>
                  <p className="font-medium">Year </p>
                </div>
                <div className="cursor-pointer">
                  <img
                    className={`${isRotated2 ? "rotate-180" : ""}`}
                    src={arrowUp}
                    alt="Arrow"
                    onClick={handleArrowClick2}
                  />
                </div>
              </div>
              <div
                className={`transition-all duration-300 ${
                  isRotated2
                    ? "flex items-center mt-5"
                    : "opacity-0 flex items-center"
                }`}
              >
                <div className="">
                  <InputNumber
                    style={{
                      width: 150,
                    }}
                    min={1}
                    defaultValue={1920}
                    onChange={onChange}
                  />
                </div>
                <p className="pl-2 pr-2">To</p>
                <div>
                  <InputNumber
                    style={{
                      width: 150,
                    }}
                    min={1}
                    defaultValue={2024}
                    onChange={onChange}
                  />
                </div>
              </div>
              <hr
                className={` transition-all duration-300 ${
                  isRotated2 ? "mt-10 mb-5" : "mt-0 mb-5"
                }`}
              ></hr>
              <div className="flex justify-between">
                <div>
                  <p className="font-medium">Keywords </p>
                </div>
                <div className="cursor-pointer">
                  <img
                    className={`${isRotated3 ? "rotate-180" : ""}`}
                    src={arrowUp}
                    alt="Arrow"
                    onClick={handleArrowClick3}
                  />
                </div>
              </div>
              <div
                className={`transition-all duration-300 ${
                  isRotated3
                    ? "flex items-center mt-5"
                    : "opacity-0 flex items-center"
                }`}
              >
                <Input
                  placeholder="Range Rover"
                  prefix={<SearchOutlined style={{ color: "#999" }} />}
                />
              </div>
              <hr
                className={` transition-all duration-200 ${
                  isRotated3 ? "mt-10 mb-5" : "mt-0 mb-5"
                }`}
              ></hr>

              <div className="color-full-div-1">
                <div className="flex justify-between">
                  <div>
                    <p className="font-medium">Exterior Color </p>
                  </div>
                  <div className="cursor-pointer">
                    <img
                      className={`${isRotated4 ? "rotate-180" : ""}`}
                      src={arrowUp}
                      alt="Arrow"
                      onClick={handleArrowClick4}
                    />
                  </div>
                </div>

                <div
                  className={`transition-all duration-600 ${
                    isRotated4 ? "mt-5 mb-5" : "opacity-0"
                  }`}
                >
                  <div className={"colors-div-1 flex justify-between"}>
                    <div>
                      <div className="gray-class bg-[#475467] w-14 h-14 rounded-full mt-8"></div>
                      <div>
                        <p className="pt-2 pl-3">Grey</p>
                      </div>
                    </div>

                    <div>
                      <div className="gray-class bg-black w-14 h-14 rounded-full mt-8"></div>
                      <div>
                        <p className="pt-2 pl-3">Black</p>
                      </div>
                    </div>

                    <div>
                      <div className="gray-class bg-white custom-outline-class w-14 h-14 rounded-full mt-8"></div>
                      <div>
                        <p className="pt-2 pl-3">White</p>
                      </div>
                    </div>

                    <div>
                      <div className="gray-class bg-[#F4F3D7] w-14 h-14 rounded-full mt-8"></div>
                      <div>
                        <p className="pt-2 pl-3">Beige</p>
                      </div>
                    </div>
                  </div>

                  <div className="colors-div-2 flex justify-between ">
                    <div>
                      <div className="gray-class bg-blue-700 w-14 h-14 rounded-full mt-8"></div>
                      <div>
                        <p className="pt-2 pl-3">Blue</p>
                      </div>
                    </div>

                    <div>
                      <div className="gray-class bg-green-800 w-14 h-14 rounded-full mt-8"></div>
                      <div>
                        <p className="pt-2 pl-3">Green</p>
                      </div>
                    </div>

                    <div>
                      <div className="gray-class bg-yellow-600 w-14 h-14 rounded-full mt-8"></div>
                      <div>
                        <p className="pt-2 pl-3">Yellow</p>
                      </div>
                    </div>

                    <div>
                      <div className="gray-class bg-purple-700 w-14 h-14 rounded-full mt-8"></div>
                      <div>
                        <p className="pt-2 pl-3">Purple</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-[#0068B3] font-medium mt-9 pl-1">More</p>
                </div>

                <hr
                  className={` transition-all duration-300 ${
                    isRotated4 ? "mt-10 mb-5" : " -mt-64 mb-7 "
                  }`}
                ></hr>
              </div>

              <div className="color-full-div-2">
                <div className="flex justify-between">
                  <div>
                    <p className="font-medium">Interior Color </p>
                  </div>
                  <div className="cursor-pointer z-10">
                    <img
                      className={`${isRotated5 ? "rotate-180" : ""}`}
                      src={arrowUp}
                      alt="Arrow"
                      onClick={handleArrowClick5}
                    />
                  </div>
                </div>

                <div
                  className={`transition-all duration-600 ${
                    isRotated5 ? "mt-5 mb-5" : "opacity-0"
                  }`}
                >
                  <div className={"colors-div-1 flex justify-between"}>
                    <div>
                      <div className="gray-class bg-[#475467] w-14 h-14 rounded-full mt-8"></div>
                      <div>
                        <p className="pt-2 pl-3">Grey</p>
                      </div>
                    </div>

                    <div>
                      <div className="gray-class bg-black w-14 h-14 rounded-full mt-8"></div>
                      <div>
                        <p className="pt-2 pl-3">Black</p>
                      </div>
                    </div>

                    <div>
                      <div className="gray-class bg-white custom-outline-class w-14 h-14 rounded-full mt-8"></div>
                      <div>
                        <p className="pt-2 pl-3">White</p>
                      </div>
                    </div>

                    <div>
                      <div className="gray-class bg-[#F4F3D7] w-14 h-14 rounded-full mt-8"></div>
                      <div>
                        <p className="pt-2 pl-3">Beige</p>
                      </div>
                    </div>
                  </div>

                  <div className="colors-div-1 flex justify-between ">
                    <div>
                      <div className="gray-class bg-blue-700 w-14 h-14 rounded-full mt-8"></div>
                      <div>
                        <p className="pt-2 pl-3">Blue</p>
                      </div>
                    </div>

                    <div>
                      <div className="gray-class bg-green-800 w-14 h-14 rounded-full mt-8"></div>
                      <div>
                        <p className="pt-2 pl-3">Green</p>
                      </div>
                    </div>

                    <div>
                      <div className="gray-class bg-yellow-600 w-14 h-14 rounded-full mt-8"></div>
                      <div>
                        <p className="pt-2 pl-3">Yellow</p>
                      </div>
                    </div>

                    <div>
                      <div className="gray-class bg-purple-700 w-14 h-14 rounded-full mt-8"></div>
                      <div>
                        <p className="pt-2 pl-3">Purple</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-[#0068B3] font-medium mt-9 pl-1">More</p>
                </div>

                <hr
                  className={` transition-all duration-300 ${
                    isRotated5 ? "mt-10 mb-5" : " -mt-64 mb-7"
                  }`}
                ></hr>
              </div>

              <div className="regional-specs-div">
                <div className="flex justify-between">
                  <div>
                    <p className="font-medium text-md">Regional Specs </p>
                  </div>
                  <div className="cursor-pointer z-10">
                    <img
                      className={`${isRotated6 ? "rotate-180" : ""}`}
                      src={arrowUp}
                      alt="Arrow"
                      onClick={handleArrowClick6}
                    />
                  </div>
                </div>
                <div
                  className={`transition-all  ${
                    isRotated6
                      ? "flex items-center mt-5"
                      : "opacity-0 flex items-center"
                  }`}
                >
                  <div className="w-full">
                    <div className="flex justify-between w-full pb-4">
                      <div>
                        <p>GCC Specs</p>
                      </div>
                      <div>
                        <p>
                          45 <Checkbox className="pl-1"></Checkbox>
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between w-full pb-4">
                      <div>
                        <p>American Specs</p>
                      </div>
                      <div>
                        <p>
                          73 <Checkbox className="pl-1"></Checkbox>
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between w-full pb-4">
                      <div>
                        <p>Canadian Specs</p>
                      </div>
                      <div>
                        <p>
                          25 <Checkbox className="pl-1"></Checkbox>
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between w-full pb-4">
                      <div>
                        <p>Japanese Specs</p>
                      </div>
                      <div>
                        <p>
                          77 <Checkbox className="pl-1"></Checkbox>
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between w-full pb-4">
                      <div>
                        <p>European Specs</p>
                      </div>
                      <div>
                        <p>
                          42 <Checkbox className="pl-1"></Checkbox>
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between w-full pb-4">
                      <div>
                        <p>Others</p>
                      </div>
                      <div>
                        <p>
                          65 <Checkbox className="pl-1"></Checkbox>
                        </p>
                      </div>
                    </div>
                    <p className="text-[#0068B3] font-medium  text-xs pt-1">
                      More
                    </p>
                  </div>
                </div>
                <hr
                  className={` transition-all  duration-300 ${
                    isRotated6 ? "mt-5 mb-5" : "-mt-52 mb-5"
                  }`}
                ></hr>
              </div>

              <div className="seller-type-div">
                <div className="flex justify-between">
                  <div>
                    <p className="font-medium text-md">Seller Type</p>
                  </div>
                  <div className="cursor-pointer z-20">
                    <img
                      className={`${isRotated7 ? "rotate-180" : ""}`}
                      src={arrowUp}
                      alt="Arrow"
                      onClick={handleArrowClick7}
                    />
                  </div>
                </div>
                <div
                  className={`transition-all duration-150 ${
                    isRotated7
                      ? "flex items-center mt-5"
                      : "opacity-0 flex items-center"
                  }`}
                >
                  <div className="w-full">
                    <div className="flex justify-between w-full pb-4">
                      <div>
                        <p>Owner</p>
                      </div>
                      <div>
                        <p>
                          45 <Checkbox className="pl-1"></Checkbox>
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between w-full pb-4">
                      <div>
                        <p>Dealer</p>
                      </div>
                      <div>
                        <p>
                          58 <Checkbox className="pl-1"></Checkbox>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <hr
                  className={` transition-all duration-400 ${
                    isRotated7 ? "mt-5 mb-5" : "-mt-12 mb-5"
                  }`}
                ></hr>
              </div>

              <div className="body-type-div">
                <div className="flex justify-between">
                  <div>
                    <p className="font-medium text-md">Body Type</p>
                  </div>
                  <div className="cursor-pointer z-20">
                    <img
                      className={`${isRotated8 ? "rotate-180" : ""}`}
                      src={arrowUp}
                      alt="Arrow"
                      onClick={handleArrowClick8}
                    />
                  </div>
                </div>
                <div
                  className={`transition-all duration-150 ${
                    isRotated8
                      ? "flex items-center mt-5"
                      : "opacity-0 flex items-center"
                  }`}
                >
                  <div className="w-full">
                    <div className="flex justify-between w-full pb-4">
                      <div>
                        <p>Coupe</p>
                      </div>
                      <div>
                        <p>
                          45 <Checkbox className="pl-1"></Checkbox>
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between w-full pb-4">
                      <div>
                        <p>Hard Top Convertible</p>
                      </div>
                      <div>
                        <p>
                          58 <Checkbox className="pl-1"></Checkbox>
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between w-full pb-4">
                      <div>
                        <p>Hatchback</p>
                      </div>
                      <div>
                        <p>
                          58 <Checkbox className="pl-1"></Checkbox>
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between w-full pb-4">
                      <div>
                        <p>Pickup Truck</p>
                      </div>
                      <div>
                        <p>
                          58 <Checkbox className="pl-1"></Checkbox>
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between w-full pb-4">
                      <div>
                        <p>Sedan</p>
                      </div>
                      <div>
                        <p>
                          58 <Checkbox className="pl-1"></Checkbox>
                        </p>
                      </div>
                    </div>
                    <p className="text-[#0068B3] font-medium  text-xs pt-1">
                      More
                    </p>
                  </div>
                </div>
                <hr
                  className={` transition-all duration-400 ${
                    isRotated8 ? "mt-5 mb-5" : "-mt-44 mb-5"
                  }`}
                ></hr>
              </div>

              <div className="ads-posted-div">
                <div className="flex justify-between">
                  <div>
                    <p className="font-medium text-md">Ads Posted</p>
                  </div>
                  <div className="cursor-pointer z-20">
                    <img
                      className={`${isRotated9 ? "rotate-180" : ""}`}
                      src={arrowUp}
                      alt="Arrow"
                      onClick={handleArrowClick9}
                    />
                  </div>
                </div>
                <div
                  className={`transition-all duration-150 ${
                    isRotated9
                      ? "flex items-center mt-5"
                      : "opacity-0 flex items-center"
                  }`}
                >
                  <div className="w-full">
                    <div className="flex justify-between w-full pb-4">
                      <div>
                        <p>Any Time</p>
                      </div>
                      <div>
                        <p>
                          45 <Checkbox className="pl-1"></Checkbox>
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between w-full pb-4">
                      <div>
                        <p>Today</p>
                      </div>
                      <div>
                        <p>
                          58 <Checkbox className="pl-1"></Checkbox>
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between w-full pb-4">
                      <div>
                        <p>Within 3 days</p>
                      </div>
                      <div>
                        <p>
                          58 <Checkbox className="pl-1"></Checkbox>
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between w-full pb-4">
                      <div>
                        <p>Within 1 week</p>
                      </div>
                      <div>
                        <p>
                          58 <Checkbox className="pl-1"></Checkbox>
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between w-full pb-4">
                      <div>
                        <p>Within 3 weeks</p>
                      </div>
                      <div>
                        <p>
                          58 <Checkbox className="pl-1"></Checkbox>
                        </p>
                      </div>
                    </div>
                    <p className="text-[#0068B3] font-medium  text-xs pt-1">
                      More
                    </p>
                  </div>
                </div>
                <hr
                  className={` transition-all duration-400 ${
                    isRotated9 ? "mt-5 mb-5" : "-mt-44 mb-5"
                  }`}
                ></hr>
              </div>

              <div className="transmition-type-div">
                <div className="flex justify-between">
                  <div>
                    <p className="font-medium text-md">Transmission Type</p>
                  </div>
                  <div className="cursor-pointer z-20">
                    <img
                      className={`${isRotated10 ? "rotate-180" : ""}`}
                      src={arrowUp}
                      alt="Arrow"
                      onClick={handleArrowClick10}
                    />
                  </div>
                </div>
                <div
                  className={`transition-all duration-150 ${
                    isRotated10
                      ? "flex items-center mt-5"
                      : "opacity-0 flex items-center"
                  }`}
                >
                  <div className="w-full">
                    <div className="flex justify-between w-full pb-4">
                      <div>
                        <p>Manual</p>
                      </div>
                      <div>
                        <p>
                          45 <Checkbox className="pl-1"></Checkbox>
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between w-full pb-4">
                      <div>
                        <p>Automatic</p>
                      </div>
                      <div>
                        <p>
                          58 <Checkbox className="pl-1"></Checkbox>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <hr
                  className={` transition-all duration-400 ${
                    isRotated10 ? "mt-5 mb-5" : "-mt-12 mb-5"
                  }`}
                ></hr>
              </div>

              <div className="highlights-div">
                <div className="flex justify-between">
                  <div>
                    <p className="font-medium text-md">Highlights</p>
                  </div>
                  <div className="cursor-pointer z-20">
                    <img
                      className={`${isRotated11 ? "rotate-180" : ""}`}
                      src={arrowUp}
                      alt="Arrow"
                      onClick={handleArrowClick11}
                    />
                  </div>
                </div>
                <div
                  className={`transition-all duration-150 ${
                    isRotated11
                      ? "flex items-center mt-5"
                      : "opacity-0 flex items-center"
                  }`}
                >
                  <div className="w-full">
                    <div className="flex justify-between w-full pb-4">
                      <div>
                        <p>Single Owner</p>
                      </div>
                      <div>
                        <p>
                          45 <Checkbox className="pl-1"></Checkbox>
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between w-full pb-4">
                      <div>
                        <p>In Warranty</p>
                      </div>
                      <div>
                        <p>
                          58 <Checkbox className="pl-1"></Checkbox>
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between w-full pb-4">
                      <div>
                        <p>Service History</p>
                      </div>
                      <div>
                        <p>
                          58 <Checkbox className="pl-1"></Checkbox>
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between w-full pb-4">
                      <div>
                        <p>No Accident</p>
                      </div>
                      <div>
                        <p>
                          58 <Checkbox className="pl-1"></Checkbox>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <hr
                  className={` transition-all duration-400 ${
                    isRotated11 ? "mt-5 mb-5" : "-mt-32 mb-5"
                  }`}
                ></hr>
              </div>

              <div className="export-status-div">
                <div className="flex justify-between">
                  <div>
                    <p className="font-medium text-md">Export Status</p>
                  </div>
                  <div className="cursor-pointer z-20">
                    <img
                      className={`${isRotated12 ? "rotate-180" : ""}`}
                      src={arrowUp}
                      alt="Arrow"
                      onClick={handleArrowClick12}
                    />
                  </div>
                </div>
                <div
                  className={`transition-all duration-150 ${
                    isRotated12
                      ? "flex items-center mt-5"
                      : "opacity-0 flex items-center"
                  }`}
                >
                  <div className="w-full">
                    <div className="flex justify-between w-full pb-4">
                      <div>
                        <p>Local (UAE) Only</p>
                      </div>
                      <div>
                        <p>
                          45 <Checkbox className="pl-1"></Checkbox>
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between w-full pb-4">
                      <div>
                        <p>Local (UAE) and Export</p>
                      </div>
                      <div>
                        <p>
                          58 <Checkbox className="pl-1"></Checkbox>
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between w-full pb-4">
                      <div>
                        <p>Export Only</p>
                      </div>
                      <div>
                        <p>
                          58 <Checkbox className="pl-1"></Checkbox>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <hr
                  className={` transition-all duration-400 ${
                    isRotated12 ? "mt-5 mb-5" : "-mt-20 mb-5"
                  }`}
                ></hr>
              </div>

              <div className="horse-power-div">
                <div className="flex justify-between">
                  <div>
                    <p className="font-medium text-md">Horse Power</p>
                  </div>
                  <div className="cursor-pointer z-20">
                    <img
                      className={`${isRotated13 ? "rotate-180" : ""}`}
                      src={arrowUp}
                      alt="Arrow"
                      onClick={handleArrowClick13}
                    />
                  </div>
                </div>
                <div
                  className={`transition-all duration-150 ${
                    isRotated13
                      ? "flex items-center mt-5"
                      : "opacity-0 flex items-center"
                  }`}
                >
                  <div className="w-full">
                    <div className="flex justify-between w-full pb-4">
                      <div>
                        <p>Less than 150 HP</p>
                      </div>
                      <div>
                        <p>
                          45 <Checkbox className="pl-1"></Checkbox>
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between w-full pb-4">
                      <div>
                        <p>150 - 200 HP</p>
                      </div>
                      <div>
                        <p>
                          58 <Checkbox className="pl-1"></Checkbox>
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between w-full pb-4">
                      <div>
                        <p>200 - 300 HP</p>
                      </div>
                      <div>
                        <p>
                          58 <Checkbox className="pl-1"></Checkbox>
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between w-full pb-4">
                      <div>
                        <p>300 - 400 HP</p>
                      </div>
                      <div>
                        <p>
                          58 <Checkbox className="pl-1"></Checkbox>
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between w-full pb-4">
                      <div>
                        <p>400 - 500 HP</p>
                      </div>
                      <div>
                        <p>
                          58 <Checkbox className="pl-1"></Checkbox>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <hr
                  className={` transition-all duration-400 ${
                    isRotated13 ? "mt-5 mb-5" : "-mt-40  mb-5"
                  }`}
                ></hr>
              </div>

              <div className="doors-div">
                <div className="flex justify-between">
                  <div>
                    <p className="font-medium text-md">Doors</p>
                  </div>
                  <div className="cursor-pointer z-20">
                    <img
                      className={`${isRotated14 ? "rotate-180" : ""}`}
                      src={arrowUp}
                      alt="Arrow"
                      onClick={handleArrowClick14}
                    />
                  </div>
                </div>
                <div
                  className={`transition-all duration-150 ${
                    isRotated14
                      ? "flex items-center mt-5"
                      : "opacity-0 flex items-center"
                  }`}
                >
                  <div className="w-full">
                    <div className="flex justify-between w-full pb-4">
                      <div>
                        <p>2 door</p>
                      </div>
                      <div>
                        <p>
                          45 <Checkbox className="pl-1"></Checkbox>
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between w-full pb-4">
                      <div>
                        <p>3 door</p>
                      </div>
                      <div>
                        <p>
                          58 <Checkbox className="pl-1"></Checkbox>
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between w-full pb-4">
                      <div>
                        <p>3 door</p>
                      </div>
                      <div>
                        <p>
                          58 <Checkbox className="pl-1"></Checkbox>
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between w-full pb-4">
                      <div>
                        <p>4 door</p>
                      </div>
                      <div>
                        <p>
                          58 <Checkbox className="pl-1"></Checkbox>
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between w-full pb-4">
                      <div>
                        <p> +5 </p>
                      </div>
                      <div>
                        <p>
                          58 <Checkbox className="pl-1"></Checkbox>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <hr
                  className={` transition-all duration-400 ${
                    isRotated14 ? "mt-5 mb-5" : "-mt-40 mb-5"
                  }`}
                ></hr>
              </div>

              <div className="technical-features-div">
                <div className="flex justify-between">
                  <div>
                    <p className="font-medium text-md">Technical Features</p>
                  </div>
                  <div className="cursor-pointer z-20">
                    <img
                      className={`${isRotated15 ? "rotate-180" : ""}`}
                      src={arrowUp}
                      alt="Arrow"
                      onClick={handleArrowClick15}
                    />
                  </div>
                </div>
                <div
                  className={`transition-all duration-150 ${
                    isRotated15
                      ? "flex items-center mt-5"
                      : "opacity-0 flex items-center"
                  }`}
                >
                  <div className="w-full">
                    <div className="flex justify-between w-full pb-4">
                      <div>
                        <p>4 Wheel Drive</p>
                      </div>
                      <div>
                        <p>
                          45 <Checkbox className="pl-1"></Checkbox>
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between w-full pb-4">
                      <div>
                        <p>All Wheel Drive</p>
                      </div>
                      <div>
                        <p>
                          58 <Checkbox className="pl-1"></Checkbox>
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between w-full pb-4">
                      <div>
                        <p>All Wheel Steering</p>
                      </div>
                      <div>
                        <p>
                          58 <Checkbox className="pl-1"></Checkbox>
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between w-full pb-4">
                      <div>
                        <p>Cruise Control</p>
                      </div>
                      <div>
                        <p>
                          58 <Checkbox className="pl-1"></Checkbox>
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between w-full pb-4">
                      <div>
                        <p> Anti-Lock Brakes/ABS </p>
                      </div>
                      <div>
                        <p>
                          58 <Checkbox className="pl-1"></Checkbox>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <hr
                  className={` transition-all duration-400 ${
                    isRotated15 ? "mt-5 mb-5" : "-mt-40 mb-5"
                  }`}
                ></hr>
              </div>

              <div className="extras-div">
                <div className="flex justify-between">
                  <div>
                    <p className="font-medium text-md">Extras</p>
                  </div>
                  <div className="cursor-pointer z-20">
                    <img
                      className={`${isRotated16 ? "rotate-180" : ""}`}
                      src={arrowUp}
                      alt="Arrow"
                      onClick={handleArrowClick16}
                    />
                  </div>
                </div>
                <div
                  className={`transition-all duration-150 ${
                    isRotated16
                      ? "flex items-center mt-5"
                      : "opacity-0 flex items-center"
                  }`}
                >
                  <div className="w-full">
                    <div className="flex justify-between w-full pb-4">
                      <div>
                        <p>Air Conditioning</p>
                      </div>
                      <div>
                        <p>
                          45 <Checkbox className="pl-1"></Checkbox>
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between w-full pb-4">
                      <div>
                        <p>Alram/Anti-Theft System</p>
                      </div>
                      <div>
                        <p>
                          58 <Checkbox className="pl-1"></Checkbox>
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between w-full pb-4">
                      <div>
                        <p>AM/FM Radio</p>
                      </div>
                      <div>
                        <p>
                          58 <Checkbox className="pl-1"></Checkbox>
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between w-full pb-4">
                      <div>
                        <p>Aux Audio In</p>
                      </div>
                      <div>
                        <p>
                          58 <Checkbox className="pl-1"></Checkbox>
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between w-full pb-4">
                      <div>
                        <p> Bluetooth System </p>
                      </div>
                      <div>
                        <p>
                          58 <Checkbox className="pl-1"></Checkbox>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <hr
                  className={` transition-all duration-400 ${
                    isRotated16 ? "mt-5 mb-5" : "-mt-40 mb-5"
                  }`}
                ></hr>
              </div>

              <div className="warranty-div">
                <div className="flex justify-between">
                  <div>
                    <p className="font-medium text-md">Warranty</p>
                  </div>
                  <div className="cursor-pointer z-20">
                    <img
                      className={`${isRotated17 ? "rotate-180" : ""}`}
                      src={arrowUp}
                      alt="Arrow"
                      onClick={handleArrowClick17}
                    />
                  </div>
                </div>
                <div
                  className={`transition-all duration-150 ${
                    isRotated17
                      ? "flex items-center mt-5"
                      : "opacity-0 flex items-center"
                  }`}
                >
                  <div className="w-full">
                    <div className="flex justify-between w-full pb-4">
                      <div>
                        <p>Yes</p>
                      </div>
                      <div>
                        <p>
                          45 <Checkbox className="pl-1"></Checkbox>
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between w-full pb-4">
                      <div>
                        <p>No</p>
                      </div>
                      <div>
                        <p>
                          58 <Checkbox className="pl-1"></Checkbox>
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between w-full pb-4">
                      <div>
                        <p>Does not apply</p>
                      </div>
                      <div>
                        <p>
                          58 <Checkbox className="pl-1"></Checkbox>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <hr
                  className={` transition-all duration-400 ${
                    isRotated17 ? "mt-5 mb-5" : "-mt-20 mb-5"
                  }`}
                ></hr>
              </div>

              <div className="cylinders-div">
                <div className="flex justify-between">
                  <div>
                    <p className="font-medium text-md">No. of Cylinders</p>
                  </div>
                  <div className="cursor-pointer z-20">
                    <img
                      className={`${isRotated18 ? "rotate-180" : ""}`}
                      src={arrowUp}
                      alt="Arrow"
                      onClick={handleArrowClick18}
                    />
                  </div>
                </div>
                <div
                  className={`transition-all duration-150 ${
                    isRotated18
                      ? "flex items-center mt-5"
                      : "opacity-0 flex items-center"
                  }`}
                >
                  <div className="w-full">
                    <div className="flex justify-between w-full pb-4">
                      <div>
                        <p>3</p>
                      </div>
                      <div>
                        <p>
                          45 <Checkbox className="pl-1"></Checkbox>
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between w-full pb-4">
                      <div>
                        <p>4</p>
                      </div>
                      <div>
                        <p>
                          58 <Checkbox className="pl-1"></Checkbox>
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between w-full pb-4">
                      <div>
                        <p>5</p>
                      </div>
                      <div>
                        <p>
                          58 <Checkbox className="pl-1"></Checkbox>
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between w-full pb-4">
                      <div>
                        <p>6</p>
                      </div>
                      <div>
                        <p>
                          58 <Checkbox className="pl-1"></Checkbox>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <hr
                  className={` transition-all duration-400 ${
                    isRotated18 ? "mt-5 mb-5" : "-mt-28 mb-5"
                  }`}
                ></hr>
              </div>

              <div className="steering-side-div">
                <div className="flex justify-between">
                  <div>
                    <p className="font-medium text-md">Steering Side</p>
                  </div>
                  <div className="cursor-pointer z-20">
                    <img
                      className={`${isRotated19 ? "rotate-180" : ""}`}
                      src={arrowUp}
                      alt="Arrow"
                      onClick={handleArrowClick19}
                    />
                  </div>
                </div>
                <div
                  className={`transition-all duration-150 ${
                    isRotated19
                      ? "flex items-center mt-5"
                      : "opacity-0 flex items-center"
                  }`}
                >
                  <div className="w-full">
                    <div className="flex justify-between w-full pb-4">
                      <div>
                        <p>Left Hand Side</p>
                      </div>
                      <div>
                        <p>
                          45 <Checkbox className="pl-1"></Checkbox>
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between w-full pb-4">
                      <div>
                        <p>Right Hand Side</p>
                      </div>
                      <div>
                        <p>
                          58 <Checkbox className="pl-1"></Checkbox>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <hr
                  className={` transition-all duration-400 ${
                    isRotated19 ? "mt-5 mb-5" : "-mt-12 mb-5"
                  }`}
                ></hr>
              </div>

              <div className="more-filter-div">
                <div className="flex justify-between">
                  <div>
                    <p className="font-medium text-md">More Filter</p>
                  </div>
                  <div className="cursor-pointer z-20">
                    <img
                      className={`${isRotated20 ? "rotate-180" : ""}`}
                      src={arrowUp}
                      alt="Arrow"
                      onClick={handleArrowClick20}
                    />
                  </div>
                </div>
                <div
                  className={`transition-all duration-150 ${
                    isRotated20
                      ? "flex items-center mt-5"
                      : "opacity-0 flex items-center"
                  }`}
                >
                  <div className="w-full">
                    <div className="flex justify-between w-full pb-4">
                      <div>
                        <p>Show ads with photos Only</p>
                      </div>
                      <div>
                        <p>
                          45 <Checkbox className="pl-1"></Checkbox>
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between w-full pb-4">
                      <div>
                        <p>Show ads in English Only</p>
                      </div>
                      <div>
                        <p>
                          58 <Checkbox className="pl-1"></Checkbox>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <hr
                  className={` transition-all duration-400 ${
                    isRotated20 ? "mt-5 mb-5" : "-mt-12 mb-5"
                  }`}
                ></hr>
              </div>
            </div>
          </Drawer>
        </div>

        <div className="card-shadow my-5 p-4 px-4 lg:w-full w-full mx-auto">
          <div className="pr-3 pl-3">
            <h1 className=" font-medium text-md text-gray-500">
              We found 18 Ads for
              <span className="text-black text-lg pl-1">"Range Rover HSE"</span>
            </h1>

            <div className="flex mt-5">
              <p className="pr-5 text-sm font-bold">Searching in</p>
              <p className="pr-3 text-sm underline text-[#0068B3]">
                Discovery Sports
              </p>
              <p className="pr-3 text-sm ">Defender</p>
              <p className="pr-3 text-sm text-gray-500">Velar</p>
              <p className="pr-3 text-sm text-gray-500">Evoque</p>
            </div>

            <div className="mt-5 search-items">
              <Space wrap>
                <div className="used-cars-custom-search">
                  <Select
                    className="search-results-custom-dropdown used-cars-custom-dropdown"
                    defaultValue={{
                      value: "dubai",
                      label: (
                        <div className="flex items-center justify-between">
                          <div>
                            <p>Dubai</p>
                          </div>
                          <div className="pr-2">
                            <img
                              src={selectDownArrow}
                              alt="Select Down Arrow"
                            />
                          </div>
                        </div>
                      ),
                    }}
                    suffixIcon={null}
                    style={{
                      width: 242,
                    }}
                    onChange={handleChange}
                    options={[
                      {
                        value: "jack",
                        label: (
                          <div className="flex items-center">
                            <div className="pr-2 ">
                              <img src={locateIcon} alt="Locate Icon" />
                            </div>
                            <div>
                              <p className="text-[#0068B3]">Locate me</p>
                            </div>
                          </div>
                        ),
                      },
                      {
                        value: "lucy",
                        label: "Umm Al Sheif",
                      },
                      {
                        value: "Yiminghe",
                        label: "Al Bastakiya",
                      },
                      {
                        value: "Yiminghe",
                        label: "Ras al Khaimah",
                      },
                      {
                        value: "Yiminghe",
                        label: "Bur Dubai",
                      },
                      {
                        value: "Yiminghe",
                        label: "Business Bay",
                      },
                      {
                        value: "Yiminghe",
                        label: "Downtown Dubai",
                      },
                      {
                        value: "Yiminghe",
                        label: "Dubai Marina",
                      },
                      {
                        value: "Yiminghe",
                        label: "Al Karama",
                      },
                    ]}
                  />

                  <Select
                    className="search-results-custom-dropdown used-cars-custom-dropdown"
                    defaultValue={{
                      value: "dubai",
                      label: (
                        <div className="flex items-center justify-between">
                          <div>
                            <p>Land Rover</p>
                          </div>
                          <div className="pr-2">
                            <img
                              src={selectDownArrow}
                              alt="Select Down Arrow"
                            />
                          </div>
                        </div>
                      ),
                    }}
                    suffixIcon={null}
                    style={{
                      width: 242,
                    }}
                    onChange={handleChange}
                    options={[
                      {
                        value: "jack",
                        label: "Cars",
                      },
                      {
                        value: "lucy",
                        label: "Home Appliances",
                      },
                      {
                        value: "Yiminghe",
                        label: "Furnitures",
                      },
                      {
                        value: "disabled",
                        label: "Disabled",
                        disabled: true,
                      },
                    ]}
                  />

                  <Select
                    className="search-results-custom-dropdown used-cars-custom-dropdown"
                    defaultValue={{
                      value: "dubai",
                      label: (
                        <div className="flex items-center justify-between">
                          <div>
                            <p>Range Rover</p>
                          </div>
                          <div className="pr-2">
                            <img
                              src={selectDownArrow}
                              alt="Select Down Arrow"
                            />
                          </div>
                        </div>
                      ),
                    }}
                    suffixIcon={null}
                    style={{
                      width: 242,
                    }}
                    onChange={handleChange}
                    options={[
                      {
                        value: "jack",
                        label: "Watch",
                      },
                      {
                        value: "lucy",
                        label: "Laptop",
                      },
                      {
                        value: "Yiminghe",
                        label: "Accessories",
                      },
                      {
                        value: "Yiminghe",
                        label: "Charger",
                      },
                      {
                        value: "disabled",
                        label: "Disabled",
                        disabled: true,
                      },
                    ]}
                  />

                  <Select
                    className="search-results-custom-dropdown used-cars-custom-dropdown"
                    defaultValue={{
                      value: "dubai",
                      label: (
                        <div className="flex items-center justify-between">
                          <div>
                            <p>Sports HSE</p>
                          </div>
                          <div className="pr-2">
                            <img
                              src={selectDownArrow}
                              alt="Select Down Arrow"
                            />
                          </div>
                        </div>
                      ),
                    }}
                    suffixIcon={null}
                    style={{
                      width: 242,
                    }}
                    onChange={handleChange}
                    options={[
                      {
                        value: "jack",
                        label: "Jack",
                      },
                      {
                        value: "lucy",
                        label: "Lucy",
                      },
                      {
                        value: "Yiminghe",
                        label: "yiminghe",
                      },
                      {
                        value: "disabled",
                        label: "Disabled",
                        disabled: true,
                      },
                    ]}
                  />

                  <Select
                    className="search-results-custom-dropdown used-cars-custom-dropdown"
                    defaultValue={{
                      value: "dubai",
                      label: (
                        <div className="flex items-center justify-between">
                          <div>
                            <p>Sort</p>
                          </div>
                          <div className="pr-2">
                            <img
                              src={selectDownArrow}
                              alt="Select Down Arrow"
                            />
                          </div>
                        </div>
                      ),
                    }}
                    suffixIcon={null}
                    style={{
                      width: 242,
                    }}
                    onChange={handleChange}
                    options={[
                      {
                        value: "jack",
                        label: "Jack",
                      },
                      {
                        value: "lucy",
                        label: "Lucy",
                      },
                      {
                        value: "Yiminghe",
                        label: "yiminghe",
                      },
                      {
                        value: "disabled",
                        label: "Disabled",
                        disabled: true,
                      },
                    ]}
                  />

                  <Select
                    className="search-results-custom-dropdown used-cars-custom-dropdown"
                    defaultValue={{
                      value: "dubai",
                      label: (
                        <div className="flex items-center justify-between">
                          <div>
                            <p>All Filter</p>
                          </div>
                          <div className="pr-2">
                            <img src={filterIcon} alt="filter Icon" />
                          </div>
                        </div>
                      ),
                    }}
                    suffixIcon={null}
                    onClick={showDrawer}
                    style={{
                      width: 242,
                    }}
                    onChange={handleChange}
                    options={[
                      {
                        value: "jack",
                        label: "Jack",
                      },
                      {
                        value: "lucy",
                        label: "Lucy",
                      },
                      {
                        value: "Yiminghe",
                        label: "yiminghe",
                      },
                      {
                        value: "disabled",
                        label: "Disabled",
                        disabled: true,
                      },
                    ]}
                  />
                </div>
              </Space>
            </div>

            <div className="flex mt-5">
              <div>
                <p className="mr-14 text-sm">
                  <span className="pr-1 text-[#667085]">X</span> Single Owner
                </p>
              </div>
              <div>
                <p className="text-sm">
                  <span className="pr-1 text-[#667085]">X</span> Japanese Specs
                </p>
              </div>
            </div>

            <div className="flex mt-20 gap-4  justify-between">
              <UsedCarCards />
              <UsedCarCards />
              <UsedCarCards />
              <UsedCarCards />
            </div>

            <div className="flex mt-20 gap-4  justify-between">
              <UsedCarCards />
              <UsedCarCards />
              <UsedCarCards />
              <UsedCarCards />
            </div>

            <AdsComponent />

            <div className="flex mt-20 gap-4  justify-between">
              <UsedCarCards />
              <UsedCarCards />
              <UsedCarCards />
              <UsedCarCards />
            </div>

            <div className="flex mt-20 gap-4  justify-between">
              <UsedCarCards />
              <UsedCarCards />
              <UsedCarCards />
              <UsedCarCards />
            </div>

            <div className="mt-16 flex justify-center">
              <Button
                className="show-more-button h-10"
                icon={<img src={plusSign} alt="Plus Sign" />} // Add the plus sign image
              >
                Show More
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="card-shadow my-5 p-4 px-4 lg:w-full w-full mx-auto">
          <div className="pr-3 pl-3">
            <h1 className=" font-bold text-md ">Related items</h1>

            <div className="mt-5 mb-5 search-items">
              <Space wrap>
                <Select
                  className="search-results-custom-dropdown"
                  defaultValue="iPhone 13"
                  style={{
                    width: 100,
                  }}
                  onChange={handleChange}
                  options={[
                    {
                      value: "jack",
                      label: "Jack",
                    },
                    {
                      value: "lucy",
                      label: "Lucy",
                    },
                    {
                      value: "Yiminghe",
                      label: "yiminghe",
                    },
                    {
                      value: "disabled",
                      label: "Disabled",
                      disabled: true,
                    },
                  ]}
                />

                <Select
                  className="search-results-custom-dropdown"
                  defaultValue="S20 Ultra"
                  style={{
                    width: 100,
                  }}
                  onChange={handleChange}
                  options={[
                    {
                      value: "jack",
                      label: "Jack",
                    },
                    {
                      value: "lucy",
                      label: "Lucy",
                    },
                    {
                      value: "Yiminghe",
                      label: "yiminghe",
                    },
                    {
                      value: "disabled",
                      label: "Disabled",
                      disabled: true,
                    },
                  ]}
                />

                <Select
                  className="search-results-custom-dropdown"
                  defaultValue="iPhone 12"
                  style={{
                    width: 100,
                  }}
                  onChange={handleChange}
                  options={[
                    {
                      value: "jack",
                      label: "Jack",
                    },
                    {
                      value: "lucy",
                      label: "Lucy",
                    },
                    {
                      value: "Yiminghe",
                      label: "yiminghe",
                    },
                    {
                      value: "disabled",
                      label: "Disabled",
                      disabled: true,
                    },
                  ]}
                />

                <Select
                  className="search-results-custom-dropdown"
                  defaultValue="Galaxy Prime"
                  removeIcon
                  style={{
                    width: 100,
                  }}
                  onChange={handleChange}
                  options={[
                    {
                      value: "jack",
                      label: "Jack",
                    },
                    {
                      value: "lucy",
                      label: "Lucy",
                    },
                    {
                      value: "Yiminghe",
                      label: "yiminghe",
                    },
                    {
                      value: "disabled",
                      label: "Disabled",
                      disabled: true,
                    },
                  ]}
                />
              </Space>
            </div>

            <Carousel responsive={responsives} infinite={false}>
              <div>
                <UsedCarCards />
              </div>
              <div>
                <UsedCarCards />
              </div>
              <div>
                <UsedCarCards />
              </div>
              <div>
                <UsedCarCards />
              </div>
              <div>
                <UsedCarCards />
              </div>
            </Carousel>
          </div>

          <div className="mt-10 pl-3 mb-7 flex items-center cursor-pointer">
            <div>
              <p className="text-[#0068B3]"> View All</p>
            </div>
            <div className="pl-2">
              <img src={rightArrow} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UsedCars;
