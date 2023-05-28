import { Sequelize } from 'sequelize'
import db from '../db.js'

const Cliente = db.define('cliente', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    cep: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    estado: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    cidade: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    bairro: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    endereco: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    complemento: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
})

export default Cliente
