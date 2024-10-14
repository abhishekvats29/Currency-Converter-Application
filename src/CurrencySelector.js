import React from 'react';
import Select from 'react-select';
import ReactCountryFlag from 'react-country-flag';

const customStyles = {
  control: (provided) => ({
    ...provided,
    marginBottom: '15px',
    borderRadius: '6px',
    border: '1px solid #ddd',
    boxShadow: 'none',
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: '6px',
  }),
  option: (provided, state) => ({
    ...provided,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: state.isFocused ? '#f0f0f0' : state.isSelected ? '#e0e0e0' : 'white',
  }),
};

const CurrencySelector = ({ currency, setCurrency, rates }) => {
  const options = Object.keys(rates).map((code) => ({
    value: code,
    label: (
      <div>
        <ReactCountryFlag countryCode={code.slice(0, 2)} svg />
        {code}
      </div>
    ),
  }));

  return (
    <Select
      value={options.find(option => option.value === currency)}
      onChange={(option) => setCurrency(option.value)}
      options={options}
      styles={customStyles}
    />
  );
};

export default CurrencySelector;
