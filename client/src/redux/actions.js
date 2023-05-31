import axios from 'axios' 

export const GET_USERS = 'GET_USERS'
export const GET_USER_BY_ID = 'GET_USER_BY_ID'
export const GET_USER_BY_NAME = 'GET_USER_BY_NAME'

export const getUsers = () => {
    return async function(dispatch){
        const users = (await axios.get('http://www.localhost:3001/user')).data
        dispatch({type: GET_USERS, payload: users})
    }
}

export const getUserById = (id) => {
    return async function(dispatch){
        const user = (await axios.get(`http://www.localhost:3001/user/${id}`)).data
        dispatch({type: GET_USER_BY_ID, payload: user})
    }
}

export const getUserByNme = (name) => {
    return async function(dispatch){
        const user = (await axios.get(`http://www.localhost:3001/user?name=${name}`)).data
        dispatch({type: GET_USER_BY_NAME, payload: user})
    }
}