import React, { useEffect, useState } from 'react'
import { scroll } from "motion"
import medications from '../constants/medications'
import { div } from 'framer-motion/client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faCirclePlus, faBullseye } from '@fortawesome/free-solid-svg-icons';
import { Alert, AlertTitle, CircularProgress, Pagination, Stack } from '@mui/material';
import pillIcon from '../assets/pills_logo.jpg'


const Listing = ({ medicationsData, total, currentPage, onPageChange, loading }) => {
    //const [medications, setMedications] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedMedication, setSelectedMedication] = useState(null);
    const [page, setPage] = useState(1);
    const [pagesCount, setPagesCount] = useState(1)

    const handleCardClick = (index) => {
        setSelectedMedication(medications[index]);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedMedication(null);
    };

    console.log('the meds in listing', medicationsData)




    // useEffect(() => {
    //     if (medicationsData && total) {
    //         setMedications(medicationsData)
    //         console.log('the meds', medicationsData)
    //         setPagesCount(Math.ceil(total / medicationsData.length))
    //     }
    // }, [medicationsData])



    return (
        <div className='mx-auto flex flex-col gap-4'>
            {loading ? (
                <Stack sx={{ color: 'grey.500', alignSelf: 'center' }} spacing={2} direction="row">
                    <CircularProgress color="secondary" />

                </Stack>
            ) : (
                <>
                    {
                        medicationsData.length === 0 ? (
                            <Alert severity="info" sx={{backgroundColor:'grey.100'}}>
                                <AlertTitle>Info</AlertTitle>
                                Aucun résultat trouvé.
                            </Alert>

                        ) : (
                            <>

                                <div>
                                    <p className='text-3xl text-slate-500 font-bold'>Medicaments de A à Z</p>
                                </div>



                                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 '>
                                    {medicationsData.map((medication, index) => (
                                        <div key={index} className='flex border-m-green shadow-lg border-opacity-45 rounded-md border-1 bg-m-purple bg-opacity-5 px-4 py-3 '>
                                            <div className='w-[20%]'>
                                                <div className=' w-10'>
                                                    <img className='w-full h-full' src={pillIcon} alt="" />
                                                </div>
                                            </div>

                                            <div className='flexflex-col items-center justify-center text-slate-500'>

                                                <div className='flex gap-2'>
                                                    <p className='text-bold text-2xl'>{medication.nom_produit}</p>
                                                </div>

                                                <div className='flex gap-2'>
                                                    <FontAwesomeIcon icon={faBoxOpen} />
                                                    <p className='text-center'>{medication.conditionnement}/</p>
                                                    <p className='text-center'> <span>&nbsp;</span> 500ML </p>

                                                </div>
                                                <div className='flex gap-2'>
                                                    <FontAwesomeIcon icon={faCirclePlus} />
                                                    <p className='text-center'>{medication.dci}</p>

                                                </div>
                                                <div className='flex gap-2'>
                                                    <FontAwesomeIcon icon={faBullseye} />
                                                    <p className='text-center'>{medication.definition}</p>

                                                </div>
                                            </div>

                                        </div>
                                    ))}
                                </div>

                                <div className='self-center'>
                                    <Pagination
                                        boundaryCount={2}
                                        count={medicationsData.length > 0 ? Math.ceil(total / medicationsData.length) : 1}
                                        shape='circular'
                                        siblingCount={2}
                                        page={currentPage}
                                        onChange={onPageChange}
                                    />
                                </div>

                            </>
                        )

                    }
                </>
            )

            }

        </div >
    )
}

export default Listing
