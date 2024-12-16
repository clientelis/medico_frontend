import React from 'react'
import medicoicon from '../assets/medico-icon.png';

const Footer = () => {
    return (
        <div className='flex justify-center items-center'>

            <div className='w-[10%]'>
                <img src={medicoicon} alt="" />
            </div>

            <div className='w-[10%]'>
                <p>A PROPOS</p>
                <div>
                    <p>Presse</p>
                    <p>A propos de Medico</p>
                    <p>Politique de publicité</p>
                </div>

            </div>
            <div className='w-[10%]'>
                <p>A PROPOS</p>
                <div>
                    <p>Presse</p>
                    <p>A propos de Medico</p>
                    <p>Politique de publicité</p>
                </div>
            </div>
            <div className='w-[10%]'>
                <p>TERMES ET CONDITIONS</p>
                <div>
                    <p>Conditions d’utilisation</p>
                    <p>Politique de confidentialité</p>
                    <p>Politique éditoriale</p>
                </div>
            </div>
            <div className='w-[10%]'>
                <p>SUPPORT</p>
                <div>
                    <p>Plan du site</p>
                    <p>Nous contacter</p>
                    <p>Centre D’aide</p>
                </div>
            </div>

        </div>
    )
}
export default Footer
