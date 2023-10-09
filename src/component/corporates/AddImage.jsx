import React from 'react';
import { Table, Button, Input, Modal,  Upload, message, Select, DatePicker } from 'antd';
import { useState } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import UploadImg from '../../assets/upload-cloud.svg'
import BackArrow from "../../assets/Testiomonial-back-arrow.png";
import RightArrow from "../../assets/Testiomonial-arrow.png";
import DownArrow from '../../assets/arrow-down.svg'
import Plus from '../../assets/add-circle.svg'
import Minus from '../../assets/minus-circle.svg'
import { useRef } from 'react';
import CustomInput from '../myProfile/CustomInput';
import CustomTextArea from '../myProfile/CustomTextArea';
import CompactInput from '../myProfile/CompactInput';



const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
  };


  const { Dragger } = Upload;

function AddImagesAndMore({ uploadedData,  nextStep  }) {
    const [selectionType, setSelectionType] = useState('checkbox');
    const [selectedCar, setSelectedCar] = useState('BMW');
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [rowImages, setRowImages] = useState({});
    const [activeIndex, setActiveIndex] = useState(null);
    const [currentRowKey, setCurrentRowKey] = useState(null);
    const [fileList, setFileList] = useState([]);
    const [thumbnailIndex, setThumbnailIndex] = useState(-1);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [tableData, setTableData] = React.useState([]);
    const [currentRowData, setCurrentRowData] = useState(null);
    const [activeInsurence, setActiveInsurence] = useState(null);
    const [currentRowIndex, setCurrentRowIndex] = useState(-1);
    const fuelTypes = ['Gasoline', 'Diesel', 'CNG', 'Hybrid', 'Electric'];
    const [selectedDate, setSelectedDate] = useState(null);
  const [toggle , setToggle] = useState(false)
  const [activeFuelIndex, setActiveFuelIndex] = useState(null);
  const itemCount = 4;
    const Insurence = ['Yes', 'No']
    const uploadRef = useRef(null);
    
  const carOptions = [
    'Sedan',
    'SUV',
    'Hatchback',
    'Convertible',
    // Add more car types as needed
  ];
    console.log(tableData)
    const maxImages = 15;

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
    const handleCarSelect = (value) => {
      setSelectedCar(value);
    };
    const handleFuelTypeClick = (index) => {
      if (activeFuelIndex === index) {
        setActiveFuelIndex(null); // Toggle off the active state if clicked again
      } else {
        setActiveFuelIndex(index); // Set the clicked index as active
      }
    };
    const handleOpenModal = (record) => {
      const rowIndex = tableData.findIndex((row) => row.key === record.key);
    
      if (rowIndex !== -1) {
        setCurrentRowIndex(rowIndex);
        setCurrentRowKey(record.key);
        setModalVisible(true);
    
        // Check if images for the current row already exist in the state
        if (rowImages[record.key]) {
          // If images exist, set the fileList state to the existing images
          setFileList(rowImages[record.key]);
        } else {
          // If no images exist, set the fileList state to an empty array
          setFileList([]);
        }
    
        // Reset the Upload component by clearing its fileList
        if (uploadRef.current) {
          uploadRef.current.clearFileList();
        }
      }
    };
    const handlePrevious = () => {
      if (currentRowIndex > 0) {
        const previousRowIndex = currentRowIndex - 1;
        const previousRowKey = tableData[previousRowIndex].key;
    
        // Retrieve files for the previous row from rowImages state
        const previousRowImages = rowImages[previousRowKey] || {};
    
        // Set the fileList and thumbnailIndex for the previous row
        setFileList(previousRowImages.images || []);
        setThumbnailIndex(previousRowImages.thumbnailIndex || -1);
    
        // Update the current row index and key
        setCurrentRowIndex(previousRowIndex);
        setCurrentRowKey(previousRowKey);
      }
    };
    
    const openModalAtIndex = (index) => {
      setCurrentRowData(index);
      setCurrentIndex(index);
      const currentRowKey = tableData[index].key;
      setFileList((rowImages[currentRowKey] || {}).images || []);
      setThumbnailIndex((rowImages[currentRowKey] || {}).thumbnailIndex || -1);
      setModalVisible(true);
    };
  
    const handleNext = () => {
      if (currentRowIndex < tableData.length - 1) {
        setCurrentRowIndex(currentRowIndex + 1);
        setCurrentRowKey(tableData[currentRowIndex + 1].key);
    
        // Clear the fileList and reset thumbnailIndex for the next row
        setFileList([]);
        setThumbnailIndex(-1);
      }
    };
    console.log(currentIndex)
    const uploadProps = {
      multiple: true,
      fileList,
      beforeUpload: (file) => {
        if (fileList.length + 1 <= maxImages) {
          setFileList(prevFileList => [...prevFileList, file]); // Use functional update
        } else {
          message.warning(`You can only upload up to ${maxImages} images.`);
        }
        return false;
      },
    };
    const handleCloseModal = () => {
      setModalVisible(false);
      setCurrentRowKey(null);
      setCurrentIndex(0); 
      setFileList([]);
    };
  
    const handleThumbnailSelection = (image) => {
      setSelectedThumbnail(image);
    };
  
    const handleImageUpload = (imageFiles) => {
      if (currentRowKey !== null) {
        setRowImages((prevRowImages) => ({
          ...prevRowImages,
          [currentRowKey]: imageFiles,
        }));
      }
    };
  
    const handleSearch = (value) => {
      setSearchText(value);
    };
  
    const handleReset = () => {
      setSearchText('');
    };

    const columns = [
      {
        title: 'Data',
        dataIndex: 'data',
        key: 'data',
        width: '80%',
        render: (text, record) => (
          <div className='flex gap-3 items-center'>
            <div className='border border-borderColor rounded-md w-12 h-10 items-center'>
              {/* <img src="" alt='' /> */}
            </div>
            <p>{text}</p>
          </div>
        ),
      },
      {
        title: 'Add Image',
        dataIndex: 'addImage',
        key: 'addImage',
        render: (_, record) => (
          <Button type='text'   onClick={() => handleOpenModal(record)}>
            Add Images
          </Button>
        ),
      },
      {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
        render: (_, record) => <Button onClick={() => handleDelete(record.key)}>Delete</Button>,
      },
    ];
  
    // Create a state to hold the table data
 
  
    // Function to handle row deletion
    const handleDelete = (key) => {
      const newData = tableData.filter((item) => item.key !== key);
      setTableData(newData);
    };
  
    React.useEffect(() => {
      // Initialize table data based on uploadedData from CheckAndCorrect component
      const initialTableData = uploadedData.slice(1).map((data, index) => ({
        key: `${data[0]}_${index}`, // Append the index to ensure uniqueness
        data: data[0],
      }));
  
      // Apply search filter if searchText is not empty
      const filteredData = initialTableData.filter((item) =>
        item.data.toLowerCase().includes(searchText.toLowerCase())
      );
  
      setTableData(filteredData);
    }, [uploadedData, searchText]);

    const handleRemove = (file) => {
      const updatedFileList = fileList.filter(item => item !== file);
      setFileList(updatedFileList);
  
      // Update thumbnail selection if removed image was the thumbnail
      if (thumbnailIndex === fileList.indexOf(file)) {
        setThumbnailIndex(-1);
      }
    };

     const handleThumbnailClick = (index) => {
    if (thumbnailIndex === index) {
      setThumbnailIndex(-1); // Deselect thumbnail if clicked again
    } else {
      setThumbnailIndex(index);
    }
  };

  const handleSave = () => {
    if (currentRowKey !== null) {
      setRowImages((prevRowImages) => ({
        ...prevRowImages,
        [currentRowKey]: {
          thumbnailIndex,
          images: fileList,
        },
      }));
    }
    
    // Clear the fileList
    setFileList([]);
    
    // Close the modal by setting the new state variable to false
    setIsModalVisible(false);
  };
  const handleInsurenceTypeClick = (index) => {
    if (activeFuelIndex === index) {
        setActiveInsurence(null); // Toggle off the active state if clicked again
    } else {
        setActiveInsurence(index); // Set the clicked index as active
    }
  };
  console.log(fileList)
  return (
    <>
    <div className='w-10/12 mx-auto table-cont'>
    <Input.Search
        placeholder="Search..."
        allowClear
        enterButton="Search"
        size="large"
        value={searchText}
        onChange={(e) => handleSearch(e.target.value)} // Update the search text as the user types
        onSearch={handleSearch}
        onReset={handleReset}
        style={{ marginBottom: 16 }}
      />
      <Table
  rowSelection={{
    type: selectionType,
    ...rowSelection,
  }}
  columns={columns}
  dataSource={tableData}
  pagination={true}
  rowKey={(record) => record.key} // Add this rowKey prop
/>
      {/* Other content of the AddImagesAndMore component */}


    <div className='flex justify-end mt-8'>
        <div className=' w-24 h-10 flex items-center justify-center'>
            <p className='text-red-600 cursor-pointer '>Delete</p>
        </div>
        <div className='border bg-white w-56 h-10 flex items-center justify-center rounded-md'>
            <p className='cursor-pointer'>Save to Draft</p>
        </div>
        <Button className='border bg-[#101928] w-56 h-10 flex items-center justify-center ml-5 rounded-md' 
         onClick={() => {
          // Handle the next step logic here
          nextStep(uploadedData);
        }}
        >
            <p className='text-white cursor-pointer'>Submit</p>
        </Button>
    </div>
    </div>


{/* Modal */}
 <Modal
        title={<div className='py-6 px-4'>
          <h1>Add Details</h1>
        </div>}
        visible={modalVisible}
        onCancel={handleCloseModal}
        footer={false}
        // footer={[
        //   <Button key="cancel" onClick={handleCloseModal}>
        //     Cancel
        //   </Button>,
        //   <Button
        //     key="save"
        //     type="primary"
        //     // onClick={handleSave}
        //   >
        //     Save
        //   </Button>,
        // ]}
      >
        <div className='px-4 h-96 overflow-y-auto'>
        {/* Add your image upload component here */}
        <div className='my-4'>
        <Dragger  style={{background:"#fff", height: "40px"}} {...uploadProps} ref={uploadRef}>
        <p className="ant-upload-drag-icon flex justify-center">
          <img className='bg-[#F2F4F7] p-2 rounded-full' src={UploadImg} alt="" />
        </p>
        <p style={{ color: '#0068B3' }} className="ant-upload-text text-SkyColor font-medium">
          Click to upload <span className='text-textLight'>drag and drop</span>
        </p>
        <p className="ant-upload-hint text-textLight font-medium">
          PNG, JPG or JPEG (max {maxImages} photos)
        </p>
      </Dragger>
      </div>

        {/* Display uploaded images with thumbnail selection */}
        <div className="mt-4">
        {fileList && fileList.map((file, index) => (
  <div key={index} className="image-item" style={{ width: '24%', display: 'inline-block', position: 'relative', marginRight: '10px' }}>
    <img onClick={() => handleThumbnailClick(index)} src={URL.createObjectURL(file)} alt={`Uploaded ${index + 1}`} style={{ width: '100%', maxWidth: '100%', maxHeight: '100px' }} />
    <Button className='bg-[#FFA09B] text-dangerColor flex justify-center items-center' type="danger" size="small" shape="circle" icon={<CloseOutlined />} onClick={() => handleRemove(file)} style={{ position: 'absolute', top: '5px', right: '5px' }} />
    {thumbnailIndex === index && <span className="thumbnail-label">Thumbnail</span>}
  </div>
))} 
      </div>

      <div className='mt-10'>
      <h2 className='text-textColor text-sm font-medium'>Car Info</h2>
      <Select
            placeholder="Select car type"
            value={selectedCar}
            onChange={handleCarSelect}
            className='w-full border border-[#D0D5DD] p-1 mt-2 rounded-md'
            suffixIcon={<img src={DownArrow} alt=''/>}
            
          >
            {carOptions.map((carType) => (
              <Option key={carType} value={carType}>
                {carType}
              </Option>
            ))}
          </Select>
          <Select className='w-full border border-[#D0D5DD] p-1 mt-2 rounded-md' suffixIcon={<img src={DownArrow} alt=''/>} defaultValue="series 3">
            <Option>Series 3</Option>
          </Select>
          <Select className='w-full border border-[#D0D5DD] p-1 mt-2 rounded-md' suffixIcon={<img src={DownArrow} alt=''/>} defaultValue="series 3">
            <Option>2018</Option>
          </Select>
          <div>
            <CustomInput/>
          </div>
          <div>
            <CustomInput/>
          </div>
          <div>
            <CustomTextArea/>
          </div>
          <div className='flex gap-2 items-center mt-2' onClick={()=> setToggle(!toggle)}>
            <h1 className='text-SkyColor text-sm font-medium'>Addition info</h1>
            <img src={!toggle ? Plus : Minus} alt="" />
          </div>
          {toggle &&   <div className={`transition-content ${toggle ? 'toggle-visible' : ''}`}>
            <div className='mt-3 font-medium text-textGrey'>
                <h1 className=' text-lg '>No of Owners</h1>
                <div className='flex gap-3 mt-2'>
                {Array.from({ length: itemCount }, (_, index) => (
          <h1
            key={index}
            onClick={() => handleItemClick(index)}
            className={`p-3 w-8 h-8 items-center flex justify-center border rounded-full ${
              activeIndex === index ? 'bg-colorPrimary text-white' : ''
            }`}
          >
            {index + 1}
            {index === 3 && itemCount >= 4 ? '+' : ''}
          </h1>
        ))}
                </div>
            </div>
            <div className='mt-3 font-medium text-textGrey'>
                <h1>Fuel Type</h1>
                <div className='flex gap-3 mt-2'>
                {fuelTypes.map((fuelType, index) => (
          <h1
            key={index}
            onClick={() => handleFuelTypeClick(index)}
            className={`p-3 h-8 items-center flex justify-center border rounded-full ${
              activeFuelIndex === index ? 'bg-colorPrimary text-white' : ''
            }`}
          >
            {fuelType}
          </h1>
        ))}
                </div>
            </div>
            <div className='mt-3 font-medium text-textGrey'>
                <h1>Is Insurance Available ?</h1>
                <div className='flex gap-3 mt-2'>
                {Insurence.map((insurence, index) => (
          <h1
            key={index}
            onClick={() => handleInsurenceTypeClick(index)}
            className={`p-3 h-8 items-center flex justify-center border rounded-full ${
                activeInsurence === index ? 'bg-colorPrimary text-white' : ''
            }`}
          >
            {insurence}
          </h1>
        ))}
                </div>
            </div>

            <div className='mt-2'>
            <DatePicker
            className='w-full border border-[#D0D5DD] p-1 mt-2 rounded-md px-2 py-2'
          value={selectedDate}
          onChange={handleDateChange}
          format='YYYY-MM-DD' // Set the desired format
        />
        {/* {selectedDate && (
        <p>Selected Date: {moment(selectedDate).format('YYYY-MM-DD')}</p>
      )} */}
      </div>
          <div className='mb-4 border-b'>
      <Select className='w-full border border-[#D0D5DD] p-1 mt-2 rounded-md ' defaultValue="Red">
            <Option>Red</Option>
          </Select>
          </div>
         
          </div>}
      {/* Include exterior car details */}
      <div className='my-4'>
            
    <div className='mt-6 border-b pb-6'>
        <CompactInput defaultValue="AED"/>
    </div>
    <div className='my-4'>
        <h1 className='text-sm font-medium text-textGrey'>By proceeding, you agree to our <span className='text-SkyColor'>Terms of use</span> & <span className='text-SkyColor'>Privacy Policy</span></h1>
    </div>
          </div>
    </div>
    </div>
      
        <div className="corporate-shadow w-full py-6">
                      <div className="modal-pagination flex justify-between px-3 pt-4 items-center">
                        <p className='text-textColor font-semibold text-lg'>
                          Ads {currentRowIndex + 1}/{tableData.length}
                        </p>
                        <div className="flex gap-4">
                          <button
                           key="previous" onClick={handlePrevious} disabled={currentRowIndex === 0}
                          >
                            <img src={BackArrow} alt="" />
                          </button>

                          <button
                           key="next" onClick={handleNext} disabled={currentRowIndex === tableData.length - 1}
                          >
                            <img src={RightArrow} alt="" />
                          </button>
                        </div>
                      </div>
                     
                      <div className="flex justify-between px-3 border-b border-borderColor pb-3  my-4">
                        <div className="flex gap-5">
                          <div>
                            <h1 className="text-textLight font-normal text-xs">Ads Left</h1>
                            <h1 className="text-textColor font-medium">36</h1>
                          </div>
                          <div>
                            <h1 className="text-textLight font-normal text-xs">Promotion Left</h1>
                            <h1 className="text-textColor font-medium">36</h1>
                          </div>
                         
                        </div>
                        <div>
                          <h1 className="text-colorPrimary text-base font-medium">Add promotion</h1>
                        </div>
                      </div>
                      <div className="mt-4 flex justify-between w-full">
      <Button key="Delete" type='text' className='w-full h-10 text-dangerColor font-medium' >
      Delete
    </Button>,
    <Button key="Save" className='w-full ml-5 h-10 bg-textColor text-white' >
      Save
    </Button>
        </div>


                    </div>
      </Modal>

    </>
  );
}

export default AddImagesAndMore;