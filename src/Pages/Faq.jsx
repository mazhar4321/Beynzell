import React, { useState } from "react";
import Headerss from "../component/Home/Header";
import AdsComponent from "../component/AdsComponent";
import { Breadcrumb, Switch, Select } from "antd";
import SettingContent from "../component/setting/SettingContent";

import faqIcon from "../assets/FaqIcon.png";
import faqIcon2 from "../assets/FaqIcon2.png";

const { Option } = Select;

function Faq() {
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
          ]}
        />
      </div>
      <div className="card-shadow my-5 p-4 px-4 lg:w-1/2 w-full mx-auto">
        <h1 className="text-textColor font-medium text-2xl">FAQs</h1>
        <hr className="mt-7 mb-7"></hr>

        <div>
          <div className="justify-between flex">
            <div>
              <h2 className="font-medium text-lg">
                Is there a free trail available?
              </h2>
            </div>
            <div>
              <img src={faqIcon} />
            </div>
          </div>

          <p className="mt-5 text-gray-500">
            Yes, you can try us for free for 30 days. If you want, we’ll provide{" "}
            <br></br> you with a free, personalized 30-minute onboarding call to
            get you <br></br> up and running as soon as possible.
          </p>
        </div>

        <hr className="mt-10 mb-7"></hr>

        <div className="justify-between flex">
          <div>
            <h2 className="font-medium  text-lg">
              Can I change my plan later?
            </h2>
          </div>
          <div>
            <img src={faqIcon2} />
          </div>
        </div>

        <hr className="mt-8 mb-7"></hr>

        <div className="justify-between flex">
          <div>
            <h2 className="font-medium  text-lg">
              What is your cancellation policy?
            </h2>
          </div>
          <div>
            <img src={faqIcon2} />
          </div>
        </div>

        <hr className="mt-8 mb-7"></hr>

        <div className="justify-between flex">
          <div>
            <h2 className="font-medium text-lg">
              Can other info be added to an invoice?
            </h2>
          </div>
          <div>
            <img src={faqIcon2} />
          </div>
        </div>

        <hr className="mt-8 mb-7"></hr>

        <div className="justify-between flex">
          <div>
            <h2 className="font-medium  text-lg">How does billing work?</h2>
          </div>
          <div>
            <img src={faqIcon2} />
          </div>
        </div>

        <hr className="mt-8 mb-7"></hr>

        <div className="justify-between flex mb-4">
          <div>
            <h2 className="font-medium text-lg">
              How do I change my account email?
            </h2>
          </div>
          <div>
            <img src={faqIcon2} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
