import React, { useState } from 'react'
import { scroll } from "motion"
import medications from '../constants/medications'
import { div } from 'framer-motion/client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faCirclePlus, faBullseye } from '@fortawesome/free-solid-svg-icons';
import { Pagination } from '@mui/material';


const Listing = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedMedication, setSelectedMedication] = useState(null);
    const [page, setPage] = useState(1);

    const handleCardClick = (index) => {
        setSelectedMedication(medications[index]);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedMedication(null);
    };

    const handlePageChange = (event, value) =>{
        setPage(value);
    }


    return (
        <div className='mx-auto flex flex-col gap-4  '>
            <div>
                <p className='text-3xl text-slate-500 font-bold'>Medicaments de A à Z</p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 '>
                {medications.map((medications, index) => (
                    <div key={index} className='flex border-m-green shadow-lg border-opacity-45 rounded-md border-1 bg-m-purple bg-opacity-5 px-4 py-3 '>
                        <div className='w-[20%]'>
                            <div className=' w-10'>
                                <img className='w-full h-full' src={medications.imageUrl} alt="" />
                            </div>
                        </div>

                        <div className='flexflex-col items-center justify-center text-slate-500'>

                            <div className='flex gap-2'>
                                <p className='text-bold text-2xl'>{medications.dosage}</p>
                            </div>

                            <div className='flex gap-2'>
                                <FontAwesomeIcon icon={faBoxOpen} />
                                <p className='text-center'>{medications.form}/</p>
                                <p className='text-center'> <span>&nbsp;</span> 500ML </p>

                            </div>
                            <div className='flex gap-2'>
                                <FontAwesomeIcon icon={faCirclePlus} />
                                <p className='text-center'>{medications.activeMolecule}/</p>

                            </div>
                            <div className='flex gap-2'>
                                <FontAwesomeIcon icon={faBullseye} />
                                <p className='text-center'>{medications.treatment}/</p>

                            </div>
                        </div>

                    </div>
                ))}
            </div>

            <div className='self-center'>
                <Pagination
                boundaryCount={2}
                count={medications.length}
                shape='circular'
                
                siblingCount={2}
                onChange={(event, page) => {
                    return event;
                }}
                />
            </div>

        </div>
    )
}

export default Listing
