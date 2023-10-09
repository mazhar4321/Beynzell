import {
  Button,
  Input,
  Select,
  Drawer,
 
  DatePicker,
  Radio,
  Space,
  Table,
  Tag,
  Modal,
  notification 
} from "antd";
import React, { useState } from "react";
import Add from "../../../assets/add.svg";
import search from "../../../assets/search-lg.svg";
import filterIcon from "../../../assets/filterIcon.png";
import arrowUp from "../../../assets/arrow-up.png";
import arrowDown from "../../../assets/arrow-down.svg";
import selectDownArrow from "../../../assets/selectDownArrow.png";
import TableCell from "../../../assets/Table-cell.png";
import CarImg from "../../../assets/carimg.png";
import BackArrow from "../../../assets/Testiomonial-back-arrow.png";
import RightArrow from "../../../assets/Testiomonial-arrow.png";
import Sliderimg from "../../../assets/carousal-image.png";
import Sliderimg2 from "../../../assets/image-7.png";
import Sliderimg3 from "../../../assets/image-8.png";
import userIcon from "../../../assets/singleUserIcon.png";
import noDamageIcon from "../../../assets/noDamageIcon.png";
import warrantyIcon from "../../../assets/warrantyIcon.png";
import TickCircle from "../../../assets/tick-circle.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";



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

