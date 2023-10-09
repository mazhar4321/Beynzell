import { Select } from 'antd'
import React, { Children, useEffect, useState } from 'react'
import { MenuOutlined, DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import DropdownIcon from '../../assets/down.svg'
import './Header.css'
function Headerss() {
   
    // const items = [
    //     { label: 'Item 1', url: 'https://example.com/item1' },
    //     { label: 'Item 2', url: 'https://example.com/item2' },
    //     { label: 'Item 3', url: 'https://example.com/item3' },
    //   ];
    
    //   const handleItemClick = (item) => {
    //     console.log('Clicked item:', item.label);
    //     console.log('URL:', item.url);
    //   };
    
    //   const menu = (
    //     <Menu>
    //       {items.map((item, index) => (
    //         <Menu.Item key={index} onClick={() => handleItemClick(item)}>
    //           {item.label}
    //         </Menu.Item>
    //       ))}
    //     </Menu>
    //   );
    const [isMobile, setIsMobile] = useState(false);
    const [collapsed, setCollapsed] = useState(true);

     
      const menuItems = [
        {
          label: "Motors",
          key:"Motors",
          icon:<DownOutlined/>,
          children:[
            {
              label:<MegaMenu/>,
              key:"MehaMenu",
              style:{
                height: "fit-content",
                padding:0,
                background: "#fff"
              }
            }
          ]
        },
        {
          label: "Electronics",
          key:"Electronics",
          icon:<DownOutlined/>
        },
        {
          label: "Classified",
          key:"Classified",
          icon:<DownOutlined/>
        },
        {
          label: "Jobs",
          key:"Jobs",
          icon:<DownOutlined/>
        },
        {
          label: "Community",
          key:"Community",
          icon:<DownOutlined/>
        },
        {
          label: "Property",
          key:"Property",
          icon:<DownOutlined/>
        },
        {
          label: "Join Corporate",
          key:"Join Corporate",
          icon:<DownOutlined/>
        },
      ]
      const [isSidebarOpen, setSidebarOpen] = useState(false);
      const [isDropdownOpen, setDropdownOpen] = useState(false);
  
      const toggleSidebar = () => {
          setSidebarOpen(!isSidebarOpen);
      };
  
      const toggleDropdown = () => {
          setDropdownOpen(!isDropdownOpen);
      };
  return (
    <div className='border-b'>
    <div className='container mx-auto flex justify-between xl:w-8/12 md:py-0 py-0'>
        {/* <Dropdown overlay={menu} trigger={['click']}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          Motors <img src={DropdownIcon} alt="" />
        </Space>
      </a>
    </Dropdown>
        <Dropdown overlay={menu} trigger={['click']}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          Electronics  <img src={DropdownIcon} alt="" />
        </Space>
      </a>
    </Dropdown>
        <Dropdown overlay={menu} trigger={['click']}>
      <a onClick={(e) => e.preventDefault()}>
        <Space> 
        Classified  <img src={DropdownIcon} alt="" />
        </Space>
      </a>
    </Dropdown>
        <Dropdown overlay={menu} trigger={['click']}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
        Jobs  <img src={DropdownIcon} alt="" />
        </Space>
      </a>
    </Dropdown>
        <Dropdown overlay={menu} trigger={['click']}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
        Community  <img src={DropdownIcon} alt="" />
        </Space>
      </a>
    </Dropdown>
        <Dropdown overlay={menu} trigger={['click']}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
        Property  <img src={DropdownIcon} alt="" />
        </Space>
      </a>
    </Dropdown>
    <h1>Join Corporate</h1> */}
    {/* <div className='md:block hidden'>
    <Menu
    className={`menu-dropdown ${isMobile ? 'menu-mobile' : 'W-FULL'}`}
    mode={isMobile ? 'inline' : 'horizontal'}
    // defaultOpenKeys={isMobile ? [] : menuItems.map(item => item.key)}
    items={menuItems}
    inlineCollapsed={isMobile}
    />
    </div>
    <div className='md:hidden block'>
    <Menu
    className='W-FULL'
    mode='inline' 
    // defaultOpenKeys={isMobile ? [] : menuItems.map(item => item.key)}
    items={menuItems}
    inlineCollapsed={isMobile}
    />
    </div> */}
{/* 
<nav className="bg-gray-800 text-white">
            <div className="container mx-auto px-4 py-2">
                <div className="flex items-center justify-between">
                    <div className="lg:hidden">
                        <button onClick={toggleSidebar} className="text-white">
                            <MenuOutlined />
                        </button>
                    </div>
                    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                        <div className="sidebar-header">
                            <button onClick={toggleSidebar} className="text-white">
                                <MenuOutlined />
                            </button>
                        </div>
                        <ul className={`sidebar-menu ${isSidebarOpen ? 'open' : ''}`}>
                            <li>
                                <a href="#" className="hover:text-gray-300">Home</a>
                            </li>
                            <li
                                className={`relative group ${activeCategory === 'categories' ? 'md:ml-4' : ''}`}
                            >
                                <a
                                    href="#"
                                    className={`hover:text-gray-300 ${activeCategory === 'categories' ? 'dropdown-active' : ''}`}
                                    onClick={() => toggleCategory('categories')}
                                >
                                    Categories
                                </a>
                                <ul className={`dropdown-menu ${activeCategory === 'categories' ? 'open' : ''}`}>
                                <div className="categories-columns">
                                        <div className="category-column">
                                            <span className="column-label">Electronics</span>
                                            <li>
                                                <a href="#" className="hover:text-gray-600">Subcategory 1</a>
                                            </li>
                                            <li>
                                                <a href="#" className="hover:text-gray-600">Subcategory 2</a>
                                            </li>
                                        </div>
                                        <div className="category-column">
                                            <span className="column-label">Clothing</span>
                                            <li>
                                                <a href="#" className="hover:text-gray-600">Subcategory 1</a>
                                            </li>
                                            <li>
                                                <a href="#" className="hover:text-gray-600">Subcategory 2</a>
                                            </li>
                                        </div>
                                        <div className="category-column">
                                            <span className="column-label">Books</span>
                                            <li>
                                                <a href="#" className="hover:text-gray-600">Subcategory 1</a>
                                            </li>
                                            <li>
                                                <a href="#" className="hover:text-gray-600">Subcategory 2</a>
                                            </li>
                                        </div>
                                        <div className="category-column">
                                            <span className="column-label">Other</span>
                                            <li>
                                                <a href="#" className="hover:text-gray-600">Subcategory 1</a>
                                            </li>
                                            <li>
                                                <a href="#" className="hover:text-gray-600">Subcategory 2</a>
                                            </li>
                                        </div>
                                    </div>
                                </ul>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-300">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav> */}
         <nav className="bg-gray-800 md:bg-white text-white w-full">
            <div className="mx-auto ">
                <div className="">
                    <div className="lg:hidden">
                        <button onClick={toggleSidebar} className="humberger">
                            <MenuOutlined />
                        </button>
                    </div>
                    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                        <div className="sidebar-header">
                            <button onClick={toggleSidebar} className="text-white">
                                <MenuOutlined />
                            </button>
                        </div>
                        <ul className={`sidebar-menu md:flex md:flex-row md:justify-between hidden md:block ${isSidebarOpen ? 'open' : ''}`}>
                            {/* <li className='flex gap-1 items-center'>
                                <a href="#" className="hover:text-gray-300">Motors</a>
                            </li> */}
                            <li
                                className={`relative group ${isDropdownOpen ? '' : ''}`}
                                onClick={toggleDropdown}
                            >
                                <a
                                    href="#"
                                    className={`hover:text-gray-300 flex gap-1 ${isDropdownOpen ? 'dropdown-active' : ''}`}
                                    
                                >
                                    Motors
                                    <img src={DropdownIcon} alt="" />
                                </a>
                                <ul className={`dropdown-menu ${isDropdownOpen ? 'open' : ''}`}>
                                <div className="categories-columns">
                                        <div className="category-column">
                                            <span className="column-label">Electronics</span>
                                            <li >
                                                <a href="#" onClick={(e) => console.log('Electronics', 'Subcategory 1')} className="hover:text-gray-600">Subcategory 1</a>
                                            </li>
                                            <li>
                                                <a href="#" className="hover:text-gray-600">Subcategory 2</a>
                                            </li>
                                        </div>
                                        <div className="category-column">
                                            <span className="column-label">Clothing</span>
                                            <li>
                                                <a href="#" className="hover:text-gray-600">Subcategory 1</a>
                                            </li>
                                            <li>
                                                <a href="#" className="hover:text-gray-600">Subcategory 2</a>
                                            </li>
                                        </div>
                                        <div className="category-column">
                                            <span className="column-label">Books</span>
                                            <li>
                                                <a href="#" className="hover:text-gray-600">Subcategory 1</a>
                                            </li>
                                            <li>
                                                <a href="#" className="hover:text-gray-600">Subcategory 2</a>
                                            </li>
                                        </div>
                                        <div className="category-column">
                                            <span className="column-label">Other</span>
                                            <li>
                                                <a href="#" className="hover:text-gray-600">Subcategory 1</a>
                                            </li>
                                            <li>
                                                <a href="#" className="hover:text-gray-600">Subcategory 2</a>
                                            </li>
                                        </div>
                                    </div>
                                </ul>
                            </li>
                            <li className='flex gap-1 items-center'>
                                <a href="#" className="hover:text-gray-300">Electronics</a>
                                <img src={DropdownIcon} alt="" />
                            </li>
                            <li className='flex gap-1 items-center'>
                                <a href="#" className="hover:text-gray-300">Classified</a>
                                <img src={DropdownIcon} alt="" />
                            </li>
                            <li className='flex gap-1 items-center'>
                                <a href="#" className="hover:text-gray-300">Jobs</a>
                                <img src={DropdownIcon} alt="" />
                            </li>
                            <li className='flex gap-1 items-center'>
                                <a href="#" className="hover:text-gray-300">Community</a>
                                <img src={DropdownIcon} alt="" />
                            </li>
                            <li className='flex gap-1 items-center'>
                                <a href="#" className="hover:text-gray-300">Property</a>
                                <img src={DropdownIcon} alt="" />
                            </li>
                            
                            
                            <li>
                                <a href="#" className="hover:text-gray-300">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </div>
    </div>
  )
}

function MegaMenu (){
  const [selectedKey , setSelectedKey] = useState("")
  const onMenuItemSelected = (item)=>{
    setSelectedKey([item.key])
    console.log(item.key)
  }
  return(
    <Space direction='horizontal'>
    <Menu 
    onClick={onMenuItemSelected}
    selectedKeys={selectedKey}
    items={[
      {
        label:"Used Cars",
        key:"Used Cars",
        type: "group",
      },
      {
        label:"SUV",
        key:"SUV",
      },
      {
        label:"Sedan",
        key:"Sedan",
      },
      {
        label:"Jeep",
        key:"Jeep",
      },
      {
        label:"Hatch back",
        key:"Hatch back",
      },
      {
        label:"Item",
        key:"Item",
      },
    ]}/>
    <Menu 
     onClick={onMenuItemSelected}
     selectedKeys={selectedKey}
    items={[
      {
        label:"heading",
        key:"Used Cars",
        type: "group",
      },
      {
        label:"SUV",
        key:"SUV",
      },
      {
        label:"Sedan",
        key:"Sedan",
      },
      {
        label:"Jeep",
        key:"Jeep",
      },
      {
        label:"Hatch back",
        key:"Hatch back",
      },
      {
        label:"Item",
        key:"Item",
      },
    ]}/>
    <Menu 
     onClick={onMenuItemSelected}
     selectedKeys={selectedKey}
    items={[
      {
        label:"heading",
        key:"Used Cars",
        type: "group",
      },
      {
        label:"SUV",
        key:"SUV",
      },
      {
        label:"Sedan",
        key:"Sedan",
      },
      {
        label:"Jeep",
        key:"Jeep",
      },
      {
        label:"Hatch back",
        key:"Hatch back",
      },
      {
        label:"Item",
        key:"Item",
      },
    ]}/>
    <Menu 
     onClick={onMenuItemSelected}
     selectedKeys={selectedKey}
    items={[
      {
        label:"heading",
        key:"Used Cars",
        type: "group",
      },
      {
        label:"SUV",
        key:"SUV",
      },
      {
        label:"Sedan",
        key:"Sedan",
      },
      {
        label:"Jeep",
        key:"Jeep",
      },
      {
        label:"Hatch back",
        key:"Hatch back",
      },
      {
        label:"Item",
        key:"Item",
      },
    ]}/>
    </Space>
  )
}

export default Headerss