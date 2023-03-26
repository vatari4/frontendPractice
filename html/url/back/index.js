const { request, response } = require('express')
const express = require('express')

const PORT = process.env.PORT || 3001

const app = express()

app.listen(PORT, ()=> {
    console.log('Server is start in port ' + PORT)
})

app.get('api/', (request, response) => {
    response.json({
        Message:"e"
    })
})