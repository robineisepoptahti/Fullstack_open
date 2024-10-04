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
        <button onClick = {handleClick}>Show</button>
        </p>
        </div>
    )
}

export default ShowEntry
