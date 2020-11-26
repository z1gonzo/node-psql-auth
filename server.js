const express = require('express')
const app = express()
const path = require('path')

const PORT = process.env.PORT || 4000

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
 res.render('index')
})

app.get('/users/register', (req, res) => {
 res.render('register')
})

app.get('/users/login', (req, res) => {
 res.render('login')
})

app.get('/users/dashboard', (req, res) => {
 res.render('dashboard', { user: 'Przemek' })
})

app.listen(PORT, () => {
 console.log(`Server runs on port ${PORT}`)
})