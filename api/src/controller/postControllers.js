const {Post} = require('../db')
const axios = require('axios')

const clearData = (arr) => arr.map(elem => {
    return {
        id: elem.id,
        title: elem.title,
        body: elem.body,
    }
})

const getPostController = async () => {
    const dBallPost = await Post.findAll()
    const apiAllPost = (await axios.get('https://jsonplaceholder.typicode.com/posts')).data
    return [...dBallPost, ...apiAllPost]
}

const getPostIdController = async (id, source) => {
    if (source === 'dbb') {
        const dBpostById = await Post.findByPk(id)
        return dBpostById
    } else {
        const apiPostIdRow = (await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)).data
        const apiPostId = clearData([apiPostIdRow])
        return apiPostId
    }    
}

const createPostController = async (title, body, userId) => {
    const newPost = await Post.create({title, body})
    await newPost.setUser(userId)
    return newPost
}

module.exports = {
    getPostController, getPostIdController, createPostController
}