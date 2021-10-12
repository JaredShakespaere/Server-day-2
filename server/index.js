const express = require('express')
const cors= require ('cors')

const app = express()

app.use(express.json())  
app.use(cors()) 

const ctrl = require('./controller')
app.get('/api/houses', ctrl.getAllHouses)
app.post('/api/houses', ctrl.createHouse)
app.put('/api/houses/:id', ctrl.updateHouse)
app.delete('/api/houses/:id', ctrl.deleteHouse)
app.listen(4545, () => console.log('4545 is running!'))

