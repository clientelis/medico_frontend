import { Autocomplete, Box, Button, TextField } from '@mui/material'
import { div, select } from 'framer-motion/client';
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import UseAxios from '../api/UseAxios';

const InteractionChecker = () => {
    const [formData, setFormData] = useState({
        search: '',
    });
    const [selectedMolecules, setSelectedMolecules] = useState([])
    const [moleculeOptions, setMoleculeOptions] = useState([])
    const [moleculeIds, setMoleculeIds] = useState([])

    const { resp: searchResp, error: searchError, loading: searchLoading, fetchData: fetchSearchData } = UseAxios(
        {
            url: '/molecules/search',
            method: 'post',
            data: {
                libelle: formData.search
            }
        }
    )

    const { resp: interactionResp, error: interactionError, loading: interactionLoading, fetchData: fetchInteractionData } = UseAxios(
        {
            url: '/molecules/interactions',
            method: 'post',
            data: {
                molecule_ids: moleculeIds
            }
        }
    )



    useEffect(() => {
        // console.log('the molecule ids in use effect', moleculeIds)
        // if (moleculeIds.length > 0) {
        //     fetchData();
        //   }
        //fetchData()
    }, [moleculeIds])

    useEffect(() => {
        // console.log('the molecule in use effect', moleculeOptions)
        // console.log('the removed molecule in use effect',selectedMolecules)
        // if (moleculeIds.length > 0) {
        //     fetchData();
        //   }
        //fetchData()
    }, [moleculeOptions, selectedMolecules])


    useEffect(() => {
        if (searchResp && searchResp.data) {
            const data = searchResp.data

            let sorteddMolecules = data.sort((a, b) => {
                if (a.libelle.toLowerCase() < b.libelle.toLowerCase()) return -1
                if (a.libelle.toLowerCase() > b.libelle.toLowerCase()) return 1
                return 0;
            })

            sorteddMolecules = sorteddMolecules.filter(molecule => !selectedMolecules.some(removedMol => removedMol.id === molecule.id))

            setMoleculeOptions(sorteddMolecules)
        }

    }, [searchResp])



    useEffect(() => { 

        const handleSearchData = async () => {
            if (formData.search !== '') {
                await fetchSearchData();

            }

        }
        handleSearchData()
    }, [formData.search]);

    useEffect(()=>{
       // console.log('the selected molecules',selectedMolecules)
        if(moleculeIds.length > 0){
            fetchInteractionData()
            
        }


    },[moleculeIds])

    useEffect(()=>{
        if(interactionResp){
            console.log('the interactions',interactionResp.data)
        }

    },[interactionResp])



    const handleChange = (event, value) => {

        if (value) {
            setMoleculeOptions(moleculeOptions.filter(molecule => molecule.id != value.id))
            setSelectedMolecules([...selectedMolecules, value])
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const ids = selectedMolecules.map(molecule => molecule.id)
        setMoleculeIds(ids)
        console.log('the molecule ids', ids)
    }

    // const handleInputChange = (event, value) => {
    //     console.log('input change', value)    
    //     setFormData({ ...formData, search: value });
    // };



    const handleRemoveMolecule = (id) => {
        const moleculeToBeRemoved = selectedMolecules.find(molecule => molecule.id === id)
        console.log('molecule to be removed', moleculeToBeRemoved)

        if (moleculeToBeRemoved) {
            //console.log('before adding molecule', moleculeOptions)
            setMoleculeOptions([...moleculeOptions, moleculeToBeRemoved]);
            //setFormData({ search: '' })
            if (formData.search === moleculeToBeRemoved.libelle) {
                setFormData({ ...formData, search: '' })
            }
            // console.log('after adding molecule', moleculeOptions)
            setSelectedMolecules(selectedMolecules.filter(molecule => molecule.id !== id))
            //setRemovedMoleculeOptions(removedMoleculeOptions.filter(molecule => molecule.id !== id))

        }
        // setMoleculeOptions(moleculeOptions.push(selectedMolecules.find(molecule => molecule.id === id)))
        // setSelectedMolecules(selectedMolecules.filter(molecule => molecule.id !== id))
    }

    // const filterOptions = (options, { inputValue }) => {
    //     const startsWith = options.filter(option =>
    //         option.libelle.toLowerCase().startsWith(inputValue.toLowerCase())
    //     );
    //     const contains = options.filter(option => {
    //         option.libelle.toLowerCase().includes(inputValue.toLowerCase())
    //     })

    //     const tab = [...startsWith, ...contains]
    //     return tab
    // }

    return (
        <div className='w-[90vw] mx-auto h-[90vh] pt-16 '>
            <div className='flex flex-col justitfy-center h-full w-full  text-stone-700 items-center  border-l-2 border-r-2 border-b-2 border-stone-700'>
                <h1 className='text-4xl '>Verificateur d'interactions medicamenteuses</h1>
                <Box
                    component="form"
                    sx={{ '& > :not(style)': {} }}
                    noValidate
                    autoComplete="off"
                    onSubmit={handleSubmit}
                >
                    <div className="flex flex-col md:w-[600px] md:h-[100px] md:justify-between md:flex-row items-center w-full">
                        <div className='bg-pink300 md: w-[80%]'>

                            <Autocomplete
                                freeSolo
                                options={moleculeOptions ? moleculeOptions : []}
                                getOptionLabel={(option) => option.libelle}
                                //filterOptions={filterOptions}
                                //value={moleculeOptions.find(option => option.libelle === formData.search) || null}
                                onChange={handleChange}
                                onInputChange={(event, value) => setFormData({ ...formData, search: value ? value : '' })}
                                // onInputChange={handleInputChange}
                                sx={{ backgroundColor: '' }}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Rechercher une molecule"
                                        variant="outlined"
                                        name="search"
                                        className=""
                                    />
                                )}
                            />
                        </div>
                        <div className='pr-2'>
                            <Button
                                type="submit"
                                variant="contained"

                                sx={{
                                    backgroundColor: 'green',
                                }}
                            >
                                Search
                            </Button>
                        </div>
                    </div>
                </Box>
                <div className='w-full flex h-full items-center justify-center'>
                    <div className='flex flex-col h-full w-[30%] pl-4 gap-2 items-start bg-slate-40'>

                        {
                            selectedMolecules && selectedMolecules.map((molecule, index) => {
                                return (

                                    <div key={index} className='text-slate-700 border-2 flex flex-col h-10 gap-5 border-opacity-30 rounded-md border-slate-900 md:w-[60%]'>
                                        <div className='flex w-full h-full '>
                                            <div className='flex justify-center items-center bg-red-30 w-[90%]'>
                                                <p>

                                                    {molecule.libelle}
                                                </p>
                                            </div>
                                            <div className='flex justify-end items-center'>

                                                <FontAwesomeIcon icon={faCircleXmark} className='text-slate-400 cursor-pointer hover:text-red-700 h-5'
                                                    onClick={() => handleRemoveMolecule(molecule.id)}
                                                />
                                            </div>
                                        </div>

                                    </div>
                                )
                            })
                        }
                    </div>

                    
                </div>

            </div>


        </div>
    )
}
export default InteractionChecker
