const express=require('express')
const router=express.Router()

const { getLogoutController } = require('../controllers/userController')
const { getLoginController } = require('../controllers/userController')
const { getHomeController } = require('../controllers/userController')
const { postLogincontroller } = require('../controllers/userController')
const { postSignupController } = require('../controllers/userController')
const { getSignupController } = require('../controllers/userController')




const wrongpass=require('../models/mainModel')


router.get("/",getSignupController)

router.get("/login",getLoginController)

router.get("/home",getHomeController)

router.post('/signup',wrongpass,postSignupController)

router.post('/login',postLogincontroller)

router.get('/logout',getLogoutController)













































module.exports=router










// res.status(404).send({message: "Password is not valid , its from server"})
