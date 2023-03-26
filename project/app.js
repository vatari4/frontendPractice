const { response } = require('express')
const express = require('express')
const app = express()
const path = require('path')



app.use(express.static(path.resolve(__dirname, 'client')))

app.get('*', (require, response)=> {
    response.sendFile(path.resolve(__dirname, 'client', 'index.html'))
})

app.listen(3000, ()=> console.log('server started'))