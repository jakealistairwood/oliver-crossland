"use client"

const Masthead = (props) => {
    console.log(props);
    const { title, image } = props;
    return (
        <div>
            <div className="container">
                <h1>This is the masthead</h1>
            </div>
        </div>
    )
}

export default Masthead;