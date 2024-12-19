import { div, p } from 'framer-motion/client'
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, MenuItem } from '@mui/material';
import { use } from 'react';

const Filter = ({ voies, formes, pays, laboratoires, onFilterChange }) => {
  const [formData, setFormData] = useState({
    search: '',
    voie: '',
    forme: '',
    laboratoire: '',
    origine: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    const newFormData = {
      ...formData,
      [name]: value
    };
    setFormData(newFormData)

    if(name != 'search'){
      onFilterChange(newFormData)
    }
  };

  const menuProps = {
    PaperProps:{
      style:{
        maxHeight: 200,
        overflow: 'auto'
      }
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onFilterChange(formData)
  };

  return (
    <div className='mt-20'>

      <div className='bg-white rounded-md'>

        <Box
          component="form"
          sx={{ '& > :not(style)': { m: 1, width: '25ch', height: '4.3rem', borderRadius: '7%'} }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField id="standard-basic" label="Recherche rapide" variant="standard"
            onChange={handleChange}
            name="search"
            value={formData.search}
            sx={{
              '& .MuiInput-underline:before': {
                borderBottomColor: 'grey',
              },
              '& .MuiInput-underline:hover:before': {
                borderBottomColor: 'grey',
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: 'grey',
              },
              '& .MuiInputLabel-root': {
                color: 'grey',
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: 'grey',
              }
            }}


          />

          <TextField
            id="standard-select-currency-native"
            select
            label="Voie"
            name="voie"

            slotProps={{
              select: {
                native: false,
              },
            }}
            SelectProps={{ MenuProps: menuProps }}
            onChange={handleChange}
            value={formData.voie}
            variant="standard"
            sx={{
              '& .MuiInput-underline:before': {
                borderBottomColor: 'grey',
              },
              '& .MuiInput-underline:hover:before': {
                borderBottomColor: 'grey',
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: 'grey',
              },
              '& .MuiInputLabel-root': {
                color: 'grey',
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: 'grey',
              }
            }
            }
          >
            <MenuItem value="">
              <em></em>
            </MenuItem>
            {voies.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>


          <TextField
            id="standard-select-currency-native"
            select
            label="Forme"
            name="forme"
            onChange={handleChange}
            value={formData.forme}
            slotProps={{
              select: {
                native: false,
              },
            }}
            SelectProps={{ MenuProps: menuProps }}
            // helperText="Please select your currency"
            variant="standard"
            sx={{
              '& .MuiInput-underline:before': {
                borderBottomColor: 'grey',
              },
              '& .MuiInput-underline:hover:before': {
                borderBottomColor: 'grey',
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: 'grey',
              },
              '& .MuiInputLabel-root': {
                color: 'grey',
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: 'grey',
              }
            }
            }
          >
            <MenuItem value="">
              <em></em>
            </MenuItem>
            {formes.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>



          <TextField
            id="standard-select-currency-native"
            select
            name="laboratoire"
            label="Laboratoire"
            onChange={handleChange}
            value={formData.laboratoire}
            slotProps={{
              select: {
                native: false,
              },
            }}
            // helperText="Please select your currency"
            variant="standard"
            sx={{
              '& .MuiInput-underline:before': {
                borderBottomColor: 'grey',
              },
              '& .MuiInput-underline:hover:before': {
                borderBottomColor: 'grey',
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: 'grey',
              },
              '& .MuiInputLabel-root': {
                color: 'grey',
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: 'grey',
              }
            }
            }
          >
            <MenuItem value="">
              <em></em>
            </MenuItem>
            {laboratoires.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>



          <TextField
            id="standard-select-currency-native"
            select
            label="Origine"
            name="origine"
            onChange={handleChange}
            value={formData.origine}
            slotProps={{
              select: {
                native: false,
              },
            }}
            // helperText="Please select your currency"
            variant="standard"
            sx={{
              '& .MuiInput-underline:before': {
                borderBottomColor: 'grey',
              },
              '& .MuiInput-underline:hover:before': {
                borderBottomColor: 'grey',
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: 'grey',
              },
              '& .MuiInputLabel-root': {
                color: 'grey',
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: 'grey',
              }
            }

            }
          >
            <MenuItem value="">
              <em></em>
            </MenuItem>
            {pays.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>


          <div className='flex pl-4'>
            <Button type="submit" variant="contained"
              sx={{
                backgroundColor: 'green',
                alignSelf: 'center'

              }}>
              Search
            </Button>

          </div>

        </Box>


      </div>

    </div>
  )
}

export default Filter
