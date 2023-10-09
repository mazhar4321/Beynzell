import React from 'react';
import Add from '../../assets/add.svg'

const CoverPhotoUploader = ({ onUpload }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    onUpload(file);
  };

  return (
    <div>
        <div className='flex gap-1'>
            
            <label htmlFor="cover-upload" className="custom-upload-button">
            <img src={Add} alt="" />  Replace
      </label>
        </div>
      
      <input
      className='hidden'
        type="file"
        accept="image/*"
        id="cover-upload"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default CoverPhotoUploader;