import TextArea from 'antd/es/input/TextArea'
import React from 'react'

function CustomTextArea({value, onChange,label}) {
  return (
    <div className='flex flex-col'>
          <label htmlFor="message">{label}</label>
          <TextArea  autoSize={{
          minRows: 3,
          maxRows: 5,
        }}
          className='border border-[#D0D5DD] p-2 mt-1 rounded-md'
            name="message"
            value={value}
            onChange={onChange}
            required
          />
        </div>
  )
}

export default CustomTextArea