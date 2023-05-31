const {Router} = require('express')
const {getPostsHandler, getPostIdHandler, createPostHandler} = require('../handlers/postHandler')

const postRouters = Router()

postRouters.get('/', getPostsHandler)
postRouters.get('/:id', getPostIdHandler)
postRouters.post('/', createPostHandler)

module.exports = postRouters