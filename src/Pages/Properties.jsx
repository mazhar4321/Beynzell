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
import PropertiesCards from "../component/propertiesCard/PropertiesCards";

const { Search } = Input;

function Properties() {
  const [isRotated, setIsRotated] = useState(true);
  const [isRotated2, setIsRotated2] = useState(true);
  const [isRotated3, setIsRotated3] = useState(true);
  const [isRotated4, setIsRotated4] = useState(false);
  const [isRotated5, setIsRotated5] = useState(false);
  const [isRotated6, setIsRotated6] = useState(false);
  const [isRotated7, setIsRotated7] = useState(false);
  const [isRotated8, setIsRotated8] = useState(false);
  const [isRotated9, setIsRotated9] = useState(false);
  const [isRotated10, setIsRotated10] = useState(false);

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
                  <Button className="w-44 h-9 bg-[#0068B3] text-white">
                    Apply
                  </Button>
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
                    min={0}
                    // defaultValue={0}
                    placeholder="0"
                    onChange={onChange}
                  />
                </div>
                <p className="pl-2 pr-2">To</p>
                <div>
                  <InputNumber
                    style={{
                      width: 150,
                    }}
                    min={0}
                    // defaultValue={200000}
                    placeholder="200000"
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
                  <p className="font-medium">Beds</p>
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
                    // placeholder="hello"
                    style={{
                      width: 330,
                    }}
                    min={0}
                    defaultValue={0}
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
                  <p className="font-medium">Amenities </p>
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
                <div className="w-full">
                  <div className="flex justify-between w-full pb-4">
                    <div>
                      <p>Maids Room</p>
                    </div>
                    <div>
                      <p>
                        45 <Checkbox className="pl-1"></Checkbox>
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between w-full pb-4">
                    <div>
                      <p>Central A/C & Heating</p>
                    </div>
                    <div>
                      <p>
                        73 <Checkbox className="pl-1"></Checkbox>
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between w-full pb-4">
                    <div>
                      <p>Study</p>
                    </div>
                    <div>
                      <p>
                        25 <Checkbox className="pl-1"></Checkbox>
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between w-full pb-4">
                    <div>
                      <p>Balcony</p>
                    </div>
                    <div>
                      <p>
                        77 <Checkbox className="pl-1"></Checkbox>
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between w-full pb-4">
                    <div>
                      <p>Private Garden</p>
                    </div>
                    <div>
                      <p>
                        42 <Checkbox className="pl-1"></Checkbox>
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between w-full pb-4">
                    <div>
                      <p>Security</p>
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
                className={` transition-all duration-200 ${
                  isRotated3 ? "mt-10 mb-5" : "-mt-52 mb-5"
                }`}
              ></hr>

              <div className="color-full-div-1">
                <div className="flex justify-between">
                  <div>
                    <p className="font-medium">Listed </p>
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
                  <div className="w-full">
                    <div className="flex justify-between w-full pb-4">
                      <div>
                        <p>LandLord</p>
                      </div>
                      <div>
                        <p>
                          45 <Checkbox className="pl-1"></Checkbox>
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between w-full pb-4">
                      <div>
                        <p>Agent</p>
                      </div>
                      <div>
                        <p>
                          73 <Checkbox className="pl-1"></Checkbox>
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between w-full pb-4">
                      <div>
                        <p>Developer</p>
                      </div>
                      <div>
                        <p>
                          25 <Checkbox className="pl-1"></Checkbox>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <hr
                  className={` transition-all duration-300 ${
                    isRotated4 ? "mt-3 mb-5" : " -mt-20 mb-7 "
                  }`}
                ></hr>
              </div>

              <div className="color-full-div-2">
                <div className="flex justify-between">
                  <div>
                    <p className="font-medium">Rent is Paid </p>
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
                  <div className="w-full">
                    <div className="flex justify-between w-full pb-4">
                      <div>
                        <p>Yearly</p>
                      </div>
                      <div>
                        <p>
                          45 <Checkbox className="pl-1"></Checkbox>
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between w-full pb-4">
                      <div>
                        <p>Monthly</p>
                      </div>
                      <div>
                        <p>
                          73 <Checkbox className="pl-1"></Checkbox>
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between w-full pb-4">
                      <div>
                        <p>Quaterly</p>
                      </div>
                      <div>
                        <p>
                          25 <Checkbox className="pl-1"></Checkbox>
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between w-full pb-4">
                      <div>
                        <p>Bi-Yearly</p>
                      </div>
                      <div>
                        <p>
                          77 <Checkbox className="pl-1"></Checkbox>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <hr
                  className={` transition-all duration-300 ${
                    isRotated5 ? "mt-10 mb-5" : " -mt-32 mb-7"
                  }`}
                ></hr>
              </div>

              <div className="color-full-div-2">
                <div className="flex justify-between">
                  <div>
                    <p className="font-medium">Ads Posted </p>
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
                  className={`transition-all duration-600 ${
                    isRotated6 ? "mt-5 mb-5" : "opacity-0"
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
                          73 <Checkbox className="pl-1"></Checkbox>
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between w-full pb-4">
                      <div>
                        <p>Within 3 days</p>
                      </div>
                      <div>
                        <p>
                          25 <Checkbox className="pl-1"></Checkbox>
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between w-full pb-4">
                      <div>
                        <p>Within 1 week</p>
                      </div>
                      <div>
                        <p>
                          77 <Checkbox className="pl-1"></Checkbox>
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between w-full pb-4">
                      <div>
                        <p>Within 2 weeks</p>
                      </div>
                      <div>
                        <p>
                          77 <Checkbox className="pl-1"></Checkbox>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <hr
                  className={` transition-all duration-300 ${
                    isRotated6 ? "mt-10 mb-5" : " -mt-40 mb-7"
                  }`}
                ></hr>
              </div>

              <div className="seller-type-div">
                <div className="flex justify-between">
                  <div>
                    <p className="font-medium text-md">Keywords</p>
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
                  <Input
                    placeholder="Ref number"
                    prefix={<SearchOutlined style={{ color: "#999" }} />}
                  />
                </div>
                <hr
                  className={` transition-all duration-400 ${
                    isRotated7 ? "mt-5 mb-5" : "-mt-0 mb-5"
                  }`}
                ></hr>
              </div>

              <div className="body-type-div">
                <div className="flex justify-between">
                  <div>
                    <p className="font-medium text-md">Bathroom</p>
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
                      <InputNumber
                    style={{
                      width: 370,
                    }}
                    min={0}
                    defaultValue={0}
                    // onChange={onChange}
                  />
                </div>
                <hr
                  className={` transition-all duration-400 ${
                    isRotated8 ? "mt-5 mb-5" : "-mt-2 mb-7"
                  }`}
                ></hr>
              </div>

              <div className="ads-posted-div">
                <div className="flex justify-between">
                  <div>
                    <p className="font-medium text-md">Size (Sqft)</p>
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
              <div className="">
                  <InputNumber
                    style={{
                      width: 150,
                    }}
                    min={1}
                    // defaultValue={1}
                    placeholder="Min"
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
                    // defaultValue={1}
                    placeholder="Max"
                    onChange={onChange}
                  />
                </div>
                </div>
                <hr
                  className={` transition-all duration-400 ${
                    isRotated9 ? "mt-5 mb-5" : "-mt-2 mb-7"
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
                        <p>Show ads with photos only</p>
                      </div>
                      <div>
                        <p>
                          45 <Checkbox className="pl-1"></Checkbox>
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between w-full pb-4">
                      <div>
                        <p>Show ads in english only</p>
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



            </div>
          </Drawer>
        </div>

        <div className="card-shadow my-5 p-4 px-4 lg:w-full w-full mx-auto">
          <div className="pr-3 pl-3">
            <h1 className=" font-medium text-md text-gray-500">
              We found 18 Ads for
              <span className="text-black text-lg pl-1">
                "Properties for rent in Mohammad Bin Rashid City"
              </span>
            </h1>

            <div className="flex mt-5">
              <p className="pr-5 text-sm font-bold">Searching in</p>
              <p className="pr-3 text-sm underline text-[#0068B3]">
                Resedention for rent
              </p>
              <p className="pr-3 text-sm ">Commercials for rent</p>
              <p className="pr-3 text-sm text-gray-500">
                Room for rents (flatemates)
              </p>
              <p className="pr-3 text-sm text-gray-500">Short Term (monthly)</p>
              <p className="pr-3 text-sm text-gray-500">Short Term (Daily)</p>
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
                            <p>Mohammad Bin Rashid City</p>
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
                      width: 400,
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
                            <p>Appartment/flat for rent</p>
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
                      width: 350,
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

                  {/* <Select
                    className="search-results-custom-dropdown used-cars-custom-dropdown"
                    defaultValue={{
                      value: "dubai",
                      label: (
                        <div className="flex items-center justify-between">
                          <div>
                            <p>All Filter</p>
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
                  /> */}

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
                  <span className="pr-1 text-[#667085]">X</span> Land Lord
                </p>
              </div>
              <div>
                <p className="text-sm">
                  <span className="pr-1 text-[#667085]">X</span> Yearly
                </p>
              </div>
            </div>

            <div className="flex mt-20 gap-4  justify-between">
              <PropertiesCards />
              <PropertiesCards />
              <PropertiesCards />
              <PropertiesCards />
            </div>

            <div className="flex mt-20 gap-4  justify-between">
              <PropertiesCards />
              <PropertiesCards />
              <PropertiesCards />
              <PropertiesCards />
            </div>

            <AdsComponent />

            <div className="flex mt-20 gap-4  justify-between">
              <PropertiesCards />
              <PropertiesCards />
              <PropertiesCards />
              <PropertiesCards />
            </div>

            <div className="flex mt-20 gap-4  justify-between">
              <PropertiesCards />
              <PropertiesCards />
              <PropertiesCards />
              <PropertiesCards />
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
                <PropertiesCards />
              </div>
              <div>
                <PropertiesCards />
              </div>
              <div>
                <PropertiesCards />
              </div>
              <div>
                <PropertiesCards />
              </div>
              <div>
                <PropertiesCards />
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

export default Properties;
