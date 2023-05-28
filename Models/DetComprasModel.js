import { Sequelize } from 'sequelize'
import db from '../db.js'

const DetCompra = db.define('detCompra', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
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

export default DetCompra
