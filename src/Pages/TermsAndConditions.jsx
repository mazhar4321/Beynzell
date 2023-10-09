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

function TermsAndConditions() {
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

            {
              title: "Terms & Conditions",
            },
          ]}
        />
      </div>
      <div className="card-shadow my-5 p-4 px-4 lg:w-1/2 w-full mx-auto">
        <h1 className="text-textColor font-medium text-2xl mt-10 mb-8">
          Terms And Conditions
          <hr className="mt-10"></hr>

          <p className="text-2xl mt-5">The data we collect about you</p>
          <p className="text-sm mt-5">We take your privacy very seriously and are committed to protecting the privacy of all visitors and subscribers to our website or any application we make available via an app store (the “Platform”), and the corresponding services available through the Platform (the “Services”). Below we set out our privacy policy, which will govern the way in which we process any personal information that you provide to us. We will notify you if the way in which we process your information is to change at any time. Please read this privacy policy carefully as it contains important information on who we are and how we collect, store, use and share your information. By accessing the Platform or using our Services or otherwise indicating your consent, you agree to, and where required, consent to the collection, use and transfer of your information as set out in this policy. If you do not accept the terms of this policy, you must not use the Platform and/or the Services. This privacy policy supplements other notices and privacy policies and is not intended to override them. This privacy policy: (i) applies only to the Platform and not to websites or applications of any other companies or organisations; and (ii) specifically addresses our obligations pursuant to local law. The data we collect about you When you visit our Platform or create a login in and password to access the Services, you may be asked to provide information about yourself. This may include: (i) your name and contact details, including email address and telephone number; (ii) information to enable us to check and verify your identity; (iii) location data; (iv) your billing information, transaction and payment information and history; and (v) such other information as we may from time to time require to provide the Services and comply with applicable law. You agree and, where required, consent to the collection of information about your usage of the Platform and the Services and information from messages and communications you send to us. This information is required to provide the Services to you. If you do not provide such information, it may delay or prevent us from providing the Services. This privacy policy will also apply when accessing the Platform and/or the Services from mobile technology (such as mobile phones, tablets or other devices). Unless you have chosen to remain anonymous through your device and/or platform settings, this information may be collected and used by us automatically if you use the Services and access the Platform from mobile technology. Calls between you and us, or between you and third parties made through us (such as real estate agents you contact about a property through a form or link on our website, or using contact information found on our website), may be recorded or monitored for quality assurance and customer service purposes. We use third-party service providers to track phone calls and text messages between you and real estate professionals so that we and the real estate professional can access certain details about the contact. As part of this process, we and our service providers will receive in real time and store data about your call or text message, including the date and time of the call or text message, your phone number, and the content of the text message. Who we share your personal information with Your personal information (which includes your name, address and any other details you provide to us which concern you as an individual) may be processed both by us and by other companies within our group. Each of the companies in our group authorised to process your information will do so in accordance with this privacy policy.</p>
        </h1>

      </div>
    </div>
  );
}

export default TermsAndConditions;
