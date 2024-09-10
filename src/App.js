// src/App.js
import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import Filters from './Filters';

const App = () => {
  const [filters, setFilters] = useState({
    area: { min: 500, max: 4500 },
    landRate: { min: 1000, max: 4000 },
    location: '',
  });

  const properties = [
    { id: 1, area: 1200, landRate: 1500, location: 'Peelamedu' },
    { id: 2, area: 2500, landRate: 3000, location: 'Saravanampatti' },
    { id: 3, area: 1800, landRate: 2500, location: 'RS Puram' },
    { id: 4, area: 3500, landRate: 1800, location: 'Gandhipuram' },
    { id: 5, area: 4000, landRate: 3500, location: 'Singanallur' },
  ];

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const filteredProperties = properties.filter((property) => {
    const matchesArea = property.area >= filters.area.min && property.area <= filters.area.max;
    const matchesLandRate = property.landRate >= filters.landRate.min && property.landRate <= filters.landRate.max;
    const matchesLocation = filters.location === '' || property.location === filters.location;
    return matchesArea && matchesLandRate && matchesLocation;
  });

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>Real Estate Filters</Typography>

      {/* Render Filters component */}
      <Filters filters={filters} onFilterChange={handleFilterChange} />

      {/* Conditionally Display Filtered Properties */}
      {filteredProperties.length > 0 && (
        <Box sx={{ marginTop: 4 }}>
          {filteredProperties.map((property) => (
            <Box key={property.id} sx={{ marginY: 1, padding: 2, border: '1px solid #ddd', borderRadius: '8px' }}>
              <Typography>Area: {property.area} sq ft</Typography>
              <Typography>Land Rate: ₹{property.landRate} per sq ft</Typography>
              <Typography>Location: {property.location}</Typography>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default App;
