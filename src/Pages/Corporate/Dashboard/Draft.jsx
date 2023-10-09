import { Button, Input, Table, Space     } from 'antd'
import React, { useState } from 'react'
import BackArrow from '../../../assets/cheveron-left.svg'
import filterIcon from "../../../assets/filterIcon.png";
import search from "../../../assets/search-lg.svg";
import CarImg from "../../../assets/carimg.png";
import Edit from "../../../assets/edit-icon.png";
import Reject from "../../../assets/cross-icon.png";
import Approve from "../../../assets/approve-icon.png";
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
      title: "Created on",
      dataIndex: "Created n",
      key: "Createdon",
    },
    {
      title: "Price",
      dataIndex: "Price",
      key: "Price",
    },
    {
      title: "Action",
      key: "Action",
      render: (_, record) => (
        <Space size="middle">
          <Button type='text'>
            Continue
          </Button>
        </Space>
      ),
    },
    {
        title: "Delete",
        key: "Delete",
        render: (_, record) => (
            <Space size="middle">
              <Button type='text'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M17.5 4.98307C14.725 4.70807 11.9333 4.56641 9.15 4.56641C7.5 4.56641 5.85 4.64974 4.2 4.81641L2.5 4.98307" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.0835 4.14102L7.26683 3.04935C7.40016 2.25768 7.50016 1.66602 8.9085 1.66602H11.0918C12.5002 1.66602 12.6085 2.29102 12.7335 3.05768L12.9168 4.14102" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.7082 7.61719L15.1665 16.0089C15.0748 17.3172 14.9998 18.3339 12.6748 18.3339H7.32484C4.99984 18.3339 4.92484 17.3172 4.83317 16.0089L4.2915 7.61719" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.6084 13.75H11.3834" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.9165 10.416H12.0832" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
              </Button>
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
function Draft() {
    const [selectionType, setSelectionType] = useState('checkbox');
    const navigate = useNavigate();
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
        <h1 className="text-textColor font-bold text-2xl">
        Draft (3)
        </h1>
        <div className="flex items-center gap-2">
          <Button type='text' className="h-10  text-dangerColor px-6 flex gap-2 items-center justify-center">Delete
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
<path d="M14 4.48763C11.78 4.26763 9.54667 4.1543 7.32 4.1543C6 4.1543 4.68 4.22096 3.36 4.3543L2 4.48763" stroke="#D92D20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.6665 3.81398L5.81317 2.94065C5.91984 2.30732 5.99984 1.83398 7.1265 1.83398H8.87317C9.99984 1.83398 10.0865 2.33398 10.1865 2.94732L10.3332 3.81398" stroke="#D92D20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.5664 6.59375L12.1331 13.3071C12.0598 14.3537 11.9998 15.1671 10.1398 15.1671H5.85977C3.99977 15.1671 3.93977 14.3537 3.86644 13.3071L3.43311 6.59375" stroke="#D92D20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.88672 11.5H9.10672" stroke="#D92D20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.3335 8.83398H9.66683" stroke="#D92D20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          </Button>
         
        </div>
      </div>
      <p className="text-textLight font-normal">Continue from where you left</p>
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
      </div>
    </div>
  )
}

export default Draft