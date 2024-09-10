// src/LocationFilter.js
import React from 'react';
import { Select, MenuItem, FormControl, InputLabel, Box } from '@mui/material';
import styled from 'styled-components';

const FilterContainer = styled(Box)`
  margin-bottom: 1.5rem;
`;

const LocationFilter = ({ filters, onFilterChange }) => {
  const handleLocationChange = (event) => {
    onFilterChange({ ...filters, location: event.target.value });
  };

  return (
    <FilterContainer>
      <FormControl fullWidth variant="outlined" size="small">
        <InputLabel>Location</InputLabel>
        <Select
          value={filters.location}
          onChange={handleLocationChange}
          label="Location"
        >
          <MenuItem value="">Select Location</MenuItem>
          <MenuItem value="Peelamedu">Peelamedu</MenuItem>
          <MenuItem value="Saravanampatti">Saravanampatti</MenuItem>
          <MenuItem value="RS Puram">RS Puram</MenuItem>
          <MenuItem value="Gandhipuram">Gandhipuram</MenuItem>
          <MenuItem value="Singanallur">Singanallur</MenuItem>
        </Select>
      </FormControl>
    </FilterContainer>
  );
};

export default LocationFilter;
