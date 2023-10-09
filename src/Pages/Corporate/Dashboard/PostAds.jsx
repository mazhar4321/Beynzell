import { Button , Input, Table, Tag, Space} from 'antd'
import search from "../../../assets/search-lg.svg";
import filterIcon from "../../../assets/filterIcon.png";
import CarImg from "../../../assets/carimg.png";
import TableCell from "../../../assets/Table-cell.png";
import Edit from "../../../assets/edit-icon.png";
import Reject from "../../../assets/cross-icon.png";
import Approve from "../../../assets/approve-icon.png";
import BackArrow from '../../../assets/cheveron-left.svg'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';



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
      title: "Promotion",
      key: "Promotion",
      dataIndex: "Promotion",
    },
    {
      title: "Action",
      key: "Action",
      render: (_, record) => (
        <Space size="middle">
          <a>
            <img src={Edit} alt="" />
          </a>
          <a>
            <img src={Reject} alt="" />
          </a>
          <a>
            <img src={Approve} alt="" />
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
      Promotion: "Added (5D)",
    },
    {
      key: "2",
      name: "X1 Bmw",
      Referenceno: "6565355",
      Postedon: "26 Jun 2023",
      Price: "AED 7899,000",
      Promotion: "Added (5D)",
    },
    {
      key: "3",
      name: "Ford",
      Referenceno: "21489461",
      Postedon: "26 Jun 2023",
      Price: "AED 199,000",
      Promotion: "Added (5D)",
    },
    {
      key: "4",
      name: "Toyota Hilux",
      Referenceno: "6565355",
      Postedon: "26 Jun 2023",
      Price: "AED 299,000",
      Promotion: "Added (5D)",
    },
    {
      key: "5",
      name: "Classic Benz",
      Referenceno: "21489461",
      Postedon: "26 Jun 2023",
      Price: "AED 399,000",
      Promotion: "Added (5D)",
    },
    {
      key: "6",
      name: "Mustang",
      Referenceno: "6565355",
      Postedon: "26 Jun 2023",
      Price: "AED 499,000",
      Promotion: "Added (5D)",
    },
    {
      key: "7",
      name: "BMW 3 SERIES",
      Referenceno: "21489461",
      Postedon: "26 Jun 2023",
      Price: "AED 599,000",
      Promotion: "Added (5D)",
    },
    {
      key: "8",
      name: "Corolla",
      Referenceno: "6565355",
      Postedon: "26 Jun 2023",
      Price: "AED 699,000",
      Promotion: "Added (5D)",
    },
    {
      key: "9",
      name: "Civic",
      Referenceno: "21489461",
      Postedon: "26 Jun 2023",
      Price: "AED 899,000",
      Promotion: "Added (5D)",
    },
    {
      key: "10",
      name: "City",
      Referenceno: "6565355",
      Postedon: "26 Jun 2023",
      Price: "AED 799,000",
      Promotion: "Added (5D)",
    },
  ];
  
  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
  };
function CorporatePostAds() {
    const [selectionType, setSelectionType] = useState('checkbox');
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 1;
    const totalPages = Math.ceil(data.length / pageSize);
    const navigate = useNavigate()
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
      const handleGoBack = () => {
        // Use the navigate function with a negative number to go back multiple steps if needed
        navigate(-1); // This goes back one step in the browser history
      };
    
  return (
    <div className='container mx-auto'>
      <Button onClick={handleGoBack} type='text' className='p-0 my-4'>
            <img src={BackArrow} alt="" />
        </Button>
<div className="flex justify-between ">

        <h1 className="text-textColor font-bold lg:text-2xl text-lg">
        Ads Requested (12)
        </h1>
        <div className="flex items-center gap-2">
          <Button className="h-8 bg-successColor text-white px-6 flex gap-2 items-center justify-center">Approve All
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
<path d="M8.00016 14.6663C11.6668 14.6663 14.6668 11.6663 14.6668 7.99967C14.6668 4.33301 11.6668 1.33301 8.00016 1.33301C4.3335 1.33301 1.3335 4.33301 1.3335 7.99967C1.3335 11.6663 4.3335 14.6663 8.00016 14.6663Z" stroke="#FCFCFD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.1665 7.99995L7.05317 9.88661L10.8332 6.11328" stroke="#FCFCFD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          </Button>
         
        </div>
      </div>
      <p className="text-textLight font-normal">These are the ads requested by other users</p>

      <div className="my-4 flex gap-10 items-center">
        <Input
          className="border border-[#D0D5DD] p-2 mt-1 rounded-md"
          placeholder="Search..."
          prefix={<img src={search} alt="" />}
          onPressEnter={(e) => handleSearch(e.target.value)}
        />
        <div>
          <Button
            className="h-10"
            type="default"
            icon={<img src={filterIcon} alt="" />}
          >
            Filter
          </Button>
        </div>
      </div>
      <div className="border my-6 border-borderColor table-corporate rounded-xl table-cont">
      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        scroll={{ x: 100,}}
        columns={columns}
        dataSource={data}
        pagination={false}
      />
      
      <div className="pagination flex justify-center gap-2 my-4 font-medium text-textColor">
          <button onClick={handlePrevClick} disabled={currentPage === 1}>
            Previous
          </button>
          <ul className="page-numbers flex">
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
    </div>
  )
}

export default CorporatePostAds