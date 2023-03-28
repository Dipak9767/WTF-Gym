import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react'

const Filter = ({filterByCity , cities}) => {

  const [dropdownCity, setDropdownCity] = useState('')

  const citiHandler = (e) => {
    setDropdownCity(e.target.value)
    filterByCity(e.target.value)
  }
  return (
    <div className='filter-container'>
      <h2>Filters</h2>
      <div className='filter'>
        <h4>Location</h4>
        <div className='input-box search'>
          <SearchIcon/>
          <input type="text" placeholder='Enter Location'/>
        </div>
      </div>
      <div className='filter'>
        <h4>Price</h4>
        <div className='input-box'>
          <input type="text" placeholder='Min'/>
          <input type="text" placeholder='Max'/>
        </div>
      </div>
      <div className='filter'>
        <h4>Cities</h4>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small" className='dropdown'>
          <InputLabel id="demo-select-small" style={{ color: 'white' }}>Select City</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            style={{ color: 'white' }}
            label="Age"
            value={dropdownCity}
            onChange={citiHandler}

          >
            <MenuItem value={'All'}>All</MenuItem>
            {
              cities.map((item , idx)=>(
                <MenuItem value={item.city} key={idx}>{item.city}</MenuItem>
              ))
            }
          </Select>
        </FormControl>
      </div>
    </div>
  )
}

export default Filter