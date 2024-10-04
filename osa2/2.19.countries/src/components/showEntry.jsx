const ShowEntry = ({name, onChange}) => {
    const land = name.name.common 
    console.log(land)

    const handleClick = () =>{
        console.log("Click")
        onChange(name.name.common)

    }

    return (
        <div>
        <p>
            {land}
        </p>
        <button onClick = {handleClick}>Show</button>
        </div>
    )
}

export default ShowEntry
