import React from 'react'
import Link from 'next/link'
import LinkButton from './elements/LinkButton';

const TextContent = (props) => {
  const {subheading, heading, description, links, add_container, center_content, content_width, under_home_masthead_video} = props
  console.log(props);

  let containerClasses = []

  if (add_container) {
    containerClasses.push('container')
  }
  if (center_content) {
    containerClasses.push('justify-center text-center')
  }
  if (content_width && center_content) {
    containerClasses.push('mx-auto')
  }

  if(under_home_masthead_video) {
    containerClasses.push('pt-[400px]')
  }

  containerClasses = containerClasses.join(' ')

  return (
    <div
      className={`flex flex-col pb-4  ${containerClasses}`}
      style={{maxWidth: content_width ? `${content_width}px` : ''}}
      id="text-content"
    >
      {subheading && subheading.length > 0 && <div className="bg-ivory text-slateGrey w-fit px-3 py-[6px] mx-auto rounded-full flex items-center uppercase">{subheading}</div>}
      {heading && <h2 className="uppercase text-[8rem] tracking-tighter font-bold">{heading}</h2>}
      {description && (
        <p
          className="mt-6 text-[2rem] font-light leading-relaxed tracking-tight opacity-80"
          dangerouslySetInnerHTML={{__html: description}}
        />
      )}
      {links && (
        <div className={`flex items-center mt-10 ${center_content ? "justify-center mx-auto" : ""}`}>
          {links?.map((link, i) => {
            return (
                <LinkButton link={link} />
            )
          })}
        </div>
      )}
    </div>
  )
}

export default TextContent
