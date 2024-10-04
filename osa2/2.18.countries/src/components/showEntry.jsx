const ShowEntry = ({name}) => {
    const land = name.name.common 
    console.log(land)
    return (
        <div>
        <p>
            {land}
        </p>
        
        </div>
    )
}

export default ShowEntry
