const express=require('express')
const Router=express.Router()
const {addNewObject, deleteObject, updateObject, getObject}=require('../controllers/objectControllers')
const userMiddleware = require('../middlewares/studentMiddleware')


Router.post('/addObject', userMiddleware,addNewObject),
Router.delete('/objectDelete/:id',deleteObject)
Router.put('/objectUpdate/:id',updateObject)
Router.get('/findObject',getObject)

module.exports=Router 