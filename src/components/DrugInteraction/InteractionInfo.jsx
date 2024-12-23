import { Accordion, AccordionDetails } from '@mui/material';
import React from 'react';
import { AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { interactionCheckerAccordions } from '../../constants/interactionCheckerAccordions';
import { ul } from 'framer-motion/client';
const InteractionInfo = () => {
    return (
        <div className='text-slate-500 h-full w-full flex justify-center'>
            <div className='w-full h-full flex flex-col'>

                {
                    interactionCheckerAccordions.map((accordion, index) => {
                        return (

                            <Accordion key={index} className=' '>
                                <AccordionSummary


                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls={`panel${index}-content`}
                                    id={`panel${index}-header`}
                                    sx={{ backgroundColor: '', height: '8rem', color: 'slate.100' }}

                                >
                                    <p className='font-bold '>{accordion.title}</p>
                                </AccordionSummary>
                                <AccordionDetails className=''>
                                    <p>

                                        {accordion.content.description}
                                    </p>
                                    {accordion.content.details.length > 0 && (
                                        <ul>
                                            {accordion.content.details.map((subItem, subIndex) => (
                                                <li key={subIndex}>

                                                        <p className='font-semibold'>{subItem.title}</p>
                                                        <p>{subItem.content}</p>
                                                        {
                                                            subItem.details.length > 0 && (
                                                                <ul>
                                                                    {subItem.details.map((item, itemIndex) => 
                                                                        (
                                                                            <li key={itemIndex}>{item}</li>
                                                                        )
                                                                    )}
                                                                </ul>
                                                            )
                                                        }

                                                </li>


                                            ))}
                                        </ul>
                                    )}

                                </AccordionDetails>
                            </Accordion>

                        )
                    })
                }
            </div>
        </div>
    );
};

export default InteractionInfo;