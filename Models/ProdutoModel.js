import { Sequelize } from 'sequelize'
import db from '../db.js'

const Produto = db.define('produto', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    fichaTecnica: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    unidadeMedida: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    tipoProduto: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    valorCompra: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
    },
    valorVenda: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
    },
    estoque: {
        type: Sequelize.NUMBER,
        allowNull: true,
    },
})

export default Produto
