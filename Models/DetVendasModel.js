import { Sequelize } from 'sequelize'
import db from '../db.js'

const DetVenda = db.define('detVenda', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    personalizacao: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    quantidade: {
        type: Sequelize.NUMBER,
        allowNull: false,
    },
    valorProduto: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
    },
})

export default DetVenda
