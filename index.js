const express = require('express')
const app = express()
const port = 3000
const router = require('./routers')

app.use (express.static('static'))
app.use (express.json())
app.use (express.urlencoded({extended : true}))
app.set ('view engine', 'ejs') 

app.use(router)

app.listen(port, () => {
          console.log('example app listening on port ${port}')
})