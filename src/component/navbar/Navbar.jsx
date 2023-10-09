// import React, { useState } from "react";
// import DubaiIcon from "../../assets/AE.svg";
// import dropdownIcon from "../../assets/arrow-down.svg";
// import { Button, Select, Modal, Input, Form, Checkbox, Dropdown } from "antd";
// import { SearchOutlined } from "@ant-design/icons";
// import En from "../../assets/EN.svg";
// import ads from "../../assets/ads.svg";
// import chat from "../../assets/chat.svg";
// import Add from "../../assets/add.svg";
// import logoSmall from "../../assets/logoSmall.svg";
// import googleIcon from "../../assets/googleIcon.svg";
// import fbIcon from "../../assets/fbIcon.svg";
// import appleIcon from "../../assets/appleIcon.svg";
// import emailIcon from "../../assets/emailIcon.svg";
// import backArrow from "../../assets/back-Arrow.svg";
// import BzLOgo from "../../assets/Bzlogo.svg";
// import Motors from "../../assets/Car.svg";
// import Electricity from "../../assets/electricity.svg";
// import Sofa from "../../assets/Sofa.svg";
// import briefcase from "../../assets/briefcase.svg";
// import Users from "../../assets/users.svg"; 
// import Building from "../../assets/building-4.svg"; 
// import shamsuIcon from "../../assets/shamsuIcon.png";

// import "./Navbar.css";
// import Logo from "../../assets/Logo.svg";
// import SearchBar from "../searchBar/SearchBar";
// import CategoryDetailModal from "../Modal/CategoryDetailModal";
// import { Link } from "react-router-dom";

// const { Option } = Select;

// const Navbar = () => {
//   // const [selectedValue, setSelectedValue] = useState("Dubai");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isCreatingAccount, setIsCreatingAccount] = useState(false);
//   const [isEmailAccount, setIsEmailAccount] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedValue, setSelectedValue] = useState("Dubai");
//   const [isLoggedIn, setIsLoggedIn] = useState(true);
//   const [selectedCategory, setSelectedCategory] = useState(null);


//   const items = [
//     {
//       key: "1",
//       label: <a href="">My Profile</a>,
//     },
//     {
//       key: "2",
//       label: <a href="">My Ads</a>,
//     },
//     {
//       key: "3",
//       label: <a href="">Chats</a>,
//     },
//     {
//       key: "4",
//       label: <a href="">Favourites</a>,
//     },
//     {
//       key: "5",
//       label: <a href="">Packages</a>,
//     },
//     {
//       key: "6",
//       label: <a href="">Corporate</a>,
//     },

//     {
//       key: "6",
//       label: <a href="">Settings</a>,
//     },

//     {
//       key: "6",
//       label: <a href="">Logout</a>,
//     },
//   ];

//   const showModal = () => {
//     setIsModalOpen(true);
//     console.log("hello");
   
//   };
//   const showPostModal = () => {
//     setIsModalVisible(true);
   
//   };
//   const openCategoryDetails = (category) => {
//     setSelectedCategory(category);
//   };
//   const handleOk = () => {
//     setIsModalOpen(false);
//     setIsModalVisible(false);
//     setSelectedCategory(null);
//   };
//   const handleCancel = () => {
//     setIsModalOpen(false);
//     setIsCreatingAccount(false);
//     setIsModalVisible(false);
//     setSelectedCategory(null); 
//   };

//   const handleSelectChange = (value) => {
//     setSelectedValue(value);
//     console.log("Selected value:", value);
//   };
  
//   const handleSearch = () => {
//     onSearch(searchTerm);
//   };
//   const handleInputChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   // const handleSearch = () => {
//   //   onSearch(searchTerm);
//   // };
//   const onFinish = (values) => {
//     console.log("Success:", values);
//   };
//   const onFinishFailed = (errorInfo) => {
//     console.log("Failed:", errorInfo);
//   };
//   return (
//     <div className=" py-4 border-b">
//       <div className="container mx-auto flex items-center flex-col md:flex-row gap-4 justify-between align-middle">
//         <div className="w-full flex items-center justify-between">
//         <img className="" src={Logo} alt="" />
//         <div className="md:flex items-center  hidden md:block">
//           <img src={DubaiIcon} alt="" />
//           <div className="custom-dropdown-container">
//             <img
//               src={dropdownIcon}
//               alt="Custom Dropdown"
//               className="custom-dropdown-image"
//             />
//             <Select
//               className="custom-select "
//               onChange={handleSelectChange}
//               value={selectedValue}
//             >
//               <Option value="option1">Option 1</Option>
//               <Option value="option2">Option 2</Option>
//               <Option value="option3">Option 3</Option>
//               <Option value="option4">Option 4</Option>
//             </Select>
//           </div>
//         </div>

