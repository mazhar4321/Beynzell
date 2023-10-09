import { Input } from 'antd'
import React from 'react'

function CustomInput({type, name, value, onChange, placeholder, label, required, style}) {
  return (
    <div className="flex flex-col mt-2 mb-2">
          <label className='text-textLight text-xs' htmlFor={name}>{label}</label>
          <Input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required ? required : null}
            className="border border-[#D0D5DD] p-2 mt-1 rounded-md"
            style={style ? style : null}
          />
        </div>
  )
}

export default CustomInput