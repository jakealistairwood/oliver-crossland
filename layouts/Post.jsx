import React from "react";
import ProjectPost from "@/components/pages/ProjectPost";

const Post = (props) => {
    const { project } = props;

    return (
        <section>
            <div className="container">
                <ProjectPost project={project} />
            </div>
        </section>
    )
}

export default Post;