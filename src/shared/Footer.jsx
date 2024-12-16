import React from 'react'
import medicoicon from '../assets/medico-icon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,} from '@fortawesome/free-solid-svg-icons';
import {faXTwitter,  faSquareInstagram, faFacebook, faYoutube} from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
    return (
        <div className='flex justify-center gap-10 items-center'>

            <div className='w-[5%]'>
                <img src={medicoicon} alt="" />
            </div>

            <div className='w-[10%] tracking-wider'>
                <p className='poppins-regular'>A PROPOS</p>
                <div className='poppins-light text-sm'>
                    <p>Presse</p>
                    <p>A propos de Medico</p>
                    <p>Politique de publicité</p>
                </div>
            </div>
            <div className='w-[10%] tracking-wider'>
                <p className='poppins-regular'>TERMES ET CONDITIONS</p>
                <div className='poppins-light text-sm'>
                    <p>Conditions d’utilisation</p>
                    <p>Politique de confidentialité</p>
                    <p>Politique éditoriale</p>
                </div>
            </div>
            <div className='w-[10%]'>
                <p className='poppins-regular'>SUPPORT</p>
                <div className='poppins-light text-sm'>
                    <p>Plan du site</p>
                    <p>Nous contacter</p>
                    <p>Centre D’aide</p>
                </div>
            </div>

            <div className='w-[40%] flex flex-col gap-5'>
                <div className='flex gap-8'>
                    <FontAwesomeIcon className='h-5' icon={faEnvelope} />
                    <FontAwesomeIcon className='h-5' icon={faXTwitter} />
                    <FontAwesomeIcon className='h-5' icon={faSquareInstagram} />
                    <FontAwesomeIcon className='h-5' icon={faFacebook} />
                    <FontAwesomeIcon className='h-5' icon={faYoutube} />
                </div>
                <div>
                    <p className='poppins-extralight'> <a href="#">Abonnez-vous à notre newsletter</a> pour obtenir les dernières infos sur les médicaments, les autorisations de mise sur le marché et les alertes de la ARP.</p>
                    
                </div>

            </div>

        </div>
    )
}
export default Footer
