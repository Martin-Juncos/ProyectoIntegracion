const {Router} = require('express')
const {getUsersHandler, getUserIdHandler, createUserHandler} = require('../handlers/userHandler')

const userRoutes = Router()

const validate = (req, res, next) => {
    const {name, email, phone} = req.body
    if(!name) return res.status(400).send('falta ingresar el nombre')
    if(!email) return res.status(400).send('falta ingresar el email')
    if(!phone) return res.status(400).send('falta ingresar el telefono')
    next()
}
userRoutes.post('/', validate, createUserHandler)

userRoutes.get('/', getUsersHandler)
userRoutes.get('/:id', getUserIdHandler)

module.exports = userRoutes