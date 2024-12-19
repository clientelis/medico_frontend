import { Autocomplete, Box, Button, TextField } from '@mui/material'
import { div } from 'framer-motion/client';
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const InteractionChecker = () => {
    const [formData, setFormData] = useState({
        search: '',
    });

    const [selectedMolecules, setSelectedMolecules] = useState([])


    const choices = [
        {
            id: 1,
            libelle: 'Aspirin',
        },
        {
            id: 2,
            libelle: 'Iburpofen',
        },
        {
            id: 3,
            libelle: 'Vitamin C',
        }
    ]

    const options = [
        { id: 1, libelle: 'Aspirin' },
        { id: 2, libelle: 'Ibuprofen' },
        { id: 3, libelle: 'Paracetamol' },
        { id: 4, libelle: 'Amoxicillin' },
        { id: 5, libelle: 'Ciprofloxacin' },
        // Ajoutez d'autres options ici
    ];

    const handleChange = (event, value) => {
        console.log('change', value)
        setFormData({ ...formData, search: value ? value.id : '' })
        selectedMolecules.push(value)
        console.log('selected molecules', selectedMolecules)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('the form data', formData)
    }

    const handleInputChange = (event, value) => {
        console.log('input change', value)
        setFormData({ ...formData, search: value });
    };

    return (
        <div className='w-[50vw] mx-auto h-[80vh] pt-16 '>
            <div className='flex flex-col justitfy-center h-full  text-stone-700 items-center gap-12 border-l-2 border-r-2 border-b-2 border-stone-700'>
                <h1 className='text-4xl '>Verificateur d'interactions medicamenteuses</h1>
                <Box
                    component="form"
                    sx={{ '& > :not(style)': { m: 1, width: '30rem', height: '4.3rem' } }}
                    noValidate
                    autoComplete="off"
                    onSubmit={handleSubmit}
                >
                    <Box sx={{ display: 'flex',width:'100%', backgroundColor:'red'}}>
                        <Autocomplete
                            sx={{ width: '100%', padding: '0.5rem' }}
                            freeSolo
                            options={options}
                            getOptionLabel={(option) => option.libelle}
                            value={options.find(option => option.libelle === formData.search) || null}
                            onChange={handleChange}
                            onInputChange={handleInputChange}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Rechercher une molecule"
                                    variant="outlined"
                                    name="search"
                                    sx={{  width:'90%' }}
                                />
                            )}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{
                                backgroundColor: 'green',
                                
                            }}
                        >
                            Search
                        </Button>
                    </Box>
                </Box>
                <div className=' w-[50%] mx-auto'>
                    {
                        selectedMolecules && selectedMolecules.map((molecule, index) => {
                            return (

                                <div key={index} className='text-slate-700 border-2 flex flex-col gap-5   border-opacity-30 rounded-md border-slate-900 w-[80%]'>
                                    <div className='flex flex-col'>
                                        <div className='flex justify-end'>

                                            <FontAwesomeIcon icon={faCircleXmark} className='text-slate-400 cursor-pointer hover:text-red-700 h-5' />
                                        </div>
                                        <div >
                                            {molecule.libelle}
                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>

            </div>


        </div>
    )
}
export default InteractionChecker
