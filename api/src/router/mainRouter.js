const {Router} = require('express')
const userRoutes = require('./userRoute')
const postRouters = require('./postRoute')

const mainRouter = Router()

mainRouter.use('/user', userRoutes)
mainRouter.use('/post', postRouters)

module.exports = mainRouter