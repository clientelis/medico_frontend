import { useState } from 'react'
import { NavbarElements } from '../constants/navbar';
import logo from '../assets/medico-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faBars } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }
    return (
        <div className='relative g-red-400'>
            <div className='flex justify-around items-center px- h-fit pt-10'>
                <div className='w-[200px] h-14 md:w-72 md:h-16 '>
                    <img src={logo} alt="Medico Logo" className='h-full w-full' />
                </div>

                <nav className='flex hidden lg:block '>
                    <ul className='ubuntu-regular text-gray-600 items-center tracking-wide list-none flex text-2xl gap-5 flex-wrap'>
                        {NavbarElements.map((element, index) => (
                            <li key={index} className='group relative'>
                                <a href={element.link}> {element.title}
                                    <span className='absolute -bottom-2 h-1 -right-2 -left-2 origin-left bg-m-green rounded-full transition-transform duration-300 ease-out scale-x-0 opacity-90 group-hover:scale-x-90'></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className='w-20 hidden lg:block'>
                    <button className='bg-m-purple text-white px-5 py-2 text-xl rounded-lg ubuntu-bold '>Connexion</button>
                </div>
            </div>

            {/* 
            <div className='fixed h-screen top-0 right-0 z-50 bg-gray-700 bg-opacity-60   '>
                <div className='flex justify-center relative'>
                    {isMobileMenuOpenm ? (
                        <FontAwesomeIcon icon={faX} className='h-5 absolute left-0 ' onClick={toggleMobileMenu} />
                    ) : (
                        <FontAwesomeIcon icon={faBars} className='h-6 absolute right-0' onClick={toggleMobileMenu} />
                    )}
                    <nav className='flex pt-5'>
                        <ul className='ubuntu-regular text-gray-950 items-center tracking-wide list-none flex flex-col items-center text-sm gap-5 flex-wrap'>
                            {NavbarElements.map((element, index) => (
                                <li key={index} className='group relative'>
                                    <a href={element.link}> {element.title}</a>
                                </li>
                            ))}
                            <li>Connexion</li>
                            <li>Deconnexion</li>
                        </ul>
                    </nav>
                </div>

            </div>
 */}


            <div className='lg:hidden absolute top-4 right-3 z-50 '>
                <AnimatePresence>
                    {!isMobileMenuOpen &&
                        (
                            <motion.div
                                key="open"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}

                            >
                                <FontAwesomeIcon icon={faBars} className='h-6' onClick={toggleMobileMenu} />
                            </motion.div>
                        )}
                </AnimatePresence>

            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                      
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ duration: 0.3, type: "tween" }}
                            className='fixed h-screen top-0 right-0 z-50 bg-gray-700 bg-opacity-60   '
                        >
                            <div className='flex justify-center relative'>
                                <FontAwesomeIcon icon={faX} className='h-5 ml-5 mt-7' onClick={toggleMobileMenu} />

                                <nav className='flex pt-5'>
                                    <ul className='ubuntu-regular text-gray-950 items-center tracking-wide list-none flex flex-col items-center text-sm gap-5 flex-wrap'>
                                        {NavbarElements.map((element, index) => (
                                            <li key={index} className='group relative'>
                                                <a href={element.link}> {element.title}</a>
                                            </li>
                                        ))}
                                        <li>Connexion</li>
                                        <li>Deconnexion</li>
                                    </ul>
                                </nav>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div >

















    )
}
export default Header;