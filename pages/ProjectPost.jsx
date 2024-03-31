import React from "react";
import FullWidthVideo from "@/components/FullWidthVideo";

const ProjectPost = ({ project }) => {
    const { title, excerpt, description, category, featured_image, video_id } = project;
    return (
        <>
            <header className="flex flex-col items-center text-center pt-[140px] pb-20 max-w-[1100px] mx-auto">
                <div className="flex text-normal items-center font-light text-[#5A5A5A] bg-[#f4f4f4] w-fit font-mono uppercase px-3 py-1 rounded-full mb-10">
                    {category}
                </div>
                <h1 className="uppercase text-[6rem] tracking-tighter font-bold leading-none" dangerouslySetInnerHTML={{ __html: title }} />
                <p className="max-w-[680px] w-full opacity-80 text-lg mt-10" dangerouslySetInnerHTML={{ __html: excerpt }} />
            </header>   
            <div className="relative pb-[140px]">
                {video_id && video_id.length > 0 && (
                    <div id="home-masthead-video">
                        <FullWidthVideo video_thumbnail={featured_image} video_id={video_id} />
                    </div>
                )}
            </div>
            {description && description.length > 0 && (
                <p dangerouslySetInnerHTML={{ __html: description }} />
            )}
        </>
    )
}

export default ProjectPost;