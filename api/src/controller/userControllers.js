const {User, Post} = require('../db')
const axios = require('axios')


const clearData = (arr) => arr.map(elem => {
    return {
        id: elem.id,
        name: elem.name,
        email: elem.email,
        phone: elem.phone,
        create: false
    }
})

const getUsersController = async () => {

    const dataUsers = await User.findAll()

    const apiUsersRow = (await axios.get(`https://jsonplaceholder.typicode.com/users`)).data 
    const apiUsers = clearData(apiUsersRow)

   return [...dataUsers, ...apiUsers]
}

const getUsersNameController = async (name) => {
    
    const dataUser = await User.findAll({where : {name : name}})

    const apiUserRow = (await axios.get(`https://jsonplaceholder.typicode.com/users`)).data 
    const apiUsers = clearData(apiUserRow)
    const filterUserName = apiUsers.filter(user => user.name === name)

    return [...dataUser, ...filterUserName]
}

const getUserIdController = async (id, source) => {
 if (source === 'dbb') {
    const userDb = await User.findByPk(id, {include: {
        model: Post,
        attributes: ['title', 'body']
    }})
    return userDb
 } else {
    const userApiRow = (await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)).data
    const userApi = clearData([userApiRow])
    return userApi[0]
 }
}

const createUserController = async (name, email, phone) => {
    const newUser = await User.create({name, email, phone})
    return newUser
}

module.exports = {
    getUsersController, getUsersNameController, getUserIdController, createUserController
}