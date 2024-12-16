import React from 'react'
import Header from '../shared/Header'
import doctor_cover from '../assets/doctor_cover.jpg'
import medico_banner from '../assets/medico_banner.jpg'
import tablets from '../assets/tablets.jpg'
import pills from '../assets/pills.jpg'
import { motion } from 'framer-motion'
import Listing from './Listing'
const HomePage = () => {
    return (
        <>
            
            <div className='w-full mt-10 flex flex-col gap-4'>

                <div className='bg-cover  h-[190px] w-full lg:h-[900px] flex justify-center items-center' style={{ backgroundImage: `url(${pills})` }}>
                    <div className='flex flex-col items-center gap-5'>

                        <motion.div
                            className='mb-3 mt-4 md:mb-6'
                            initial={{ opacity: 0, y: -50, scale: 0.5 }}
                            animate={{ opacity: 1, y: 0, scale: 2 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        >
                            <p className='text-center hidden md:block text-4xl text-white'>Bienvenue sur Medico</p>
                            <p className='text-center text-sm md:hidden text-white block '>
                            Bienvenue<br />Sur<br />Medico
                        </p>
                        </motion.div>


                        <motion.div className='h-10 w-32 md:h-14  md:w-36 flex justify-center'
                            initial={{ opacity: 0, y: -50, scale: 0.1 }}
                            animate={{ opacity: 1, y: 0, scale:0.9  }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        >

                            <button className='h-full w-full text-center text-sm  md:text-lg md:tracking-wide leading-5 border-0 md:border-2 rounded-lg bg-m-green md:bg-m-purple text-white '>En savoir plus </button>
                        </motion.div>

                    </div>

                </div>

                <div className='w-full px-2 md:w-[70vw] mx-auto'>
                    <Listing />
                </div>
            </div>
        </>
    )
}
export default HomePage;
