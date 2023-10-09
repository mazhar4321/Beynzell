import React, { useState } from "react";
import Headerss from "../component/Home/Header";
import AdsComponent from "../component/AdsComponent";
import { Breadcrumb, Switch, Select, Radio, Space, Input, Button } from "antd";
import { DownOutlined } from '@ant-design/icons';
import SettingContent from "../component/setting/SettingContent";
import "../Pages/ReportIssue.css";
const { Option } = Select;

import masterLogo from "../assets/masterCardLogo.png";
import appleLogo from "../assets/ApplePay.png";
import trashIcon from "../assets/trash.png";
import TextArea from "antd/es/input/TextArea";

function ReportIssue() {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [value, setValue] = useState("");

  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
    // You can add additional logic here to handle language changes
  };

  const [size, setSize] = useState("middle");
  const handleSizeChange = (e) => {
    setSize(e.target.value);
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
        <h1 className="text-textColor font-medium text-2xl mt-10">
          Report an Issue
        </h1>

        <p className="mt-10 mb-2 text-sm pl-0">Select a Category</p>

        <div className="report-issue-dropdown">
          <Space
            direction="vertical"
            style={{
              width: "100%",
            }}
          >
            <Select
              className="report-issue-custom-dropdown"
              size={size}
              defaultValue="AD Rejection"
              //   onChange={handleChange}
              style={{
                width: 735,
              }}
              //   options={options}
              suffixIcon={<DownOutlined/>}
              />
          </Space>
        </div>

        <p className="text-sm mt-7 mb-2">Write your issue</p>
        <TextArea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          autoSize={{
            minRows: 6,
            maxRows: 5,
          }}
        />
        <div className="mt-5 flex justify-end mb-5">
        <Button className="bg-blue-400 h-10 w-24  text-white ">Submit</Button>
        </div>
      </div>
    </div>
  );
}

export default ReportIssue;
