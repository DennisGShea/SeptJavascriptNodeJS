
const express = require('express')
const {getStudents, getStudentsByName } = require('./src/students')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World - good evening!'))    // anonymous  function 

app.get('/courses', (req, res) => res.send('Hello courses!'))    // anonymous  function 
app.get('/students/:name', getStudentsByName)

// app.get('/dgs', (req, res) => res.send('Hello dgs'))    // anonymous  function nod
app.get('/students', getStudents) 



app.listen(port, () => console.log(`Listening at http://localhost:${port}`))


