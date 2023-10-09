import React, { useState } from 'react'
import Celebrate from '../../../assets/Celebrate.png'
import { Button, Checkbox, Form, Input } from 'antd';
import Logo from '../../../assets/corporate-logo.svg'
import CustomInput from '../../../component/myProfile/CustomInput'

function Login() {
    const [login , setLogin] = useState(false)
    return(
       <div className='h-screen overflow-hidden'>
       <Head/>
      
        <div className='bg-[#F9FAFB] py-10 h-full'>
            <div className='container mx-auto'>
            {login ? <SignIn/> :
        <div className='card-shadow lg:w-1/3 md:w-1/2 w-full mx-auto rounded-sm px-6 py-6'>
        <div className='border-b border-borderColor pb-4 flex gap-4 items-center'>
            <img src={Celebrate} alt="" />
            <h1 className='text-textColor font-medium text-xl'>Let’s get started</h1>
        </div>
        <div className='border-b border-borderColor pb-4 my-6'>
            <p className='text-black font-normal'>
            We have shared the login credentials to your registered email Id 
            </p>
        </div>
        <div className='my-4'>
            <p className='text-textGrey font-normal text-center'>Any issue? Need  <span className='text-SkyColor'>Help</span> </p>
            <div className='flex justify-center'>
            <Button onClick={()=> setLogin(true)} className='text-white bg-textColor font-medium my-4 mt-6 w-full h-10'>
            Login
            </Button>
            </div>
        </div>
        </div>

}
</div>
        </div>
        </div>
    )
}

const SignIn = ()=>{
    const onFinish = (values) => {
        console.log('Success:', values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    return(
        <div className='card-shadow lg:w-1/3 md:w-1/2 w-full mx-auto rounded-sm py-6'>
        <div className='border-b border-borderColor pb-4 pt-10 text-center items-center'>
            <h1 className='text-textColor font-medium text-xl'>Welcome to Corporate</h1>
            <p className='text-Grey600 font-normal'>Please enter your details to continue</p>
        </div>
        <div >
        <Form
        layout="vertical"
    name="basic"
   
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <div className='border-b border-borderColor pb-4 my-6 '>
    <Form.Item
      label="Username"
      name="username"
      className='mb-4 w-10/12 mx-auto'
      rules={[
        {
          message: 'Please input your username!',
        },
      ]}
    >
      <Input       className='rounded-md h-10' />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
    className='mb-1  w-10/12 mx-auto'
      rules={[
        {
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password       className='rounded-md h-10' />
    </Form.Item>
    <h1 className='text-SkyColor font-medium my-3 w-10/12 mx-auto'>Forgot Password?</h1>
    </div>
    <Form.Item
      name="remember"
      valuePropName="checked"
      className='mx-auto w-10/12'
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item
     
    >
        <div className='w-10/12 mx-auto'>
      <Button className=' bg-textColor font-medium text-white mx-auto h-10 w-full ' htmlType="submit">
        Submit
      </Button>
      </div>
    </Form.Item>
  </Form>
        </div>
        
        </div>
    )
}


const Head = ()=>{
    return(
        <div className='border-b border-borderColor bg-white '>
        <div className="container mx-auto py-4 flex justify-between">
        <img src={Logo} alt="" />
          
        </div>
       </div>
    )
}

export default Login