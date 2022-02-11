const express=require('express')
const Router=express.Router()
const {addNewUser,logIn}=require('../controllers/userControllers')


Router.post('/addUser', addNewUser),
Router.post('/login', logIn)


module.exports=Router 