//         <div className="search-bar w-6/12 bg-[#F2F4F7]">
//           <SearchBar />
//         </div>
//         <div className="flex gap-5 items-center">
//           <img src={En} alt="" />
//           <img src={chat} alt="" />
//           <img src={ads} alt="" />

//           {isLoggedIn ? (
//             <>
//               <div className="antd-custom-dropdown-items">
//                 <Dropdown
//                   menu={{
//                     items,
//                   }}
//                   placement="bottom"
//                   trigger={["click"]}
//                   className="antd-custom-dropdown-items"
//                 >
//                   <div className="flex flex-col justify-center items-center">
//                     <div>
//                       <img src={shamsuIcon} className="w-5" />
//                     </div>
//                     <div>
//                       <h1 className="cursor-pointer">Shamsu</h1>
//                     </div>
//                   </div>
//                 </Dropdown>
//               </div>
//             </>
//           ) : (
//             <h1 onClick={showModal} className="cursor-pointer">
//               SignIn/Sign up
//             </h1>
//           )}

//           {!isCreatingAccount ? (
//             <Modal
//               className="custom-signin-signup-modal "
//               title={
//                 <img
//                   src={logoSmall}
//                   className="modal-logo-class"
//                   width={30}
//                   alt="Logo"
//                 />
//               }
//               open={isModalOpen}
//               onOk={handleOk}
//               onCancel={handleCancel}
//               cancelButtonProps={{ style: { display: "none" } }}
//               okButtonProps={{ style: { display: "none" } }}
//             >
//               <div className="modal-custom-content-class">
//                 <h2 className="font-medium -mt-2 pt-3 text-xl text-center bg-[#FCFCFD]">
//                   Sign into your account
//                 </h2>
//                 <p className="text-sm pt-1 text-center pb-3 text-[#475467] bg-[#FCFCFD]">
//                   Subtext
//                 </p>
//               </div>
//               <hr className="w-full color-[#FCFCFD] bg-[#FCFCFD]"></hr>
//               <div className="flex flex-col gap-3 items-center mt-5 pt-0 pb-5">
//                 <div className="border border-[#D0D5DD] rounded-md w-10/12 flex justify-center">
//                   <div className="flex justify-center pt-2 pb-2 items-center">
//                     <img src={googleIcon} />
//                     <p className="font-medium pl-2  text-sm">
//                       Continue with Google
//                     </p>
//                   </div>
//                 </div>
//                 <div className="border border-[#D0D5DD] rounded-md w-10/12 flex justify-center">
//                   <div className="flex justify-center pt-2 pb-2 items-center">
//                     <img src={fbIcon} />
//                     <p className="font-medium pl-2">Continue with Facebook</p>
//                   </div>
//                 </div>
//                 <div className="border border-[#D0D5DD] rounded-md w-10/12 flex justify-center">
//                   <div className="flex justify-center pt-2 pb-2 items-center">
//                     <img src={appleIcon} />
//                     <p className="font-medium pl-2">Continue with Apple</p>
//                   </div>
//                 </div>
//                 <div className="border border-[#D0D5DD] rounded-md w-10/12 flex justify-center">
//                   <div className="flex justify-center pt-2 pb-2 items-center">
//                     <img src={emailIcon} />
//                     <p
//                       className="font-medium cursor-pointer pl-2"
//                       onClick={() => {
//                         setIsEmailAccount(!isEmailAccount);
//                       }}
//                     >
//                       Continue with Email
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <hr className="w-full mt-"></hr>
//               <p
//                 onClick={() => {
//                   setIsCreatingAccount(true);
//                 }}
//                 className="text-center cursor-pointer font-medium bg-[#FCFCFD] rounded-md text-[#0068B3] pt-6 pb-6"
//               >
//                 Don’t have an account? Create one
//               </p>
//             </Modal>
//           ) : (
//             <Modal
//               className="custom-signin-signup-modal "
//               title={
//                 <img
//                   src={backArrow}
//                   className="cursor-pointer"
//                   width={20}
//                   alt="Logo"
//                   onClick={() => {
//                     setIsCreatingAccount(false);
//                   }}
//                 />
//               }
//               open={isModalOpen}
//               onOk={handleOk}
//               onCancel={handleCancel}
//               cancelButtonProps={{ style: { display: "none" } }}
//               okButtonProps={{ style: { display: "none" } }}
//             >
//               <div className="modal-custom-content-class">
//                 <h2 className="font-medium -mt-2 pt-3 text-xl text-center bg-[#FCFCFD]">
//                   Create an account
//                 </h2>
//                 <p className="text-sm pt-1 text-center pb-3 text-[#475467] bg-[#FCFCFD]">
//                   to sell and buy
//                 </p>
//               </div>
//               <hr className="w-full color-[#FCFCFD] bg-[#FCFCFD]"></hr>

