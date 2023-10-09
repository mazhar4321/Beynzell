import React, { useState } from "react";
import Headerss from "../component/Home/Header";
import AdsComponent from "../component/AdsComponent";
import { Breadcrumb, Switch, Select, Space, Button} from "antd";
import "../Pages/SearchResults.css";
import MobileCards from "../component/mobilecard/MobileCard";
import plusSign from "../assets/showMorePlus.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import rightArrow from "../assets/arrow-right.png";
import locateIcon from "../assets/locateIcon.png";
import selectDownArrow from "../assets/selectDownArrow.png"
import "../Pages/UsedCars.css"




function SearchResults() {



  const handleChange = (value) => {
    console.log(`selected ${value}`);
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

        <div className="card-shadow my-5 p-4 px-4 lg:w-full w-full mx-auto">
          <div className="pr-3 pl-3">
            <h1 className=" font-medium text-md text-gray-500">
              We found 120 Ads for{" "}
              <span className="text-black text-lg">"iPhone 13"</span>
            </h1>

            <div className="flex mt-5">
              <p className="pr-5 text-sm font-bold">Searching in</p>
              <p className="pr-3 text-sm underline text-[#0068B3]">
                Accessories
              </p>
              <p className="pr-3 text-sm text-gray-500">iPad</p>
              <p className="pr-3 text-sm text-gray-500">MacBook</p>
              <p className="pr-3 text-sm text-gray-500">Pro max</p>
            </div>

            <div className="mt-5 search-items">
              <Space wrap>
                <Select
                  className="search-results-custom-dropdown used-cars-custom-dropdown"
                  defaultValue={{
                    value: 'dubai',
                    label: (
                      <div className="flex items-center justify-between">
                            <div>
                          <p>Dubai</p>
                        </div>
                        <div className="pr-2">
                          <img src={selectDownArrow} alt="Select Down Arrow" />
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
                   value: 'Electronics',
                   label: (
                     <div className="flex items-center justify-between">
                           <div>
                         <p>Electronics</p>
                       </div>
                       <div className="pr-2">
                         <img src={selectDownArrow} alt="Select Down Arrow" />
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
                   value: 'dubai',
                   label: (
                     <div className="flex items-center justify-between">
                           <div>
                         <p>Mobile</p>
                       </div>
                       <div className="pr-2">
                         <img src={selectDownArrow} alt="Select Down Arrow" />
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
                   value: 'dubai',
                   label: (
                     <div className="flex items-center justify-between">
                           <div>
                         <p>Keywords</p>
                       </div>
                       <div className="pr-2">
                         <img src={selectDownArrow} alt="Select Down Arrow" />
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
                   value: 'dubai',
                   label: (
                     <div className="flex items-center justify-between">
                           <div>
                         <p>Sort</p>
                       </div>
                       <div className="pr-2">
                         <img src={selectDownArrow} alt="Select Down Arrow" />
                       </div>
                     </div>
                   ),
                 }}
                 suffixIcon={null}
                  style={{
                    width: 222,
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
                   value: 'dubai',
                   label: (
                     <div className="flex items-center justify-between">
                           <div>
                         <p>All Filter</p>
                       </div>
                       <div className="pr-2">
                         <img src={selectDownArrow} alt="Select Down Arrow" />
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
              </Space>
            </div>

            <div className="flex mt-5">
              <div>
                <p className="mr-14 text-sm">
                  <span className="pr-1 text-[#667085]">X</span> 128 GB
                </p>
              </div>
              <div>
                <p className="text-sm">
                  <span className="pr-1 text-[#667085]">X</span> New
                </p>
              </div>
            </div>

            <div className="flex mt-20 gap-4  justify-between">
              <MobileCards />
              <MobileCards />
              <MobileCards />
              <MobileCards />
            </div>

            <div className="flex mt-20 gap-4  justify-between">
              <MobileCards />
              <MobileCards />
              <MobileCards />
              <MobileCards />
            </div>

            <AdsComponent />

            <div className="flex mt-20 gap-4  justify-between">
              <MobileCards />
              <MobileCards />
              <MobileCards />
              <MobileCards />
            </div>

            <div className="flex mt-20 gap-4  justify-between">
              <MobileCards />
              <MobileCards />
              <MobileCards />
              <MobileCards />
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

            <Carousel responsive={responsives} infinit={false}>
              <div>
                <MobileCards />
              </div>
              <div>
                <MobileCards />
              </div>
              <div>
                <MobileCards />
              </div>
              <div>
                <MobileCards />
              </div>
              <div>
                <MobileCards />
              </div>
            </Carousel>

            {/* <MobileCards />
              <MobileCards />
              <MobileCards />
              <MobileCards /> */}
          </div>

          <div className="mt-10 pl-3 mb-7 flex items-center cursor-pointer">
            <div>
              <p className="text-[#0068B3]"> View All</p>
            </div>
            <div className="pl-2 ">
              <img src={rightArrow} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchResults;
