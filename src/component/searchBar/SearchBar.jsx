import React, { useState } from 'react';
import { Input, AutoComplete } from 'antd';
import { SearchOutlined, CloseOutlined } from '@ant-design/icons';
import productData from '../../utils/SearchData';
import trending from '../../assets/trending-up.svg'
import searchIcon from '../../assets/search.svg'
import './searchbar.css'

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);
  const trendingSearches = ['Smartphone', 'Headphones', 'Laptop'];

  const handleInputChange = (value) => {
    setSearchTerm(value);
  
    if (value.trim() === '') {
      setSearchSuggestions([]);
      return;
    }
  
    // Generate search suggestions based on the input
    const suggestions = productData.filter(
      product =>
        product.name.toLowerCase().includes(value.toLowerCase()) ||
        product.category.toLowerCase().includes(value.toLowerCase())
    );
    setSearchSuggestions(suggestions);
  };
  const handleSelect = (selectedValue) => {
    const value = selectedValue.value; // Extract the value property from the selected object
    setSearchTerm(value);
    setSearchSuggestions([]);
  
    // If it's not a recent search, add it to recentSearches
    if (typeof value === 'string' && !value.startsWith('Recent: ')) {
      const recentSearch = `Recent: ${value}`;
      setRecentSearches([recentSearch, ...recentSearches]);
    }
  
    // onSearch(value);
  };

  const handleRemoveRecent = (recent) => {
    const updatedRecentSearches = recentSearches.filter(item => item !== recent);
    setRecentSearches(updatedRecentSearches);
  };
  const handleClearAll = () => {
    setRecentSearches([]);
  };

  const handleTrendingClick = (trend) => {
    setSearchTerm(trend);
    setSearchSuggestions([]);
    const recentSearch = `Recent: ${trend}`;
    setRecentSearches([recentSearch, ...recentSearches]);
    onSearch(trend); // You might want to call onSearch here too
  };

  const trendingOptions = [
    {
      key: 'trending-title',
      value: (
        <div className="trending-option">
          <img src={trending} alt="Trending" className="trending-image" />
          Trending
        </div>
      ),
    },
    {
      key: 'trending-row',
      value: (
        <div className="trending-row flex gap-2 flex-wrap">
          {trendingSearches.map((trend, index) => (
            <div
              key={`trend-${index}`}
              className="trending-item border rounded-2xl"
              onClick={() => handleTrendingClick(trend)}
            >
              {trend}
            </div>
          ))}
        </div>
      ),
    },
  ];

  const recentSearchOptions = recentSearches.map((recent, index) => ({
    value: (
      <span key={`recent-${index}`} className="recent-item">
        {recent.startsWith('Recent: ') ? recent.substring(8) : recent}
        <CloseOutlined
          className="close-icon"
          onClick={() => handleRemoveRecent(recent)}
        />
      </span>
    ),
  }));
  
  const combinedOptions = [
    {
      value: (
        <div key="clear-all" className="clear-all">
          <span onClick={handleClearAll} className="clear-all-button">
            Clear All
          </span>
        </div>
      ),
    },
    ...recentSearchOptions,
    ...searchSuggestions.map(product => ({
      value: (
        <div key={`${product.name}`} className="search-suggestion">
          <span>{product.name} in {product.category}</span>
        </div>
      ),
    })),
    ...trendingOptions.map(option => ({ value: option.value, key: option.key })),
  ];
  
  return (
    <AutoComplete
      dropdownMatchSelectWidth={252}
      options={combinedOptions}
      onSelect={handleSelect}
      className='w-full'
    >
      <Input
        placeholder="Search Anything"
        value={searchTerm}
        onChange={(e) => handleInputChange(e.target.value)}
        suffix={<SearchOutlined />}
        className="p-2 border border-[#EAECF0] rounded-sm bg-[#F2F4F7] px-5"
      />
    </AutoComplete>
  );
};

export default SearchBar;