//               <Form
//                 name="basic"
//                 onFinish={onFinish}
//                 onFinishFailed={onFinishFailed}
//                 autoComplete="off"
//               >
//                 <div className="sm:ml-16 ml-8 mt-5">
//                   <div>
//                     <p>Name</p>
//                     <Form.Item
//                       label=""
//                       name="name"
//                       rules={[
//                         {
//                           required: true,
//                           message: "Please input your Name!",
//                         },
//                       ]}
//                     >
//                       <Input className="w-10/12 h-10" />
//                     </Form.Item>
//                   </div>

//                   <div>
//                     <p>Email</p>
//                     <Form.Item
//                       label=""
//                       name="email"
//                       rules={[
//                         {
//                           required: true,
//                           message: "Please input your username!",
//                         },
//                       ]}
//                     >
//                       <Input className="w-10/12 h-10" />
//                     </Form.Item>
//                   </div>

//                   <div>
//                     <p>Password</p>
//                     <Form.Item
//                       label=""
//                       name="password"
//                       rules={[
//                         {
//                           required: true,
//                           message: "Please input your password!",
//                         },
//                       ]}
//                     >
//                       <Input.Password className="w-10/12 h-10" />
//                     </Form.Item>
//                   </div>
//                 </div>
//               </Form>

//               <hr className="w-full mt-"></hr>
//               <p className="text-center cursor-pointer font-medium bg-[#FCFCFD] rounded-md text-[#0068B3] pt-6 pb-6">
//                 <span className="text-[#605b5b]">
//                   {" "}
//                   By proceeding, you agree to our{" "}
//                 </span>{" "}
//                 Terms of use <span className="text-[#605b5b]"> & </span>{" "}
//                 <br></br>Privacy Policy
//               </p>

//               <div className=" create-button w-full rounded-sm pb-8">
//                 <Button
//                   className="create-button w-9/12 rounded-sm sm:ml-16 ml ml-10 bg-[#101828] text-white"
//                   size="large"
//                   htmlType="submit"
//                 >
//                   Create
//                 </Button>
//               </div>
//             </Modal>
//           )}

//           {isEmailAccount && (
//             <Modal
//               className="custom-signin-signup-modal custom-animation "
//               title={
//                 <img
//                   src={backArrow}
//                   className="cursor-pointer pt-7 ml-5"
//                   width={20}
//                   alt="Logo"
//                   onClick={() => {
//                     setIsCreatingAccount(false), setIsEmailAccount(false);
//                   }}
//                 />
//               }
//               open={isModalOpen}
//               onOk={handleOk}
//               onCancel={handleCancel}
//               cancelButtonProps={{ style: { display: "none" } }}
//               okButtonProps={{ style: { display: "none" } }}
//             >
//               <div className="modal-custom-content-class">
//                 <h2 className="font-medium -mt-2 pt-3 text-xl text-center bg-[#FCFCFD]">
//                   Sign in your account
//                 </h2>
//                 <p className="text-sm pt-1 text-center pb-3 text-[#475467] bg-[#FCFCFD]">
//                   Welcome back! Please enter your details
//                 </p>
//               </div>
//               <hr className="w-full color-[#FCFCFD] bg-[#FCFCFD]"></hr>

//               <Form
//                 name="basic"
//                 onFinish={onFinish}
//                 onFinishFailed={onFinishFailed}
//                 autoComplete="off"
//               >
//                 <div className="ml-16 mt-5">
//                   <div>
//                     <p>Email</p>
//                     <Form.Item
//                       label=""
//                       name="email"
//                       rules={[
//                         {
//                           required: true,
//                           message: "Please input your username!",
//                         },
//                       ]}
//                     >
//                       <Input className="w-96 h-10" />
//                     </Form.Item>
//                   </div>

//                   <div>
//                     <p>Password</p>
//                     <Form.Item
//                       label=""
//                       name="password"
//                       rules={[
//                         {
//                           required: true,
//                           message: "Please input your password!",
//                         },
//                       ]}
//                     >
//                       <Input.Password className="w-96 h-10" />
//                     </Form.Item>
//                     <a className="login-form-forgot text-[#0068B3] text-base ">
//                       Forgot password ?
//                     </a>
//                   </div>
//                 </div>
//                 <hr className="w-full mt-6"></hr>

//                 <div className="remember-me-div ml-16 mt-5 mb-5">
//                   <Form.Item name="remember" valuePropName="checked" noStyle>
//                     <Checkbox>Remember me</Checkbox>
//                   </Form.Item>
//                 </div>

