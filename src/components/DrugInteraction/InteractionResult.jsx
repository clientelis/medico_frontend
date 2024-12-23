import { faShuffle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const InteractionResult = ({ results }) => {
    return (
        <div className='h-full w-full bg-m-grey'>

            <div className='w-full h-full flex flex-col items-center justify-center pt-2 border-zinc-500 border-2 border-opacity-30 '>
                <h1 className='text-lg text-slate-500 font-medium'>Resultat</h1>

                {results && results.map((result, index) => {
                    return (

                        <div className='w-full bg-gren-300'>
                            <table className='b-red-400 w-full'>
                                <thead className=''>
                                    <tr className='text-slate-500 text-md '>
                                        <th className='pb-3'>Molecule A</th>
                                        <th className='pb-3 text-purple-700'><FontAwesomeIcon icon={faShuffle} className='h-5' /></th>
                                        <th className='pb-3'>Molecule B</th>
                                        <th className='pb-3'>Severite</th>
                                        <th className='pb-3'>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className=''> 
                                        <td className='p-2 text-center'>Amoxi</td>
                                        <td className='p-2 text-center'></td>
                                        <td className='p-2 text-center'>Ibuprofen</td>
                                        <td className='p-2 text-center'>Severe</td>
                                        <td className='p-2'>Blablabla</td>
                                    </tr>
                                </tbody>
                            </table>



                        </div>
                    )
                })}


            </div>


        </div>
    )
}

export default InteractionResult
