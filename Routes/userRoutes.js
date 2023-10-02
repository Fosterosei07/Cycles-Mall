const express= require ('express')
const {home} = require('../Controllers/userController')

const home =(req, res) =>{
    res.remder('index')
}