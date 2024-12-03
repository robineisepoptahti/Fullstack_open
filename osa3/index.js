const express = require('express')
const app = express()

let persons = [
    {
        id: "1",
        name: "Arto Hellas",
        number: "040-123456"
    },
    {
        id: "2",
        name: "Ada Lovelace",
        number: "39-44-5323523"
    },
    {
        id: "3",
        name: "Dan Abramov",
        number: "12-43-234345"
    },
    {
        id: "4",
        name: "Mary Poppendieck",
        number: "39-23-6423122"
    }
]

app.get('/api/persons', (request, response) => {
    response.json(persons)
    })

    app.get('/api/info', (request, response) => {
        const count = persons.length;
        const Time = new Date();
        let msg = `Phonebook has info for ${count} people<br><br>${Time}`;
        response.send(msg);
        })

    app.delete('/api/persons/:id', (request, response) => {
        const id = request.params.id
        persons = persons.filter(note => note.id !== id)  
        response.status(204).end()
          })

app.get('/api/persons/:id', (request, response) => {
    const id = request.params.id
    const note = persons.find(note => note.id === id)
    if (note) {
        response.json(note)
        } else {
        response.status(404).end()
      }
      })

const PORT = 3001;
app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
});