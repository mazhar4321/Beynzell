import React, { useState } from 'react';
import { Upload, message, Progress, Button, Table } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import Papa from 'papaparse';

const { Dragger } = Upload;

const UploadCSV = ({ onNext }) => {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [fileName, setFileName] = useState('');
  const [nextDisabled, setNextDisabled] = useState(true);
  const [fileSizeKB, setFileSizeKB] = useState(null);
  const [tableData, setTableData] = useState([]);
  const [showTable, setShowTable] = useState(false); // State to show/hide the table
  const [showNextStep, setShowNextStep] = useState(false); // State to show the next step
  const [successCount, setSuccessCount] = useState(0);
const [errorCount, setErrorCount] = useState(0);

  const onUpload = (file) => {
    setUploading(true);
    setFileName(file.name);
    setFileSizeKB(Math.ceil(file.size / 1024));
  
    Papa.parse(file, {
      complete: (result) => {
        setTableData(result.data);
        setProgress(100); // Set progress to 100 immediately
        setShowNextStep(true); // Enable the "Next" button
        message.success(`${file.name} uploaded successfully`);
        setUploading(false);
        setNextDisabled(false);
      },
    });
  };

  const customRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onUpload(file);
      onSuccess();
    }, 0);
  };

  const handleNext = () => {
    // Handle the next button click here
    console.log('Next button clicked');
    setShowTable(true); // Show the table
  };

  const columns = tableData[0]?.map((item, index) => ({
    title: `Column ${index + 1}`,
    dataIndex: index,
    key: index,
    render: (text) => {
      if (text === "") {
        return (
          <div style={{ backgroundColor: "#FFD4D2", textAlign: "center" }}>
            -
          </div>
        );
      }
      return text;
    },
  }));

  return (
    <div className='my-10'>
      <Dragger
        customRequest={customRequest}
        showUploadList={false}
        disabled={uploading}
        accept=".csv"
      >
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          {uploading
            ? `${fileName} - ${progress}% uploaded`
            : `Click or drag CSV file (${fileSizeKB} KB) to this area to upload`}
        </p>
        {uploading ? (
          <Progress type="circle" percent={progress} />
        ) : null}
      </Dragger>
      <div className="mt-4">
        <Button
          type="default"
          onClick={() => {
            // Handle the cancel button click here
            console.log('Cancel button clicked');
          }}
          disabled={uploading}
        >
          Cancel
        </Button>
        <Button
          type="primary"
          onClick={onNext}
          disabled={uploading || nextDisabled}
          className="ml-2"
        >
          Next
        </Button>
      </div>
      {showNextStep && (
        <div className="mt-4">
          {showTable ? (
            <Table dataSource={tableData.slice(1)} columns={columns} />
          ) : null}
        </div>
      )}
    </div>
  );
};

export default UploadCSV;