const columns = [
  {
    title: (
      <div className="flex gap-1 items-center">
        <h1>Ads</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M8.00016 3.33301V12.6663M8.00016 12.6663L12.6668 7.99967M8.00016 12.6663L3.3335 7.99967"
            stroke="#475467"
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    ),
    dataIndex: "name",
    key: "name",
    render: (_, record, index) => (
      <div className={`flex gap-1 items-center ${index === 0 ? "w-80" : ""}`}>
        <div className="flex gap-3 items-center">
          <img src={CarImg} alt="" /> {/* Image */}
          <div>
            <h1 className="text-colorPrimary font-medium">{record.name}</h1>{" "}
            {/* Name */}
            <h1 className="text-Grey600 font-medium">By Tharik</h1>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Reference no",
    dataIndex: "Referenceno",
    key: "Referenceno",
  },
  {
    title: "Posted on",
    dataIndex: "Postedon",
    key: "Postedon",
  },
  {
    title: "Price",
    dataIndex: "Price",
    key: "Price",
  },
  {
    title: "Status",
    key: "Status",
    dataIndex: "Status",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag == "Live" ? "geekblue" : "green";
          if (tag === "Live") {
            color = "green";
          }
          if (tag === "Requested") {
            color = "purple";
          }
          if (tag === "Solid") {
            color = "warning";
          }
          if (tag === "Rejected") {
            color = "magenta";
          }
          if (tag === "Reviewing") {
            color = "orange";
          }
          if (tag === "Expired") {
            color = "geekblue";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Views",
    key: "Views",
    dataIndex: "Views",
  },
  {
    title: "Boost Ad",
    key: "BoostAd",
    dataIndex: "BoostAd",
  },
  {
    title: "",
    key: "",
    render: (_, record) => (
      <Space size="middle">
        <a>
          <img src={TableCell} alt="" />
        </a>
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    name: "Range Rover",
    Referenceno: "21489461",
    Postedon: "26 Jun 2023",
    Price: "AED 3399,000",
    Views: "12 k",
    tags: ["live"],
    BoostAd: "Promote",
  },
  {
    key: "2",
    name: "X1 Bmw",
    Referenceno: "6565355",
    Postedon: "26 Jun 2023",
    Price: "AED 7899,000",
    Views: "12 k",
    tags: ["Solid"],
  },
  {
    key: "3",
    name: "Ford",
    Referenceno: "21489461",
    Postedon: "26 Jun 2023",
    Price: "AED 199,000",
    Views: "12 k",
    tags: ["Requested"],
  },
  {
    key: "4",
    name: "Toyota Hilux",
    Referenceno: "6565355",
    Postedon: "26 Jun 2023",
    Price: "AED 299,000",
    Views: "12 k",
    tags: ["Rejected"],
  },
  {
    key: "5",
    name: "Classic Benz",
    Referenceno: "21489461",
    Postedon: "26 Jun 2023",
    Price: "AED 399,000",
    Views: "12 k",
    tags: ["Reviewing"],
  },
  {
    key: "6",
    name: "Mustang",
    Referenceno: "6565355",
    Postedon: "26 Jun 2023",
    Price: "AED 499,000",
    Views: "12 k",
    tags: ["Expired"],
  },
  {
    key: "7",
    name: "BMW 3 SERIES",
    Referenceno: "21489461",
    Postedon: "26 Jun 2023",
    Price: "AED 599,000",
    Views: "12 k",
    tags: ["Requested"],
  },
  {
    key: "8",
    name: "Corolla",
    Referenceno: "6565355",
    Postedon: "26 Jun 2023",
    Price: "AED 699,000",
    Views: "12 k",
    tags: ["Live"],
  },
  {
    key: "9",
    name: "Civic",
    Referenceno: "21489461",
    Postedon: "26 Jun 2023",
    Price: "AED 899,000",
    Views: "12 k",
    tags: ["Requested"],
  },
  {
    key: "10",
    name: "City",
    Referenceno: "6565355",
    Postedon: "26 Jun 2023",
    Price: "AED 799,000",
    Views: "12 k",
    tags: ["Rejected"],
  },
];


const carusalData = [
  {
    id:1,
    mainImage:Sliderimg,
    thumbnail:Sliderimg
  },
  {
    id:2,
    mainImage:Sliderimg2,
    thumbnail:Sliderimg2
  },
  {
    id:3,
    mainImage:Sliderimg3,
    thumbnail:Sliderimg3
  },
]

const pageSize = 1;
function Dashboard() {
  const [open, setOpen] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  const [promotionSectionVisible, setPromotionSectionVisible] = useState(false);
  const [showOnlyVisible, setShowOnlyVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedPromotion, setSelectedPromotion] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const[ product , setProduct] = useState(carusalData)
  const [value, setValue] = useState(0)
  const {mainImage} = product[value]
  const carouselRef = useRef(null);
  const [copiedValue, setCopiedValue] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [rejectModal , setRejectModal] = useState(false)
  const navigate = useNavigate()

  const handleValueCopy = (value) => {
    setCopiedValue(value);
  };
const showRejectModal = ()=>{
  setRejectModal(true)
}
  const handleInputChange = (e) => {
    setCopiedValue(e.target.value);
  };

  const showModal = () => {
    
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
    setRejectModal(false)
  };

  const modalContent = (
    <div className="px-3">
      <Input
        type="text"
        value={copiedValue}
        onChange={handleInputChange}
      />
      <div className="flex gap-2 my-2 border-b pb-3 border-borderColor">
        <div style={{
              backgroundColor:
                copiedValue === '335,000' ? '#CCE1F0' : 'transparent',
            }} className="border border-borderColor rounded-3xl px-2 py-1 text-textLight font-medium">
          <h1
          className="flex gap-2 flex-row-reverse items-center"
            onClick={() => handleValueCopy('335,000')}
            
          >
            335,000 {copiedValue === '335,000' && <img className="h-fit" src={TickCircle}/>}
          </h1>
        </div>
        <div style={{
              backgroundColor:
                copiedValue === '345,000' ? '#CCE1F0' : 'transparent',
            }} className="border border-borderColor rounded-3xl px-2 py-1 text-textLight font-medium">
          <h1
            onClick={() => handleValueCopy('345,000')}
            className="flex gap-2 flex-row-reverse items-center"
          >
            345,000 {copiedValue === '345,000' && <img className="h-fit" src={TickCircle}/>}
          </h1>
        </div>
      </div>
    </div>
  );
  const RejectContent = (
    <div className="px-3">
      <Input
        type="text"
        value={copiedValue}
        onChange={handleInputChange}
      />
      <div className="flex gap-2 my-2 border-b pb-3 border-borderColor">
        <div style={{
              backgroundColor:
                copiedValue === 'Incorrect data' ? '#CCE1F0' : 'transparent',
            }} className="border border-borderColor rounded-3xl px-2 py-1 text-textLight font-medium">
          <h1
          className="flex gap-2 flex-row-reverse items-center text-xs"
            onClick={() => handleValueCopy('Incorrect data')}
            
          >
            Incorrect data {copiedValue === 'Incorrect data' && <img className="h-fit" src={TickCircle}/>}
          </h1>
        </div>
        <div style={{
              backgroundColor:
                copiedValue === 'low Image quality' ? '#CCE1F0' : 'transparent',
            }} className="border border-borderColor rounded-3xl px-2 py-1 text-textLight font-medium">
          <h1
            onClick={() => handleValueCopy('low Image quality')}
            className="flex gap-2 flex-row-reverse items-center text-xs"
          >
            low Image quality  {copiedValue === 'low Image quality' && <img className="h-fit" src={TickCircle}/>}
          </h1>
        </div>
      </div>
    </div>
  );
  // const [currentIndex, setCurrentIndex] = useState(0);
  const [modalsVisible, setModalsVisible] = useState(
    Array(data.length).fill(false)
  );
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleRowClick = (index) => {
    setCurrentIndex(index);
    setModalsVisible((prevModalsVisible) =>
      prevModalsVisible.map((_, i) => i === index)
    );
  };
  const handleCloseModal = (index) => {
    const updatedModalsVisible = [...modalsVisible];
    updatedModalsVisible[index] = false;
    setModalsVisible(updatedModalsVisible);
    setCurrentIndex(null); // Reset the currentIndex when closing the modal
  };

  const handleNextClickModal = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePreviousClickModal = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  const totalPages = Math.ceil(data.length / pageSize);

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const dataSource = data.slice(startIndex, endIndex);
  const handleRadioChange = (value) => {
    setSelectedOption(value);
    console.log("Selected option:", value);
  };
  const handlePromotionChange = (value) => {
    setSelectedPromotion(value);
    console.log("Selected option:", value);
  };
  const handleSearch = (value) => {
    console.log("Search:", value);
    // Add your search logic here
  };
  const handleArrowClick = (section) => {
    console.log(section);
    if (section === "Show Only") {
      setShowOnlyVisible(!showOnlyVisible);
    } else if (section === "Promotion") {
      setPromotionSectionVisible(!promotionSectionVisible);
    }
  };
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };
  const handlePageClick = (page) => {
    setCurrentPage(page); // Update current page
  };
  const handleThumbnailClick = (index) => {
    setValue(index);
    carouselRef.current.goToSlide(index);
  };
  console.log(value)
  return (
    <div className="container mx-auto mt-5">
      
      <div className="flex justify-between">
        <h1 className="text-textColor font-bold lg:text-2xl text-lg">
          Welcome back, Tharik
        </h1>
        <div className="flex items-center gap-2">
          <Button className="h-10" onClick={()=> navigate("/corporates/draft")}>Draft (3)</Button>
          <Button onClick={()=> navigate("/corporates/uploadsAds")} className="bg-[#101828]  rounded-md text-white h-10 md:flex gap-1 items-center hidden md:block">
            <img src={Add} alt="" />
            <h1 className="mr-3">Post Ad</h1>
          </Button>
        </div>
      </div>
      <p className="text-textLight font-normal">Manage your ads</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:gap-8 gap-2">
        <div className="border border-borderColor mt-4 rounded-xl px-4 py-4 corporate-card-shadow flex justify-between">
          <div>
            <h1 className="text-textLight font-medium">Ads left</h1>
            <h1 className="my-4 font-medium text-textColor text-2xl">
              40 / <span className="text-base">500</span>
            </h1>
          </div>
          <div className="">
            <h1 className="text-successColor bg-[#D2F3DA] rounded-full text-xs px-2 py-1 font-medium">
              Valid for 20 days
            </h1>
          </div>
        </div>
        <div className="border border-borderColor mt-4 rounded-xl px-4 py-4 corporate-card-shadow ">
          <div className="flex justify-between">
            <div>
              <h1 className="text-textLight font-medium">Promotions left</h1>
            </div>
            <div className="">
              <h1 className="text-dangerColor bg-[#FFD4D2] rounded-full text-xs px-2 py-1 font-medium">
                Expires in 5 days
              </h1>
            </div>
          </div>
          <div className="w-full">
            <div className="flex justify-between items-center">
              <h1 className="my-4 font-medium text-textColor text-2xl">
                46 / <span className="text-base">100 Days</span>
              </h1>
              <Button type="text" className="text-SkyColor text-lg font-medium">
                Upgrade
              </Button>
            </div>
          </div>
        </div>
        <div className="border border-borderColor mt-4 rounded-xl px-4 py-4 corporate-card-shadow ">
          <div className="flex justify-between">
            <div>
              <h1 className="text-textLight font-medium">Ads Requested</h1>
            </div>
          </div>
          <div className="w-full">
            <div className="flex justify-between items-center">
              <h1 className="my-4 font-medium text-textColor text-2xl">12</h1>
              <Button onClick={()=> navigate("/corporates/Ads")} type="text" className="text-SkyColor text-lg font-medium">
                View
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="my-4 flex gap-10 items-center">
        <Input
          className="border border-[#D0D5DD] p-2 mt-1 rounded-md"
          placeholder="Search..."
          prefix={<img src={search} alt="" />}
          onPressEnter={(e) => handleSearch(e.target.value)}
        />
        <div>
          <Button
            onClick={showDrawer}
            className="h-10"
            type="default"
            icon={<img src={filterIcon} alt="" />}
          >
            Filter
          </Button>
        </div>
      </div>

      <div className="border my-6 border-borderColor table-corporate rounded-xl">
        <Table
          onRow={(record) => ({
            onClick: () => handleRowClick(record.index),
          })}
          scroll={{ x: 200,}}
          className="rounded-lg custom-table"
          columns={columns}
          dataSource={data.map((item, index) => ({ ...item, index }))}
          pagination={false}
        />

        <div className="pagination flex justify-center  gap-2 my-4 font-medium text-textColor">
          <button onClick={handlePrevClick} disabled={currentPage === 1}>
            Previous
          </button>
          <ul className="page-numbers flex flex-wrap">
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (pageNumber) => {
                const isInRange =
                  totalPages <= 10 ||
                  pageNumber <= 5 ||
                  pageNumber >= totalPages - 4;

                return (
                  <li
                    key={pageNumber}
                    className={`page-number border border-borderColor px-4 py-1.5 text-Grey600 text-lg ${
                      currentPage === pageNumber ? "active" : ""
                    }`}
                    onClick={() => handlePageClick(pageNumber)}
                  >
                    {isInRange && pageNumber === 4 && totalPages == 10
                      ? "..."
                      : pageNumber}
                  </li>
                );
              }
            )}
          </ul>
          <button
            onClick={handleNextClick}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>

      {/* Drawe */}
      <div className="corporate-drawer">
        <Drawer
          closable={true}
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
            <div>
              <h1 className="font-medium my-4">Show From</h1>
              <div className="flex gap-2 items-center">
                <DatePicker
                  value={startDate}
                  onChange={handleStartDateChange}
                />
                <span>To</span>
                <DatePicker value={endDate} onChange={handleEndDateChange} />
              </div>
              <div className="flex gap-2 flex-wrap my-4">
                <h1 className="border border-borderColor rounded-full text-xs px-2 py-1 text-Grey600">
                  Today
                </h1>
                <h1 className="border border-borderColor rounded-full text-xs px-2 py-1 text-Grey600">
                  Yesterday
                </h1>
                <h1 className="border border-borderColor rounded-full text-xs px-2 py-1 text-Grey600">
                  Last 7 days
                </h1>
                <h1 className="border border-borderColor rounded-full text-xs px-2 py-1 text-Grey600">
                  Last 30 days
                </h1>
              </div>
            </div>
            {/* Show only */}
            <div className="py-4 border-b border-borderColor mb-4">
              <div className="flex justify-between mb-4">
                <div>
                  <p className="font-medium">Show Only </p>
                </div>
                <div className="cursor-pointer">
                  <img
                    className={`${showOnlyVisible ? "rotate-180" : ""}`}
                    src={arrowUp}
                    alt="Arrow"
                    onClick={() => handleArrowClick("Show Only")}
                  />
                </div>
              </div>
              <div
                className={`transition-all duration-300 ${
                  showOnlyVisible ? "block" : "hidden"
                }`}
              >
                <div className="w-full">
                  <div className="flex justify-between w-full pb-4">
                    <div>
                      <p>Live</p>
                    </div>
                    <div>
                      <p>
                        45{" "}
                        <Radio.Group
                          onChange={(e) => handleRadioChange(e.target.value)}
                          value={selectedOption}
                        >
                          <Radio value="Live" />
                        </Radio.Group>
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between w-full pb-4">
                    <div>
                      <p>Requested</p>
                    </div>
                    <div>
                      <p>
                        17{" "}
                        <Radio.Group
                          onChange={(e) => handleRadioChange(e.target.value)}
                          value={selectedOption}
                        >
                          <Radio value="Requested" />
                        </Radio.Group>
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between w-full pb-4">
                    <div>
                      <p>Sold</p>
                    </div>
                    <div>
                      <p>
                        125{" "}
                        <Radio.Group
                          onChange={(e) => handleRadioChange(e.target.value)}
                          value={selectedOption}
                        >
                          <Radio value="Sold" />
                        </Radio.Group>
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between w-full pb-4">
                    <div>
                      <p>Rejected</p>
                    </div>
                    <div>
                      <p>
                        2{" "}
                        <Radio.Group
                          onChange={(e) => handleRadioChange(e.target.value)}
                          value={selectedOption}
                        >
                          <Radio value="Rejected" />
                        </Radio.Group>
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between w-full pb-4">
                    <div>
                      <p>Expired</p>
                    </div>
                    <div>
                      <p>
                        29{" "}
                        <Radio.Group
                          onChange={(e) => handleRadioChange(e.target.value)}
                          value={selectedOption}
                        >
                          <Radio value="Expired" />
                        </Radio.Group>
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between w-full pb-4">
                    <div>
                      <p>Reviewing</p>
                    </div>
                    <div>
                      <p>
                        65{" "}
                        <Radio.Group
                          onChange={(e) => handleRadioChange(e.target.value)}
                          value={selectedOption}
                        >
                          <Radio value="Reviewing" />
                        </Radio.Group>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-4 border-b border-borderColor mb-4">
              <div className="flex justify-between">
                <div>
                  <p className="font-medium">Promotion</p>
                </div>
                <div className="cursor-pointer">
                  <img
                    className={`${promotionSectionVisible ? "rotate-180" : ""}`}
                    src={arrowUp}
                    alt="Arrow"
                    onClick={() => handleArrowClick("Promotion")}
                  />
                </div>
              </div>
              <div
                className={`transition-all duration-300 ${
                  promotionSectionVisible ? "block" : "hidden"
                }`}
              >
                <div className="w-full mt-4">
                  <div className="flex justify-between w-full pb-4">
                    <div>
                      <p>Applied</p>
                    </div>
                    <div>
                      <p>
                        29{" "}
                        <Radio.Group
                          onChange={(e) =>
                            handlePromotionChange(e.target.value)
                          }
                          value={selectedPromotion}
                        >
                          <Radio value="Applied" />
                        </Radio.Group>
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between w-full pb-4">
                    <div>
                      <p>Not Applied</p>
                    </div>
                    <div>
                      <p>
                        4{" "}
                        <Radio.Group
                          onChange={(e) =>
                            handlePromotionChange(e.target.value)
                          }
                          value={selectedPromotion}
                        >
                          <Radio value="Not Applied" />
                        </Radio.Group>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Drawer>
      </div>

      {/* Modal */}
      <div>
        {/* Render data rows in the table */}
        <div>
          {data.map((item, index) => (
            <div key={index}>
              <Modal
                visible={modalsVisible[index]}
                onCancel={() => handleCloseModal(index)}
                footer={null}
                className="relative "
                
              >
                {/* Customize modal content using selectedRowData */}
                {data.length > 0 && currentIndex !== null && (
                  <>
                    <div className="border-b py-3 pt-8 px-3 mb-4 border-borderColor">
                      <h2>Ref no :{data[currentIndex].Referenceno}</h2>
                      {/* Add more details as needed */}
                    </div>
                    <div className="px-3">
                      <h1>AED 899,000</h1>
                      <h1>
                        {data[currentIndex].name} | Meridian Sound System |
                        Sunroof
                      </h1>
                      <h1>
                        By <span className="text-SkyColor">Tarik</span>
                      </h1>
                    </div>
                    {/* <div className="px-3 py-4">
                      <img src={Sliderimg} alt="" />
                      <div className="flex gap-2 my-2">
                        <img className="w-24" src={Sliderimg} alt="" />
                        <img className="w-24" src={Sliderimg} alt="" />
                        <img className="w-24" src={Sliderimg} alt="" />
                      </div>
                    </div> */}
                    <section className="mx-3 my-3 h-96 overflow-y-auto">
                    <article >
                    <Carousel
                  className="landing-page-custom-carousel-arrow"
                  ref={carouselRef}
                  responsive={responsives}
                  showDots={false}
                  arrows={true}
                  infinite
            showStatus={false}
            showThumbs={false}
                >
                 {product.map((item, index) => (
              <img
                key={item.id}
                className="w-full rounded-2xl h-60" 
                src={item.mainImage}
                alt=""
              />
            ))}
                    </Carousel>         
                    <ul className="flex items-center justify-start gap-2 my-3">
          {product.map((item, index) => (
            <li
              className={`${
                index === value && 'border-2 border-colorPrimary'
              } border-2 rounded-xl overflow-hidden cursor-pointer`}
              key={item.id}
              onClick={() => handleThumbnailClick(index)}
            >
              <img
                className="w-20 rounded-xl h-20"
                src={item.thumbnail}
                alt=""
              />
            </li>
          ))}
        </ul>
<div>
        <p className="mt-4 font-medium text-lg">Highlights</p>

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
                          </article>
                    </section>
                    <div className="corporate-shadow w-full ">
                      <div className="modal-pagination flex justify-between px-3 pt-4 items-center">
                        <p>
                          Ads {currentIndex + 1}/{data.length}
                        </p>
                        <div className="flex gap-4">
                          <button
                            type="text"
                            className="hover:none"
                            onClick={handlePreviousClickModal}
                            disabled={currentIndex <= 0}
                          >
                            <img src={BackArrow} alt="" />
                          </button>

                          <button
                            type="text"
                            onClick={handleNextClickModal}
                            disabled={currentIndex >= data.length - 1}
                          >
                            <img src={RightArrow} alt="" />
                          </button>
                        </div>
                      </div>
                      <div className="px-3 pb-3">
                        <Tag
                          color={
                            data[currentIndex].tags == "live"
                              ? "green"
                              : data[currentIndex].tags == "Solid"
                              ? "warning"
                              : data[currentIndex].tags == "Requested"
                              ? "magenta"
                              : data[currentIndex].tags == "Reviewing"
                              ? "orange"
                              : "geekblue"
                          }
                        >
                          {data[currentIndex].tags}
                        </Tag>
                      </div>
                      <div className="flex justify-between px-3 border-b border-borderColor pb-3 ">
                        <div className="flex gap-5">
                          <div>
                            <h1 className="text-textLight font-normal text-xs">Views</h1>
                            <h1 className="text-textColor font-medium">36</h1>
                          </div>
                          <div>
                            <h1 className="text-textLight font-normal text-xs">Views</h1>
                            <h1 className="text-textColor font-medium">36</h1>
                          </div>
                          <div>
                            <h1 className="text-textLight font-normal text-xs">Views</h1>
                            <h1 className="text-textColor font-medium">36</h1>
                          </div>
                        </div>
                        <div>
                          <h1 className="text-colorPrimary text-base font-medium">Promote Ad</h1>
                        </div>
                      </div>
                        {data[currentIndex].tags == "Requested" &&
                        <div className="w-full flex gap-2 py-3 px-3 font-medium">
                          <Button onClick={showRejectModal} type="Text" className="w-full text-dangerColor">Reject</Button>
                        <Button type="default" className="w-full">Edit</Button>
                        <Button className="bg-successColor text-white w-full" type="default">Approve</Button>
                        </div>
}
{data[currentIndex].tags == "live"  && 
<div className="flex justify-end gap-4 font-medium px-3 py-3">
<Button type="Text" className=" text-dangerColor">Delete Ad</Button>
                        <Button onClick={showModal} type="default" className="">Mark as Sold</Button>
  </div>
  }
{data[currentIndex].tags == "Solid"  && 
<div className="flex justify-end gap-4 font-medium px-3 py-3">
<Button type="Text" className=" text-dangerColor">Delete Ad</Button>
                        <Button type="default" className="">Mark as Unsold</Button>
  </div>
  }
{data[currentIndex].tags == "Rejected"  && 
<div className="flex justify-end gap-4 font-medium px-3 py-3">
<Button type="Text" className=" text-dangerColor">Delete Ad</Button>
                        <Button type="default" className="bg-colorPrimary text-white">Edit</Button>
  </div>
  }
{data[currentIndex].tags == "Reviewing"  && 
<div className="flex justify-end gap-4 font-medium px-3 py-3">
<Button type="Text" className=" text-dangerColor">Delete Ad</Button>
  </div>
  }
  {data[currentIndex].tags == "Expired"  && 
<div className="flex justify-end gap-4 font-medium px-3 py-3">
<Button type="Text" className=" text-dangerColor">Delete Ad</Button>
                        <Button type="default" className="bg-colorPrimary text-white">Repost</Button>
  </div>
  }
                    </div>
                  </>
                )}
              </Modal>
            </div>
          ))}
        </div>
      </div>

      {/* amsdasjh */}
      <Modal
      centered
      width={300}
        title={<h1 className="pt-8 px-3">How much ad was sold</h1>}
        visible={modalVisible}
        onCancel={hideModal}
        footer={[
          <div className="py-3">
          <Button key="delete" className="text-dangerColor">
            Delete AD
          </Button>,
          <Button key="markSold" className="bg-[#FFBA14]">
            Mark as Sold
          </Button>,
          </div>
        ]}
      >
        {modalContent}
      </Modal>
      {/* Reject Modal */}
      <Modal
      centered
      width={300}
        title={<h1 className="pt-8 px-3">Reason for Rejecting</h1>}
        visible={rejectModal}
        onCancel={hideModal}
        footer={[
          <div className="py-3">
          <Button key="delete" className="">
            Cancel
          </Button>,
          <Button key="markSold" className="bg-dangerColor text-white">
            Reject
          </Button>,
          </div>
        ]}
      >
        {RejectContent}
      </Modal>
    </div>
  );
}

export default Dashboard;
