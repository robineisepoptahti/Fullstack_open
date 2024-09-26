import ShowEntry from './showEntry'

const ShowAll = ({ persons, newFilter }) => {
    const notesToShow = newFilter === ''
        ? persons
        : persons.filter(note => note.name.toLowerCase().startsWith(newFilter.toLowerCase()))

    return (
        <div>
            {notesToShow.map(entry => (
                <div key={entry.name}>
                    <ShowEntry entry={entry} />
                    <br />
                </div>
            ))}
        </div>
    )
}

export default ShowAll

