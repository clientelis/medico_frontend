import { Autocomplete, Box, Button, TextField } from '@mui/material'
import { div, select } from 'framer-motion/client';
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import UseAxios from '../../api/UseAxios';
import gloves from '../../assets/gloves.jpg'
import Header from './Header';
import InteractionInfo from './InteractionInfo';
import SelectedMoleculesDisplay from './SelectedMoleculesDisplay';
import InteractionResult from './InteractionResult';
import WarningAlert from '../../utils/WarningAlert';
import pharmacist from '../../assets/pharmacist.jpg'

const InteractionChecker = () => {
    const [formData, setFormData] = useState({
        search: '',
    });
    const [selectedMolecules, setSelectedMolecules] = useState([])
    const [moleculeOptions, setMoleculeOptions] = useState([])
    const [moleculeIds, setMoleculeIds] = useState([])
    const [interactions, setInteractions] = useState([])

    const warningMessage = 'Les informations contenues dans ce document NE doivent PAS être utilisées comme un substitut aux conseils d’un médecin qualifié et agréé ou d’un autre professionnel de santé.'

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

    useEffect(() => {


    })

    useEffect(() => {
        // console.log('the selected molecules',selectedMolecules)
        if (moleculeIds.length > 0) {
            fetchInteractionData()
        }


    }, [moleculeIds])

    useEffect(() => {
        if (interactionResp) {
            console.log('the interactions', interactionResp.data)
            setInteractions(interactionResp.data)
        }

    }, [interactionResp])



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
        <div className='w-full bg-sate-100 mx-auto h-[90vh] pt-1 m-5 bg-m-purple-1 '>

            <div className='flex flex-col h-full w-full  text-stone-700  bg-cover border-b-2 border-stone-700'>
                <div className='w-full h-28'>
                    <Header />

                </div>

                <div className='flex h-full gap-7 '>
                    <div className='w-[30%] h-full '>
                        <InteractionInfo />
                    </div>

                    <div className='h-full  flex flex-col' >

                        <Box
                            component="form"
                            sx={{ '& > :not(style)': {} }}
                            noValidate
                            autoComplete="off"
                            onSubmit={handleSubmit}
                        >
                            <div className="flex bgm-purple flex-col md:w-[900px] md:h-[150px] md:justify-between md:flex-row items-center md:px-9 w-full rounded-lg">
                                <div className=' md:w-[80%]'>

                                    <Autocomplete
                                        freeSolo
                                        options={moleculeOptions ? moleculeOptions : []}
                                        getOptionLabel={(option) => option.libelle}
                                        //filterOptions={filterOptions}
                                        //value={moleculeOptions.find(option => option.libelle === formData.search) || null}
                                        onChange={handleChange}
                                        onInputChange={(event, value) => setFormData({ ...formData, search: value ? value : '' })}
                                        // onInputChange={handleInputChange}
                                        sx={{ backgroundColor: 'white' }}
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
                        <div className='h-1-'>
                            <WarningAlert
                                message={warningMessage}
                            />
                        </div>





                        <div className=' w-full '>
                            <SelectedMoleculesDisplay
                                selectedMolecules={selectedMolecules}
                                onRemoveSelectedOption={handleRemoveMolecule} />

                        </div>

                        <div className=''>
                            <InteractionResult
                                results={interactions}
                            />
                        </div>

                    </div>

                    <div className='w-[30%]'>

                        <div className='h-full w-full flex flex-col gap-5 justify-center items-center '>     
                            <div>
                                <p>ADVERTISEMENT</p>

                            </div>

                            <div className='h-[250px] w-[350px]'>
                                <img src={gloves} alt="" className='w-full h-full' />
                            </div>

                            <div className='h-[250px] w-[350px]'>
                                <img src={pharmacist} alt="" className='w-full h-full' />
                            </div>

                        </div>

                    </div>




                </div>

            </div>


        </div>
    )
}
export default InteractionChecker
