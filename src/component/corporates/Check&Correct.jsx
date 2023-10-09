import React from 'react';
import { Button, Checkbox, Input, Progress, Table } from 'antd';
import { useState } from 'react';

function CheckAndCorrect({ uploadedData, nextStep }) {
    const [selectionType, setSelectionType] = useState('checkbox');
    const columns = uploadedData[0]?.map((item, index) => ({
        title: item,
        dataIndex: index,
        key: index,
        render: (text, record, rowIndex) => {
            if (text === "") {
                return (
                  <Input
                    style={{ backgroundColor: "#FFD4D2", textAlign: "center" }}
                    value={text}
                    onChange={(e) => {
                      // Handle input change and update the data
                      // You need to manage the data changes in your own data structure
                      // This is just a placeholder example
                      console.log(`Input value changed for row ${rowIndex}`);
                    }}
                  />
                );
              }
         
          return text;
        },
      }));
    
  // Example: const columns = [{ title: 'Column 1', dataIndex: 'column1' }, ...];
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
  };
  return (
    <div className='w-10/12 mx-auto'>
      <div className='bg-white p-4 rounded-md card-shadow' my-4>
        <h1>Car ads jun.csv</h1>
        <Progress percent={100} />
        <div>
            <h1>4 errors found</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        <div className="border border-borderColor mt-4 rounded-xl px-4 py-4 corporate-card-shadow flex justify-between">
          <div>
            <h1 className="text-textLight font-medium">Total no. of records</h1>
            <h1 className="my-4 font-medium text-textColor text-2xl">
              20
            </h1>
          </div>
         
        </div>
        <div className="border border-borderColor mt-4 rounded-xl px-4 py-4 corporate-card-shadow ">
          <div className="flex justify-between">
            <div>
              <h1 className="text-textLight font-medium">Successfully processed</h1>
            </div>
           
          </div>
          <div className="w-full">
            <div className="flex justify-between items-center">
              <h1 className="my-4 font-medium text-successColor text-2xl">
                18 
              </h1>
            
            </div>
          </div>
        </div>
        <div className="border border-borderColor mt-4 rounded-xl px-4 py-4 corporate-card-shadow ">
          <div className="flex justify-between">
            <div>
              <h1 className="text-textLight font-medium">Records with errors </h1>
            </div>
            <Button type='text' className='text-dangerColor font-medium'>
                    Remove Errors
                </Button>
          </div>
          <div className="w-full">
            <div className="flex justify-between items-center">
              <h1 className="my-4 font-medium text-dangerColor text-2xl">12</h1>
             <div>
                
             </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className='my-6 table-cont'>
      <Table rowSelection={{
          type: selectionType,
          ...rowSelection,
        }} 
        scroll={{ x: '100%' }} 
        columns={columns} dataSource={uploadedData} />
      </div>
      <div className='flex justify-between'>
        <div>
          <Button type='text' className='text-dangerColor'>Delete</Button>
          
        </div>
        <div className='flex gap-5'>
        <Button type='default'>Save as Draft</Button>
          <Button onClick={() => {
            // Handle the next step logic here
            nextStep(uploadedData);
          }} type='primary' className='bg-textColor'>Proceed with Total Records</Button>
        </div>
      </div>
    </div>
  );
}

export default CheckAndCorrect;