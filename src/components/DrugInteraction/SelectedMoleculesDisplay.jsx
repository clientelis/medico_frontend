import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const SelectedMoleculesDisplay = ({ selectedMolecules, onRemoveSelectedOption }) => {




    return (
        <div className='w-full flex h-full '>
            <div className='flex flex-col md:flex-row flex-wrap h-full w-[68%]  gap-2 items-start rounded-md'>
                <div className='flex flex-col md:flex-row flex-wrap gap-2 w-full'>
                    {
                        selectedMolecules && selectedMolecules.map((molecule, index) => {
                            return (

                                <div key={index} className='text-slate-700 border-2 w-fit min-w-[20%] flex flex-col h-10 gap-5 border-opacity-30 rounded-md border-slate-900 md:min-w-[23%] hover:border-purple-400'>
                                    <div className='flex w-full h-full '>
                                        <div className='flex justify-center items-center bg-red-30 w-[90%]'>
                                            <p>

                                                {molecule.libelle}
                                            </p>
                                        </div>
                                        <div className='flex justify-end items-center'>

                                            <FontAwesomeIcon icon={faCircleXmark} className='text-slate-400 cursor-pointer hover:text-red-700 h-5'
                                                onClick={() => onRemoveSelectedOption(molecule.id)}
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
    )
}
export default SelectedMoleculesDisplay