// src/LandRateFilter.js
import React, { useState } from 'react';
import { Slider, TextField, Typography, Box } from '@mui/material';
import styled from 'styled-components';

const FilterContainer = styled(Box)`
  margin-bottom: 1.5rem;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const FilterInput = styled(TextField)`
  width: 100px;
`;

const LandRateFilter = ({ filters, onFilterChange }) => {
  const [sliderValue, setSliderValue] = useState([filters.landRate.min, filters.landRate.max]);

  const handleChange = (event, newValue) => {
    setSliderValue(newValue);
    onFilterChange({ ...filters, landRate: { min: newValue[0], max: newValue[1] } });
  };

  const handleInputChange = (event, index) => {
    const newValue = parseInt(event.target.value, 10);
    if (!isNaN(newValue) && newValue >= 1000 && newValue <= 4000) {
      const updatedValue = [...sliderValue];
      updatedValue[index] = newValue;
      setSliderValue(updatedValue);
      onFilterChange({ ...filters, landRate: { min: updatedValue[0], max: updatedValue[1] } });
    }
  };

  return (
    <FilterContainer>
      <Typography gutterBottom>Land Rate (₹ per sq ft):</Typography>
      <Slider
        value={sliderValue}
        min={1000}
        max={4000}
        onChange={handleChange}
        valueLabelDisplay="auto"
      />
      <InputContainer>
        <FilterInput
          type="number"
          value={sliderValue[0]}
          onChange={(event) => handleInputChange(event, 0)}
          size="small"
        />
        <FilterInput
          type="number"
          value={sliderValue[1]}
          onChange={(event) => handleInputChange(event, 1)}
          size="small"
        />
      </InputContainer>
    </FilterContainer>
  );
};

export default LandRateFilter;