//                 <div className=" create-button w-full rounded-sm pb-8">
//                   <Button
//                     className="create-button w-9/12 rounded-sm ml-16 bg-[#101828] text-white"
//                     size="large"
//                     htmlType="submit"
//                   >
//                     Sign in
//                   </Button>
//                 </div>
//               </Form>
//             </Modal>
//           )}

//           <Button   onClick={showPostModal} className="bg-[#101828]  rounded-md text-white h-10 md:flex gap-1 items-center hidden md:block">
//             <img src={Add} alt="" />
//            <h1 className="mr-3">Post Ad</h1> 
//           </Button>
//         </div>
//         {/* <div className="search-bar w-6/12 bg-[#F2F4F7]">
//             <SearchBar/>
//     </div> */}
//         {/* <div className="flex gap-5 items-center">
//       <img src={En} alt="" />
//       <img src={chat} alt="" />
//       <img src={ads} alt="" />
//       <h1>SignIn/Sign up</h1>
//       <Button className="bg-[#101828] rounded-md text-white h-10 flex gap-2 items-center">
//         <img src={Add} alt="" />
//         Post Ad</Button>
//     </div> */}
//             </div>
//             <div className="w-full block md:hidden flex gap-1 justify-between">
//             <div className="search-bar w-8/12 bg-[#F2F4F7]  ml-6">
//             <SearchBar/>
//     </div>
//     <Button className="bg-[#101828]  rounded-md text-white h-10 flex gap-1 items-center text-sm ">
//             <img src={Add} alt="" />
//              Ad
//           </Button>
//             </div>
//       </div>

//       {/* Ads Modal */}
//       <Modal
//        title={selectedCategory ? <img src={selectedCategory.img} className="pt-5 px-4" alt="" /> : <img src={BzLOgo} className="pt-5 px-4" alt="" />}
//         visible={isModalVisible}
//         onOk={handleOk}
//         onCancel={handleCancel}
//         footer={false}
//         width={400}
//       >
//         {selectedCategory ? (
//           <div className="pb-5">
//             {/* Render details of the selected category */}
//             <p className="px-4 text-textColor text-lg font-medium border-b pb-5">{selectedCategory.name}</p>
            
//             <div className="border-b px-4 py-4">
//             <Link to={`/category/${selectedCategory.name.toLowerCase()}/car`} onClick={handleCancel} >
//               <h1 className="text-textGrey font-normal text-sm">
//               Used Car for sale
//               </h1>
//           </Link>
//             </div>
//             <div className="border-b px-4 py-4">
//             <Link to={`/category/${selectedCategory.name.toLowerCase()}/Motorcycles`} onClick={handleCancel} >
//               <h1 className="text-textGrey font-normal text-sm">Motorcycles</h1>
//               </Link>
//             </div>
//             <div className="border-b px-4 py-4">
//             <Link to={`/category/${selectedCategory.name.toLowerCase()}/bikes`} onClick={handleCancel} >
//               <h1 className="text-textGrey font-normal text-sm">Bikes</h1>
//               </Link>
//             </div>
//             <div className="border-b px-4 py-4">
//             <Link to={`/category/${selectedCategory.name.toLowerCase()}/boats`} onClick={handleCancel} >
//               <h1 className="text-textGrey font-normal text-sm">Boats</h1>
//               </Link>
//             </div>
//             <div className="border-b px-4 py-4">
//             <Link to={`/category/${selectedCategory.name.toLowerCase()}/heavy-vehicle`} onClick={handleCancel} >
//               <h1 className="text-textGrey font-normal text-sm">Heavy Vehicles</h1>
//               </Link>
//             </div>
//             <div className="border-b px-4 py-4">
//             <Link to={`/category/${selectedCategory.name.toLowerCase()}/used-auto-spare-parts`} onClick={handleCancel} >
//               <h1 className="text-textGrey font-normal text-sm">Used auto spare parts</h1>
//               </Link>
//             </div>
//             <div className="border-b px-4 py-4">
//             <Link to={`/category/${selectedCategory.name.toLowerCase()}/used-wheelet-parts`} onClick={handleCancel} >
//               <h1 className="text-textGrey font-normal text-sm">Used 2 Wheelers spare parts</h1>
//               </Link>
//             </div>
//             <div className="border-b px-4 py-4">
//             <Link to={`/category/${selectedCategory.name.toLowerCase()}/used-spare-parts`} onClick={handleCancel} >
//               <h1 className="text-textGrey font-normal text-sm">Used spare parts</h1>
//               </Link>
//             </div>
//             <div className="pt-4 px-4 ">
//               <h1 className="text-textGrey font-normal text-sm">Others</h1>
//             </div>
//           </div>
//         ) : <>
//         <div className="border-b border-[#F2F4F7] py-4 px-4">
//         <p className="text-textColor font-medium text-lg ">What do you want to Sell?</p>
//         <h6 className="text-textLight text-sm font-normal">Select the category that best suits your ad</h6>
//         </div>
//         <div className="px-10  py-4 flex justify-between flex-wrap gap-5">
//           {PostItems.map((item, i)=>{
//             return(
//               <div key={item.name} className="w-1/4 flex flex-col items-center" onClick={() => openCategoryDetails(item)}>
//                 <img src={item.img} alt="" className="bg-[#FFF8E9] rounded-full p-3"/>
//                 <h1 className="text-textColor font-medium text-sm">{item.name}</h1>
//                 </div>
//             )
//           })}
//         </div>
//         </>
// }
//       </Modal>

