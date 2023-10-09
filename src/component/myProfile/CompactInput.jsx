import { Input, Space } from 'antd'
import React from 'react'

function CompactInput({label, defaultValue}) {
  return (
    <Space.Compact className="w-full flex flex-col mt-2">
        <label className='text-textLight text-xs' htmlFor={name}>{label}</label>
        <div className='mt-1'>
    <Input
      style={{
        width: '20%',
        borderRadius: 4
      }}
      defaultValue={defaultValue}
      className="border border-[#D0D5DD] p-2 mt-1 rounded-md"
    />
    <Input
      style={{
        width: '80%',
      }}
      defaultValue="26888888"
      className="border border-[#D0D5DD] p-2 mt-1 rounded-md"
    />
    </div>
  </Space.Compact>
  )
}

export default CompactInput