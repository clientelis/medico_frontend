import React, { useEffect, useState } from 'react'
import Header from '../shared/Header'
import doctor_cover from '../assets/doctor_cover.jpg'
import medico_banner from '../assets/medico_banner.jpg'
import tablets from '../assets/tablets.jpg'
import pills from '../assets/pills.jpg'
import { motion } from 'framer-motion'
import Listing from './Listing'
import Filter from './Filter'
import UseAxios from '../api/UseAxios'
const HomePage = () => {
    const [medications, setMedications] = useState([])
    const [page, setPage] = useState(1)
    const [totalMeds, setTotalMeds] = useState()
    const [selectedFilters, setSelectedFilters] = useState('')
    const [voies, setVoies] = useState([])
    const [formes, setFormes] = useState([])
    const [pays, setPays] = useState([])
    const [laboratoires, setLaboratoires] = useState([])
    const [isFilter, setIsFilter] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    


    const urlBuilder = () => {
        let url = `/medicaments?page=${page}`

        if(selectedFilters){
            Object.keys(selectedFilters).forEach((key)=>{
                if(selectedFilters[key]){
                    url+=`&${key}=${selectedFilters[key]}`
                }
            }
        )
            
        }
        //console.log('the url',url)
        return url
    }

    const { resp, error, loading, fetchData } = UseAxios({
        url: urlBuilder(),
        method: 'get'
    })


    useEffect(() => {
        fetchData();
    }, [page, isFilter]); // Déclenchez fetchData lorsque la page ou le filtre change



    useEffect(() => {
        if (resp && resp.medicaments) {
            setIsLoading(false)
            console.log('in homepage the medocs', resp.medicaments.data)
            setMedications(resp.medicaments.data)
            setPage(resp.medicaments.current_page)
            setTotalMeds(resp.medicaments.total)
            setFormes(resp.formes)
            setLaboratoires(resp.laboratoires)
            setVoies(resp.voies)
            setPays(resp.pays)
        }

        if (error) {
            console.log(error)
        }
        if (loading) {
            console.log('loading')
           setIsLoading(true)
        }
    }, [resp, error, loading])

    const handlePageChange = (event, value) => {
        setPage(value);

    }

    const handleFilterChange = (formData) => {
        console.log('what',formData)
        console.log('the forms',Object.keys(formData))
        setSelectedFilters(formData)
        setPage(1)
        setIsFilter(true)

    }





    return (
        <>

            <div className='w-full mt-4 flex flex-col gap-4 '>

                <div className='bg-cover  h-[190px] w-full lg:h-[700px] flex justify-center items-center ' style={{ backgroundImage: `url(${pills})` }}>
                    <div className='flex flex-col items-center gap-5 '>

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
                            animate={{ opacity: 1, y: 0, scale: 0.9 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        >

                            <button className='h-full w-full text-center text-sm  md:text-lg md:tracking-wide leading-5 border-0 md:border-2 rounded-lg bg-m-green md:bg-m-purple text-white '>En savoir plus </button>
                        </motion.div>


                            <Filter
                                voies={voies}
                                formes={formes}
                                laboratoires={laboratoires}
                                pays={pays}
                                onFilterChange={handleFilterChange}
                            />


                    </div>

                </div>

                <div className='w-full px-2 md:w-[70vw] mx-auto'>
                    <Listing
                        medicationsData={medications}
                        currentPage={page}
                        total={totalMeds}
                        onPageChange={handlePageChange}
                        loading={isLoading}
                    />
                </div>
            </div>
        </>
    )
}
export default HomePage;
