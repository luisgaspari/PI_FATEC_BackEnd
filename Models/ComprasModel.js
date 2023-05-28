import { Sequelize } from 'sequelize'
import db from '../db.js'

const Compra = db.define('compra', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    dataPedido: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    dataEntrega: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    totalPedido: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
    },
    formaPagamento: {
        type: Sequelize.STRING,
        allowNull: false,
    },
})

export default Compra
