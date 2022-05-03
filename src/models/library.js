const Sequelize = require('sequilize')
const sequelize = require('../db')

const schema = 'library'

class Library extends Sequelize.Model {}
Library.init({
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    titulo: Sequelize.STRING,
    autor: Sequelize.STRING,
    ano: Sequelize.INTEGER,
    editora: Sequelize.STRING,
    isbn10: Sequelize.INTEGER,
    preco: Sequelize.DECIMAL
}, {sequelize, modelName: 'library',schema})

sequelize.sync()
module.exports = Library