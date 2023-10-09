import React, { useState } from "react";
import Headerss from "../component/Home/Header";
import AdsComponent from "../component/AdsComponent";
import { Breadcrumb, Switch, Select, Table, Space , Tag} from "antd";
import SettingContent from "../component/setting/SettingContent";
const { Option } = Select;

import masterLogo from "../assets/masterCardLogo.png";
import appleLogo from "../assets/ApplePay.png";
import trashIcon from "../assets/trash.png";

import "../Pages/PaymentHistory.css"

function PaymentHistory() {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
    // You can add additional logic here to handle language changes
  };




  const columns = [
    {
      title: 'Reference No',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
      width: "17%"
    },
    {
      title: 'Date',
      dataIndex: 'age',
      key: 'age',
      width: "20%"
    },
    {
      title: 'For',
      dataIndex: 'address',
      key: 'address',
    },
 
    {
      title: 'Price',
      key: 'action',
      render: (text) => (
        <p>AED 789</p>
      ),
    },

    {
        title: 'Status',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, { tags }) => (
          <>
            {tags.map((tag) => {
              let color = tag.length > 5 ? 'geekblue' : 'green';
              if (tag === 'Cancelled') {
                color = 'volcano';    /* the colors are over-rided in css file */
              }
              else if(tag == "Completed"){
                color = 'green'       /* the colors are over-rided in css file */
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
  ];
  const data = [
    {
      key: '1',
      name: '2192192',
      age: "26 june 2023" ,
      address: <p>Silver Package <br></br> <span className="text-xs text-[#6e6e6e]">Pay via Online</span></p>,
      tags: ['Cancelled'],
    },
    {
      key: '2',
      name: '2192192',
      age: "26 june 2023" ,
      address: <p>Silver Package <br></br> <span className="text-xs text-[#6e6e6e]">Pay via Online</span></p>,
      tags: ['Completed'],
    },
    {
      key: '3',
      name: '3192192',
      age: "26 june 2023" ,
      address: <p>Silver Package <br></br> <span className="text-xs text-[#6e6e6e]">Pay via Online</span></p>,
      tags: ['Completed'],
    },

    {
        key: '4',
        name: '6412192',
        age: "26 june 2023" ,
        address: <p>Silver Package <br></br> <span className="text-xs text-[#6e6e6e]">Pay via Online</span></p>,
        tags: ['Completed'],
    },

      {
        key: '5',
        name: '8121921',
        age: "26 june 2023" ,
        address: <p>Silver Package <br></br> <span className="text-xs text-[#6e6e6e]">Pay via Online</span></p>,
        tags: ['Cancelled'],
    },

      {
        key: '6',
        name: '4192142',
        age: "26 june 2023" ,
        address: <p>Silver Package <br></br> <span className="text-xs text-[#6e6e6e]">Pay via Online</span></p>,
        tags: ['Cancelled'],
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
      <div className="card-shadow my-5 p-4 px-4 lg:w-1/2 w-full mx-auto">
        <h1 className="text-textColor font-medium text-2xl mt-10 mb-8">
          Payment History
        </h1>

        <div className="border rounded-lg mb-1">
        <Table columns={columns} pagination={false} dataSource={data} />
        </div>
      </div>
    </div>
  );
}

export default PaymentHistory;
