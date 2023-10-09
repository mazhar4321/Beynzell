import React, { useState } from "react";
import background from "../assets/profile-bg.png";
import rightArrow from "../assets/chevron-right.svg";
import Add from '../assets/add-blue.svg'
import AddCircle from '../assets/add-circle2.svg'
import CoverPhotoUploader from "../component/myProfile/CoverPhotoUploader";
import { Avatar, Space } from "antd";
import { Button, Checkbox, Form, Input } from "antd";
import CustomInput from "../component/myProfile/CustomInput";
import CustomTextArea from "../component/myProfile/CustomTextArea";
import CompactInput from "../component/myProfile/CompactInput";


function MyProfile() {
  const [coverPhoto, setCoverPhoto] = useState(null);
  const UserList = ["U", "Lucy", "Tom", "Edward"];
  const [user, setUser] = useState(UserList[0]);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    message: '',
  });

  const handleUpload = (file) => {
    setCoverPhoto(file);
  };


  const handleChange = (e) => {
    console.log(e.target.value)
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., sending data to a server
    console.log('Form data:', formData);
  };
  return (
    <div>
      <div className="banner-container relative">
        <div className="banner-replacer">
          {coverPhoto ? (
            <img
              src={URL.createObjectURL(coverPhoto)}
              alt="Cover"
              className="w-full"
              style={{ width: "100%", height: "317px", objectFit: "cover" }}
            />
          ) : (
            <img src={background} alt="Cover" className="w-full h-68" />
          )}
        </div>
        <CoverPhotoUploader onUpload={handleUpload} />
      </div>
      <div className="container mx-auto flex lg:flex-row flex-col gap-10  mt-10">
        <div className="card-shadow flex items-center justify-center flex-col gap-4 p-4 px-10 lg:w-4/12 w-full h-fit">
          <div className="relative">
            <img src={AddCircle} alt="" className="absolute bottom-0 -right-2 z-50 text-white" />
            <Avatar
            size={{
              xs: 24,
              sm: 32,
              md: 40,
              lg: 64,
              xl: 80,
              xxl: 100,
            }}
            style={{
              backgroundColor: "#F9703A",
              verticalAlign: "middle",
            }}
            // size="large"
          >
            {user}
          </Avatar>
          </div>
          
          <div className="text-center">
            <h1 className="font-medium text-textColor">Syed Shamsu</h1>
            <p className="text-textGrey font-normal text-sm">
              Member since Jan 2023
            </p>
          </div>
          <div className="w-full border border-[#EAECF0] py-2 px-3 border-sm">
            <div className="flex justify-between font-medium border-b py-2">
              <h1 className="text-SkyColor text-sm">My Ads</h1>
              <img src={rightArrow} alt="" />
            </div>
            <div className="flex justify-between font-medium border-b py-2">
              <h1 className="text-SkyColor text-sm">Favorites</h1>
              <img src={rightArrow} alt="" />
            </div>
            <div className="flex justify-between font-medium pt-2">
              <h1 className="text-SkyColor text-sm">My Packages</h1>
              <img src={rightArrow} alt="" />
            </div>
          </div>
        </div>
        <div className="card-shadow  lg:w-1/2 w-full p-4">
          <div className="border-b pb-6">
            <h1 className="text-textColor font-medium text-xl">My Profile</h1>
          </div>
          <div>
           
            <div>
             
                
            <form style={{maxWidth:600, margin:"auto"}} onSubmit={handleSubmit}>
            <div className="flex justify-between mt-5 mb-5 font-medium">
              <h1 className="text-textColor text-md">General Info</h1>
              <button className="text-SkyColor text-sm">Edit</button>
            </div>
        <div>
        <CustomInput value={formData.name} onChange={handleChange} label="First Name" placeholder="Syed" name="firstname" type="text" required />
        </div>
        <div>
          <CustomInput value={formData.email} onChange={handleChange} label="Last Name" placeholder="Shamsu" name="lastname" type="text" required/>
        </div>
        <div>
            <CustomTextArea value={formData.message} onChange={handleChange}/>
        </div>
        
        <div className="flex justify-between mt-10 pt-5 border-t font-medium">
              <h1 className="text-textColor text-md" >Contact</h1>
              <div className="flex gap-5">
              <button className="text-SkyColor text-sm">Edit</button>
                <img src={Add} alt="" />
              </div>
            </div>
   <div>
    <CompactInput defaultValue="+952" label="Phone Number"/>
   </div>
   <div>
    <CustomInput placeholder="Email" name="email" label="Email" type="email" required />
   </div>

   <div className="flex justify-between mt-10 pt-5 border-t font-medium">
              <h1 className="text-textColor text-md">Security</h1>
              <button className="text-SkyColor text-sm">Change Password</button>
            </div>
            
            <div>
                <CustomInput type="password" label="Password" name="password" value="1212323"/>
            </div>

            <div className="flex justify-between mt-10 pt-5 border-t font-medium">
              <h1 className="text-textColor text-md">Web link</h1>
            </div>
            <div>
                <CompactInput defaultValue="http://"/>
            </div>

            
   <div className="flex justify-between mt-10 pt-5 border-t font-medium">
              <h1 className="text-textColor text-md">Link Account</h1>
            </div>

            <div>
                <CompactInput label="WhatsApp" defaultValue="http://"/>
            </div>
            <div>
                <CompactInput label="Facebook" defaultValue="http://"/>
            </div>

            <div className="mt-10">
            <button type="submit" className="flex gap-1 items-center font-medium text-SkyColor">
                <img src={Add} alt="" />
                Add</button>
            </div>
      </form>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
