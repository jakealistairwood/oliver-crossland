import Link from 'next/link'

const TextContent = (props) => {
  const {heading, description, links, add_container, center_content, content_width} = props

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

  containerClasses = containerClasses.join(' ')

  return (
    <div
      className={`flex flex-col pt-32 pb-4  ${containerClasses}`}
      style={{maxWidth: content_width ? `${content_width}px` : ''}}
    >
      {heading && <h2 className="font-semibold text-3xl">{heading}</h2>}
      {description && (
        <p
          className="mt-14 text-2xl leading-relaxed tracking-tight opacity-80"
          dangerouslySetInnerHTML={{__html: description}}
        />
      )}
      {links && (
        <div className={`flex items-center mt-20 ${center_content ? "justify-center mx-auto" : ""}`}>
          {links?.map((link, i) => {
            return link?.type == 'link' ? (
              <Link className="flex items-center text-xl font-semibold gap-2" key={`link${i}`} href={link?.url}>
                {link?.label}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 15L7.08333 12.9167M15 5H7.5M15 5V12.5M15 5L9.58333 10.4167"
                    stroke="black"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Link>
            ) : (
              <Link key={`link${i}`} href={link?.url}>
                {link?.label}
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default TextContent
