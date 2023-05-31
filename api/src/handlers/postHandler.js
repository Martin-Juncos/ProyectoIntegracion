const {getPostController, getPostIdController, createPostController} = require('../controller/postControllers')

const getPostsHandler= async (req, res) => {
    try {
        const result = await getPostController()
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

const getPostIdHandler = async (req, res) => {
    const {id} = req.params
    const source = isNaN(id) ? 'dbb' : 'api'
    try {
        const result = await getPostIdController(id, source)
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

const createPostHandler = async (req, res) => {
    const {title, body, userId} = req.body
    console.log(title, body, userId)
    try {
        const result = await createPostController(title, body, userId)
        console.log(result)
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

module.exports = {
    getPostsHandler, getPostIdHandler, createPostHandler
}