//       {/* <CategoryDetailModal
//         visible={isModalVisible}
//         onClose={handleCancel}
//         category={selectedCategory}
//       /> */}
//     </div>
//   );
// };
// const PostItems = [
//   {
//     name: "Motors",
//     img: Motors
//   },
//   {
//     name: "Electronics",
//     img: Electricity
//   },
//   {
//     name: "Classifieds",
//     img: Sofa
//   },
//   {
//     name: "Jobs",
//     img: briefcase
//   },
//   {
//     name: "Community",
//     img: Users
//   },
//   {
//     name: "Property ",
//     img: Building
//   },
// ]
// export default Navbar;



import React, { useState } from "react";
import DubaiIcon from "../../assets/AE.svg";
import dropdownIcon from "../../assets/arrow-down.svg";
import { Button, Select, Modal, Input, Form, Checkbox, Dropdown } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import En from "../../assets/EN.svg";
import ads from "../../assets/ads.svg";
import chat from "../../assets/chat.svg";
import Add from "../../assets/add.svg";
import logoSmall from "../../assets/logoSmall.svg";
import googleIcon from "../../assets/googleIcon.svg";
import fbIcon from "../../assets/fbIcon.svg";
import appleIcon from "../../assets/appleIcon.svg";
import emailIcon from "../../assets/emailIcon.svg";
import backArrow from "../../assets/back-Arrow.svg";
import BzLOgo from "../../assets/Bzlogo.svg";
import Motors from "../../assets/Car.svg";
import Electricity from "../../assets/electricity.svg";
import Sofa from "../../assets/Sofa.svg";
import briefcase from "../../assets/briefcase.svg";
import Users from "../../assets/users.svg"; 
import Building from "../../assets/building-4.svg"; 
import shamsuIcon from "../../assets/shamsuIcon.png";

import "./Navbar.css";
import Logo from '../../assets/Logo.svg'
import SearchBar from "../searchBar/SearchBar";
import CategoryDetailModal from "../Modal/CategoryDetailModal";
import { Link } from "react-router-dom";

const { Option } = Select;

