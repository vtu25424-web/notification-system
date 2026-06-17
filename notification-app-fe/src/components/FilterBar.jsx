import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const FilterBar = ({ filter, setFilter }) => {
  return (
    <FormControl fullWidth sx={{ mb: 3 }}>
      <InputLabel>Type</InputLabel>

      <Select
        value={filter}
        label="Type"
        onChange={(e) => setFilter(e.target.value)}
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="Placement">Placement</MenuItem>
        <MenuItem value="Result">Result</MenuItem>
        <MenuItem value="Event">Event</MenuItem>
      </Select>
    </FormControl>
  );
};

export default FilterBar;