import { Sequelize } from 'sequelize'
import db from '../db.js'

const Venda = db.define('venda', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    dataPedido: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    dataEntrega: {
        type: Sequelize.DATE,
        allowNull: true,
    },
    formaPagamento: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    totalPedido: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
    },
})

export default Venda
