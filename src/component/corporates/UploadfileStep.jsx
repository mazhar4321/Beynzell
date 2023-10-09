import React from "react";
import { Upload, message, Progress, Button, Table, Checkbox } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { useState } from "react";
import UploadImg from "../../assets/upload-cloud.svg";
import Uploadedfile from "../../assets/uploaded-file.svg";
import Papa from "papaparse";

const { Dragger } = Upload;
function UploadfileStep({ nextStep }) {
  const [uploading, setUploading] = useState(false);
  const [fileName, setFileName] = useState("");
  const [fileSize, setFileSize] = useState(0);
  const [progress, setProgress] = useState(0);
  const [fileDoneUploaded, setFileDoneUploaded] = useState(false);
  const [csvFile, setCSVFile] = useState(null);

  const onUpload = (file) => {
    setUploading(true);
    setFileName(file.name);
    setFileSize(file.size);

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 10;
        if (newProgress >= 100) {
          clearInterval(interval);
          setFileDoneUploaded(true);
        }
        return newProgress;
      });
    }, 100);
    Papa.parse(file, {
      complete: (result) => {
        // Parse complete, you can access the parsed data here
        const uploadedData = result.data;
        setCSVFile(uploadedData);

        // Call the nextStep function and pass the uploadedData
        //   {fileDoneUploaded ?   nextStep(uploadedData) : return }
      },
    });
  };

  const customRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onUpload(file);
      onSuccess();
    }, 0);
  };
  return (
    <div className="card-shadow lg:w-1/3 w-full mx-auto py-10 my-10  px-6">
      <h1 className="text-textColor font-medium my-4 text-xl">Upload File</h1>
      {!fileDoneUploaded && !uploading ? (
        <>
          <Dragger
            customRequest={customRequest}
            showUploadList={false}
            accept=".csv"
            style={{ background: "#fff" }}
          >
            <p className="ant-upload-drag-icon flex justify-center">
              <img
                className="bg-[#F2F4F7] p-2 rounded-full"
                src={UploadImg}
                alt=""
              />
            </p>
            <p
              style={{ color: "#0068B3" }}
              className="ant-upload-text text-SkyColor font-medium"
            >
              Click to upload{" "}
              <span className="text-textLight">drag and drop</span>
            </p>
            <p className="ant-upload-text">
              {`Click or drag CSV file (${fileSize} KB) to this area to upload`}
            </p>
          </Dragger>
          <div className="border-b border-borderColor border-dashed">
            <div className="my-4 flex justify-between font-normal text-Grey600 text-sm">
              <p>Supported format: CSV, Excel</p>
              <p>Maximum Size 25MB</p>
            </div>

            <div className="flex justify-between bg-[#F2F4F7] p-4 rounded-md items-center my-6 r">
              <div className="flex gap-5 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M13 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V9M13 2L20 9M13 2V9H20"
                    stroke="#1D2939"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div>
                  <h2 className="text-textColor font-semibold">
                    Table Example
                  </h2>
                  <p className="text-textColor font-normal">
                    You can download the attached file and add your ad details
                  </p>
                </div>
              </div>
              <div className="text-SkyColor font-medium">
                <h1>Download</h1>
              </div>
            </div>
          </div>
        </>
      ) : null}
      {uploading && !fileDoneUploaded ? (
        <div className="flex justify-between border ">
          <div className="flex gap-3 items-center bg-[#E6F0F7] p-4">
            <img src={Uploadedfile} alt="" />
            <div>
              <p>{`${fileName} - ${progress}% uploaded`}</p>
              <p>{`${(progress / 100) * fileSize} KB / ${fileSize} KB`}</p>
            </div>
          </div>
          <div className="p-4">
            <Progress type="circle" percent={progress} width={50} />
          </div>
        </div>
      ) : null}
      {fileDoneUploaded ? (
        <div className="flex justify-between border border-SkyColor rounded-lg p-4 payment-method">
          <div className="flex gap-3 items-center">
            <img src={Uploadedfile} alt="" />
            <div>
              <p className="text-textColor font-medium"> {`${fileName} `}</p>
              <p className="text-Grey600 font-medium">{`${fileSize} KB  - ${progress}% uploaded`}</p>
            </div>
          </div>
          <Checkbox
            className="custom-checkbox bg-colorPrimary  selected"
            checked={true}
          ></Checkbox>
        </div>
      ) : null}

      <div className="mt-10 flex gap-5">
        {fileDoneUploaded ? (
          <>
            <Button
              type="default"
              onClick={() => {
                // Handle reupload or cancel logic here
                setUploading(false);
                setProgress(0);
                setFileDoneUploaded(false);
              }}
              className="w-full h-10"
            >
              Reupload
            </Button>
            <Button
              onClick={() => {
                // Handle the next step logic here
                nextStep(csvFile);
              }}
              className="ml-2 w-full h-10 bg-textColor text-white"
              disabled={!fileDoneUploaded}
            >
              Next
            </Button>
          </>
        ) : (
          <>
            <Button
              type="default"
              onClick={() => {
                // Handle the cancel button click here
                console.log("Cancel button clicked");
              }}
              className="w-full h-10"
            >
              Cancel
            </Button>
            <Button
              type="primary"
              onClick={() => {
                // Handle the next step logic here
                nextStep(csvFile);
              }}
              className="ml-2 w-full h-10 bg-textColor"
              disabled={!fileDoneUploaded}
            >
              Next
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

export default UploadfileStep;
