// import Link from 'next/link';

import { Link } from "react-router-dom";
import mobile from '../../assets/Mobileapp.svg'
import store from '../../assets/store.svg'
import Logo from '../../assets/Logo.svg'

const Footer = () => {
  return (
    <footer className=" py-8 bg-colorThemePrimary text-SkyColor font-semibold">
      <div className="container mx-auto flex flex-wrap items-start justify-start py-12 border-borderColor  border-b-2 text-SkyColor font-semibold">
      
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 px-4 mb-8 text-SkyColor font-semibold">
          <h2 className="text-lg font-bold mb-4 text-black">Company</h2>
          <ul className='flex flex-col gap-5'>
            <li>
                <Link href=''>
                <h1>About us</h1>
                </Link>
            </li>
            <li>
                <Link href=''>
                <h1>Careers  </h1>
                </Link>
            </li>
            <li>
                <Link href=''>
                <h1>Post Ad</h1>
                </Link>
            </li>
            <li>
                <Link href=''>
                <h1>Corporate</h1>
                </Link>
            </li>
            <li>
                <Link href=''>
                <h1>Contact</h1>
                </Link>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 px-4  mb-8 text-SkyColor font-semibold">
          <h2 className="text-lg font-bold mb-4 text-black">Resources</h2>
          <ul className='flex flex-col gap-5'>
            <li>
                <Link href=''>
                <h1>Blog</h1>
                </Link>
            </li>
            <li>
                <Link href=''>
                <h1>Newsletter</h1>
                </Link>
            </li>
            <li>
                <Link href=''>
                <h1>Events</h1>
                </Link>
            </li>
            <li>
                <Link href=''>
                <h1>Tutorials</h1>
                </Link>
            </li>
            <li>
                <Link href=''>
                <h1>Support</h1>
                </Link>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 px-4 mb-8 text-SkyColor font-semibold">
          <h2 className="text-lg font-bold mb-4 text-black">Social</h2>
          <ul className='flex flex-col gap-5'>
            <li>
              <Link href="/">
                <h1 className=" hover:text-gray-800">Twitter</h1>
              </Link>
            </li>
            <li>
              <Link href="/">
                <h1 className=" hover:text-gray-800">LinkedIn</h1>
              </Link>
            </li>
            <li>
              <Link href="/">
                <h1 className=" hover:text-gray-800">Facebook</h1>
              </Link>
            </li>
            <li>
              <Link href="/">
                <h1 className=" hover:text-gray-800">Instagram</h1>
              </Link>
            </li>
            <li>
              <Link href="/">
                <h1 className=" hover:text-gray-800">Youtube</h1>
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 px-4 mb-8 text-SkyColor font-semibold">
          <h2 className="text-lg font-bold mb-4 text-black">Legal</h2>
          <ul className='flex flex-col gap-5'>
            <li>
              <Link href="/">
                <h1 className=" hover:text-gray-800">Terms</h1>
              </Link>
            </li>
            <li>
              <Link href="/">
                <h1 className=" hover:text-gray-800">Privacy</h1>
              </Link>
            </li>
            <li>
              <Link href="/">
                <h1 className=" hover:text-gray-800">Cookies</h1>
              </Link>
            </li>
            <li>
              <Link href="/">
                <h1 className=" hover:text-gray-800">Settings</h1>
              </Link>
            </li>
            
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 px-4 mb-8 text-SkyColor font-semibold">
          <h2 className="text-lg font-bold mb-4 text-black">Language</h2>
          <ul className='flex flex-col gap-5'>
            <li>
              <Link href="/">
                <h1 className=" hover:text-gray-800">English</h1>
              </Link>
            </li>
            <li>
              <Link href="/">
                <h1 className=" hover:text-gray-800">عربي</h1>
              </Link>
            </li>
            
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6  mb-8 relative">
          {/* <img src="/images/logo.png" alt="Logo" className="w-20 h-20" /> */}
         <h1 className="text-lg font-bold mb-4 text-black">Get the app</h1>
         <div>
          <img src={mobile} alt="" className="mt-4" />
          <img src={store} alt="" className="mt-4" />
         </div>
        </div>
      </div>
      <footer className="py-4 pb-10 text-center text-SkyColor font-semibold flex justify-between container mx-auto mt-5">
        <img src={Logo} alt="" />
      <p className=" text-sm"> © 2024 Buynzell. All rights reserved.</p>
    </footer>
    </footer>
  );
};

export default Footer