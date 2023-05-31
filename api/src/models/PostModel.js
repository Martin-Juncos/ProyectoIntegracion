const {DataTypes} = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define(
        'Post', {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            body: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        }, {timestamps: false}
    )
}