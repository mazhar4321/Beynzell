import React from 'react';

const Dropdown = ({ options, onSelect }) => {
  return (
    <select onChange={onSelect}>
      <option value="">Select a category</option>
      {options.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;