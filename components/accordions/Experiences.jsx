import React, { useState } from "react";
import { motion } from "framer-motion";

const accordionAnimation = {
    closed: {
        opacity: 0,
        height: 0,
        pointerEvents: "none",
    },
    open: {
        opacity: 1,
        height: "auto",
        pointerEvents: "auto",
    },
    transition: {
        duration: 0.3
    }
}

const Experiences = (props) => {
    const { job_positions, section_header } = props;
    return (
        <>
            {section_header && (
                <header className="flex flex-col">
                    {section_header?.heading && section_header.heading.length > 0 && <h2 className="text-[5rem] uppercase font-bold" dangerouslySetInnerHTML={{ __html: section_header?.heading }} />}
                    {section_header?.description && section_header.description.length > 0 && <p dangerouslySetInnerHTML={{ __html: description }} />}
                </header>
            )}
            {job_positions && job_positions.length > 0 && (
                <div className="flex flex-col mt-20">
                    {job_positions?.map((job_position, i) => (
                        <JobPosition index={i} key={`job-position-${i}`} {...job_position} />
                    ))}
                </div>
            )}
        </>
    )
}

export default Experiences;


const JobPosition = ({ index, company, position, responsibilites, date }) => {
    const [accordionOpen, setAccordionOpen] = useState(false);
    console.log(responsibilites);
    return responsibilites && responsibilites.length > 0 ? (
        <button type="button" onClick={() => setAccordionOpen(!accordionOpen)} className={`border-solid border-[#E5E5E5] text-left py-8 ${index === 0 ? "border-t border-b" : "border-b"}`}>
            <div className="grid grid-cols-12 w-full">
                <div className="col-span-3">
                    {company.name && company.name.length > 0 && <h3 className="font-serif text-xl font-bold uppercase" dangerouslySetInnerHTML={{ __html: company.name }} />}
                </div>
                <div className="col-span-6 pl-10">
                    {position && position.length > 0 && <p className="font-serif text-xl font-light uppercase" dangerouslySetInnerHTML={{ __html: position }} />}
                </div>
                <div className="col-span-3 text-right">
                    {date && date.length > 0 && <p className="opacity-50 font-serif uppercase" dangerouslySetInnerHTML={{ __html: date} } />}
                </div>
            </div>
            <div className="grid grid-cols-12 w-full">
                <div className="col-span-3" />
                <div className="col-span-6 pl-10">
                    {responsibilites && responsibilites.length > 0 && (
                        <motion.ul variants={accordionAnimation} initial="closed" animate={accordionOpen ? "open" : "closed"} className="flex flex-col list-disc">
                            <span className="min-h-10 inline-block" />
                            {responsibilites?.map((responsibility, i) => (
                                <li className="ml-4 pl-2 font-serif mb-6" key={`job-responsibility-${i}`}>
                                    {responsibility}
                                </li>
                            ))}
                        </motion.ul>
                    )}
                </div>
                <div className="col-span-3" />
            </div>
        </button>
    ) : (
        <div className={`border-solid border-[#E5E5E5] text-left py-8 ${index === 0 ? "border-t border-b" : "border-b"}`}>
            <div className="grid grid-cols-12 w-full">
                <div className="col-span-3">
                    {company.name && company.name.length > 0 && <h3 className="font-serif text-xl font-bold uppercase" dangerouslySetInnerHTML={{ __html: company.name }} />}
                </div>
                <div className="col-span-6 pl-10">
                    {position && position.length > 0 && <p className="font-serif text-xl font-light uppercase" dangerouslySetInnerHTML={{ __html: position }} />}
                </div>
                <div className="col-span-3 text-right">
                    {date && date.length > 0 && <p className="opacity-50 font-serif uppercase" dangerouslySetInnerHTML={{ __html: date} } />}
                </div>
            </div>
        </div>
    )
}