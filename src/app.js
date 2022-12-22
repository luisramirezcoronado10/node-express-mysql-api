// const express = require('express')
import express from 'express'
import employeeRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express()

app.use(indexRoutes)
app.use(employeeRoutes)

// manejar rutas que no existen
app.use((req, res, next)=>{
    res.status(404).json({
        message: 'Endpoint Not found'
    })
})

export default app