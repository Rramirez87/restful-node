'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extend: false }))
app.use(bodyParser.json())

//GET listar
//POST insertar
//PUT actualizar
//DELETE eliminar

/*
app.get('/hola/:name', (req, res) => {
  res.send( {messagge: `Hola ${req.params.name}` } )
})
*/
//INICIO API RESTFUL

app.get('/api/producto', (req, res) => {
  res.send(200, {productos: []})
})

app.get('/api/producto/:id', (req, res) => {

})

app.post('/api/producto', (req, res) => {
  console.log(req.body)
  res.send(200, {mensaje:'Producto insertado correctamente'})
})

app.put('/api/producto/:id', (req, res) => {

})

app.delete('/api/producto/:id', (req, res) => {

})

app.listen (port, () => {
  console.log(`API REST correindo correctamente: ${port} `)
})
