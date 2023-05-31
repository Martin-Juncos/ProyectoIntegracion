const {getUsersController, getUsersNameController, getUserIdController, createUserController} = require('../controller/userControllers')

const getUsersHandler = async (req, res) => {
    const {name} = req.query
    try {
        const result = name ? await getUsersNameController(name) : await getUsersController()
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

const getUserIdHandler = async (req, res) => {
    const {id} = req.params
    const source = isNaN(id) ? 'dbb' : 'api'
    try {
        const result = await getUserIdController(id, source)
        res.status(200).json(result)        
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

const createUserHandler = async (req, res) => {
    const {name, email, phone} = req.body
    try {
        const result = await createUserController(name, email, phone)
        res.status(201).json(result)  
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

module.exports = {
    getUsersHandler, getUserIdHandler, createUserHandler
}