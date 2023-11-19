// const express = require('express')
// const cors = require('cors')
// const dotenv = require('dotenv')


import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config();
var app = express()
var port=process.env.PORT ||3001







app.use(cors());
app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ extended: true, limit: '30mb' }));


app.get('/', (req, res) => {
    res.send('Hello World!')
  })



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });