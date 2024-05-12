import React, {useState} from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'
import {urlFor} from '@/utils/SanityImage'

const accordionAnimation = {
  closed: {
    opacity: 0,
    height: 0,
    pointerEvents: 'none',
  },
  open: {
    opacity: 1,
    height: 'auto',
    pointerEvents: 'auto',
  },
  transition: {
    duration: 0.3,
  },
}

const Experiences = (props) => {
  const {job_positions, section_header, backgroundColor} = props
  return (
    <div className={`${backgroundColor === 'blueGrey' ? 'text-white' : ''}`}>
      {section_header && (
        <header className="flex flex-col">
          {section_header?.heading && section_header.heading.length > 0 && (
            <h2
              className="text-[3rem] md:text-[5rem] leading-[1.2] uppercase font-bold"
              dangerouslySetInnerHTML={{__html: section_header?.heading}}
            />
          )}
          {section_header?.description && section_header.description.length > 0 && (
            <p dangerouslySetInnerHTML={{__html: section_header?.description}} />
          )}
        </header>
      )}
      {job_positions && job_positions.length > 0 && (
        <div className="flex flex-col mt-20">
          {job_positions?.map((job_position, i) => (
            <JobPosition
              index={i}
              key={`job-position-${i}`}
              {...job_position}
              backgroundColor={backgroundColor}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Experiences

const JobPosition = ({index, company, position, responsibilites, date, backgroundColor}) => {
  const [accordionOpen, setAccordionOpen] = useState(false)
  const [hovered, setHovered] = useState(false)

  const fadeInVariant = {
    initial: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  }

  return responsibilites && responsibilites.length > 0 ? (
    <motion.button
      variants={fadeInVariant}
      initial="initial"
      whileInView="visible"
      viewport={{once: true, amount: 0.3}}
      type="button"
      onClick={() => setAccordionOpen(!accordionOpen)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      className={`border-solid ${backgroundColor === 'blueGrey' ? 'border-[#444B55]' : 'border-[#E5E5E5]'}  text-left py-8 ${index === 0 ? 'border-t border-b' : 'border-b'}`}
    >
      <div className="grid grid-cols-12 w-full">
        <div className="col-span-2">
          {/* {company.name && company.name.length > 0 && <h3 className="font-serif text-xl font-bold uppercase" dangerouslySetInnerHTML={{ __html: company.name }} />} */}
          {company.logo && (
            <div className="min-w-[50px] max-w-[50px] md:min-w-[80px] md:max-w-[80px] aspect-[1/1] relative">
              <Image
                src={urlFor(company?.logo).format('webp').url()}
                alt="company logo"
                fill
                objectFit="cover"
              />
            </div>
          )}
        </div>
        <div className="col-span-10 md:col-span-7 pl-10 place-content-center">
          <div className="flex flex-col">
            {position && position.length > 0 && (
              <h3
                className="font-serif text-lg md:text-2xl font-bold uppercase"
                dangerouslySetInnerHTML={{__html: position}}
              />
            )}
            {company?.name && company?.name.length > 0 && (
              <p
                className="font-serif text-md md:text-xl font-light opacity-80"
                dangerouslySetInnerHTML={{__html: company?.name}}
              />
            )}
          </div>
        </div>
        <div className="hidden md:block md:col-span-3 text-right place-content-center">
          {date && date.length > 0 && (
            <p
              className="opacity-50 font-serif uppercase"
              dangerouslySetInnerHTML={{__html: date}}
            />
          )}
        </div>
      </div>
      <div className="grid grid-cols-12 w-full">
        <div className="lg:col-span-2" />
        <div className="col-span-12 lg:col-span-7 lg:pl-10">
          {responsibilites && responsibilites.length > 0 && (
            <motion.ul
              variants={accordionAnimation}
              initial="closed"
              animate={accordionOpen ? 'open' : 'closed'}
              className="flex flex-col list-disc"
            >
              <span className="min-h-10 inline-block" />
              {responsibilites?.map((responsibility, i) => (
                <li
                  className="ml-4 pl-2 font-serif mb-6 opacity-80 text-normal md:text-lg font-light leading-[1.6]"
                  key={`job-responsibility-${i}`}
                >
                  {responsibility}
                </li>
              ))}
            </motion.ul>
          )}
        </div>
        <div className="lg:col-span-3" />
      </div>
    </motion.button>
  ) : (
    <motion.div
        variants={fadeInVariant}
        initial="initial"
        whileInView="visible"
        viewport={{once: true, amount: 0.3}}
        className={`border-solid ${backgroundColor === 'blueGrey' ? 'border-[#444B55]' : 'border-[#E5E5E5]'} text-left py-8 ${index === 0 ? 'border-t border-b' : 'border-b'}`}
    >
      <div className="grid grid-cols-12 w-full">
        <div className="col-span-2">
          {/* {company.name && company.name.length > 0 && <h3 className="font-serif text-xl font-bold uppercase" dangerouslySetInnerHTML={{ __html: company.name }} />} */}
          {company.logo && (
            <div className="min-w-[60px] max-w-[60px] md:min-w-[80px] md:max-w-[80px] aspect-[1/1] relative">
              <Image
                src={urlFor(company?.logo).format('webp').url()}
                alt="company logo"
                fill
                objectFit="cover"
              />
            </div>
          )}
        </div>
        <div className="col-span-10 md:col-span-7 pl-10 place-content-center">
          <div className="flex flex-col">
            {position && position.length > 0 && (
              <h3
                className="font-serif text-lg md:text-2xl font-bold uppercase"
                dangerouslySetInnerHTML={{__html: position}}
              />
            )}
            {company?.name && company?.name.length > 0 && (
              <p
                className="font-serif text-md md:text-xl font-light opacity-80"
                dangerouslySetInnerHTML={{__html: company?.name}}
              />
            )}
          </div>
        </div>
        <div className="hidden md:block md:col-span-3 text-right place-content-center">
          {date && date.length > 0 && (
            <p
              className="opacity-50 font-serif uppercase"
              dangerouslySetInnerHTML={{__html: date}}
            />
          )}
        </div>
      </div>
    </motion.div>
  )
}
