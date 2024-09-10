// src/Filters.js
import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import AreaFilter from './AreaFilter';
import LandRateFilter from './LandRateFilter';
import LocationFilter from './LocationFilter';
import styled from 'styled-components';

const FiltersContainer = styled(Box)`
  padding: 16px;
  width: 240px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const AppliedFiltersContainer = styled(Box)`
  margin-top: 24px;
`;

const AppliedFilterBox = styled(Box)`
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  padding: 4px 8px;
  border-radius: 16px;
`;

const Filters = ({ filters, onFilterChange }) => {
  const clearFilter = (filterType) => {
    switch (filterType) {
      case 'area':
        onFilterChange({ ...filters, area: { min: 500, max: 4500 } });
        break;
      case 'landRate':
        onFilterChange({ ...filters, landRate: { min: 1000, max: 4000 } });
        break;
      case 'location':
        onFilterChange({ ...filters, location: '' });
        break;
      default:
        break;
    }
  };

  return (
    <FiltersContainer>
      <Typography variant="h6">Filters</Typography>
      <AreaFilter filters={filters} onFilterChange={onFilterChange} />
      <LandRateFilter filters={filters} onFilterChange={onFilterChange} />
      <LocationFilter filters={filters} onFilterChange={onFilterChange} />

      <AppliedFiltersContainer>
        <Typography variant="subtitle1">Applied Filters:</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {filters.area.min !== 500 || filters.area.max !== 4500 ? (
            <AppliedFilterBox>
              <Typography variant="body2">
                Area: {filters.area.min} - {filters.area.max} sq ft
              </Typography>
              <IconButton size="small" onClick={() => clearFilter('area')}>
                <ClearIcon fontSize="small" />
              </IconButton>
            </AppliedFilterBox>
          ) : null}
          {filters.landRate.min !== 1000 || filters.landRate.max !== 4000 ? (
            <AppliedFilterBox>
              <Typography variant="body2">
                Land Rate: ₹{filters.landRate.min} - ₹{filters.landRate.max}
              </Typography>
              <IconButton size="small" onClick={() => clearFilter('landRate')}>
                <ClearIcon fontSize="small" />
              </IconButton>
            </AppliedFilterBox>
          ) : null}
          {filters.location && (
            <AppliedFilterBox>
              <Typography variant="body2">
                Location: {filters.location}
              </Typography>
              <IconButton size="small" onClick={() => clearFilter('location')}>
                <ClearIcon fontSize="small" />
              </IconButton>
            </AppliedFilterBox>
          )}
        </Box>
      </AppliedFiltersContainer>
    </FiltersContainer>
  );
};

export default Filters;
