const express = require('express')
const app = express()
const port = 3000

const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs({ defaultLayout:'main' }))
app.set('view engine', 'handlebars')

app.use(express.urlencoded({ extended: true}))

const generatePassword = require('./password_generator.js')

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const options = req.body
  const password = generatePassword(options)
  res.render('index', {password, options})
})

app.listen(port,() => {
  console.log('Server is connecting on http://localhost:3000')
})