const { Sequelize } = require('sequelize');
require('dotenv').config()
const UserModel = require('../src/models/UserModel')
const PostModel = require('../src/models/PostModel')


const {DB_USER, DB_PASS, DB_HOST} = process.env

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASS}@${DB_HOST}/proyectointegracion`, {logging: false})

UserModel(sequelize)
PostModel(sequelize)

const {User, Post} = sequelize.models

User.hasMany(Post);
Post.belongsTo(User);

module.exports = {sequelize, ...sequelize.models}