const express = require('express')
const app = express()
const routes = require('./routes.js')
const cors = require('cors')
const bodyParser = require('body-parser')
const port = 4000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended:true
}))
app.use(cors())
app.use('/', routes)

//app.get('/', (req, res) => res.send('Hello World!'))
//app.post('/partner/add', (req, res) => res.send('Add Partner'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