const Navbar = () => {
  // const [selectedValue, setSelectedValue] = useState("Dubai");
  const [searchTerm, setSearchTerm] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);
  const [isEmailAccount , setIsEmailAccount] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);


  const showModal = () => {
    setIsModalOpen(true);
    console.log("hello");
   
  };
  const showPostModal = () => {
    setIsModalVisible(true);
   
  };
  const openCategoryDetails = (category) => {
    setSelectedCategory(category);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    setIsModalVisible(false);
    setSelectedCategory(null);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setIsCreatingAccount(false);
    setIsModalVisible(false);
    setSelectedCategory(null); 
  };
  const [selectedValue, setSelectedValue] = useState('Dubai');

  const items = [
    {
      key: "1",
      label: <a href="/profile">My Profile</a>,
    },
    {
      key: "2",
      label: <a href="/myads">My Ads</a>,
    },
    {
      key: "3",
      label: <a href="">Chats</a>,
    },
    {
      key: "4",
      label: <a href="/favorites">Favourites</a>,
    },
    {
      key: "5",
      label: <a href="/packages">Packages</a>,
    },
    {
      key: "6",
      label: <a href="">Corporate</a>,
    },

    {
      key: "7",
      label: <a href="/setting">Settings</a>,
    },

    {
      key: "8",
      label: <a href="">Logout</a>,
    },
  ];
  const handleSelectChange = (value) => {
    setSelectedValue(value);
    console.log("Selected value:", value);
  };
  
  const handleSearch = () => {
    onSearch(searchTerm);
  };
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // const handleSearch = () => {
  //   onSearch(searchTerm);
  // };
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className=" py-4 border-b">
      <div className="container mx-auto flex items-center flex-col md:flex-row gap-4 justify-between align-middle">
        <div className="w-full flex items-center justify-between">
          <Link to="/">
        <img className="" src={Logo} alt="" />
        </Link>
        <div className="md:flex items-center  hidden md:block">
          <img src={DubaiIcon} alt="" />
          <div className="custom-dropdown-container">
            <img
              src={dropdownIcon}
              alt="Custom Dropdown"
              className="custom-dropdown-image"
            />
            <Select
              className="custom-select "
              onChange={handleSelectChange}
              value={selectedValue}
            >
              <Option value="option1">Option 1</Option>
              <Option value="option2">Option 2</Option>
              <Option value="option3">Option 3</Option>
              <Option value="option4">Option 4</Option>
            </Select>
          </div>
        </div>

        <div className="search-bar w-6/12 md:w-2/6 lg:w-280 xl:w-1/2 bg-[#F2F4F7] hidden md:block ">
            <SearchBar/>
    </div>
        <div className="flex gap-5 items-center ">
          <img src={En} alt="" className="hidden md:block" />
          <img src={chat} alt="" className="hidden md:block" />
          <img src={ads} alt="" className="hidden md:block" />
          {/* <h1 onClick={showModal} className="cursor-pointer text-sm w-full">
            SignIn/Sign up
          </h1> */}
           {isLoggedIn ? (
            <>
              <div className="antd-custom-dropdown-items">
                <Dropdown
                  menu={{
                    items,
                  }}
                  placement="bottom"
                  trigger={["click"]}
                  className="antd-custom-dropdown-items"
                >
                  <div className="flex flex-col justify-center items-center">
                    <div className="cursor-pointer">
                      <img src={shamsuIcon} className="w-5" />
                    </div>
                    <div>
                      <h1 className="cursor-pointer">Shamsu</h1>
                    </div>
                  </div>
                </Dropdown>
              </div>
            </>
          ) : (
            <h1 onClick={showModal} className="cursor-pointer">
              SignIn/Sign up
            </h1>
          )}

          {!isCreatingAccount ? (
            <Modal
              className="custom-signin-signup-modal "
              title={<img src={logoSmall} className="modal-logo-class" width={30} alt="Logo"/>}
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
              cancelButtonProps={{ style: { display: "none" } }}
              okButtonProps={{ style: { display: "none" } }}
            >
              <div className="modal-custom-content-class">
                <h2 className="font-medium -mt-2 pt-3 text-xl text-center bg-[#FCFCFD]">
                  Sign into your account
                </h2>
                <p className="text-sm pt-1 text-center pb-3 text-[#475467] bg-[#FCFCFD]">
                  Subtext
                </p>
              </div>
              <hr className="w-full color-[#FCFCFD] bg-[#FCFCFD]"></hr>
              <div className="flex flex-col gap-3 items-center mt-5 pt-0 pb-5">
                <div className="border border-[#D0D5DD] rounded-md w-10/12 flex justify-center">
                  <div className="flex justify-center pt-2 pb-2 items-center">
                    <img src={googleIcon} />
                    <p className="font-medium pl-2  text-sm">
                      Continue with Google
                    </p>
                  </div>
                </div>
                <div className="border border-[#D0D5DD] rounded-md w-10/12 flex justify-center">
                  <div className="flex justify-center pt-2 pb-2 items-center">
                    <img src={fbIcon} />
                    <p className="font-medium pl-2">Continue with Facebook</p>
                  </div>
                </div>
                <div className="border border-[#D0D5DD] rounded-md w-10/12 flex justify-center">
                  <div className="flex justify-center pt-2 pb-2 items-center">
                    <img src={appleIcon} />
                    <p className="font-medium pl-2">Continue with Apple</p>
                  </div>
                </div>
                <div className="border border-[#D0D5DD] rounded-md w-10/12 flex justify-center">
                  <div className="flex justify-center pt-2 pb-2 items-center">
                    <img src={emailIcon} />
                    <p  className="font-medium cursor-pointer pl-2" onClick={() => {setIsEmailAccount(!isEmailAccount)}}>Continue with Email</p>
                  </div>
                </div>
              </div>
              <hr className="w-full mt-"></hr>
              <p
                onClick={() => {
                  setIsCreatingAccount(true);
                }}
                className="text-center cursor-pointer font-medium bg-[#FCFCFD] rounded-md text-[#0068B3] pt-6 pb-6"
              >
                Don’t have an account? Create one
              </p>
            </Modal>
          )
          : (
            <Modal
              className="custom-signin-signup-modal "
              title={
                <img
                  src={backArrow}
                  className="cursor-pointer"
                  width={20}
                  alt="Logo"
                  onClick={() => {setIsCreatingAccount(false)}} 
                />
              }
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
              cancelButtonProps={{ style: { display: "none" } }}
              okButtonProps={{ style: { display: "none" } }}
            >
              <div className="modal-custom-content-class">
                <h2 className="font-medium -mt-2 pt-3 text-xl text-center bg-[#FCFCFD]">
                  Create an account
                </h2>
                <p className="text-sm pt-1 text-center pb-3 text-[#475467] bg-[#FCFCFD]">
                  to sell and buy
                </p>
              </div>
              <hr className="w-full color-[#FCFCFD] bg-[#FCFCFD]"></hr>

              <Form
                name="basic"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <div className="sm:ml-16 ml-8 mt-5">
                  <div>
                    <p>Name</p>
                    <Form.Item
                      label=""
                      name="name"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Name!",
                        },
                      ]}
                    >
                      <Input className="w-10/12 h-10" />
                    </Form.Item>
                  </div>

                  <div>
                    <p>Email</p>
                    <Form.Item
                      label=""
                      name="email"
                      rules={[
                        {
                          required: true,
                          message: "Please input your username!",
                        },
                      ]}
                    >
                      <Input className="w-10/12 h-10" />
                    </Form.Item>
                  </div>

                  <div>
                    <p>Password</p>
                    <Form.Item
                      label=""
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "Please input your password!",
                        },
                      ]}
                    >
                      <Input.Password className="w-10/12 h-10" />
                    </Form.Item>
                  </div>
                </div>
              </Form>

              <hr className="w-full mt-"></hr>
              <p className="text-center cursor-pointer font-medium bg-[#FCFCFD] rounded-md text-[#0068B3] pt-6 pb-6">
                <span className="text-[#605b5b]">
                  {" "}
                  By proceeding, you agree to our{" "}
                </span>{" "}
                Terms of use <span className="text-[#605b5b]"> & </span>{" "}
                <br></br>Privacy Policy
              </p>

              <div className=" create-button w-full rounded-sm pb-8">
                <Button
                  className="create-button w-9/12 rounded-sm sm:ml-16 ml ml-10 bg-[#101828] text-white"
                  size="large"
                  htmlType="submit"
                >
                  Create
                </Button>
              </div>
            </Modal>
          )}



           {isEmailAccount && <Modal
            className="custom-signin-signup-modal custom-animation "
            title={
              <img
                src={backArrow}
                className="cursor-pointer pt-7 ml-5"
                width={20}
                alt="Logo"
                onClick={() => {
                  setIsCreatingAccount(false) , setIsEmailAccount(false);
                }}
              />
            }
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            cancelButtonProps={{ style: { display: "none" } }}
            okButtonProps={{ style: { display: "none" } }}
          >
            <div className="modal-custom-content-class">
              <h2 className="font-medium -mt-2 pt-3 text-xl text-center bg-[#FCFCFD]">
                Sign in your account
              </h2>
              <p className="text-sm pt-1 text-center pb-3 text-[#475467] bg-[#FCFCFD]">
                Welcome back! Please enter your details
              </p>
            </div>
            <hr className="w-full color-[#FCFCFD] bg-[#FCFCFD]"></hr>

            <Form
              name="basic"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <div className="ml-16 mt-5">
                <div>
                  <p>Email</p>
                  <Form.Item
                    label=""
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input className="w-96 h-10" />
                  </Form.Item>
                </div>

                <div>
                  <p>Password</p>
                  <Form.Item
                    label=""
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password className="w-96 h-10" />
                  </Form.Item>
                  <a className="login-form-forgot text-[#0068B3] text-base ">
                    Forgot password ?
                  </a>
                </div>
              </div>
              <hr className="w-full mt-6"></hr>

              <div className="remember-me-div ml-16 mt-5 mb-5">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              </div>

              <div className=" create-button w-full rounded-sm pb-8">
                <Button
                  className="create-button w-9/12 rounded-sm ml-16 bg-[#101828] text-white"
                  size="large"
                  htmlType="submit"
                >
                  Sign in
                </Button>
              </div>
            </Form>
          </Modal> }

          <Button   onClick={showPostModal} className="bg-[#101828]  rounded-md text-white h-10 md:flex gap-1 items-center hidden md:block">
            <img src={Add} alt="" />
           <h1 className="mr-3">Post Ad</h1> 
          </Button>
        </div>
             {/* <div className="search-bar w-6/12 bg-[#F2F4F7]">
            <SearchBar/>
    </div> */}
    {/* <div className="flex gap-5 items-center">
      <img src={En} alt="" />
      <img src={chat} alt="" />
      <img src={ads} alt="" />
      <h1>SignIn/Sign up</h1>
      <Button className="bg-[#101828] rounded-md text-white h-10 flex gap-2 items-center">
        <img src={Add} alt="" />
        Post Ad</Button>
    </div> */}
            </div>
            <div className="w-full block md:hidden flex gap-1 justify-between">
            <div className="search-bar w-8/12 bg-[#F2F4F7]  ml-6">
            <SearchBar/>
    </div>
    <Button className="bg-[#101828]  rounded-md text-white h-10 flex gap-1 items-center text-sm ">
            <img src={Add} alt="" />
             Ad
          </Button>
            </div>
      </div>

      {/* Ads Modal */}
      <Modal
       title={selectedCategory ? <img src={selectedCategory.img} className="pt-5 px-4" alt="" /> : <img src={BzLOgo} className="pt-5 px-4" alt="" />}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
        width={400}
      >
        {selectedCategory ? (
          <div className="pb-5">
            {/* Render details of the selected category */}
            <p className="px-4 text-textColor text-lg font-medium border-b pb-5">{selectedCategory.name}</p>
            
            <div className="border-b px-4 py-4">
            <Link to={`/category/${selectedCategory.name.toLowerCase()}/car`} onClick={handleCancel} >
              <h1 className="text-textGrey font-normal text-sm">
              Used Car for sale
              </h1>
          </Link>
            </div>
            <div className="border-b px-4 py-4">
            <Link to={`/category/${selectedCategory.name.toLowerCase()}/Motorcycles`} onClick={handleCancel} >
              <h1 className="text-textGrey font-normal text-sm">Motorcycles</h1>
              </Link>
            </div>
            <div className="border-b px-4 py-4">
            <Link to={`/category/${selectedCategory.name.toLowerCase()}/bikes`} onClick={handleCancel} >
              <h1 className="text-textGrey font-normal text-sm">Bikes</h1>
              </Link>
            </div>
            <div className="border-b px-4 py-4">
            <Link to={`/category/${selectedCategory.name.toLowerCase()}/boats`} onClick={handleCancel} >
              <h1 className="text-textGrey font-normal text-sm">Boats</h1>
              </Link>
            </div>
            <div className="border-b px-4 py-4">
            <Link to={`/category/${selectedCategory.name.toLowerCase()}/heavy-vehicle`} onClick={handleCancel} >
              <h1 className="text-textGrey font-normal text-sm">Heavy Vehicles</h1>
              </Link>
            </div>
            <div className="border-b px-4 py-4">
            <Link to={`/category/${selectedCategory.name.toLowerCase()}/used-auto-spare-parts`} onClick={handleCancel} >
              <h1 className="text-textGrey font-normal text-sm">Used auto spare parts</h1>
              </Link>
            </div>
            <div className="border-b px-4 py-4">
            <Link to={`/category/${selectedCategory.name.toLowerCase()}/used-wheelet-parts`} onClick={handleCancel} >
              <h1 className="text-textGrey font-normal text-sm">Used 2 Wheelers spare parts</h1>
              </Link>
            </div>
            <div className="border-b px-4 py-4">
            <Link to={`/category/${selectedCategory.name.toLowerCase()}/used-spare-parts`} onClick={handleCancel} >
              <h1 className="text-textGrey font-normal text-sm">Used spare parts</h1>
              </Link>
            </div>
            <div className="pt-4 px-4 ">
              <h1 className="text-textGrey font-normal text-sm">Others</h1>
            </div>
          </div>
        ) : <>
        <div className="border-b border-[#F2F4F7] py-4 px-4">
        <p className="text-textColor font-medium text-lg ">What do you want to Sell?</p>
        <h6 className="text-textLight text-sm font-normal">Select the category that best suits your ad</h6>
        </div>
        <div className="px-10  py-4 flex justify-between flex-wrap gap-5">
          {PostItems.map((item, i)=>{
            return(
              <div key={item.name} className="w-1/4 flex flex-col items-center" onClick={() => openCategoryDetails(item)}>
                <img src={item.img} alt="" className="bg-[#FFF8E9] rounded-full p-3"/>
                <h1 className="text-textColor font-medium text-sm">{item.name}</h1>
                </div>
            )
          })}
        </div>
        </>
}
      </Modal>

      {/* <CategoryDetailModal
        visible={isModalVisible}
        onClose={handleCancel}
        category={selectedCategory}
      /> */}
    </div>
  );
};
const PostItems = [
  {
    name: "Motors",
    img: Motors
  },
  {
    name: "Electronics",
    img: Electricity
  },
  {
    name: "Classifieds",
    img: Sofa
  },
  {
    name: "Jobs",
    img: briefcase
  },
  {
    name: "Community",
    img: Users
  },
  {
    name: "Property ",
    img: Building
  },
]
export default Navbar;